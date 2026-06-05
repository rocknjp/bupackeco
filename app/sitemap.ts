import { MetadataRoute } from "next";

// Static routes for the BUpack website
const staticRoutes = [
  "",
  "/about",
  "/products",
  "/products/paper-boxes",
  "/products/paper-bags",
  "/industries/clothing",
  "/industries/cosmetics",
  "/industries/food",
  "/industries/wine",
  "/industries/jewelry",
  "/industries/gift",
  "/contact",
  "/eco",
  "/blog",
];

const locales = ["en"]; // Add more locales as needed

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bupackeco.com";

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
