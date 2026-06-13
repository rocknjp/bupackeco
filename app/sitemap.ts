import { MetadataRoute } from "next";

// Static routes with realistic lastModified dates
const staticRoutes: { path: string; lastmod: string; changefreq: "weekly" | "monthly"; priority: number }[] = [
  { path: "", lastmod: "2026-06-13", changefreq: "weekly", priority: 1.0 },
  { path: "/about", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7 },
  { path: "/products", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/products/paper-boxes", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/products/paper-bags", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/products/subscription-boxes", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/industries", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7 },
  { path: "/industries/candles-fragrance", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/industries/jewelry", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/industries/chocolate-confectionery", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/industries/stationery-gifts", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/industries/tea-beverages", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/industries/pet-subscription", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.8 },
  { path: "/industries/cosmetics-beauty", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8 },
  { path: "/industries/wine-spirits", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8 },
  { path: "/industries/apparel-fashion", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8 },
  { path: "/contact", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.6 },
  { path: "/eco", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7 },
  { path: "/blog", lastmod: "2026-06-12", changefreq: "weekly", priority: 0.7 },
  { path: "/blog/switch-plastic-to-paper-packaging-dtc-guide", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/unboxing-experience-drives-dtc-growth", lastmod: "2025-05-28", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/eco-packaging-guide-dtc-brands-2025", lastmod: "2025-05-15", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/subscription-box-packaging-design", lastmod: "2025-04-30", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/custom-packaging-low-moq-guide", lastmod: "2025-04-12", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/packaging-impacts-product-reviews", lastmod: "2025-03-25", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/kraft-paper-vs-coated-paper", lastmod: "2025-03-10", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/china-vs-us-packaging-manufacturer", lastmod: "2026-06-05", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/custom-packaging-cost-guide", lastmod: "2026-05-20", changefreq: "monthly", priority: 0.6 },
  { path: "/blog/eco-packaging-roi-small-dtc-brands", lastmod: "2026-06-12", changefreq: "monthly", priority: 0.6 },
  { path: "/compare/rigid-vs-corrugated-boxes", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7 },
  { path: "/case-studies", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7 },
  { path: "/moq-guide", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7 },
  { path: "/fsc-certified-packaging", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8 },
  { path: "/products/folding-cartons", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8 },
  { path: "/products/rigid-gift-boxes", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bupackeco.com";

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(route.lastmod),
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}
