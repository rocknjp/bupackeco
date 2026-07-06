import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  toggleProductActive,
} from "@/lib/data/products";

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

  const products = getProducts();
  return NextResponse.json({ products });
}

export async function POST(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await request.json();
    const { id, name, tags, badge, description, specs, whyBrands, emoji, active, image, url } = body;

    if (!name || !description) {
      return NextResponse.json(
        { error: "Name and description are required" },
        { status: 400 }
      );
    }

    const productData = {
      name: name || "",
      tags: tags || [],
      badge: badge || "",
      description: description || "",
      specs: specs || [],
      whyBrands: whyBrands || "",
      emoji: emoji || "📦",
      active: active !== false,
      image: image || "https://www.bupackeco.com/images/product_box_1.jpg",
      url: url || "#",
    };

    if (id) {
      // Update existing
      const updated = updateProduct(id, productData);
      if (!updated) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, product: updated });
    }

    // Create new
    const newProduct = addProduct(productData);
    return NextResponse.json({ success: true, product: newProduct });
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

  const success = deleteProduct(id);
  if (!success) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, message: "Product deleted" });
}

export async function PATCH(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await request.json();
    const { id, action } = body;

    if (!id || !action) {
      return NextResponse.json(
        { error: "ID and action are required" },
        { status: 400 }
      );
    }

    if (action === "toggle") {
      const product = toggleProductActive(id);
      if (!product) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, product });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
