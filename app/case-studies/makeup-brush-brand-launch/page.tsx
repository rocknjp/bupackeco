import Link from "next/link";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Makeup Brush Brand Launch: 200 pcs, 10-Day Delivery | BUpack Case Study",
  description:
    "How a beauty startup launched their makeup brush brand with just 200 custom packaging units, delivered in 10 days. Low MOQ + fast sampling = new brand success.",
  alternates: {
    canonical: "https://www.bupackeco.com/case-studies/makeup-brush-brand-launch/",
  },
};

export default function MakeupBrushCaseStudy() {
  return (
    <>
      <ArticleSchema
        headline="Makeup Brush Brand Launch: 200 pcs Custom Packaging in 10 Days"
        description="Case study: How a beauty startup used BUpack's low MOQ (200 pcs) and fast sampling (same-day material sample, 3-day print sample) to launch their makeup brush brand on schedule."
        datePublished="2025-06-13"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Case Studies", url: "https://www.bupackeco.com/case-studies" },
          { name: "Makeup Brush Brand Launch", url: "https://www.bupackeco.com/case-studies/makeup-brush-brand-launch" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Case Study · Beauty</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Makeup Brush Brand Launch: 200 pcs, 10-Day Delivery</h1>
          <p className="text-green-200 text-lg leading-relaxed">How a beauty entrepreneur broke through the 1,000-piece MOQ barrier and launched on schedule with just 200 custom packaging units.</p>
        </div>
      </section>

      {/* Results Bar */}
      <section className="bg-green-50 border-b border-green-100 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "200 pcs", label: "First Batch" },
            { n: "10 Days", label: "Sample to Delivery" },
            { n: "Same Day", label: "Material Sample" },
            { n: "3 Days", label: "Print Sample" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-green-700">{s.n}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Background</h2>
            <p className="text-gray-600 leading-relaxed">
              A beauty entrepreneur launching a private-label makeup brush brand faced a familiar dilemma: existing suppliers universally required MOQs above 1,000 pcs, with sampling cycles stretching to two weeks. For a new brand that had not yet validated market demand, this meant high inventory risk and significant capital pressure. The client needed packaging that could reflect the brand identity and be ordered in small batches for market testing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Challenges</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Traditional packaging factories require 1,000+ pcs MOQ — unaffordable for new brands</li>
              <li>Brand launch timeline fixed — packaging had to be delivered within 10 days of sample approval</li>
              <li>Small-batch orders often deprioritized by large factories — quality concerns</li>
              <li>Packaging needed to carry full brand visual identity — no design compromises</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Solution</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Bejan provided a tailored solution addressing each pain point:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Low MOQ in action:</strong> Accepted just 200 pcs for the first batch — folding carton MOQ starts at 100 pcs</li>
              <li><strong>Express sampling:</strong> Material samples confirmed the same day, print samples within 3 days</li>
              <li><strong>10-day delivery:</strong> Strictly controlled timeline from sample approval to shipment</li>
              <li><strong>Full QC:</strong> ISO 9001 quality management applied regardless of batch size</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Results</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✅</span><span className="text-gray-600">First batch of 200 pcs delivered on time, brand launched successfully</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✅</span><span className="text-gray-600">Packaging quality received positive consumer feedback</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✅</span><span className="text-gray-600">Client designated Bejan as long-term strategic supplier</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✅</span><span className="text-gray-600">Subsequent orders scaled to 1,000+ pcs</span></li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg italic text-gray-700">
            <strong>Key Takeaway:</strong> For new brands, a packaging supplier's MOQ flexibility and response speed are more critical than unit price. Product-specific MOQs (100 pcs for folding cartons, 500 pcs for rigid boxes) make custom packaging accessible without inventory risk.
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
