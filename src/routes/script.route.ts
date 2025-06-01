import { Router } from "express";
import { scriptResourceLimit } from "@/middlewares/rate-limiter.middleware";
import { uploadVector } from "@/controllers/script.controller";

const scriptRoutes = Router();

scriptRoutes
    .route("/knowledge-base")
    .patch(scriptResourceLimit, uploadVector);


export default scriptRoutes;
