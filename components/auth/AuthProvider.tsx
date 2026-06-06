"use client";

import { createContext, startTransition, useContext, useEffect, useState, type ReactNode } from "react";

import { authApi, authStorage, type AuthSession, type AuthUser } from "@/lib/auth";

type AuthContextValue = {
  initialized: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: AuthUser | null;
  accessToken: string | null;
  login: (input: { email: string; password: string }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const isAdminRole = (role: AuthUser["role"] | undefined) => role === "admin" || role === "super_admin";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const storedSession = authStorage.load();

    startTransition(() => {
      setSession(storedSession);
      setInitialized(true);
    });
  }, []);

  const logout = () => {
    authStorage.clear();
    setSession(null);
  };

  const value: AuthContextValue = {
    initialized,
    isAuthenticated: Boolean(session?.accessToken),
    isAdmin: isAdminRole(session?.user.role),
    user: session?.user ?? null,
    accessToken: session?.accessToken ?? null,
    async login(input) {
      const nextSession = await authApi.login(input);

      if (!isAdminRole(nextSession.user.role)) {
        throw new Error("This dashboard is for admin accounts only.");
      }

      authStorage.save(nextSession);
      setSession(nextSession);
    },
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
