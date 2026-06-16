import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "How to Import Custom Packaging from China: Complete Guide | BUpack",
  description:
    "Step-by-step guide to importing custom packaging from China. Shipping, customs, quality control, and cost breakdown. Factory-direct pricing saves 40-60% vs domestic.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/import-custom-packaging-from-china-guide",
  },
  openGraph: {
    title: "How to Import Custom Packaging from China: Complete Guide | BUpack",
    description:
      "Step-by-step guide to importing custom packaging from China. Shipping, customs, quality control, and cost breakdown. Factory-direct pricing saves 40-60% vs domestic.",
    url: "https://www.bupackeco.com/blog/import-custom-packaging-from-china-guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Import Custom Packaging from China: Complete Guide | BUpack",
    description:
      "Step-by-step guide to importing custom packaging from China. Shipping, customs, quality control, and cost breakdown. Factory-direct pricing saves 40-60% vs domestic.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "How much does it cost to import custom packaging from China?",
    answer:
      "A typical 1,000-unit order of custom mailer boxes from China costs $0.80–$1.50 per unit, plus $800–$2,500 for ocean freight and 0–5% customs duties. Total landed cost is typically 40–60% less than equivalent US-made packaging.",
  },
  {
    question: "How long does shipping from China take for packaging orders?",
    answer:
      "Ocean freight takes 7–21 days to the US. Air freight takes 3–5 days but costs 3–4x more. Including production time (10–20 business days), plan for 3–6 weeks total from order to delivery via ocean freight.",
  },
  {
    question: "What customs duties apply to paper packaging imported from China?",
    answer:
      "Most paper boxes fall under HTS code 4819.10 with 0% duty. Coated or laminated boxes may qualify under different codes with 3–5% duty. Check with your freight forwarder for the correct classification for your specific packaging.",
  },
  {
    question: "How do I ensure quality when importing packaging from China?",
    answer:
      "Three steps: (1) Always get a pre-production sample before committing to a full run. (2) Request a third-party quality inspection before shipment — services like SGS or QIMA charge $200–$500 per order. (3) Work with suppliers who provide photo documentation at each production stage, like BUpack's 3-stage QC process.",
  },
  {
    question: "Should I use FOB or DDP shipping terms for my packaging import?",
    answer:
      "DDP (Delivered Duty Paid) is recommended for first-time importers — the supplier handles shipping, customs clearance, and duties, so you just receive the delivery. FOB (Free on Board) is cheaper but requires you to arrange freight forwarding and customs. DDP typically costs 10–15% more than FOB.",
  },
];

