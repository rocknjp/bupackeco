import Link from "next/link";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Wine DIY Modular Packaging: Sales Doubled, Cost Down 20% | BUpack Case Study",
  description:
    "How a wine brand used DIY modular flat-pack packaging to double sales, increase repurchase rate by 20%, and reduce packaging cost by 20% — while saving 60% on freight.",
  alternates: {
    canonical: "https://www.bupackeco.com/case-studies/wine-diy-modular-packaging/",
  },
};

export default function WineCaseStudy() {
  return (
    <>
      <ArticleSchema
        headline="Wine DIY Modular Packaging: Sales Doubled, Cost Down 20%, Repurchase Up 20%"
        description="Case study: Bejan's DIY modular flat-pack wine box reduced freight by 60%, cut packaging cost by 20%, doubled sales, and increased repurchase rate by 20%."
        datePublished="2025-06-13"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Case Studies", url: "https://www.bupackeco.com/case-studies" },
          { name: "Wine DIY Modular Packaging", url: "https://www.bupackeco.com/case-studies/wine-diy-modular-packaging" },
        ]}
      />

      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Case Study · Wine & Spirits</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Wine DIY Modular Packaging: Sales Doubled, Cost Down 20%</h1>
          <p className="text-green-200 text-lg leading-relaxed">How a modular flat-pack design solved both high freight costs and inflexible product bundling — while delivering a better customer experience.</p>
        </div>
      </section>

      <section className="bg-green-50 border-b border-green-100 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "2x", label: "Sales Growth" },
            { n: "+20%", label: "Repurchase Rate" },
            { n: "-20%", label: "Packaging Cost" },
            { n: "$1.5-3.0", label: "Per Unit Price" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-green-700">{s.n}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Background</h2>
            <p className="text-gray-600 leading-relaxed">
              A wine brand wanted to upgrade their gift box but faced two core conflicts: traditional rigid gift boxes were voluminous (high freight cost, up to 30-40% of product cost), and fixed bundling didn't allow customers to choose their preferred wine combinations — leading to abandoned purchases.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Challenges</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Traditional wine gift boxes are "volumetric cargo" — freight cost up to 30-40% of product cost</li>
              <li>Fixed gift combinations led to "like wine A but not wine B" abandoned carts</li>
              <li>Any innovation couldn't significantly increase packaging cost</li>
              <li>DIY modular design needed to be cost-effective even at 100-1,000 pcs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Solution: DIY Modular Flat-Pack</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Bejan designed an innovative DIY modular solution with two breakthrough features:</p>
            <div className="bg-green-50 rounded-xl p-6 mb-4 border border-green-200">
              <h4 className="font-bold text-gray-900 mb-2">Innovation 1: Flat-Pack Shipping + End-User Assembly</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Packaging ships flat — reduces transport volume by approximately 60%</li>
                <li>Snap-fit structure — no glue or tools needed for assembly</li>
                <li>Total packaging cost reduced by 20%+ in the 100-1,000 pcs range</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6 mb-4 border border-green-200">
              <h4 className="font-bold text-gray-900 mb-2">Innovation 2: Modular Slots for Free Combination</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Modular slot design — customers mix and match any wine combination</li>
                <li>Same package adapts to multiple product configurations</li>
                <li>Transparent window or magnetic flap for visual product selection</li>
              </ul>
            </div>
            <p className="text-gray-600 text-sm">
              <strong>Cost & Lead Time:</strong> $1.5-3.0/pc depending on structure and finish · 15-25 day production · MOQ 500 pcs (rigid box)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Results</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">📈</span><span className="text-gray-600">Sales <strong>doubled</strong> after implementing DIY modular packaging</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">🔁</span><span className="text-gray-600">Repurchase rate increased <strong>20%+</strong> — DIY mixing boosted customer engagement</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">💵</span><span className="text-gray-600">Packaging cost reduced <strong>20%+</strong>, freight savings approximately <strong>60%</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">⭐</span><span className="text-gray-600">Client described it as "redefining the wine gift box user experience"</span></li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg italic text-gray-700">
            <strong>Key Takeaway:</strong> "Packaging is experience" — when packaging becomes part of customer interaction, it transforms from a cost center into a marketing asset. The DIY modular approach solved both "high freight" and "inflexible bundling" simultaneously, delivering triple wins in sales, retention, and cost. For wine, food, and gift categories, modular + flat-pack design is a direction worth systematic exploration.
          </blockquote>

          <div className="pt-6 flex gap-4">
            <Link href="/contact" className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">Get a Free Quote</Link>
            <Link href="/guide/ecommerce-packaging-sourcing" className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl font-semibold transition-colors">Read the Full Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
