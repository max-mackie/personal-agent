"use client";

import { useEffect, useState } from "react";

interface EmailThread {
  id: string;
  snippet: string;
}

export default function InboxPage() {
  const [threads, setThreads] = useState<EmailThread[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEmails() {
      try {
        const res = await fetch("/api/emails");
        if (!res.ok) {
          throw new Error("Failed to fetch emails");
        }
        const data = await res.json();
        setThreads(data.threads);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    fetchEmails();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Inbox Agent - Last 10 Emails</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="mt-4 space-y-2">
        {threads.map((thread) => (
          <li key={thread.id} className="border p-2 rounded">
            <p className="text-sm text-gray-600">{thread.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
