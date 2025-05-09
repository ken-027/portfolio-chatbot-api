import express from "express";

import "express-async-errors";
import errorHandler from "@/middlewares/error-handler.middleware";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import NotFound from "@/middlewares/not-found.middleware";
import cors from "cors";
import { ALLOWED_ORIGINS } from "@/config/env";
import helmet from "helmet";
// import morgan from "morgan";
// import logger from "@/middlewares/logger.middleware";
import passport from "passport";
import chatRoutes from "@/routes/chat.route";
import scriptRoutes from "./routes/script.route";
import path from "path";
import portfolioRoutes from "./routes/portfolio.route";
import { home } from "./controllers/home.controller";

const prefixRoute = "/api/v1";

export const app = express();

app.set("trust proxy", true);
app.use(helmet());
app.use(cors({ origin: ALLOWED_ORIGINS }));
// app.use(rateLimit);

app.use(express.static(path.join(__dirname, "../public")));
// app.use(
//     morgan(NODE_ENV === "production" ? "combined" : "dev", {
//         stream: logger(),
//     }),
// );

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cookieParser());

app.use(prefixRoute, chatRoutes);
app.use(prefixRoute, scriptRoutes);
app.use(prefixRoute, portfolioRoutes);
app.use("/", home);
app.all("*", NotFound);
app.use(errorHandler);

export default app;
