import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SiteSchema } from "@/components/Schema";

// GA4 Google Analytics
const GA4_ID = process.env.NEXT_PUBLIC_GA_ID || "G-TJSE5T9KS";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bupackeco.com"),
  title: "Custom Paper Packaging Manufacturer | Eco-Friendly, Low MOQ | BUpack",
  description:
    "FSC-certified custom paper boxes & bags. Low MOQ from 100 units, owned factory in Qingdao. Free samples, fast production. Ships to North America.",
  keywords:
    "custom rigid box manufacturer, gift box OEM China, paper packaging factory Qingdao, FSC certified packaging, ISO 9001 packaging supplier, Fortune 500 packaging vendor, low MOQ custom boxes, candle jewelry chocolate packaging",
  verification: {
    google: "0UiMWYGj7TuSenx5PyIWZZ5N-l9jecBQW30rxEvTBUA",
  },
  openGraph: {
    title: "Custom Paper Packaging Manufacturer | Eco-Friendly, Low MOQ | BUpack",
    description:
      "FSC-certified custom paper boxes & bags. Low MOQ from 100 units, owned factory in Qingdao. Free samples, fast production.",
    url: "https://www.bupackeco.com",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Paper Packaging Manufacturer | Eco-Friendly, Low MOQ | BUpack",
    description:
      "FSC-certified custom paper boxes & bags. Low MOQ from 100 units. Ships to North America.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
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
        {/* Google Analytics GA4 - inline script for reliability */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
