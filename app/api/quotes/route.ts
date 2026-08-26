import { NextRequest, NextResponse } from "next/server";
import { getUserSessionFromRequest } from "@/lib/user-auth";
import { kvGet, kvSet } from "@/lib/store";
import { estimate } from "@/lib/estimate";

interface SavedQuote {
  id: string;
  userId: string;
  product: string;
  productName: string;
  dims: string;
  unit: "in" | "mm";
  qty: number;
  material: string;
  printing: string;
  finishes: string[];
  unitLow: number;
  unitHigh: number;
  createdAt: string;
}

const KEY = "quotes";

async function userQuotes(userId: string): Promise<SavedQuote[]> {
  const all = (await kvGet<SavedQuote[]>(KEY)) ?? [];
  return all
    .filter((q) => q.userId === userId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function GET(request: NextRequest) {
  const user = await getUserSessionFromRequest(request);
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });
  return NextResponse.json({ quotes: await userQuotes(user.id) });
}

export async function POST(request: NextRequest) {
  const user = await getUserSessionFromRequest(request);
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });

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

    const quote: SavedQuote = {
      id: `BQ-${Date.now().toString(36).toUpperCase().slice(-6)}`,
      userId: user.id,
      product: input.product,
      productName: result.productName,
      dims: input.dimsLabel ?? `${input.dims.l}×${input.dims.w}×${input.dims.h}`,
      unit: input.unit,
      qty: input.qty,
      material: input.material,
      printing: input.printing,
      finishes: input.finishes ?? [],
      unitLow: result.unitLow,
      unitHigh: result.unitHigh,
      createdAt: new Date().toISOString(),
    };

    const all = (await kvGet<SavedQuote[]>(KEY)) ?? [];
    all.push(quote);
    await kvSet(KEY, all);

    return NextResponse.json({ quote });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const user = await getUserSessionFromRequest(request);
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });

  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "ID parameter is required" }, { status: 400 });
  }

  const all = (await kvGet<SavedQuote[]>(KEY)) ?? [];
  const remaining = all.filter((q) => !(q.id === id && q.userId === user.id));
  await kvSet(KEY, remaining);

  return NextResponse.json({ success: true });
}
