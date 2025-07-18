"use client";

import { signIn, signOut } from "next-auth/react";

export function SignIn() {
  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
}

export function SignOut() {
  return (
    <button className="hover:cursor-pointer" onClick={() => signOut()}>
      Sign Out
    </button>
  );
} 