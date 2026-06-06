"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { useAuth } from "./AuthProvider";

export default function AuthRedirect({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { initialized, isAuthenticated, isAdmin } = useAuth();

  useEffect(() => {
    if (initialized && isAuthenticated && isAdmin) {
      router.replace("/dashboard");
    }
  }, [initialized, isAuthenticated, isAdmin, router]);

  if (!initialized) {
    return <div className="grid min-h-[14rem] place-items-center text-sm text-white/85">Loading...</div>;
  }

  if (isAuthenticated && isAdmin) {
    return <div className="grid min-h-[14rem] place-items-center text-sm text-white/85">Redirecting to dashboard...</div>;
  }

  return <>{children}</>;
}
