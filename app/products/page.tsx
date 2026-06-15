import Link from "next/link";
import type { Metadata } from "next";
import { CollectionPageSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Paper Boxes & Bags | Low MOQ 100pcs | Eco Packaging Manufacturer | BUpack",
  description:
    "FSC-certified custom paper boxes and bags for eCommerce brands. Low MOQ from 100 units, wholesale pricing, soy-based ink, free sample kit. Factory-direct in Qingdao, ships to North America.",
  alternates: {
    canonical: "https://www.bupackeco.com/products",
  },
  openGraph: {
    title: "Custom Paper Boxes & Bags | Low MOQ 100pcs | BUpack",
    description:
      "FSC-certified custom paper boxes and bags for eCommerce brands. Low MOQ from 100 units, factory-direct wholesale pricing.",
    url: "https://www.bupackeco.com/products",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Paper Boxes & Bags | Low MOQ 100pcs | BUpack",
    description:
      "FSC-certified custom paper boxes and bags for eCommerce brands. Low MOQ from 100 units, factory-direct wholesale.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const products = [
  {
    id: "ecommerce-boxes",
    name: "eCommerce Mailer Boxes",
    tags: ["DTC", "Subscription Box", "Apparel"],
    badge: "🏆 Most Popular",
    description:
      "The packaging your DTC brand deserves. Self-locking, no-tape mailer boxes with full interior and exterior print. Built to survive shipping and deliver a premium unboxing moment.",
    specs: [
      { label: "Material", value: "Corrugated / Rigid paperboard, 300–500gsm" },
      { label: "Print", value: "Full CMYK, Pantone, interior print included" },
      { label: "Finish", value: "Matte, gloss, soft-touch, spot UV" },
      { label: "MOQ", value: "From 100 units" },
      { label: "Lead time", value: "15–20 business days" },
      { label: "Eco options", value: "FSC-certified, recycled paper, soy inks" },
    ],
    whyBrands: "DTC brands that run unboxing-worthy experiences report 2–3x higher UGC and social shares. Start from 100 units.",
    emoji: "📬",
  },
];

export default function ProductsPage() {
  return (
    <>
      <CollectionPageSchema
        name="BUpack Packaging Products"
        description="Browse BUpack's range of sustainable packaging: eCommerce mailer boxes, paper bags, subscription boxes, and gift packaging. FSC-certified, fully customizable, low MOQ."
        products={[
          {
            name: "eCommerce Mailer Boxes",
            description: "Self-locking, no-tape mailer boxes with full interior and exterior print.",
            image: "https://www.bupackeco.com/images/product_box_1.jpg",
            url: "https://www.bupackeco.com/products/paper-boxes",
          },
          {
            name: "Custom Paper Bags",
            description: "Elevate your retail and event experience with custom paper bags.",
            image: "https://www.bupackeco.com/images/product_bag_1.jpg",
            url: "https://www.bupackeco.com/products/paper-bags",
          },
        ]}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Products", url: "https://www.bupackeco.com/products" },
        ]}
      />
      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Packaging Built for eCommerce</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Every product is designed to protect your goods, elevate your brand, and reflect your sustainability values.
          </p>
        </div>
      </section>

      {/* Selector tabs */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto py-3">
          {products.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="flex-shrink-0 text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-colors"
            >
              {p.emoji} {p.name}
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto space-y-20">
          {products.map((p, idx) => (
            <div key={p.id} id={p.id} className="scroll-mt-32">
              <div className={`flex flex-col ${idx % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-10 bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100`}>
                {/* Visual */}
                <div className="md:w-2/5 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 flex flex-col items-center justify-center py-16 px-8 gap-4">
                  <div className="text-8xl">{p.emoji}</div>
                  <span className="bg-white text-green-700 text-sm font-bold px-4 py-1.5 rounded-full border border-green-200 shadow-sm">
                    {p.badge}
                  </span>
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{p.name}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">{p.description}</p>

                    <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-8">
                      <p className="text-green-800 text-sm font-medium">💡 Why brands choose this:</p>
                      <p className="text-green-700 text-sm mt-1">{p.whyBrands}</p>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Specifications</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {p.specs.map((s) => (
                        <div key={s.label} className="flex flex-col gap-0.5">
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{s.label}</span>
                          <span className="text-sm text-gray-800">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors w-fit"
                  >
                    Request Quote + Free Sample
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0a2e18] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🌿</div>
          <h2 className="text-3xl font-bold mb-4">Not sure which product fits your brand?</h2>
          <p className="text-green-200 mb-8">
            Tell us about your use case and we&apos;ll recommend the best option — plus send you a free physical sample.
          </p>
          <Link href="/contact" className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors">
            Talk to a Packaging Specialist
          </Link>
        </div>
      </section>
    </>
  );
}
