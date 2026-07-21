import Link from "next/link";
import type { Metadata } from "next";
import { CollectionPageSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Paper Boxes & Bags | Low MOQ 100pcs | BUpack",
  description:
    "FSC-certified custom paper boxes and bags for eCommerce brands. Rigid gift boxes, folding cartons, mailer boxes, and paper bags. Low MOQ from 100 units, factory-direct wholesale pricing.",
  alternates: {
    canonical: "https://www.bupackeco.com/products/",
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
    slug: "custom-mailer-boxes",
    name: "Corrugated Mailer Boxes",
    badge: "Most Popular",
    emoji: "📦",
    tags: ["DTC", "Subscription", "Shipping"],
    description:
      "The workhorse of e-commerce. Self-locking mailer boxes with full interior and exterior print, custom inserts, and FSC-certified E-flute/B-flute board.",
    priceFrom: "From $0.50/unit",
    moq: "100 units",
    leadTime: "7–15 days",
    bestFor: "DTC brands, subscription boxes, e-commerce shipping",
  },
  {
    slug: "rigid-gift-boxes",
    name: "Rigid Gift Boxes",
    badge: "Premium",
    emoji: "🎁",
    tags: ["Luxury", "Gift", "Magnetic Closure"],
    description:
      "High-density rigid boxes with magnetic closure, velvet/EVA inserts, hot foil stamping. The packaging your premium product deserves.",
    priceFrom: "From $1.50/unit",
    moq: "500 units",
    leadTime: "18–22 days",
    bestFor: "Jewelry, cosmetics, luxury gifts, corporate packaging",
  },
  {
    slug: "folding-cartons",
    name: "Folding Cartons",
    badge: "Versatile",
    emoji: "📦",
    tags: ["Retail", "Cosmetics", "Food"],
    description:
      "Lightweight SBS/FBB cartons for retail shelves. Full-color printing, window patching, soft-touch, and embossing options.",
    priceFrom: "From $0.30/unit",
    moq: "100 units",
    leadTime: "12–18 days",
    bestFor: "Cosmetics, food, pharmaceuticals, retail products",
  },
  {
    slug: "custom-paper-bags",
    name: "Custom Paper Bags",
    badge: "Branded",
    emoji: "🛍️",
    tags: ["Retail", "Events", "Branded"],
    description:
      "Custom printed paper bags with rope handles. Kraft, coated, and luxury options for retail storefronts, trade shows, and events.",
    priceFrom: "From $0.40/unit",
    moq: "200 units",
    leadTime: "15–20 days",
    bestFor: "Retail stores, trade shows, brand events, boutiques",
  },
];

export default function ProductsPage() {
  return (
    <>
      <CollectionPageSchema
        name="BUpack Packaging Products"
        description="Browse BUpack's range of sustainable packaging: mailer boxes, rigid gift boxes, folding cartons, and paper bags. FSC-certified, fully customizable, low MOQ."
        products={products.map((p) => ({
          name: p.name,
          description: p.description,
          image: "https://www.bupackeco.com/images/product_box_1.jpg",
          url: `https://www.bupackeco.com/products/${p.slug}`,
        }))}
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
            Four product lines designed to protect your goods, elevate your brand, and reflect your sustainability values. All FSC-certified, factory-direct.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-green-200 transition-all block"
              >
                {/* Visual Header */}
                <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 p-8 flex flex-col items-center justify-center gap-3">
                  <div className="text-6xl">{p.emoji}</div>
                  <span className="bg-white text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200 shadow-sm">
                    {p.badge}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{p.name}</h2>
                  <p className="text-green-700 font-bold text-sm mb-3">{p.priceFrom}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-green-50 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-gray-400 font-medium uppercase">MOQ</div>
                      <div className="text-sm text-gray-800 font-semibold">{p.moq}</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-gray-400 font-medium uppercase">Lead Time</div>
                      <div className="text-sm text-gray-800 font-semibold">{p.leadTime}</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 text-center">
                      <div className="text-[10px] text-gray-400 font-medium uppercase">Eco</div>
                      <div className="text-sm text-green-700 font-semibold">FSC ✓</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{p.bestFor}</span>
                    <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm group-hover:gap-2 transition-all">
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Which Product Is Right for You?</h2>
            <p className="text-gray-500">Quick comparison to help you choose</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#0a2e18] text-white">
                  <th className="text-left p-4 font-bold">Feature</th>
                  <th className="text-left p-4 font-bold">Mailer Boxes</th>
                  <th className="text-left p-4 font-bold">Rigid Gift Boxes</th>
                  <th className="text-left p-4 font-bold">Folding Cartons</th>
                  <th className="text-left p-4 font-bold">Paper Bags</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="p-3 font-semibold text-gray-900 text-sm">Starting Price</td>
                  <td className="p-3 text-green-700 font-semibold text-sm">$0.50/unit</td>
                  <td className="p-3 text-green-700 font-semibold text-sm">$1.50/unit</td>
                  <td className="p-3 text-green-700 font-semibold text-sm">$0.30/unit</td>
                  <td className="p-3 text-green-700 font-semibold text-sm">$0.40/unit</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900 text-sm">MOQ</td>
                  <td className="p-3 text-gray-700 text-sm">100 units</td>
                  <td className="p-3 text-gray-700 text-sm">500 units</td>
                  <td className="p-3 text-gray-700 text-sm">100 units</td>
                  <td className="p-3 text-gray-700 text-sm">200 units</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 font-semibold text-gray-900 text-sm">Best For</td>
                  <td className="p-3 text-gray-700 text-sm">DTC shipping</td>
                  <td className="p-3 text-gray-700 text-sm">Luxury unboxing</td>
                  <td className="p-3 text-gray-700 text-sm">Retail shelves</td>
                  <td className="p-3 text-gray-700 text-sm">Branded carry</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900 text-sm">Shipping Ready</td>
                  <td className="p-3 text-green-600 text-sm">Yes — ships as-is</td>
                  <td className="p-3 text-gray-500 text-sm">Needs outer box</td>
                  <td className="p-3 text-gray-500 text-sm">Needs outer box</td>
                  <td className="p-3 text-green-600 text-sm">Yes — handheld</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3 font-semibold text-gray-900 text-sm">Premium Finishes</td>
                  <td className="p-3 text-gray-700 text-sm">Matte/Gloss/Spot UV</td>
                  <td className="p-3 text-gray-700 text-sm">Foil/Emboss/Soft-touch</td>
                  <td className="p-3 text-gray-700 text-sm">Window/Soft-touch/UV</td>
                  <td className="p-3 text-gray-700 text-sm">Lamination/Foil</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900 text-sm">Interior Print</td>
                  <td className="p-3 text-green-600 text-sm">Yes</td>
                  <td className="p-3 text-green-600 text-sm">Yes</td>
                  <td className="p-3 text-gray-500 text-sm">Limited</td>
                  <td className="p-3 text-gray-500 text-sm">No</td>
                </tr>
              </tbody>
            </table>
          </div>
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
