import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Domain redirect middleware
 *
 * Ensures ALL traffic lands on the canonical domain: www.bupackeco.com
 *
 * Handles:
 * 1. bupackeco.vercel.app → www.bupackeco.com (ROOT CAUSE of zero indexing)
 * 2. bupackeco.com → www.bupackeco.com (non-www to www)
 * 3. Any other non-canonical host → www.bupackeco.com
 *
 * This fixes the issue where Google was indexing vercel.app URLs instead
 * of the canonical www domain, resulting in site:bupackeco.com = 0 results.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Allow local development
  if (host.startsWith("localhost")) {
    return NextResponse.next();
  }

  // Only allow the canonical production domain
  const canonicalHost = "www.bupackeco.com";
  if (host === canonicalHost) {
    return NextResponse.next();
  }

  // Redirect all other hosts (vercel.app, non-www, etc.) to canonical domain
  const url = request.nextUrl.clone();
  url.hostname = canonicalHost;
  url.port = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  // Match all paths except static assets that don't need domain redirect
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
