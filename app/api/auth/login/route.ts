import { NextRequest, NextResponse } from "next/server";
import { loginUser, createUserSession } from "@/lib/user-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const result = await loginUser(email, password);
    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 401 });
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
