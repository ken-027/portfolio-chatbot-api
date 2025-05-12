import {
    AI_MODEL,
    EMBEDDING_MODEL,
    MONGODB_URI,
    OPENAI_API_KEY,
} from "@/config/env";
import moment from "moment";
import { MongoClient } from "mongodb";
import { OpenAI as OpenAIModule } from "openai";

const openai = new OpenAIModule({
    apiKey: OPENAI_API_KEY,
});

export default class OpenAI {
    static async #query(question: string): Promise<string> {
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

    static async chat(question: string, history: string[]) {
        const systemPrompt = `You are a helpful assistant that speaks based on my personal knowledge. Answer as if you were me, using only the provided context. If no relevant context is available, respond with: "I'm sorry, my response is limited.", please format as markdown and highlight important answer and put some spaces to make it readable. your computation date will be ${moment()}`;

        const context = await OpenAI.#query(question);
        let prompts: { role: "assistant" | "user"; content: string }[] = [];

        history.forEach((content, index) => {
            prompts.push({
                role: index % 2 === 0 ? "assistant" : "user",
                content,
            });
        });

        prompts = prompts.slice(history.length - 3, history.length);

        const completion = await openai.chat.completions.create({
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

        return completion;
    }
}
