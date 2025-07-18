import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// This points to the .env.local file in the `web` app, which has the database credentials.
dotenv.config({ path: "../../apps/web/.env.local" });

export default defineConfig({
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  tablesFilter: ["personal-agent_*"],
}); 