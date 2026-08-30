export type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin" | "super_admin";
  status: "active" | "blocked";
  createdAt: string;
  updatedAt: string;
};

export type AuthSession = {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
};

type ApiSuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
};

type ApiErrorResponse = {
  success: false;
  message: string;
  errors?: unknown;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api/v1";

const buildUrl = (path: string) => `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export class ApiClientError extends Error {
  details?: unknown;

  constructor(message: string, details?: unknown) {
    super(message);
    this.name = "ApiClientError";
    this.details = details;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// MOCK BACKEND MODE
// ─────────────────────────────────────────────────────────────────────────────
// When MOCK_AUTH === true (default in dev unless NEXT_PUBLIC_USE_REAL_API=1),
// authApi.login short-circuits to a fake session instead of hitting the API.
// This lets the dashboard run without a backend at localhost:5000.
// All other API calls are not yet wired up in the UI; the dashboard pages
// already use hardcoded mock data, so nothing else needs stubbing right now.
//
// To re-enable the real backend: set NEXT_PUBLIC_USE_REAL_API=1 in .env.local.
// ─────────────────────────────────────────────────────────────────────────────
const MOCK_AUTH = process.env.NEXT_PUBLIC_USE_REAL_API !== "1";

const MOCK_SEEDED_ADMINS: Record<string, { password: string; firstName: string; lastName: string }> = {
  "admin@commandctr.com": { password: "admin@123", firstName: "Admin", lastName: "User" },
  "superadmin@commandctr.com": { password: "super@123", firstName: "Super", lastName: "Admin" },
};

const buildMockSession = (email: string): AuthSession => {
  const seeded = MOCK_SEEDED_ADMINS[email];
  const now = new Date().toISOString();
  const isSuper = email.startsWith("super");
  return {
    user: {
      id: isSuper ? "u_super_1" : "u_admin_1",
      firstName: seeded?.firstName ?? "Admin",
      lastName: seeded?.lastName ?? "User",
      email,
      role: isSuper ? "super_admin" : "admin",
      status: "active",
      createdAt: now,
      updatedAt: now,
    },
    accessToken: `mock-access-${Date.now()}`,
    refreshToken: `mock-refresh-${Date.now()}`,
  };
};

const mockRequest = async <T>(path: string, init?: RequestInit): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  if (path === "/auth/login" && init?.method === "POST") {
    const body = init.body ? (JSON.parse(init.body as string) as { email: string; password: string }) : null;
    if (!body) {
      throw new ApiClientError("Invalid request");
    }
    const seeded = MOCK_SEEDED_ADMINS[body.email.toLowerCase().trim()];
    if (!seeded || seeded.password !== body.password) {
      throw new ApiClientError("Invalid email or password.");
    }
    return buildMockSession(body.email.toLowerCase().trim()) as unknown as T;
  }

  throw new ApiClientError(`Mock backend has no handler for ${init?.method ?? "GET"} ${path}`);
};

const realRequest = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(buildUrl(path), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const payload = (await response.json().catch(() => null)) as ApiSuccessResponse<T> | ApiErrorResponse | null;

  if (!response.ok || !payload?.success) {
    throw new ApiClientError(payload?.message ?? "Request failed", payload && "errors" in payload ? payload.errors : null);
  }

  return payload.data;
};

const request = MOCK_AUTH ? mockRequest : realRequest;

export const authApi = {
  login(input: { email: string; password: string }) {
    return request<AuthSession>("/auth/login", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },
};

export const authStorage = {
  key: "commandctr-admin-auth",

  save(session: AuthSession) {
    window.localStorage.setItem(this.key, JSON.stringify(session));
  },

  load(): AuthSession | null {
    const raw = window.localStorage.getItem(this.key);
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as AuthSession;
    } catch {
      window.localStorage.removeItem(this.key);
      return null;
    }
  },

  clear() {
    window.localStorage.removeItem(this.key);
  },
};
