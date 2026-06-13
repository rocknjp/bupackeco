import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Packaging by Industry | BUpack",
  description:
    "Custom paper packaging tailored to your industry. From candles and jewelry to chocolate and pet boxes — FSC-certified, low MOQ.",
  alternates: {
    canonical: "https://www.bupackeco.com/industries",
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
  {
    slug: "candles-fragrance",
    name: "Candles & Home Fragrance",
    icon: "🕯️",
    desc: "Drop-tested mailer boxes with precision-cut inserts that protect glass jars during shipping. Holiday gift sets, monthly subscription boxes, and branded sleeves.",
    tags: ["Mailer Boxes", "Gift Sets", "Subscription"],
  },
  {
    slug: "jewelry",
    name: "Jewelry & Accessories",
    icon: "💍",
    desc: "Velvet-lined rigid boxes with magnetic closure, custom monogram embossing, and travel pouches. Designed to photograph beautifully for Instagram and proposal posts.",
    tags: ["Rigid Boxes", "Velvet Insert", "Magnetic Closure"],
  },
  {
    slug: "chocolate-confectionery",
    name: "Chocolate & Confectionery",
    icon: "🍫",
    desc: "FDA-compliant gift boxes with food-safe inks and windowed presentation. Precision-cut trays keep truffles and confections perfectly in place.",
    tags: ["FDA Compliant", "Window Boxes", "Gift Sets"],
  },
  {
    slug: "stationery-gifts",
    name: "Stationery & Lifestyle Gifts",
    icon: "✒️",
    desc: "Slim-profile mailers for notebooks and planners. Multi-compartment gift sets for journal + pen combos. Reusable keepsake boxes customers actually keep.",
    tags: ["Flat Mailers", "Gift Sets", "Keepsake Boxes"],
  },
  {
    slug: "tea-beverages",
    name: "Tea & Specialty Beverages",
    icon: "🍵",
    desc: "Drawer-style tea boxes with organized sachet compartments. Monthly subscription boxes with rotating seasonal artwork. Tasting guide inserts included.",
    tags: ["Drawer Boxes", "Subscription", "Gift Sets"],
  },
  {
    slug: "pet-subscription",
    name: "Pet Treats & Subscription Boxes",
    icon: "🐾",
    desc: "Monthly themed boxes with pet-safe soy-based inks. Divided interiors for treats + toys + accessories. Direct-ship ready — no outer carton needed.",
    tags: ["Subscription", "Pet-Safe Ink", "Divided Interior"],
  },
  {
    slug: "cosmetics-beauty",
    name: "Cosmetics & Beauty",
    icon: "💄",
    desc: "Custom mailer boxes with precision inserts for glass skincare bottles. Luxury gift sets with EVA foam compartments. Subscription boxes with monthly design refreshes.",
    tags: ["Skincare Packaging", "Gift Sets", "Subscription"],
  },
  {
    slug: "wine-spirits",
    name: "Wine & Spirits",
    icon: "🍷",
    desc: "Protective wine bottle boxes with molded pulp inserts. Premium gift sets with wine + glasses compartments. Quarterly wine club shipment boxes.",
    tags: ["Bottle Protection", "Gift Sets", "Wine Club"],
  },
  {
    slug: "apparel-fashion",
    name: "Apparel & Fashion",
    icon: "👗",
    desc: "Branded corrugated mailers that keep garments flat and wrinkle-free. Styling boxes with tissue and inserts. Monthly style subscription boxes.",
    tags: ["Apparel Mailers", "Gift Boxes", "Subscription"],
  },
  {
    slug: "bakery-food",
    name: "Bakery & Food",
    icon: "🥐",
    desc: "FDA-compliant packaging with food-safe inks and windowed presentation. Custom inserts for cookies, macarons, and pastries. Seasonal gift boxes for holidays.",
    tags: ["FDA Compliant", "Window Boxes", "Gift Sets"],
  },
  {
    slug: "cbd-hemp",
    name: "CBD & Hemp",
    icon: "🌿",
    desc: "Child-resistant certified packaging with premium finishes. Compliant display boxes with required warning labels. Subscription boxes with regulatory compliance built in.",
    tags: ["Child-Resistant", "Compliant", "Premium Finish"],
  },
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
