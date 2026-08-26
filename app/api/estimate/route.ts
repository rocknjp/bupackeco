import { NextRequest, NextResponse } from "next/server";
import { getUserSessionFromRequest } from "@/lib/user-auth";
import { estimate, clientOptions } from "@/lib/estimate";

export async function GET() {
  // Public: option labels for rendering the form (no pricing formula)
  return NextResponse.json(clientOptions());
}

export async function POST(request: NextRequest) {
  // Requires a logged-in user — the price itself is the registration reward
  const user = await getUserSessionFromRequest(request);
  if (!user) {
    return NextResponse.json({ error: "Login required" }, { status: 401 });
  }

  try {
    const input = await request.json();
    const result = estimate({
      product: input.product,
      dims: input.dims,
      unit: input.unit,
      qty: input.qty,
      material: input.material,
      printing: input.printing,
      finishes: input.finishes ?? [],
    });
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
