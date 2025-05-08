import { Router } from "express";
import { scriptResourceLimit } from "@/middlewares/rate-limiter.middleware";
import { uploadVector } from "@/controllers/script.controller";

const scriptRoutes = Router();

scriptRoutes
    .route("/script/upload-vector")
    .post(scriptResourceLimit, uploadVector);

export default scriptRoutes;
