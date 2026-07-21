import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Packaging by Industry | BUpack",
  description:
    "Specialized custom paper packaging for beauty & skincare, fragrance & candles, corporate gifts & subscription boxes, stationery & designer toys, and jewelry & accessories. FSC-certified, low MOQ from 100 units.",
  alternates: {
    canonical: "https://www.bupackeco.com/industries/",
  },
  openGraph: {
    title: "Custom Packaging by Industry | BUpack",
    description:
      "Custom paper packaging tailored to your industry. FSC-certified, low MOQ, factory-direct.",
    url: "https://www.bupackeco.com/industries",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
};

const industryList = [
  // ── Target Industries (v3.0) — North America Focus ─────────
  {
    slug: "beauty-skincare",
    name: "Beauty & Skincare",
    icon: "✨",
    desc: "FDA-compliant custom packaging for indie beauty and skincare brands. Mailer boxes with bottle inserts, luxury gift sets with multi-SKU compartments. Low MOQ from 100 units.",
    tags: ["FDA Compliant", "Low MOQ", "Gift Sets"],
    identitySlogan: "From glow to art, packaging completes",
  },
  {
    slug: "fragrance-candles",
    name: "Fragrance & Candles",
    icon: "🕯️",
    desc: "Drop-tested mailer boxes for glass candle jars and premium diffuser bottles. Holiday gift sets, subscription boxes, and luxury fragrance presentation. FSC-certified.",
    tags: ["Jar Inserts", "Gift Sets", "Subscription"],
    identitySlogan: "From glow to art, packaging completes",
  },
  {
    slug: "corporate-gifts-subscription",
    name: "Corporate Gifts & Subscription Boxes",
    icon: "🎁",
    desc: "Monthly subscription box manufacturing from 100 units. Corporate welcome kits, employee appreciation gifts, holiday client distributions. Volume pricing available.",
    tags: ["Subscription", "Corporate Kits", "Volume Pricing"],
    identitySlogan: "Every box is a touchpoint that builds loyalty",
  },
  {
    slug: "stationery-toys",
    name: "Stationery & Designer Toys",
    icon: "✒️",
    desc: "Collector-grade limited edition packaging for designer toys. Slim flat mailers for notebooks, journals, and prints. Numbered edition boxes, blind box packaging.",
    tags: ["Collector Grade", "Slim Mailers", "Limited Edition"],
    identitySlogan: "From craft to legacy, packaging preserves",
  },
  {
    slug: "jewelry-accessories",
    name: "Jewelry & Accessories",
    icon: "💍",
    desc: "Luxury rigid jewelry boxes with velvet inserts and magnetic closure. Coordinated box families for rings, necklaces, watches, and accessories. Instagram-worthy unboxing.",
    tags: ["Velvet Insert", "Magnetic Closure", "Affordable Luxury"],
    identitySlogan: "Jewelry reveals self, box begins story",
  },
  // ── End Target Industries ───────────────────────────────────
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Packaging Built for Your Industry
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Every vertical has unique packaging requirements — from FDA compliance for chocolate to drop-tested inserts for candles. We design specifically for yours.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryList.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all overflow-hidden"
            >
              <div className="p-8">
                <div className="text-5xl mb-4">{ind.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {ind.name}
                </h2>
                {/* Identity Transformation Slogan — every industry, single-line English */}
                <div className="mb-4 bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-xl px-5 py-3">
                  <p className="font-serif italic text-base tracking-wide">
                    {ind.identitySlogan}
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {ind.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full font-medium border border-green-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-8 pb-6">
                <span className="text-green-600 text-sm font-semibold group-hover:underline">
                  View {ind.name} Packaging →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0a2e18] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🏭</div>
          <h2 className="text-3xl font-bold mb-4">Don&apos;t see your industry?</h2>
          <p className="text-green-200 mb-8">
            We work with brands across 20+ verticals. If your industry isn&apos;t listed, we likely still have experience with it — reach out and we&apos;ll show you relevant samples.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors"
          >
            Talk to a Packaging Specialist
          </Link>
        </div>
      </section>
    </>
  );
}
