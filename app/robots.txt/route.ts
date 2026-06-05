import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin or private paths (none currently)

Sitemap: https://bupackeco.com/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