export default function ImportCustomPackagingFromChinaGuide() {
  return (
    <>
      <ArticleSchema
        headline="How to Import Custom Packaging from China: Complete Guide"
        description="Step-by-step guide to importing custom packaging from China. Shipping, customs, quality control, and cost breakdown. Factory-direct pricing saves 40-60% vs domestic."
        datePublished="2026-06-13T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/import-custom-packaging-from-china-guide"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Import Custom Packaging from China Guide", url: "/blog/import-custom-packaging-from-china-guide" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-green-400 text-sm hover:text-green-300 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              Import Guide
            </span>
            <span className="text-green-300 text-sm">
              June 13, 2026 · 10 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            How to Import Custom Packaging from China: Complete Guide
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            Step-by-step guide to importing custom packaging from China. Shipping, customs, quality control, and cost breakdown. Factory-direct pricing saves 40-60% vs domestic.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Why Import Custom Packaging from China?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chinese manufacturers produce custom packaging at <strong>40–60% lower cost</strong> than US counterparts for equivalent specifications. A custom mailer box that costs $2.50–$5.00 from a US manufacturer runs just $0.80–$1.80 from China — even after adding freight and duties. For DTC brands ordering 1,000+ units, the savings can reach $1,000–$3,000 per order.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But importing from China isn't just about price. Chinese factories also offer lower MOQ (starting at 100 units), wider finishing options (foil stamping, soft-touch, magnetic closures), and faster production turnaround. The trade-off? Longer shipping times and the need for a quality control process. This guide walks you through every step — from finding the right manufacturer to receiving your boxes at your warehouse.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For a broader comparison of Chinese vs US manufacturers, see our <a href="/blog/china-vs-us-packaging-manufacturer" className="text-green-700 underline hover:text-green-600">China vs US Custom Packaging Manufacturers</a> guide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Step 1: Find and Vet a Chinese Packaging Manufacturer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The biggest risk when importing from China isn't cost or shipping — it's choosing the wrong supplier. Here's how to evaluate potential partners:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Red Flags to Watch For
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>No FSC or ISO certificates</strong> — If they can't verify their certifications, walk away</li>
              <li><strong>No third-party inspection reports</strong> — Quality without verification is just a promise</li>
              <li><strong>Refuses video call factory tour</strong> — Legitimate factories are proud to show their facilities</li>
              <li><strong>No clear QC process</strong> — Ask about inspection checkpoints and photo documentation</li>
              <li><strong>Demands 100% payment upfront</strong> — Standard terms are 30/70 or 50/50, never 100% advance</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Green Flags That Signal a Reliable Partner
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>FSC, ISO 9001, Sedex/SMETA certified</strong> — These demonstrate real investment in quality and ethics</li>
              <li><strong>Offers pre-production samples</strong> — Physical samples before full production show confidence in their work</li>
              <li><strong>Provides video factory tour</strong> — Transparency about facilities and capabilities</li>
              <li><strong>Accepts standard payment terms</strong> — 30/70 or 50/50, with balance before shipment</li>
              <li><strong>Shares inspection reports with photos</strong> — Documentation at every production stage, before shipment</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Step 2: Understand the Import Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Importing custom packaging from China follows a predictable workflow. Here's each step with realistic timelines:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Step</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Timeline</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">1. Request quote</td><td className="py-2 px-4 text-gray-700">1–3 days</td><td className="py-2 px-4 text-gray-700">Send specs: dimensions, material, quantity, finishing</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">2. Approve quote & place order</td><td className="py-2 px-4 text-gray-700">1–2 days</td><td className="py-2 px-4 text-gray-700">30–50% deposit via wire transfer</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">3. Submit artwork & approve proof</td><td className="py-2 px-4 text-gray-700">3–7 days</td><td className="py-2 px-4 text-gray-700">Dieline, CMYK files, digital proof review</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">4. Pre-production sample (optional)</td><td className="py-2 px-4 text-gray-700">5–10 days</td><td className="py-2 px-4 text-gray-700">Physical sample shipped via DHL/FedEx</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">5. Production</td><td className="py-2 px-4 text-gray-700">10–20 business days</td><td className="py-2 px-4 text-gray-700">Printing, die-cutting, lamination, assembly</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">6. Quality inspection</td><td className="py-2 px-4 text-gray-700">1–3 days</td><td className="py-2 px-4 text-gray-700">Third-party QC or factory self-inspection with photos</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">7. Balance payment</td><td className="py-2 px-4 text-gray-700">1–2 days</td><td className="py-2 px-4 text-gray-700">Remaining 50–70% before shipment</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">8. Shipping</td><td className="py-2 px-4 text-gray-700">7–21 days (ocean) / 3–5 days (air)</td><td className="py-2 px-4 text-gray-700">FOB, CIF, or DDP terms</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">9. Customs clearance</td><td className="py-2 px-4 text-gray-700">2–5 days</td><td className="py-2 px-4 text-gray-700">Importer of record, duties, paperwork</td></tr>
                  <tr className="bg-green-50 font-semibold"><td className="py-2 px-4 text-gray-900">Total</td><td className="py-2 px-4 text-gray-900">4–8 weeks</td><td className="py-2 px-4 text-gray-900">From first inquiry to delivery</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Step 3: Shipping Methods Compared
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choosing the right shipping method depends on your order size, timeline, and budget. Here's the comparison:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Method</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Transit Time</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Best For</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Ocean Freight (FCL)</td><td className="py-2 px-4 text-gray-700">14–21 days</td><td className="py-2 px-4 text-gray-700">Orders 5,000+ units</td><td className="py-2 px-4 text-gray-700">$1,500–$2,500/container</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Ocean Freight (LCL)</td><td className="py-2 px-4 text-gray-700">14–28 days</td><td className="py-2 px-4 text-gray-700">Orders 500–5,000 units</td><td className="py-2 px-4 text-gray-700">$800–$1,500/shipment</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Air Freight</td><td className="py-2 px-4 text-gray-700">3–5 days</td><td className="py-2 px-4 text-gray-700">Under 300 units, rush orders</td><td className="py-2 px-4 text-gray-700">$120–$400 (small orders)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Express (DHL/FedEx)</td><td className="py-2 px-4 text-gray-700">3–7 days</td><td className="py-2 px-4 text-gray-700">Samples, under 50 units</td><td className="py-2 px-4 text-gray-700">$50–$150</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Rule of thumb:</strong> For orders under 300 units, air freight is often more economical than ocean (lower minimum charges). For orders over 1,000 units, ocean freight is significantly cheaper per unit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Step 4: Customs & Duties Explained
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many first-time importers are intimidated by customs. The reality is straightforward for paper packaging:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              HTS Classification for Paper Packaging
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Packaging Type</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">HTS Code</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Duty Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Corrugated paper boxes</td><td className="py-2 px-4 text-gray-700">4819.10</td><td className="py-2 px-4 text-gray-700">0%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Folding cartons (non-corrugated)</td><td className="py-2 px-4 text-gray-700">4819.20</td><td className="py-2 px-4 text-gray-700">0%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Paper bags</td><td className="py-2 px-4 text-gray-700">4819.30</td><td className="py-2 px-4 text-gray-700">0–3.5%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Laminated/coated boxes</td><td className="py-2 px-4 text-gray-700">4819.10 / 4823.90</td><td className="py-2 px-4 text-gray-700">0–5%</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Shipping Terms: FOB vs CIF vs DDP
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>FOB (Free on Board)</strong> — Supplier delivers to port. You arrange freight, insurance, customs. Lowest cost but most logistics work on your end.</li>
              <li><strong>CIF (Cost, Insurance, Freight)</strong> — Supplier arranges shipping and insurance to your port. You handle customs clearance and last-mile delivery.</li>
              <li><strong>DDP (Delivered Duty Paid)</strong> — Supplier handles everything: shipping, customs, duties, delivery to your door. Most convenient, typically 10–15% more than FOB.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Our recommendation for first-time importers:</strong> Start with DDP. The 10–15% premium is worth the peace of mind. Once you're comfortable with the process, switch to FOB for cost savings. BUpack offers DDP shipping on all orders.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Step 5: Quality Control Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quality control is the single most important factor in a successful import. Here's a 3-stage QC framework that catches 99% of issues before they reach your warehouse:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Stage 1: Pre-Production Verification
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>Confirm materials match specifications (paper weight, coating type, ink)</li>
              <li>Approve digital proof and Pantone color matching</li>
              <li>Verify dieline alignment and structural integrity</li>
              <li>Request a physical sample for orders over 500 units</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Stage 2: Inline Inspection (During Production)
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>Photo documentation at key checkpoints: printing, die-cutting, lamination, assembly</li>
              <li>Spot-check dimensions, color consistency, and print alignment</li>
              <li>Flag any issues immediately — don't wait until the entire run is complete</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Stage 3: Pre-Shipment Inspection
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>Full inspection report with photos of finished products</li>
              <li>Check for scratches, color variance, structural defects</li>
              <li>Verify quantity matches order</li>
              <li>Confirm packaging for transit (palletization, corner protectors, moisture barrier)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              BUpack follows this exact 3-stage QC process with photo documentation at every checkpoint. We share inspection reports before every shipment so there are no surprises. Learn more about our <a href="/eco" className="text-green-700 underline hover:text-green-600">certifications and quality standards</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Cost Breakdown: Full Import Calculation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's a real cost calculation for importing 1,000 custom mailer boxes from China to the US:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Item</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Box production (1,000 units @ $1.20 each)</td><td className="py-2 px-4 text-gray-700">$1,200</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Custom insert cards (1,000 units @ $0.30 each)</td><td className="py-2 px-4 text-gray-700">$300</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Die-cutting fee (one-time)</td><td className="py-2 px-4 text-gray-700">$150</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Physical sample</td><td className="py-2 px-4 text-gray-700">$80</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Ocean freight (LCL)</td><td className="py-2 px-4 text-gray-700">$900</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Customs duty (0% for paper boxes)</td><td className="py-2 px-4 text-gray-700">$0</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Third-party QC inspection</td><td className="py-2 px-4 text-gray-700">$250</td></tr>
                  <tr className="bg-green-50 font-semibold"><td className="py-2 px-4 text-gray-900">Total (landed)</td><td className="py-2 px-4 text-gray-900">$2,880</td></tr>
                  <tr className="bg-green-50 font-semibold"><td className="py-2 px-4 text-gray-900">Effective cost per box (with insert)</td><td className="py-2 px-4 text-gray-900">$2.88</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Compare this to a US manufacturer: the same spec would cost approximately $4.50–$6.00 per box, totaling $4,500–$6,000 — a difference of <strong>$1,620–$3,120</strong>. That's 40–52% savings by importing from China. For a deeper cost comparison, see our <a href="/blog/custom-packaging-cost-guide" className="text-green-700 underline hover:text-green-600">complete packaging cost guide</a>.
            </p>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-green-900">
                <li>Chinese packaging manufacturers are 40–60% cheaper per unit than US counterparts</li>
                <li>Most paper boxes have 0% customs duty under HTS code 4819.10</li>
                <li>Use DDP shipping for your first import — the convenience premium is worth it</li>
                <li>Always implement a 3-stage QC process: pre-production, inline, pre-shipment</li>
                <li>Plan 4–8 weeks total from inquiry to delivery; order 8–10 weeks ahead of product launches</li>
                <li>For orders under 300 units, air freight may be cheaper than ocean</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              How BUpack Simplifies the Import Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We've built our service to eliminate the common pain points of importing from China:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>English-speaking project managers</strong> — No language barrier, same-day email responses, proactive status updates</li>
              <li><strong>DDP shipping available</strong> — We handle freight, customs, and duties so your boxes arrive at your door</li>
              <li><strong>3-stage QC with photo documentation</strong> — You see your boxes at every production stage before shipment</li>
              <li><strong>FSC and ISO 9001 certified</strong> — Full documentation provided with every order</li>
              <li><strong>Flexible MOQ from 100 units</strong> — Test before you scale; no need to commit to large orders upfront</li>
              <li><strong>Free digital proofs</strong> — No surprises on color or layout</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're ordering <a href="/products/paper-boxes" className="text-green-700 underline hover:text-green-600">custom paper boxes</a>, <a href="/products/paper-bags" className="text-green-700 underline hover:text-green-600">paper bags</a>, <a href="/products/subscription-boxes" className="text-green-700 underline hover:text-green-600">subscription boxes</a>, <a href="/products/custom-mailer-boxes" className="text-green-700 underline font-semibold">custom mailer boxes</a>, <a href="/products/folding-cartons" className="text-green-700 underline font-semibold">folding cartons</a>, or <a href="/products/rigid-gift-boxes" className="text-green-700 underline font-semibold">rigid gift boxes</a>, our team manages the entire process from artwork approval to delivery.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to import custom packaging from China?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                DDP shipping, 3-stage QC, FSC-certified materials. Get a detailed quote with no hidden fees.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
                >
                  Get a Free Quote →
                </Link>
                <a
                  href="https://wa.me/8615064260757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl border border-green-200 hover:bg-green-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqItems.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-[#f9fdf8] border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Get packaging tips in your inbox</h2>
          <p className="text-gray-500 mb-6">Monthly insights for eCommerce founders. No spam.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
