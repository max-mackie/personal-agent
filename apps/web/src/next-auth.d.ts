import { type DefaultSession } from "@auth/core/types";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: DefaultSession["user"];
  }
} 