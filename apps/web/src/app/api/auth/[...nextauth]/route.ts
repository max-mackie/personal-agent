import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@repo/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // This is a placeholder for your database logic.
        // In a real app, you'd look up the user in your database.
        // For now, we'll just check for a mock user.
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "password"
        ) {
          // This is where you'd typically find the user in your database
          // and verify their password.
          // For now, we'll just create a new user if they don't exist.
          let user = await db.query.users.findFirst({
            where: (users, { eq }) => eq(users.email, "test@example.com"),
          });

          if (!user) {
             [user] = await db.insert(db.query.users.table).values({
              email: "test@example.com",
              name: "Test User"
            }).returning();
          }
          
          return user;
        }

        // If credentials are not valid, return null to an error.
        return null;
      },
    }),
  ],
}) 