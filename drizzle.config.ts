import { defineConfig } from "drizzle-kit";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set in the .env file");
}

export default defineConfig({
  schema: "./src/db/schema.ts", // Your schema file path
  out: "./migrations", // Your migrations folder
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
