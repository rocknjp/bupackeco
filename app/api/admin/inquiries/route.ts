import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import {
  getInquiries,
  getInquiryById,
  updateInquiryStatus,
  deleteInquiry,
  getInquiryStats,
} from "@/lib/data/inquiries";

async function checkAuth() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const authError = await checkAuth();
  if (authError) return authError;

  const inquiries = await getInquiries();
  const stats = await getInquiryStats();
  return NextResponse.json({ inquiries, stats });
}

export async function PATCH(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "ID and status are required" },
        { status: 400 }
      );
    }

    const inquiry = await updateInquiryStatus(id, status, notes);
    if (!inquiry) {
      return NextResponse.json(
        { error: "Inquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, inquiry });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json(
      { error: "ID parameter is required" },
      { status: 400 }
    );
  }

  const success = await deleteInquiry(id);
  if (!success) {
    return NextResponse.json(
      { error: "Inquiry not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, message: "Inquiry deleted" });
}
