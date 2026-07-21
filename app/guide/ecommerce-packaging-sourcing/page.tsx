import Link from "next/link";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Ultimate Ecommerce Packaging Sourcing Guide for US Brands | BUpack",
  description:
    "The definitive guide to custom packaging sourcing for US ecommerce brands. Covers MOQ, sampling, production timelines, supplier evaluation, FSC compliance, cost optimization, and real case studies with data.",
  alternates: {
    canonical: "https://www.bupackeco.com/guide/ecommerce-packaging-sourcing/",
  },
  openGraph: {
    title: "Ultimate Ecommerce Packaging Sourcing Guide for US Brands | BUpack",
    description:
      "The definitive guide to custom packaging sourcing for US ecommerce brands. Covers MOQ, sampling, production timelines, supplier evaluation, FSC compliance, cost optimization, and real case studies with data.",
    url: "https://www.bupackeco.com/guide/ecommerce-packaging-sourcing",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Ecommerce Packaging Sourcing Guide for US Brands | BUpack",
    description:
      "The definitive guide to custom packaging sourcing for US ecommerce brands. Covers MOQ, sampling, production timelines, supplier evaluation, FSC compliance, cost optimization, and real case studies with data.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

/* ── chapter data ── */
const chapters = [
  { id: "chapter-1", label: "1. Market Overview" },
  { id: "chapter-2", label: "2. Product Matrix" },
  { id: "chapter-3", label: "3. Sampling & Timeline" },
  { id: "chapter-4", label: "4. Supplier Evaluation" },
  { id: "chapter-5", label: "5. Compliance & Sustainability" },
  { id: "chapter-6", label: "6. Cost Optimization" },
  { id: "chapter-7", label: "7. Case Studies" },
  { id: "chapter-8", label: "8. FAQ" },
  { id: "chapter-9", label: "9. Toolkit" },
];

const faqItems = [
  {
    question: "What is the typical MOQ for US e-commerce brands sourcing custom packaging?",
    answer:
      "Bejan offers product-specific MOQs: folding cartons and corrugated mailer boxes from 100 pcs, rigid/magnetic gift boxes from 500 pcs, and custom paper bags from 200 pcs. This is significantly lower than the industry average of 1,000–5,000 pcs, making custom packaging accessible for startups and growing DTC brands.",
  },
  {
    question: "How long does packaging sampling take? Can it be expedited?",
    answer:
      "Bejan provides material (structural) samples the same day and printed samples within 3 days. Fully finished samples with all surface treatments take 5–7 days. Expedited options are available for an additional fee. For US brands, factor in 5–7 business days for shipping from China.",
  },
  {
    question: "What is DDP shipping and why does it matter for US brands?",
    answer:
      "DDP (Delivered Duty Paid) means the supplier handles everything—production, export customs, international freight, US import clearance, duties, and final delivery to your warehouse. You pay one price with no surprise fees. Bejan offers DDP as a standard option, which eliminates the need for a US customs broker and removes tariff uncertainty.",
  },
  {
    question: "What is FSC-certified packaging and why does the US market care?",
    answer:
      "FSC (Forest Stewardship Council) certification verifies that paper materials come from responsibly managed forests with a verified chain of custody. Over 65% of US consumers under 45 prefer brands with verified sustainability claims, and major retailers like Target, Walmart, and Sephora increasingly require FSC-certified packaging. Bejan holds FSC Chain of Custody certification.",
  },
  {
    question: "Magnetic gift box vs folding box — which is better for beauty brands?",
    answer:
      "It depends on your price point. For products over $50, a magnetic gift box (MOQ 500 pcs) provides premium unboxing. For products $20–50, a folding carton (MOQ 100 pcs) with premium finishes like soft-touch and foil stamping achieves a luxury feel at lower cost. For DTC shipping-heavy brands, folding cartons ship flat and save 40–60% on freight vs rigid boxes.",
  },
  {
    question: "How long does mass production typically take?",
    answer:
      "At Bejan: folding cartons 7–15 days, rigid/magnetic boxes 15–25 days, corrugated mailer boxes 10–15 days. Additional finishes (foil stamping, embossing) add 1–2 days each. For Q4 planning, place orders by August 31 to avoid peak-season delays.",
  },
  {
    question: "How to verify a packaging supplier's quality control?",
    answer:
      "Verify ISO 9001 certification, request AQL inspection standards, ask for sample consistency across production runs, and consider third-party pre-shipment inspection for orders over $5,000. Bejan maintains ISO 9001 quality management, 3-stage QC (incoming/in-process/final), and retains samples from every batch for 2 years.",
  },
  {
    question: "What special design considerations do perfume/fragrance packaging require?",
    answer:
      "Fragrance packaging requires custom inserts with drop-test verification to protect glass bottles, chemically inert interior materials, and regulatory compliance (FDA labeling for cosmetic claims, Prop 65 for California). A 6-bottle fragrance gift box by Bejan reduced damage rate to under 1% while driving a 600% sales increase through optimized unboxing design.",
  },
  {
    question: "What compliance requirements apply to wine packaging for the US market?",
    answer:
      "Wine packaging must comply with TTB labeling (brand name, alcohol content, sulfite declaration, health warning), use food-safe adhesives and coatings, and meet ISTA 3A shipping test standards for glass bottle protection. DTC wine shipping has state-specific requirements including 'Adult Signature Required' labeling.",
  },
  {
    question: "What costs are included in total packaging procurement beyond unit price?",
    answer:
      "Beyond unit price: sampling fees ($50–200), tooling/die fees ($100–500 one-time), shipping/freight (15–30% of unit cost), import duties (0–25% depending on HTS code), customs broker fees ($50–150 if not using DDP), and 10% buffer for unexpected costs. Requesting a DDP quote bundles all logistics costs into one transparent price.",
  },
  {
    question: "What is Sedex certification and why does it matter in supplier evaluation?",
    answer:
      "Sedex (Supplier Ethical Data Exchange) SMETA audit covers labor standards, health & safety, environmental compliance, and business ethics. Major US retailers (Target, Walmart, Costco) require suppliers to source from Sedex-audited factories. Sedex-certified suppliers show 15–20% higher on-time delivery rates and 12–15% higher quality pass rates.",
  },
  {
    question: "How to plan packaging budget for mid-to-premium positioned brands?",
    answer:
      "Mid-range brands ($20–50 products): allocate 5–8% of COGS ($1.0–3.0/pc). Premium brands ($50–100): 8–12% ($3.0–8.0/pc). Invest 30–40% in structure, 30–40% in printing/finish, 15–25% in inserts, and 5–10% in sustainability credentials. DIY modular designs can reduce cost by 20%+ while maintaining premium perception.",
  },
];

export default function EcommercePackagingSourcingGuide() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Guide", url: "https://www.bupackeco.com/guide/ecommerce-packaging-sourcing" },
        ]}
      />
      <ArticleSchema
        headline="The Ultimate Ecommerce Packaging Sourcing Guide for US Brands"
        description="Comprehensive 9-chapter guide covering MOQ, sampling, production timelines, supplier evaluation, FSC compliance, cost optimization, real case studies, FAQ, and procurement toolkits for US ecommerce brands sourcing custom paper packaging."
        datePublished="2025-06-13"
        dateModified="2025-06-13"
      />
      <FAQSchema items={faqItems} />

      {/* ═══ HERO ═══ */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Definitive Guide · 9 Chapters · 14,000+ Words
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            The Ultimate Ecommerce Packaging Sourcing Guide for US Brands
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Everything you need to know about sourcing custom paper packaging — from MOQ and sampling
            to compliance, cost optimization, and real case studies with data.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "100 pcs", label: "Folding Carton MOQ" },
              { n: "3 Days", label: "Print Sample" },
              { n: "FSC", label: "Certified Materials" },
              { n: "DDP", label: "Door-to-Door" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-xl font-bold text-green-300 mb-1">{s.n}</div>
                <div className="text-xs text-green-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STICKY NAV ═══ */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto py-3">
          {chapters.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-colors"
            >
              {ch.label}
            </a>
          ))}
        </div>
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">

        {/* ──── CHAPTER 1 ──── */}
        <section id="chapter-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 1: The Complete Landscape of Packaging Procurement for U.S. E-Commerce Brands
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">U.S. E-Commerce Packaging Market Size</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Year</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Market Size</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">YoY Growth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">2024</td><td className="px-4 py-2">$72.5B</td><td className="px-4 py-2">—</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">2025</td><td className="px-4 py-2">$78.1B</td><td className="px-4 py-2">7.7%</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">2026</td><td className="px-4 py-2">$84.3B</td><td className="px-4 py-2">7.9%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mb-4">CAGR 2024–2026: <strong>7.8%</strong>. Source: U.S. e-commerce packaging market analysis, industry benchmark data.</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Category Pain Points Matrix</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Category</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Top Pain Point</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">Beauty & Skincare</td><td className="px-4 py-2">Brand differentiation + MOQ sensitivity</td><td className="px-4 py-2">Generic packaging = invisible brand</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2 font-medium">Fragrance & Perfume</td><td className="px-4 py-2">Glass bottle protection + luxury presentation</td><td className="px-4 py-2">Damage rate 3–5% without custom inserts</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">Wine & Spirits</td><td className="px-4 py-2">Compliance labeling + shipping safety</td><td className="px-4 py-2">TTB non-compliance = product hold</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2 font-medium">Candles & Home Fragrance</td><td className="px-4 py-2">Heat resistance + gift-ready presentation</td><td className="px-4 py-2">Seasonal demand = tight timelines</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Overseas Supplier Evaluation Framework</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Dimension</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Weight</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Key Indicators</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">Quality System</td><td className="px-4 py-2">35%</td><td className="px-4 py-2">ISO 9001, FSC, SGS, defect rate &lt;2%</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2 font-medium">Lead Time</td><td className="px-4 py-2">30%</td><td className="px-4 py-2">Sampling speed, production capacity, on-time rate</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">Compliance</td><td className="px-4 py-2">20%</td><td className="px-4 py-2">Certifications, food-safe materials, EPR readiness</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2 font-medium">Cost Transparency</td><td className="px-4 py-2">15%</td><td className="px-4 py-2">Itemized quotes, DDP availability, no hidden fees</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Packaging Quality &amp; Return Rate Correlation</h3>
          <p className="text-gray-600 mb-2">Brands using quality custom packaging report <strong>1–3% return rates</strong> vs. <strong>12–18%</strong> for brands using generic or inadequate packaging. For a DTC brand with $500K annual revenue, that&apos;s a potential $45K–90K in avoided return costs.</p>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Key Insight:</strong> Packaging quality is the single most controllable factor in reducing e-commerce return rates. A $0.50/packaging upgrade can prevent $15+ in per-return costs.
          </blockquote>
        </section>

        <hr className="border-gray-200" />

        {/* ──── CHAPTER 2 ──── */}
        <section id="chapter-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 2: Packaging Type Selection Decision Matrix
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Category × Packaging Structure Recommendation</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Category</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Recommended Structure</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Key Consideration</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Cost Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Beauty/Skincare</td><td className="px-4 py-2">Magnetic gift box / Folding carton</td><td className="px-4 py-2">Unboxing experience, brand display</td><td className="px-4 py-2">$0.8–2.5/pc</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Fragrance</td><td className="px-4 py-2">Rigid box + custom insert</td><td className="px-4 py-2">Shipping protection, luxury feel</td><td className="px-4 py-2">$1.2–3.5/pc</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Wine</td><td className="px-4 py-2">Custom wine box + dividers</td><td className="px-4 py-2">Breakage prevention, compliance</td><td className="px-4 py-2">$1.5–4.0/pc</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Candles</td><td className="px-4 py-2">Rigid box + foil/UV</td><td className="px-4 py-2">Heat resistance, scent seal</td><td className="px-4 py-2">$0.9–2.8/pc</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Jewelry</td><td className="px-4 py-2">Magnetic box + EVA/velvet insert</td><td className="px-4 py-2">Anti-theft, delicate presentation</td><td className="px-4 py-2">$0.6–2.0/pc</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Subscription</td><td className="px-4 py-2">Mailer box / Drawer box</td><td className="px-4 py-2">Monthly themes, retention</td><td className="px-4 py-2">$1.0–2.5/pc</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Box Type Comparison</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Magnetic Gift Box</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Folding Carton</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Rigid Lid-and-Base</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">MOQ at Bejan</td><td className="px-4 py-2">500 pcs</td><td className="px-4 py-2">100 pcs</td><td className="px-4 py-2">500 pcs</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2 font-medium">Unit Price</td><td className="px-4 py-2">$2.5–8.0</td><td className="px-4 py-2">$0.3–1.5</td><td className="px-4 py-2">$3.0–10.0</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">Unboxing</td><td className="px-4 py-2">Premium, ritual-like</td><td className="px-4 py-2">Functional, simpler</td><td className="px-4 py-2">Luxury, ceremonial</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2 font-medium">Shipping Volume</td><td className="px-4 py-2">Large (pre-assembled)</td><td className="px-4 py-2">Compact (ships flat)</td><td className="px-4 py-2">Large (pre-assembled)</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2 font-medium">Production</td><td className="px-4 py-2">15–25 days</td><td className="px-4 py-2">7–15 days</td><td className="px-4 py-2">15–25 days</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Insert Material Guide</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Insert Type</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Protection</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Eco-Rating</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Cost Index</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">EVA Foam</td><td className="px-4 py-2">★★★★★</td><td className="px-4 py-2">★★☆☆☆</td><td className="px-4 py-2">$$$</td><td className="px-4 py-2">Fragrance, wine</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Molded Pulp</td><td className="px-4 py-2">★★★★☆</td><td className="px-4 py-2">★★★★★</td><td className="px-4 py-2">$$</td><td className="px-4 py-2">Eco brands, candles</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Cardboard</td><td className="px-4 py-2">★★★☆☆</td><td className="px-4 py-2">★★★★★</td><td className="px-4 py-2">$</td><td className="px-4 py-2">Beauty, stationery</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Foam Pad</td><td className="px-4 py-2">★★★★☆</td><td className="px-4 py-2">★☆☆☆☆</td><td className="px-4 py-2">$$</td><td className="px-4 py-2">Electronics, heavy items</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2025–2026 Structure Innovation Trends</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li><strong>DIY modular flat-pack</strong> — ships flat, customer assembles; reduces freight 60% (see Case Study 3)</li>
            <li><strong>Collapsible magnetic box</strong> — premium feel + flat shipping; hybrid of rigid and folding</li>
            <li><strong>Reusable packaging</strong> — box doubles as storage/organizer; extends brand touchpoints</li>
            <li><strong>Bejan innovation:</strong> 1 new structure developed every week, with in-house structural design team</li>
          </ul>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Key Insight:</strong> The most premium-feeling packages are not necessarily the most expensive — they combine thoughtful structural design with restrained, high-quality finishing. Match your box type to your product price point, not your aspirations.
          </blockquote>
        </section>

        <hr className="border-gray-200" />

        {/* ──── CHAPTER 3 ──── */}
        <section id="chapter-3">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 3: Sampling &amp; Production Timeline Planning
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Sampling Timeline: Bejan vs. Industry</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Sample Type</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Bejan</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Industry Average</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Material (structural) sample</td><td className="px-4 py-2 font-semibold text-green-700">Same day</td><td className="px-4 py-2">3–5 days</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Printed sample</td><td className="px-4 py-2 font-semibold text-green-700">3 days</td><td className="px-4 py-2">5–7 days</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Fully finished sample</td><td className="px-4 py-2 font-semibold text-green-700">5–7 days</td><td className="px-4 py-2">10–14 days</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Mass Production Lead Times</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Packaging Type</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Standard</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Expedited</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Industry Avg</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Folding carton</td><td className="px-4 py-2">7–15 days</td><td className="px-4 py-2">7 days</td><td className="px-4 py-2">15–25 days</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Rigid / magnetic box</td><td className="px-4 py-2">15–25 days</td><td className="px-4 py-2">12–18 days</td><td className="px-4 py-2">25–35 days</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Corrugated mailer box</td><td className="px-4 py-2">10–15 days</td><td className="px-4 py-2">7–10 days</td><td className="px-4 py-2">15–25 days</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">8-Week Product Launch Countdown</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Week</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Week 8</td><td className="px-4 py-2">Submit packaging brief, get quote</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Week 7</td><td className="px-4 py-2">Approve dieline, upload artwork</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Week 6</td><td className="px-4 py-2">Receive &amp; approve printed sample</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Weeks 5–3</td><td className="px-4 py-2">Mass production (7–25 days by type)</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Week 2</td><td className="px-4 py-2">Pre-shipment inspection, ship out</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Week 1</td><td className="px-4 py-2">Ocean freight transit (14–21 days continues)</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Launch</td><td className="px-4 py-2">Arrive at US warehouse, launch product</td></tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Key Insight:</strong> Separate your &quot;sample approval date&quot; from your &quot;production start date.&quot; Bejan can deliver from sample approval to shipment in as little as 10 days for folding cartons — a case study documented 200 makeup brush boxes shipped within 10 days of sample sign-off.
          </blockquote>
        </section>

        <hr className="border-gray-200" />

        {/* ──── CHAPTER 4 ──── */}
        <section id="chapter-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 4: Supplier Evaluation &amp; Audit Checklist
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">5-Dimension Weighted Evaluation</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Dimension</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Weight</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Key Checkpoints</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Quality System</td><td className="px-4 py-2">30%</td><td className="px-4 py-2">ISO 9001, FSC, Sedex, SGS, RoHS</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Production Stability</td><td className="px-4 py-2">25%</td><td className="px-4 py-2">Daily capacity, own factory vs. trader, equipment list</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Sampling Speed</td><td className="px-4 py-2">20%</td><td className="px-4 py-2">Material sample, print sample, modification turnaround</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Compliance &amp; Certs</td><td className="px-4 py-2">15%</td><td className="px-4 py-2">FSC CoC, food-safe, RoHS, EPR readiness</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Price Transparency</td><td className="px-4 py-2">10%</td><td className="px-4 py-2">Itemized quotes, DDP option, no hidden fees</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">15-Point Audit Checklist</h3>
          <div className="space-y-2 mb-6">
            {[
              { star: true, text: "ISO 9001 certification valid and current?" },
              { star: true, text: "Own factory (not trading company) — can you visit or video tour?" },
              { star: true, text: "DDP shipping available (reduces your logistics risk)?" },
              { star: true, text: "FSC Chain of Custody certification (for US market credibility)?" },
              { text: "Sedex/SMETA audit report available?" },
              { text: "Daily production capacity verified (ask for production photos)?" },
              { text: "Material sample provided same day or next day?" },
              { text: "Printed sample within 3–5 days?" },
              { text: "SGS material testing reports available?" },
              { text: "Food-safe adhesives and coatings (for food/cosmetics packaging)?" },
              { text: "Defect rate below 2% (ask for historical data)?" },
              { text: "Sample retention system (can reference approved sample during production)?" },
              { text: "Itemized quote with all costs listed separately?" },
              { text: "MOQ matches your order size (100–500 pcs range)?" },
              { text: "Named contacts for sales, production, and after-sales?" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-green-600 font-bold flex-shrink-0">{item.star ? "★" : "✓"}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mb-6">★ = Critical pass/fail item. If a supplier fails any ★ item, consider strongly before proceeding.</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Bejan Reference Profile</h3>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              Bejan (Qingdao Bejan Giant New Packaging Science and Technology Co., Ltd.) scores as a reference supplier:
              ISO 9001 ✓ · FSC CoC ✓ · Sedex/SMETA ✓ · SGS ✓ · RoHS ✓ · 12,000㎡ own factory ✓ ·
              50,000+ pcs/day capacity ✓ · Material sample same day ✓ · Print sample 3 days ✓ ·
              DDP shipping ✓ · MOQ 100–500 pcs by product ✓ · Named contacts: Celia (sales), Sunny (production), Jack (after-sales) ✓
            </p>
          </div>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Key Insight:</strong> The simplest quality signal is whether a supplier proactively offers an itemized quote and a video factory tour. Suppliers who resist transparency in pricing or facility access are signaling what the working relationship will look like.
          </blockquote>
        </section>

        <hr className="border-gray-200" />

        {/* ──── CHAPTER 5 ──── */}
        <section id="chapter-5">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 5: Packaging Compliance &amp; Sustainability (US Market)
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">US Compliance Requirements for Paper Packaging</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Regulation</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Scope</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Impact on Packaging</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">FDA (21 CFR)</td><td className="px-4 py-2">Food-contact materials</td><td className="px-4 py-2">Adhesives, coatings for food/cosmetics packaging</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">RoHS</td><td className="px-4 py-2">Hazardous substances</td><td className="px-4 py-2">Heavy metals in inks, coatings</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">CONEG / TPCH</td><td className="px-4 py-2">Toxics in packaging</td><td className="px-4 py-2">Lead, cadmium, mercury, hexavalent chromium</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Prop 65 (CA)</td><td className="px-4 py-2">Chemical exposure warnings</td><td className="px-4 py-2">Required warning labels for specific chemicals</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">FSC Certification: Why It Matters</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li><strong>FSC 100%:</strong> All paper from FSC-certified forests — highest environmental claim</li>
            <li><strong>FSC Recycled:</strong> All content from recycled material — best for recycled-content claims</li>
            <li><strong>FSC Mix:</strong> Blend of certified, recycled, and controlled sources — most common, cost-effective</li>
            <li><strong>73% of US consumers</strong> are willing to pay more for sustainable packaging (McKinsey 2023)</li>
            <li>Major retailers (Target, Walmart, Sephora) increasingly require FSC from suppliers</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">EPR Laws by State (2025–2026)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">State</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">EPR Status</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Key Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">California</td><td className="px-4 py-2">Enacted (SB 54)</td><td className="px-4 py-2">100% recyclable/compostable by 2032</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Colorado</td><td className="px-4 py-2">Enacted</td><td className="px-4 py-2">Producer responsibility, phased timeline</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Maine</td><td className="px-4 py-2">Enacted</td><td className="px-4 py-2">Municipal reimbursement model</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Oregon</td><td className="px-4 py-2">Enacted</td><td className="px-4 py-2">Producer-funded recycling system</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">New York</td><td className="px-4 py-2">Pending</td><td className="px-4 py-2">Expected to pass in 2025–2026 session</td></tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Key Insight:</strong> EPR laws shift packaging end-of-life costs from municipalities to brands. Using FSC-certified, recyclable materials now is a proactive strategy — it&apos;s cheaper to comply early than to retrofit your packaging after regulations take effect.
          </blockquote>
        </section>

        <hr className="border-gray-200" />

        {/* ──── CHAPTER 6 ──── */}
        <section id="chapter-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 6: Cost Control &amp; Total Price Optimization
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Price Composition Breakdown</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Component</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">% of Total</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Optimization Tip</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Material</td><td className="px-4 py-2">40–50%</td><td className="px-4 py-2">Right-size to reduce waste; FSC Mix vs FSC 100%</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Printing</td><td className="px-4 py-2">15–25%</td><td className="px-4 py-2">CMYK vs Pantone; spot UV vs full coverage</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Surface Finish</td><td className="px-4 py-2">10–15%</td><td className="px-4 py-2">2–3 finishes max; avoid over-design</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Labor/Assembly</td><td className="px-4 py-2">10–15%</td><td className="px-4 py-2">Flat-pack/DIY reduces assembly cost</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Tooling/Die</td><td className="px-4 py-2">5–10%</td><td className="px-4 py-2">One-time; amortize across reorders</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Logistics</td><td className="px-4 py-2">10–30%</td><td className="px-4 py-2">DDP for transparency; flat-pack saves 60% freight</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">MOQ vs. Unit Price (Custom Mailer Box Example)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Quantity</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Unit Price</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Total Investment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">100 pcs</td><td className="px-4 py-2">$3.20</td><td className="px-4 py-2">$320</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">500 pcs</td><td className="px-4 py-2">$1.80</td><td className="px-4 py-2">$900</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">1,000 pcs</td><td className="px-4 py-2">$1.20</td><td className="px-4 py-2">$1,200</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">5,000 pcs</td><td className="px-4 py-2">$0.70</td><td className="px-4 py-2">$3,500</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">DDP vs. FOB: Real Cost Comparison</h3>
          <p className="text-gray-600 mb-4">For a 1,000-unit order of custom mailer boxes shipped to a US warehouse:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Cost Item</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">DDP</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">FOB</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Unit price</td><td className="px-4 py-2">$1.50</td><td className="px-4 py-2">$1.20</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Freight (included)</td><td className="px-4 py-2">Included</td><td className="px-4 py-2">$350 (separate)</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Duties (included)</td><td className="px-4 py-2">Included</td><td className="px-4 py-2">$60 (separate)</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Customs broker</td><td className="px-4 py-2">Included</td><td className="px-4 py-2">$120 (separate)</td></tr>
                <tr className="border-t border-gray-100 font-semibold"><td className="px-4 py-2">Total landed cost</td><td className="px-4 py-2">$1,500</td><td className="px-4 py-2">$1,730</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">10 Cost Optimization Strategies</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-1 mb-6 text-sm">
            <li>Right-size your packaging — reduce material and freight simultaneously</li>
            <li>Use standard die-cut shapes where possible — avoid custom tooling fees</li>
            <li>Limit finishes to 2–3 techniques — more is not always better</li>
            <li>Choose DIY/flat-pack for voluminous items — saves 20%+ on cost and 60% on freight</li>
            <li>Standardize box structure across SKUs — differentiate only with print</li>
            <li>Request DDP quotes — eliminates surprise logistics charges</li>
            <li>Plan reorders 8 weeks ahead — avoid rush surcharges (20–30%)</li>
            <li>Start at MOQ, scale up — the per-unit savings of large orders mean nothing if 40% sits in storage</li>
            <li>Use spot UV instead of full-coverage soft-touch — 15–20% savings on finish</li>
            <li>Consider collapsible magnetic boxes — premium feel, flat-ship savings</li>
          </ol>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Key Insight:</strong> A DIY modular wine box at Bejan reduced per-unit cost by 20%+ (down to $1.5–3.0/pc) while freight dropped 60% — and the brand saw sales double and repurchase rate increase 20%. Cost optimization and brand experience are not trade-offs; they&apos;re synergies.
          </blockquote>
        </section>

        <hr className="border-gray-200" />

        {/* ──── CHAPTER 7 ──── */}
        <section id="chapter-7">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 7: Real Case Studies
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Case Data at a Glance</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Case</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Industry</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Solution</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">1</td><td className="px-4 py-2">Beauty (makeup brushes)</td><td className="px-4 py-2">Low MOQ (200 pcs) + 10-day delivery</td><td className="px-4 py-2">First batch successfully launched</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">2</td><td className="px-4 py-2">Fragrance (gift box)</td><td className="px-4 py-2">6-bottle custom insert + structural redesign</td><td className="px-4 py-2">Sales ↑ 600%, damage &lt; 1%</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">3</td><td className="px-4 py-2">Wine (red wine)</td><td className="px-4 py-2">DIY modular flat-pack solution</td><td className="px-4 py-2">Sales 2x, repurchase ↑ 20%, cost ↓ 20%</td></tr>
              </tbody>
            </table>
          </div>

          {/* Case 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Case 1: Makeup Brush Brand Launch</h4>
            <p className="text-gray-600 text-sm mb-3"><strong>Challenge:</strong> New brand needed custom packaging but faced 1,000+ pcs MOQ barriers and a tight launch deadline.</p>
            <p className="text-gray-600 text-sm mb-3"><strong>Solution:</strong> Bejan accepted just 200 pcs for the first batch. Material sample confirmed same day, print sample in 3 days. Full delivery within 10 days of sample approval — same ISO 9001 QC applied as large orders.</p>
            <p className="text-gray-600 text-sm"><strong>Result:</strong> Brand launched on schedule. Client designated Bejan as long-term supplier, scaling subsequent orders to 1,000+ pcs.</p>
          </div>

          {/* Case 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Case 2: Fragrance 6-Bottle Gift Box</h4>
            <p className="text-gray-600 text-sm mb-3"><strong>Challenge:</strong> A content creator wanted to bundle 6 fragrances in one gift box. Previous shipping damage rate exceeded 5%, and single-unit sales limited revenue.</p>
            <p className="text-gray-600 text-sm mb-3"><strong>Solution:</strong> Custom EVA insert with individual bottle slots, verified by drop testing. Magnetic rigid box with foil stamping. DDP delivery handled all cross-border logistics.</p>
            <p className="text-gray-600 text-sm"><strong>Result:</strong> Sales increased <strong>600%</strong> (single → bundle). Shipping damage rate dropped to <strong>&lt; 1%</strong>. Client replicated the 6-bottle format across other fragrance lines.</p>
          </div>

          {/* Case 3 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Case 3: Wine DIY Modular Packaging</h4>
            <p className="text-gray-600 text-sm mb-3"><strong>Challenge:</strong> Traditional wine gift boxes were voluminous (high freight cost) and offered fixed product combinations that limited customer choice.</p>
            <p className="text-gray-600 text-sm mb-3"><strong>Solution:</strong> Bejan designed a DIY modular flat-pack: boxes ship flat (60% freight savings), customers self-assemble with snap-to-fit structure, modular slots allow mixing and matching any wine combination. Unit price: $1.5–3.0/pc at 100–1,000 pcs.</p>
            <p className="text-gray-600 text-sm"><strong>Result:</strong> Sales <strong>doubled</strong>. Repurchase rate increased <strong>20%+</strong>. Packaging cost reduced <strong>20%+</strong>. Freight savings of approximately 60%.</p>
          </div>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Key Insight:</strong> &quot;Packaging is experience&quot; — when packaging becomes part of customer interaction, it transforms from a cost center into a marketing asset. The DIY modular approach solved both &quot;high freight&quot; and &quot;inflexible bundling&quot; simultaneously, delivering triple wins in sales, retention, and cost.
          </blockquote>
        </section>

        <hr className="border-gray-200" />

        {/* ──── CHAPTER 8 ──── */}
        <section id="chapter-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 8: FAQ — 12 Most Asked Questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors list-none flex items-center justify-between">
                  <span>{i + 1}. {faq.question}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* ──── CHAPTER 9 ──── */}
        <section id="chapter-9">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Chapter 9: Decision Toolkit
          </h2>
          <p className="text-gray-600 mb-8">Five ready-to-use tools for your packaging sourcing process. Copy, customize, and use directly.</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Packaging RFQ Template</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr><th className="px-4 py-2 text-left font-semibold text-gray-700">Field</th><th className="px-4 py-2 text-left font-semibold text-gray-700">Your Input</th></tr>
              </thead>
              <tbody>
                {["Company name", "Contact person + email", "Product type (rigid box / folding carton / mailer / bag)", "Product contents (what goes inside)", "Inner dimensions (L × W × H, mm)", "Quantity (first order / annual estimate)", "Surface finish (matte / gloss / soft-touch / foil / emboss)", "Insert needed? (EVA / pulp / cardboard / none)", "Interior printing? (yes / no)", "FSC-certified materials required? (yes / no)", "Shipping terms (DDP / FOB / CIF)", "Destination (country + zip code)", "Target delivery date", "Budget range (per unit)", "Artwork ready? (yes / in progress / need design help)", "Special requirements"].map((field) => (
                  <tr key={field} className="border-t border-gray-100"><td className="px-4 py-2 font-medium">{field}</td><td className="px-4 py-2 text-gray-400">—</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Supplier Evaluation Scorecard</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr><th className="px-4 py-2 text-left font-semibold text-gray-700">Dimension (Weight)</th><th className="px-4 py-2 text-left font-semibold text-gray-700">Criteria</th><th className="px-4 py-2 text-left font-semibold text-gray-700">Score (1–5)</th></tr>
              </thead>
              <tbody>
                {[
                  { dim: "Quality (30%)", items: ["ISO 9001?", "FSC/Sedex/SGS?", "Defect rate < 2%?"] },
                  { dim: "Capacity (25%)", items: ["Own factory?", "Daily output 50K+?", "Seasonal buffer?"] },
                  { dim: "Sampling (20%)", items: ["Material sample ≤ 1 day?", "Print sample ≤ 3 days?", "Free digital proof?"] },
                  { dim: "Compliance (15%)", items: ["Food-safe available?", "EPR-ready materials?", "Cert docs on request?"] },
                  { dim: "Transparency (10%)", items: ["Itemized quote?", "DDP option?", "No hidden fees?"] },
                ].flatMap((d) =>
                  d.items.map((item, i) => (
                    <tr key={`${d.dim}-${i}`} className="border-t border-gray-100">
                      {i === 0 && <td className="px-4 py-2 font-medium" rowSpan={d.items.length}>{d.dim}</td>}
                      <td className="px-4 py-2">{item}</td>
                      <td className="px-4 py-2 text-gray-400">_ / 5</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mb-6">Scoring: Below 60 = eliminate · 60–79 = conditional · 80+ = strategic partner candidate</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">9.3 Total Cost Calculator</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr><th className="px-4 py-2 text-left font-semibold text-gray-700">Cost Item</th><th className="px-4 py-2 text-left font-semibold text-gray-700">Formula</th><th className="px-4 py-2 text-left font-semibold text-gray-700">Your Estimate</th></tr>
              </thead>
              <tbody>
                {[
                  { item: "Unit price × Quantity", formula: "$/pc × qty" },
                  { item: "Tooling/die (one-time)", formula: "$flat" },
                  { item: "Sampling", formula: "$50–200" },
                  { item: "Freight", formula: "15–30% of product" },
                  { item: "Duties & tariffs", formula: "0–25% (HTS dependent)" },
                  { item: "Customs broker (if not DDP)", formula: "$50–150" },
                  { item: "Warehouse storage", formula: "$/cu.ft./month" },
                  { item: "QC inspection (optional)", formula: "$200–500" },
                  { item: "Buffer", formula: "10% of above" },
                ].map((row) => (
                  <tr key={row.item} className="border-t border-gray-100">
                    <td className="px-4 py-2">{row.item}</td>
                    <td className="px-4 py-2 text-gray-500">{row.formula}</td>
                    <td className="px-4 py-2 text-gray-400">$____</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-300 font-semibold">
                  <td className="px-4 py-2">TRUE per-unit cost</td>
                  <td className="px-4 py-2">Total ÷ Quantity</td>
                  <td className="px-4 py-2 text-gray-400">$____</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">9.4 Compliance Quick-Reference</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Requirement</th>
                  <th className="px-4 py-2 text-center font-semibold text-gray-700">US</th>
                  <th className="px-4 py-2 text-center font-semibold text-gray-700">EU</th>
                  <th className="px-4 py-2 text-center font-semibold text-gray-700">UK</th>
                  <th className="px-4 py-2 text-center font-semibold text-gray-700">Middle East</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">Food-contact safe</td><td className="px-4 py-2 text-center">FDA 21 CFR</td><td className="px-4 py-2 text-center">EC 1935/2004</td><td className="px-4 py-2 text-center">UK SI 2018/690</td><td className="px-4 py-2 text-center">GSO</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">Heavy metals</td><td className="px-4 py-2 text-center">CONEG/TPCH</td><td className="px-4 py-2 text-center">RoHS + REACH</td><td className="px-4 py-2 text-center">UK RoHS</td><td className="px-4 py-2 text-center">—</td></tr>
                <tr className="border-t border-gray-100"><td className="px-4 py-2">FSC accepted</td><td className="px-4 py-2 text-center">✓</td><td className="px-4 py-2 text-center">✓</td><td className="px-4 py-2 text-center">✓</td><td className="px-4 py-2 text-center">✓</td></tr>
                <tr className="border-t border-gray-100 bg-gray-50"><td className="px-4 py-2">EPR in effect</td><td className="px-4 py-2 text-center">5 states</td><td className="px-4 py-2 text-center">EU-wide</td><td className="px-4 py-2 text-center">UK-wide</td><td className="px-4 py-2 text-center">—</td></tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Key Insight:</strong> The best sourcing process is a structured one. These tools eliminate guesswork, reduce back-and-forth with suppliers, and make it easy to compare quotes on an apples-to-apples basis. Download, customize, and use them on your next packaging project.
          </blockquote>
        </section>

      </div>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Custom Packaging with Confidence?</h2>
          <p className="text-green-100 mb-8 text-lg leading-relaxed">
            Get a free DDP quote, physical sample, or just talk through your packaging needs — our team replies within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/8615064260757"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-green-300 text-sm mt-6">
            FSC-certified · Product-specific MOQ (100 pcs+) · Free digital proofs · DDP shipping · Reply in 24h
          </p>
        </div>
      </section>
    </>
  );
}
