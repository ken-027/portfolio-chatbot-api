import { Request, Response } from "express";
// import HTTPCodes from "@/constant/http-codes";
import { chat } from "@/validations/chat.validation";
import OpenAI from "@/utils/open-ai";

export async function send(
    request: Request<never, unknown>,
    response: Response,
) {
    const { message } = chat.parse(request.body);

    const stream = await OpenAI.chat(message);

    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.setHeader("Transfer-Encoding", "chunked");

    for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) response.write(content);
    }

    response.end();
}
