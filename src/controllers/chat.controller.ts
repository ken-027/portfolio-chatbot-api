import { Response } from "express";
import { chat } from "@/validations/chat.validation";
import OpenAI from "@/utils/ai/open-ai";
import { SessionMessage, SessionRequest } from "@/types";

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
 *     responses:
 *       200:
 *         description: Return answered from the question
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
export async function send(request: SessionRequest, response: Response) {
    let reply = "";
    const { message } = chat.parse(request.body);

    const history: SessionMessage[] = request.session.messages || [];

    const openai = new OpenAI();


    await openai.chat(message, history);
    reply = await openai.stream(response);

    history.push({ content: message, role: "user" });
    history.push({ content: reply, role: "assistant" });

    request.session.messages = history;

    response.end();
}

export async function store(request: SessionRequest, response: Response) {
    request.session.messages ??= [];

    request.session.save((err) => {
        if (err) {
            console.error("Failed to save session:", err);
            return response.status(500).end("Session error");
        }
        response.end(); // ✅ Only call res.end() after session save
    });

    response.status(201).json({ status: "stored" });
}
