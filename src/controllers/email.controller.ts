import { Request, Response } from "express";
// import HTTPCodes from "@/constant/http-codes";
import EmailJS from "@/utils/email-js";
import { sendEmail } from "@/validations/email.validation";


/**
 * @swagger
 * /api/v1/email/send:
 *   post:
 *     summary: Send an email using provided details
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@example.com"
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               subject:
 *                 type: string
 *                 example: "Inquiry about service"
 *               message:
 *                 type: string
 *                 example: "Hello, I would like to know more about your service."
 *     responses:
 *       200:
 *         description: Successfully sent the email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Email sent successfully."
 *       400:
 *         description: Bad Request, invalid email format or missing fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid email address."
 */
export async function send(
    request: Request<never, unknown>,
    response: Response,
) {
    const { email, message, name, subject } = sendEmail.parse(request.body);

    const ejs = new EmailJS(email);

    ejs.setName(name);
    ejs.setSubject(subject);
    ejs.setMessage(message);

    const result = await ejs.send();

    response.json(result);
}
