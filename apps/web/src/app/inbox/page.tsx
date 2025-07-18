import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function InboxPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/inbox");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Inbox Agent</h1>
      <p>Welcome to your protected inbox page, {session.user.name}!</p>
    </div>
  );
} 