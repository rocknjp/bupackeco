import { MetadataRoute } from "next";

// Static routes with realistic lastModified dates and associated images
const staticRoutes: {
  path: string;
  lastmod: string;
  changefreq: "weekly" | "monthly";
  priority: number;
  images?: string[];
}[] = [
  { path: "", lastmod: "2026-07-22", changefreq: "weekly", priority: 1.0, images: ["/images/bupack-og-hero.jpg", "/images/product_hero.jpg"] },
  { path: "/about", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7, images: ["/images/bupack-logo.jpg", "/images/factory_hero.jpg"] },
  { path: "/factory", lastmod: "2026-06-23", changefreq: "monthly", priority: 0.9, images: ["/images/factory_hero.jpg", "/images/factory_1.jpg", "/images/factory_2.jpg"] },
  { path: "/products", lastmod: "2026-07-07", changefreq: "weekly", priority: 0.8, images: ["/images/product_hero.jpg", "/images/product_box_1.jpg"] },
  { path: "/products/custom-mailer-boxes", lastmod: "2026-07-07", changefreq: "monthly", priority: 0.9, images: ["/images/product_corrugated_mailer.jpg"] },
  { path: "/products/rigid-gift-boxes", lastmod: "2026-07-07", changefreq: "monthly", priority: 0.9, images: ["/images/product_rigid_boxes.jpg"] },
  { path: "/products/folding-cartons", lastmod: "2026-07-07", changefreq: "monthly", priority: 0.9, images: ["/images/product_cardstock_foldable.jpg"] },
  { path: "/products/custom-paper-bags", lastmod: "2026-07-07", changefreq: "monthly", priority: 0.9, images: ["/images/product_paper_bags.jpg", "/images/paper_bags_1.jpg"] },
  { path: "/industries", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7, images: ["/images/industry_gift.jpg"] },
  // v3.0 Target Industries (5 core focus pages)
  { path: "/industries/beauty-skincare", lastmod: "2026-07-02", changefreq: "weekly", priority: 0.9, images: ["/images/industry_cosmetics.jpg"] },
  { path: "/industries/fragrance-candles", lastmod: "2026-07-02", changefreq: "weekly", priority: 0.9, images: ["/images/industry_wine.jpg"] },
  { path: "/industries/corporate-gifts-subscription", lastmod: "2026-07-02", changefreq: "weekly", priority: 0.9, images: ["/images/industry_gift.jpg"] },
  { path: "/industries/stationery-toys", lastmod: "2026-07-22", changefreq: "weekly", priority: 0.9, images: ["/images/industry_stationery_gifts.jpg"] },
  { path: "/industries/jewelry-accessories", lastmod: "2026-07-02", changefreq: "weekly", priority: 0.9, images: ["/images/industry_jewelry.jpg"] },
  { path: "/contact", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.6, images: ["/images/bupack-logo.jpg"] },
  { path: "/glossary", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.6, images: ["/images/bupack-logo.jpg"] },
  { path: "/eco", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7, images: ["/images/cert_fsc.jpg"] },
  { path: "/blog", lastmod: "2026-07-22", changefreq: "weekly", priority: 0.7, images: ["/images/bupack-og-hero.jpg"] },
  { path: "/blog/switch-plastic-to-paper-packaging-dtc-guide", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_2.jpg"] },
  { path: "/blog/unboxing-experience-drives-dtc-growth", lastmod: "2025-05-28", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_1.jpg"] },
  { path: "/blog/eco-packaging-guide-dtc-brands-2025", lastmod: "2025-05-15", changefreq: "monthly", priority: 0.6, images: ["/images/cert_fsc.jpg"] },
  { path: "/blog/subscription-box-packaging-design", lastmod: "2025-04-30", changefreq: "monthly", priority: 0.6, images: ["/images/industry_gift.jpg"] },
  { path: "/blog/custom-packaging-low-moq-guide", lastmod: "2025-04-12", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_3.jpg"] },
  { path: "/blog/packaging-impacts-product-reviews", lastmod: "2025-03-25", changefreq: "monthly", priority: 0.6, images: ["/images/product_sample_2.jpg"] },
  { path: "/blog/kraft-paper-vs-coated-paper", lastmod: "2025-03-10", changefreq: "monthly", priority: 0.6, images: ["/images/product_packaging.jpg"] },
  { path: "/blog/china-vs-us-packaging-manufacturer", lastmod: "2026-06-05", changefreq: "monthly", priority: 0.6, images: ["/images/factory_production.jpg"] },
  { path: "/blog/custom-packaging-cost-guide", lastmod: "2026-05-20", changefreq: "monthly", priority: 0.6, images: ["/images/product_sample_3.jpg"] },
  { path: "/blog/eco-packaging-roi-small-dtc-brands", lastmod: "2026-06-12", changefreq: "monthly", priority: 0.6, images: ["/images/cert_fsc.jpg"] },
  { path: "/blog/custom-packaging-for-startups-guide", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_1.jpg"] },
  { path: "/blog/import-custom-packaging-from-china-guide", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/factory_workshop.jpg"] },
  { path: "/blog/biodegradable-ecommerce-packaging-guide", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/cert_fsc.jpg"] },
  { path: "/blog/branded-packaging-ideas-ecommerce", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_2.jpg"] },
  { path: "/blog/digital-printing-vs-offset-packaging", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/factory_printing.jpg"] },
  { path: "/blog/compostable-packaging-alternatives", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/cert_fsc.jpg"] },
  { path: "/compare/rigid-vs-corrugated-boxes", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7, images: ["/images/product_rigid_boxes.jpg", "/images/product_corrugated_mailer.jpg"] },
  { path: "/compare/bupack-vs-arka", lastmod: "2026-06-23", changefreq: "monthly", priority: 0.8, images: ["/images/product_box_1.jpg"] },
  { path: "/compare/bupack-vs-packlane", lastmod: "2026-06-23", changefreq: "monthly", priority: 0.8, images: ["/images/product_box_2.jpg"] },
  { path: "/case-studies", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.7, images: ["/images/product_sample_1.jpg"] },
  { path: "/case-studies/makeup-brush-brand-launch", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.7, images: ["/images/industry_cosmetics.jpg"] },
  { path: "/case-studies/fragrance-gift-box-600-sales", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.7, images: ["/images/industry_wine.jpg"] },
  { path: "/case-studies/wine-diy-modular-packaging", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.7, images: ["/images/industry_wine.jpg"] },
  { path: "/moq-guide", lastmod: "2026-06-07", changefreq: "monthly", priority: 0.7, images: ["/images/product_box_3.jpg"] },
  { path: "/fsc-certified-packaging", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8, images: ["/images/cert_fsc.jpg"] },
  { path: "/services/design-support", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.7, images: ["/images/factory_machine.jpg"] },
  { path: "/services/sampling-prototyping", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.7, images: ["/images/product_sample_1.jpg"] },
  { path: "/faq", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8, images: ["/images/bupack-logo.jpg"] },
  { path: "/blog/custom-boxes-overseas-manufacturer", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/factory_hero.jpg"] },
  { path: "/blog/how-to-create-unboxing-experience", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_1.jpg"] },
  { path: "/blog/eco-friendly-packaging-small-business", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/cert_fsc.jpg"] },
  // Product & resource pages (updated 2026-07-07)
  { path: "/packaging-101", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8, images: ["/images/product_packaging.jpg"] },
  // Guide index & GEO content
  { path: "/guide", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8, images: ["/images/product_hero.jpg"] },
  { path: "/guide/ecommerce-packaging-sourcing", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.9, images: ["/images/factory_production.jpg"] },
  // New blog posts (GEO comparison articles)
  { path: "/blog/top-10-custom-packaging-suppliers-2025", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8, images: ["/images/product_box_1.jpg"] },
  { path: "/blog/china-vs-us-packaging-manufacturer-compared", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.8, images: ["/images/factory_workshop.jpg"] },
  { path: "/blog/packaging-design-trends-2026", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/product_sample_2.jpg"] },
  { path: "/blog/custom-packaging-timeline-guide", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/factory_workshop.jpg"] },
  { path: "/blog/kraft-vs-coated-paper-deep-dive", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/product_packaging.jpg"] },
  { path: "/blog/custom-packaging-cost-breakdown", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/product_sample_3.jpg"] },
  { path: "/blog/seasonal-packaging-strategy", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_2.jpg"] },
  { path: "/blog/packaging-for-subscription-boxes-guide", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/industry_gift.jpg"] },
  { path: "/blog/why-fsc-certification-matters-packaging", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.6, images: ["/images/cert_fsc.jpg"] },
  // Week 26 new blog posts
  { path: "/blog/how-to-evaluate-packaging-suppliers-checklist", lastmod: "2026-06-24", changefreq: "monthly", priority: 0.8, images: ["/images/factory_hero.jpg"] },
  { path: "/blog/custom-packaging-cost-optimization-strategies", lastmod: "2026-06-26", changefreq: "monthly", priority: 0.8, images: ["/images/product_sample_3.jpg"] },
  { path: "/blog/custom-supplement-packaging-guide", lastmod: "2026-06-21", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_3.jpg"] },
  { path: "/blog/custom-electronics-packaging-guide", lastmod: "2026-06-22", changefreq: "monthly", priority: 0.6, images: ["/images/product_corrugated_mailer.jpg"] },
  { path: "/blog/custom-coffee-packaging-guide", lastmod: "2026-06-27", changefreq: "monthly", priority: 0.6, images: ["/images/product_packaging.jpg"] },
  { path: "/blog/sustainable-packaging-trends-2026", lastmod: "2026-06-27", changefreq: "monthly", priority: 0.8, images: ["/images/cert_fsc.jpg"] },
  { path: "/blog/custom-tea-packaging-guide", lastmod: "2026-06-29", changefreq: "monthly", priority: 0.6, images: ["/images/product_box_2.jpg"] },
  { path: "/blog/luxury-packaging-design-guide", lastmod: "2026-06-29", changefreq: "monthly", priority: 0.6, images: ["/images/product_rigid_boxes.jpg"] },
  { path: "/blog/custom-chocolate-packaging-guide", lastmod: "2026-06-30", changefreq: "monthly", priority: 0.6, images: ["/images/industry_food_box.jpg"] },
  { path: "/blog/custom-jewelry-packaging-guide", lastmod: "2026-06-30", changefreq: "monthly", priority: 0.6, images: ["/images/industry_jewelry.jpg"] },
  // New blog post (July 2026)
  { path: "/blog/low-moq-packaging-guide-small-businesses-2026", lastmod: "2026-07-22", changefreq: "monthly", priority: 0.8, images: ["/images/product_box_1.jpg", "/images/product_sample_1.jpg", "/images/factory_production.jpg"] },
  { path: "/privacy", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.3 },
  { path: "/terms", lastmod: "2026-06-13", changefreq: "monthly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bupackeco.com";

  return staticRoutes.map((route) => ({
    // trailingSlash=true: all paths must end with / (except root "/")
    url: `${baseUrl}${route.path || "/"}${route.path && !route.path.endsWith("/") ? "/" : ""}`,
    lastModified: new Date(route.lastmod),
    changeFrequency: route.changefreq,
    priority: route.priority,
    // Image sitemap entries for Google image search indexing
    ...(route.images && route.images.length > 0
      ? { images: route.images.map((img) => ({ url: `${baseUrl}${img}` })) }
      : {}),
  }));
}
