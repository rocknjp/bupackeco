import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async redirects() {
    return [
      // ── Merge redirects: old slug → new target industry ──────
      {
        source: "/industries/candles-fragrance",
        destination: "/industries/fragrance-candles",
        statusCode: 301,
      },
      {
        source: "/industries/jewelry",
        destination: "/industries/jewelry-accessories",
        statusCode: 301,
      },
      {
        source: "/industries/stationery-gifts",
        destination: "/industries/stationery-toys",
        statusCode: 301,
      },
      {
        source: "/industries/cosmetics-beauty",
        destination: "/industries/beauty-skincare",
        statusCode: 301,
      },
      // ── Archive redirects: old pages → relevant content ─────────
      {
        source: "/industries/chocolate-confectionery",
        destination: "/blog/custom-chocolate-packaging-guide",
        statusCode: 301,
      },
      {
        source: "/industries/tea-beverages",
        destination: "/blog",
        statusCode: 301,
      },
      {
        source: "/industries/pet-subscription",
        destination: "/blog/subscription-box-packaging-guide",
        statusCode: 301,
      },
      {
        source: "/industries/wine-spirits",
        destination: "/blog",
        statusCode: 301,
      },
      {
        source: "/industries/apparel-fashion",
        destination: "/blog/apparel-fashion-packaging-guide",
        statusCode: 301,
      },
      {
        source: "/industries/bakery-food",
        destination: "/blog/custom-bakery-packaging-tips",
        statusCode: 301,
      },
      {
        source: "/industries/cbd-hemp",
        destination: "/blog",
        statusCode: 301,
      },
      // ── Legacy alias redirects (keep for backward compat) ─────
      {
        source: "/industries/clothing",
        destination: "/industries/jewelry-accessories",
        statusCode: 301,
      },
      {
        source: "/industries/cosmetics",
        destination: "/industries/beauty-skincare",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
