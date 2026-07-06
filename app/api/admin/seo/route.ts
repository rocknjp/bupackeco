import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

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

  // SEO metrics — these would ideally come from an API or database
  // For now, we return static/estimated data that can be refreshed
  const seoData = {
    // Site health
    totalPages: 76, // From sitemap count
    indexedPages: 0, // User reported 0 in Google
    indexRate: 0,
    healthScore: 65,

    // Redirect issues
    redirectErrors: 2,
    sitemapIssues: 0, // Fixed today
    schemaErrors: 4, // Product schema image 404s

    // Core pages status
    corePages: [
      { path: "/", status: "ok", title: "Custom Eco Packaging | FSC-Certified Low MOQ | BUpack" },
      { path: "/products", status: "ok", title: "Custom Paper Boxes & Bags | Low MOQ 100pcs | BUpack" },
      { path: "/about", status: "ok", title: "About BUpack – Sustainable Packaging Manufacturer" },
      { path: "/contact", status: "ok", title: "Contact" },
      { path: "/blog", status: "ok", title: "Packaging Blog – Tips for eCommerce Brands | BUpack" },
      { path: "/eco", status: "ok", title: "Eco" },
      { path: "/faq", status: "ok", title: "FAQ" },
      { path: "/industries/beauty-skincare", status: "ok", title: "Beauty & Skincare Packaging | BUpack" },
      { path: "/industries/fragrance-candles", status: "ok", title: "Fragrance & Candles Packaging | BUpack" },
      { path: "/industries/corporate-gifts-subscription", status: "ok", title: "Corporate Gifts & Subscription Boxes | BUpack" },
      { path: "/industries/stationery-toys", status: "ok", title: "Stationery & Trendy Toys Packaging | BUpack" },
      { path: "/industries/jewelry-accessories", status: "ok", title: "Jewelry & Accessories Packaging | BUpack" },
    ],

    // Keywords (target tracking)
    keywords: [
      { keyword: "eco-friendly packaging for ecommerce", rank: "Not ranked", volume: "1,200" },
      { keyword: "custom paper boxes low moq", rank: "Not ranked", volume: "800" },
      { keyword: "sustainable paper packaging manufacturer", rank: "Not ranked", volume: "600" },
      { keyword: "beauty packaging boxes supplier", rank: "Not ranked", volume: "450" },
      { keyword: "candle packaging manufacturer", rank: "Not ranked", volume: "380" },
    ],

    // Recent fixes
    recentFixes: [
      { date: "2026-07-06", fix: "移除sitemap中12个旧行业页URL" },
      { date: "2026-07-06", fix: "修复308重定向为301" },
      { date: "2026-07-06", fix: "修复Product Schema图片404" },
      { date: "2026-06-26", fix: "About页Title优化 + 17+图片ALT优化" },
      { date: "2026-06-24", fix: "JSON-LD Schema修复" },
    ],

    // Pending issues
    pendingIssues: [
      { severity: "high", issue: "Google索引零结果（连续20+天）" },
      { severity: "high", issue: "行业页内容太薄（thin content）" },
      { severity: "medium", issue: "博客停更29天" },
      { severity: "medium", issue: "5个行业页模板高度雷同" },
      { severity: "low", issue: "Bing Webmaster未注册" },
    ],
  };

  return NextResponse.json(seoData);
}
