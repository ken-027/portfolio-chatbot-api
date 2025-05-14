import { Request, Response } from "express";
import { chat } from "@/validations/chat.validation";
import OpenAI from "@/utils/open-ai";

/**
 * @swagger
 * /api/v1/chat:
 *   post:
 *     summary: Post message and return as stream
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *               - history
 *             properties:
 *               message:
 *                 type: string
 *                 example: "What service do you offer?"
 *               history:
 *                 type: array
 *                 description: Array of past messages for context.
 *                 items:
 *                   type: string
 *                   example: ""
 *     responses:
 *       200:
 *         description: Return answered from the question
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
export async function send(
    request: Request<never, unknown>,
    response: Response,
) {
    const { message, history } = chat.parse(request.body);

    const stream = await OpenAI.chat(message, history);

    response.setHeader("Content-Type", "text/plain; charset=utf-8");
    response.setHeader("Transfer-Encoding", "chunked");

    for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) response.write(content);
    }

    response.end();
}
