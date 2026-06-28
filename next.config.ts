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
        permanent: true,
      },
      {
        source: "/industries/jewelry",
        destination: "/industries/jewelry-accessories",
        permanent: true,
      },
      {
        source: "/industries/stationery-gifts",
        destination: "/industries/stationery-toys",
        permanent: true,
      },
      {
        source: "/industries/cosmetics-beauty",
        destination: "/industries/beauty-skincare",
        permanent: true,
      },
      // ── Archive redirects: old pages → relevant content ─────────
      {
        source: "/industries/chocolate-confectionery",
        destination: "/blog/custom-chocolate-packaging-guide",
        permanent: true,
      },
      {
        source: "/industries/tea-beverages",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/industries/pet-subscription",
        destination: "/blog/subscription-box-packaging-guide",
        permanent: true,
      },
      {
        source: "/industries/wine-spirits",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/industries/apparel-fashion",
        destination: "/blog/apparel-fashion-packaging-guide",
        permanent: true,
      },
      {
        source: "/industries/bakery-food",
        destination: "/blog/custom-bakery-packaging-tips",
        permanent: true,
      },
      {
        source: "/industries/cbd-hemp",
        destination: "/blog",
        permanent: true,
      },
      // ── Legacy alias redirects (keep for backward compat) ─────
      {
        source: "/industries/clothing",
        destination: "/industries/jewelry-accessories",
        permanent: true,
      },
      {
        source: "/industries/cosmetics",
        destination: "/industries/beauty-skincare",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
