import { Router } from "express";
import { send } from "@/controllers/chat.controller";
import { validateRequest } from "@/middlewares/validation.middleware";
import { chat } from "@/validations/chat.validation";
import { chatResourceLimit } from "@/middlewares/rate-limiter.middleware";

const chatRoutes = Router();

chatRoutes
    .route("/chat")
    .post(validateRequest(chat, "body"), chatResourceLimit, send);

export default chatRoutes;
