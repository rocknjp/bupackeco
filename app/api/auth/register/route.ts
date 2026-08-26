import { NextRequest, NextResponse } from "next/server";
import {
  registerUser,
  createUserSession,
} from "@/lib/user-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required" },
        { status: 400 }
      );
    }

    const result = await registerUser({ name, email, company, password });
    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    await createUserSession(result.user);
    return NextResponse.json({ user: result.user });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
