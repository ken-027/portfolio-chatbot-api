import rateLimitPackage from "express-rate-limit";
import { PRODUCTION } from "../config/env";

const rateLimit = rateLimitPackage({
    windowMs: 60 * 1000, // per minute
    limit: 50,
    standardHeaders: true,
    legacyHeaders: false,
});

export const resourceLimit = rateLimitPackage({
    windowMs: 60 * 1000, // per minute
    limit: 10,
    standardHeaders: true,
    legacyHeaders: false,
});

export const modifyResourceLimit = rateLimitPackage({
    windowMs: 60 * 1000, // per minute
    limit: 5,
    standardHeaders: true,
    legacyHeaders: false,
});

export const chatResourceLimit = rateLimitPackage({
    windowMs: 1000 * 60 * 60 * 24, // 24 hours
    limit: PRODUCTION ? 10 : 100,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => req.ip as string,
    message: {
        message:
            "🤖 Chatbot response limit reached for today. Please try again tomorrow",
        limit: 3,
    },
});

export const scriptResourceLimit = rateLimitPackage({
    windowMs: 1000 * 60 * 60 * 24, // 24 hours
    limit: PRODUCTION ? 2 : 100,
    standardHeaders: true,
    legacyHeaders: false,
});

export default rateLimit;
