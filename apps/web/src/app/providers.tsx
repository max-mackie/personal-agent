"use client";

// This file is no longer strictly necessary with Auth.js v5 for basic setup,
// but it's good practice to keep a dedicated providers file
// in case we need to add other client-side providers in the future (e.g., for theme, state management).
 
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
} 