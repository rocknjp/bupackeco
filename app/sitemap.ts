import { MetadataRoute } from "next";

// Static routes for the BUpack website
const staticRoutes = [
  "",
  "/about",
  "/products",
  "/products/paper-boxes",
  "/products/paper-bags",
  "/products/subscription-boxes",
  "/industries/candles-fragrance",
  "/industries/jewelry",
  "/industries/chocolate-confectionery",
  "/industries/stationery-gifts",
  "/industries/tea-beverages",
  "/industries/pet-subscription",
  "/contact",
  "/eco",
  "/blog",
  "/blog/unboxing-experience-drives-dtc-growth",
  "/blog/eco-packaging-guide-dtc-brands-2025",
  "/blog/subscription-box-packaging-design",
  "/blog/custom-packaging-low-moq-guide",
  "/blog/packaging-impacts-product-reviews",
  "/blog/kraft-paper-vs-coated-paper",
];

const locales = ["en"]; // Add more locales as needed

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bupackeco.com";

  const routes = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1.0 : route.includes("industries") || route.includes("products/") ? 0.8 : 0.6,
    }))
  );

  return routes;
}
