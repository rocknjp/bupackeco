// Public user account system (quote calculator) — separate from admin auth.
// Reuses jose JWT + bcryptjs, stored via lib/store (Upstash Redis / JSON file).

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { kvGet, kvSet } from "./store";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "change-me-in-production-please"
);

const COOKIE_NAME = "bupack_user_token";
const SESSION_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

const USERS_KEY = "users";

export interface UserAccount {
  id: string;
  name: string;
  email: string; // lowercase, unique
  company: string;
  passwordHash: string;
  createdAt: string;
}

export interface UserSession {
  id: string;
  email: string;
  name: string;
}

async function getUsers(): Promise<UserAccount[]> {
  return (await kvGet<UserAccount[]>(USERS_KEY)) ?? [];
}

async function saveUsers(users: UserAccount[]): Promise<void> {
  await kvSet(USERS_KEY, users);
}

async function signToken(payload: UserSession): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(JWT_SECRET);
}

async function verifyToken(token: string): Promise<UserSession | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      id: payload.id as string,
      email: payload.email as string,
      name: payload.name as string,
    };
  } catch {
    return null;
  }
}

export async function registerUser(input: {
  name: string;
  email: string;
  company?: string;
  password: string;
}): Promise<{ user: UserSession } | { error: string }> {
  const email = input.email.trim().toLowerCase();
  if (!email.includes("@")) return { error: "Invalid email address" };
  if (input.password.length < 6)
    return { error: "Password must be at least 6 characters" };

  const users = await getUsers();
  if (users.some((u) => u.email === email)) {
    return { error: "An account with this email already exists. Please sign in." };
  }

  const account: UserAccount = {
    id: `usr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    name: input.name.trim() || email.split("@")[0],
    email,
    company: (input.company || "").trim(),
    passwordHash: await bcrypt.hash(input.password, 10),
    createdAt: new Date().toISOString(),
  };
  users.push(account);
  await saveUsers(users);

  return {
    user: { id: account.id, email: account.email, name: account.name },
  };
}

export async function loginUser(
  email: string,
  password: string
): Promise<{ user: UserSession } | { error: string }> {
  const users = await getUsers();
  const account = users.find((u) => u.email === email.trim().toLowerCase());
  if (!account) return { error: "Account not found. Please create one first." };
  const ok = await bcrypt.compare(password, account.passwordHash);
  if (!ok) return { error: "Incorrect password" };
  return {
    user: { id: account.id, email: account.email, name: account.name },
  };
}

export async function createUserSession(user: UserSession): Promise<void> {
  const token = await signToken(user);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function destroyUserSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/** Get current public-user session (server components / route handlers) */
export async function getUserSession(): Promise<UserSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

/** Get current public-user session from an API request */
export async function getUserSessionFromRequest(
  request: NextRequest
): Promise<UserSession | null> {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}
