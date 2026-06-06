"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { useAuth } from "./AuthProvider";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { initialized, isAuthenticated, isAdmin } = useAuth();

  useEffect(() => {
    if (initialized && (!isAuthenticated || !isAdmin)) {
      router.replace("/auth/login");
    }
  }, [initialized, isAuthenticated, isAdmin, router]);

  if (!initialized) {
    return <div className="grid min-h-screen place-items-center text-sm text-[#445072]">Loading admin session...</div>;
  }

  if (!isAuthenticated || !isAdmin) {
    return <div className="grid min-h-screen place-items-center text-sm text-[#445072]">Redirecting to admin login...</div>;
  }

  return <>{children}</>;
}
