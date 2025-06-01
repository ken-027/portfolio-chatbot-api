import {
    AI_MODEL,
    EMBEDDING_MODEL,
    MONGODB_URI,
    OPENAI_API_KEY,
} from "@/config/env";
import { SessionMessage } from "@/types";
import { AIClass } from "@/types/class";
import { Response } from "express";
import moment from "moment";
import { MongoClient } from "mongodb";
import { OpenAI as OpenAIModule } from "openai";
import { ChatCompletionChunk } from "openai/resources/chat";
import { Stream } from "openai/streaming";

const openai = new OpenAIModule({
    apiKey: OPENAI_API_KEY,
});

export default class OpenAI implements AIClass {
    #completion: Stream<ChatCompletionChunk> | null = null;

    async #query(question: string): Promise<string> {
        const embeddingResponse = await openai.embeddings.create({
            input: question,
            model: EMBEDDING_MODEL,
        });
        const queryVector = embeddingResponse.data[0].embedding;

        const client = new MongoClient(MONGODB_URI, {
            tls: true,
        });
        await client.connect();
        const collection = client
            .db("portfolio")
            .collection("knowledge_vector");

        const results = await collection
            .aggregate([
                {
                    $vectorSearch: {
                        queryVector,
                        path: "embedding",
                        numCandidates: 100,
                        limit: 5,
                        index: "vector_knowledge_index",
                    },
                },
            ])
            .toArray();

        return results.map((doc) => doc.content).join(",");
    }

    async chat(question: string, history: SessionMessage[]) {
        const systemPrompt = `
            You are a helpful assistant that speaks based on my personal knowledge. \
            Answer as if you were me, using only the provided context.
            If no relevant context is available, respond with: "I'm sorry, my response is limited.",
            please format as markdown and highlight important answer and put some spaces every sentence to make it readable. your computation date will be ${moment()}
        `;

        const context = await this.#query(question);

        const prompts = history.slice(history.length - 3, history.length);

        this.#completion = await openai.chat.completions.create({
            model: AI_MODEL,
            stream: true,
            messages: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                ...prompts,
                {
                    role: "user",
                    content: `Context: ${context}, Question: ${question}`,
                },
            ],
        });
    }

    async stream(response: Response) {
        let reply = "";
        response.setHeader("Content-Type", "text/plain; charset=utf-8");
        response.setHeader("Transfer-Encoding", "chunked");

        if (!this.#completion) throw new Error("Completion not found");

        for await (const chunk of this.#completion) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
                response.write(content);
                reply += content;
            }
        }

        return reply;
    }
}
