import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set in the .env file");
}

const sql = neon(databaseUrl);
const db = drizzle(sql);

async function testConnection() {
  try {
    console.log("Testing database connection...");
    await sql`SELECT 1`;
    console.log("✅ Connection successful!");
    return true;
  } catch (error) {
    console.error("❌ Connection test failed:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      if (error.cause) {
        console.error("Cause:", error.cause);
      }
    }
    console.error("\nTroubleshooting tips:");
    console.error("1. Check if your Neon database is active (not paused)");
    console.error("2. Verify your DATABASE_URL in .env file");
    console.error("3. Check your network connection");
    console.error("4. Ensure the connection string uses the pooler endpoint");
    return false;
  }
}

async function runMigrations() {
  const connected = await testConnection();
  if (!connected) {
    process.exit(1);
  }

  console.log("\nRunning migrations...");
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("✅ Migrations completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    process.exit(1);
  }
}

runMigrations();
