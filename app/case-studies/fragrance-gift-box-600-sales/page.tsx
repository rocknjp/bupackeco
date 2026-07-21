import Link from "next/link";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Fragrance Gift Box: 600% Sales Increase, <1% Damage Rate | BUpack Case Study",
  description:
    "How a content creator's 6-bottle fragrance gift box achieved 600% sales increase and under 1% shipping damage rate with custom EVA inserts and magnetic rigid box design.",
  alternates: {
    canonical: "https://www.bupackeco.com/case-studies/fragrance-gift-box-600-sales/",
  },
};

export default function FragranceCaseStudy() {
  return (
    <>
      <ArticleSchema
        headline="Fragrance 6-Bottle Gift Box: 600% Sales Increase with <1% Damage Rate"
        description="Case study: Custom EVA insert + magnetic rigid box design drove 600% sales increase for a fragrance gift set while reducing shipping damage to under 1%."
        datePublished="2025-06-13"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Case Studies", url: "https://www.bupackeco.com/case-studies" },
          { name: "Fragrance Gift Box 600% Sales", url: "https://www.bupackeco.com/case-studies/fragrance-gift-box-600-sales" },
        ]}
      />

      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Case Study · Fragrance</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">6-Bottle Fragrance Gift Box: 600% Sales Increase, &lt;1% Damage Rate</h1>
          <p className="text-green-200 text-lg leading-relaxed">How a content creator transformed single-unit fragrance sales into a premium gift bundle — with custom inserts that virtually eliminated shipping damage.</p>
        </div>
      </section>

      <section className="bg-green-50 border-b border-green-100 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "600%", label: "Sales Increase" },
            { n: "<1%", label: "Damage Rate" },
            { n: "6 Bottles", label: "Custom Insert" },
            { n: "DDP", label: "Cross-Border Shipping" },
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
              A fragrance content creator wanted to upgrade from single-unit sales to a 6-bottle gift bundle to increase average order value and gift-scenario conversion. The core challenge: design a package that could display 6 fragrance bottles at once while ensuring safety during cross-border shipping.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Challenges</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>6 fragrance bottles in one package required a custom insert with individual slots</li>
              <li>Previous shipping damage rate exceeded 5% — seriously impacting margins</li>
              <li>Shifting from single units to gift bundles required premium unboxing experience</li>
              <li>Sales rhythm tied to holiday/promotion cycles — delivery could not slip</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Solution</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Bejan's design team created a tailor-made 6-bottle fragrance gift box:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Custom EVA insert + positioning structure:</strong> Each bottle in an individual slot to prevent collision; drop-test verified</li>
              <li><strong>Two-round insert iteration:</strong> Final version reduced damage rate to under 1%</li>
              <li><strong>Magnetic rigid box:</strong> Foil stamping + specialty paper for luxury gift perception</li>
              <li><strong>DDP shipping:</strong> Door-to-door delivery with all customs handled by Bejan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Results</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">🚀</span><span className="text-gray-600">Sales increased <strong>600%</strong> — from single-unit to gift bundle model</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">📦</span><span className="text-gray-600">Shipping damage rate dropped from 5%+ to <strong>under 1%</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">💰</span><span className="text-gray-600">Average order value significantly increased</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">🔄</span><span className="text-gray-600">Client replicated the 6-bottle format across other fragrance lines</span></li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg italic text-gray-700">
            <strong>Key Takeaway:</strong> Packaging design is a sales tool, not just a protective container. The 6-bottle insert solved both the engineering problem (damage &lt;1%) and the business problem (600% sales increase). For gift-oriented categories, the unboxing experience and bundle structure are the core levers for increasing AOV.
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
