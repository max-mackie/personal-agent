"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export function Sidebar() {
  const { data: session, status } = useSession();

  return (
    <aside className="w-64 bg-gray-100 p-6 dark:bg-gray-900">
      <h2 className="text-xl font-semibold">Personal Agent</h2>
      <nav className="mt-8 flex flex-col h-[calc(100%-4rem)]">
        <ul className="space-y-4 flex-1">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/inbox"
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Inbox Agent
            </Link>
          </li>
        </ul>
        <div>
          {status === "loading" ? (
            <div className="text-gray-700 dark:text-gray-300">Loading...</div>
          ) : session ? (
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">{session.user?.name}</p>
              <button
                onClick={() => signOut()}
                className="w-full text-left text-red-500 hover:text-red-700"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </aside>
  );
} 