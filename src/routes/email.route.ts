import { Router } from "express";
import { send } from "@/controllers/email.controller";
import { validateRequest } from "@/middlewares/validation.middleware";
import { sendEmail } from "@/validations/email.validation";
import { emailResourceLimit } from "@/middlewares/rate-limiter.middleware";

const emailRoutes = Router();

emailRoutes
    .route("/email/send")
    .post(validateRequest(sendEmail, "body"), emailResourceLimit, send);

export default emailRoutes;
