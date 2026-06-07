import type { Metadata } from "next";
import { ContactPageSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Contact BUpack – Get Free Packaging Samples",
  description:
    "Contact BUpack for custom packaging solutions. Get a free sample kit, request a quote, or chat with our packaging specialists on WhatsApp.",
  alternates: {
    canonical: "https://bupackeco.com/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContactPageSchema />
      {children}
    </>
  );
}
