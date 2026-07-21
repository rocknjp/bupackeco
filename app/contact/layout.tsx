import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BUpack – Get Free Packaging Samples",
  description:
    "Contact BUpack for custom packaging solutions. Get a free sample kit, request a quote, or chat with our packaging specialists.",
  alternates: {
    canonical: "https://www.bupackeco.com/contact/",
  },
  openGraph: {
    title: "Contact BUpack – Get Free Packaging Samples",
    description:
      "Get free packaging samples. Request a quote. Chat with BUpack specialists on WhatsApp.",
    url: "https://www.bupackeco.com/contact",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BUpack – Get Free Packaging Samples",
    description:
      "Get free packaging samples. Request a quote. Chat with BUpack specialists on WhatsApp.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
