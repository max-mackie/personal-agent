import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Personal Agent Home Page</h1>
      {session?.user ? (
        <p>
          Welcome back, {session.user.name}. You are signed in and can access
          all the features.
        </p>
      ) : (
        <p>Welcome! Please sign in using the sidebar to get started.</p>
      )}
    </div>
  );
}
