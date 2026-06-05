import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SiteSchema } from "@/components/Schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bupackeco.com"),
  title: "BUpack – Eco Packaging for Growing eCommerce Brands",
  description:
    "BUpack helps DTC and eCommerce brands scale with sustainable paper boxes and bags. Low MOQ, FSC-certified materials, custom printing — built for brands that care about unboxing and the planet.",
  keywords:
    "eco-friendly packaging, sustainable packaging for ecommerce, custom paper boxes dtc brands, subscription box packaging, paper bags for small business, low moq packaging manufacturer",
  openGraph: {
    title: "BUpack – Eco Packaging for Growing eCommerce Brands",
    description:
      "Sustainable custom paper boxes & bags. Built for DTC brands that value unboxing experience and environmental responsibility.",
    url: "https://bupackeco.com",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://bupackeco.com/images/factory_workshop.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUpack – Eco Packaging for Growing eCommerce Brands",
    description:
      "Sustainable custom paper boxes & bags for DTC brands. Low MOQ, FSC-certified, ships to North America.",
    images: ["https://bupackeco.com/images/factory_workshop.jpg"],
  },
  alternates: {
    canonical: "https://bupackeco.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SiteSchema />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
