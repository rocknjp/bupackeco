import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async redirects() {
    return [
      {
        source: "/industries/clothing",
        destination: "/industries/apparel-fashion",
        permanent: true,
      },
      {
        source: "/industries/cosmetics",
        destination: "/industries/cosmetics-beauty",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
