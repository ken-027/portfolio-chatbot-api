import dotenv from "dotenv";

dotenv.config();

const env = process.env;

export const PORT = env.PORT;
export const NODE_ENV = env.NODE_ENV?.replace(" ", "") as
    | "production"
    | "development";

export const PRODUCTION = NODE_ENV === "production";

export const DB_URL = env.DB_URL as string;
export const TIMEZONE = env.TIMEZONE as string;

export const REDIS_URL = env.REDIS_URL as string;

export const MONGODB_URI = env.MONGODB_URI as string;
export const OPENAI_API_KEY = env.OPENAI_API_KEY as string;
export const AI_MODEL = env.AI_MODEL as string;
export const EMBEDDING_MODEL = env.EMBEDDING_MODEL as string;

export const BASE_URL = PRODUCTION ? env.BASE_URL : env.BASE_URL_DEV;

// pushover
export const PUSHOVER_USER = env.PUSHOVER_USER as string;
export const PUSHOVER_TOKEN = env.PUSHOVER_TOKEN as string;
export const HTTP_PROXY = env.HTTP_PROXY as string;

export const ALLOWED_ORIGINS =
    NODE_ENV === "development"
        ? env.ALLOWED_ORIGINS_DEV
        : env.ALLOWED_ORIGINS?.replace(/\s+/g, "")?.split(",");
