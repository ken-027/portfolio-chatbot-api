import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { DB_URL } from "./env";

const queryClient = postgres(DB_URL);
const db = drizzle(queryClient);

export default db;
