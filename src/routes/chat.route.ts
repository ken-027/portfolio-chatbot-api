import { Router } from "express";
import { send, store } from "@/controllers/chat.controller";
import { validateRequest } from "@/middlewares/validation.middleware";
import { chat } from "@/validations/chat.validation";
import { chatResourceLimit } from "@/middlewares/rate-limiter.middleware";

const chatRoutes = Router();

chatRoutes
    .route("/")
    .post(validateRequest(chat, "body"), chatResourceLimit, send);

chatRoutes.route("/store").post(store);

export default chatRoutes;
