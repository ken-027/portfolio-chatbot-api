import { Config, defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/**/*.schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.DB_URL as string,
    },
}) satisfies Config;
