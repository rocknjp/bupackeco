import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Compostable Packaging Alternatives Guide | BUpack",
  description:
    "Complete guide to compostable packaging: materials, home vs industrial composting, costs, and certifications. Eco-friendly options from BUpack.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/compostable-packaging-alternatives",
  },
  openGraph: {
    title: "Compostable Packaging Alternatives Guide | BUpack",
    description:
      "Complete guide to compostable packaging: materials, home vs industrial composting, costs, and certifications. Eco-friendly options from BUpack.",
    url: "https://www.bupackeco.com/blog/compostable-packaging-alternatives",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compostable Packaging Alternatives Guide | BUpack",
    description:
      "Complete guide to compostable packaging: materials, home vs industrial composting, costs, and certifications. Eco-friendly options from BUpack.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "What is the difference between compostable and biodegradable packaging?",
    answer:
      "Compostable packaging breaks down into non-toxic components under specific composting conditions within a defined timeframe (typically 90–180 days). Biodegradable packaging will eventually break down but has no time requirement and may leave behind microplastics. Compostable is the stricter, more reliable certification — always look for BPI or OK Compost labels.",
  },
  {
    question: "Can I compost packaging at home?",
    answer:
      "It depends on the material and certification. Home compostable packaging (certified OK Compost Home or TUV Austria Home Compost) breaks down in a backyard compost bin at ambient temperatures. Industrial compostable packaging (BPI Certified, OK Compost Industrial) requires commercial composting facilities that maintain temperatures of 55–60°C. Always check the certification type before assuming home compostability.",
  },
  {
    question: "Is compostable packaging more expensive than regular packaging?",
    answer:
      "Compostable packaging typically costs 15–40% more than conventional plastic packaging but is comparable to or only slightly more expensive than FSC-certified paper packaging. As demand grows and production scales, the price gap is narrowing. Many brands find the premium worthwhile for the brand perception and customer loyalty benefits.",
  },
  {
    question: "What certifications should I look for in compostable packaging?",
    answer:
      "The three most recognized certifications are: BPI Certified Compostable (North America), OK Compost Industrial / OK Compost Home (TUV Austria, international), and EN 13432 (European standard). These certifications verify that the material breaks down within the specified timeframe and leaves no harmful residue.",
  },
  {
    question: "Does BUpack offer compostable packaging options?",
    answer:
      "Yes. BUpack offers a range of compostable packaging including PLA-lined paper boxes, kraft paper mailers, cellulose bags, and mushroom packaging inserts. All our compostable options carry BPI or OK Compost certification. Contact us for samples and pricing.",
  },
];

export default function CompostablePackagingAlternatives() {
  return (
    <>
      <ArticleSchema
        headline="Compostable Packaging Alternatives: Complete Guide for Brands"
        description="Complete guide to compostable packaging: materials, home vs industrial composting, costs, and certifications. Eco-friendly options from BUpack."
        datePublished="2026-06-13T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/compostable-packaging-alternatives"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Compostable Packaging Alternatives", url: "/blog/compostable-packaging-alternatives" },
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
              Sustainability
            </span>
            <span className="text-green-300 text-sm">
              June 13, 2026 · 10 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Compostable Packaging Alternatives: Complete Guide for Brands
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            Complete guide to compostable packaging: materials, home vs industrial composting, costs, and certifications. Eco-friendly options from BUpack.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Why Compostable Packaging Matters Now
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The global compostable packaging market is projected to reach <strong>$18.5 billion by 2030</strong>, growing at 17% CAGR. This isn't just a trend — it's a market shift driven by regulation, consumer demand, and brand differentiation. Over <strong>67% of consumers</strong> say they're more likely to purchase from brands using compostable packaging, and regulations in the EU, Canada, and several US states are phasing out single-use plastics entirely.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For DTC brands, compostable packaging is both a sustainability commitment and a competitive advantage. But navigating the landscape of materials, certifications, and composting infrastructure can be confusing. This guide cuts through the noise with clear comparisons, real costs, and practical recommendations. For the broader sustainability business case, see our <a href="/blog/eco-packaging-roi-small-dtc-brands" className="text-green-700 underline hover:text-green-600">eco packaging ROI guide</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Compostable vs Biodegradable vs Recyclable: Know the Difference
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These terms are often used interchangeably, but they mean very different things:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Term</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Definition</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Timeframe</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Residue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><strong>Compostable</strong></td><td className="py-2 px-4 text-gray-700">Breaks down into non-toxic components under specific composting conditions</td><td className="py-2 px-4 text-gray-700">90–180 days</td><td className="py-2 px-4 text-gray-700">None (nutrient-rich compost)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><strong>Biodegradable</strong></td><td className="py-2 px-4 text-gray-700">Will eventually break down through microbial action</td><td className="py-2 px-4 text-gray-700">No defined timeframe</td><td className="py-2 px-4 text-gray-700">May leave microplastics</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><strong>Recyclable</strong></td><td className="py-2 px-4 text-gray-700">Can be processed into new materials through recycling systems</td><td className="py-2 px-4 text-gray-700">N/A (reprocessed, not degraded)</td><td className="py-2 px-4 text-gray-700">Depends on recycling stream</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Key takeaway:</strong> "Compostable" is the most rigorous claim. It has defined timeframes and certification standards. "Biodegradable" is weaker — technically everything is biodegradable given enough time. For your brand, compostable certification provides the strongest credibility with consumers and regulators.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              7 Compostable Packaging Materials Compared
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              1. PLA (Polylactic Acid) Film & Liners
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Made from fermented plant starch (usually corn or sugarcane), PLA is the most widely used compostable plastic alternative. It's clear, flexible, and works as a liner for paper cups and boxes, a window film on packaging, or standalone pouches. PLA requires <strong>industrial composting</strong> (55–60°C) to break down within 90 days — it won't degrade properly in home compost or landfill.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Best for:</strong> Window films, food container liners, clear pouches</li>
              <li><strong>Cost:</strong> 20–35% more than conventional plastic film</li>
              <li><strong>Certification:</strong> BPI Certified, OK Compost Industrial</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              2. Kraft Paper (Uncoated)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uncoated kraft paper is naturally compostable and one of the most accessible sustainable packaging materials. It's made from wood pulp using the kraft process, which produces strong, tear-resistant paper. When uncoated and printed with <a href="/blog/switch-plastic-to-paper-packaging-dtc-guide" className="text-green-700 underline hover:text-green-600">soy-based or water-based inks</a>, kraft paper composts readily in both home and industrial settings.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Best for:</strong> Mailer boxes, wrapping paper, tags, <a href="/products/paper-bags" className="text-green-700 underline">paper bags</a></li>
              <li><strong>Cost:</strong> Comparable to standard paper packaging</li>
              <li><strong>Certification:</strong> FSC-certified sources available; naturally compostable</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              3. Cellulose Bags & Wraps
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Made from wood pulp or cotton linters, cellulose film looks and performs like plastic wrap but is fully compostable. It provides excellent clarity for product visibility and is certified home compostable. Cellulose is ideal for brands that need the "plastic look" without the environmental impact.
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Best for:</strong> Product sleeves, candy wrappers, gift basket wrap</li>
              <li><strong>Cost:</strong> 25–40% more than conventional plastic wrap</li>
              <li><strong>Certification:</strong> OK Compost Home, BPI Certified</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              4–7: More Compostable Materials
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Material</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Source</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Home Compost?</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Cost vs Plastic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><strong>Mushroom packaging (mycelium)</strong></td><td className="py-2 px-4 text-gray-700">Fungal mycelium + hemp</td><td className="py-2 px-4 text-gray-700 text-green-700">Yes</td><td className="py-2 px-4 text-gray-700">+50–80%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><strong>Bagasse (sugarcane pulp)</strong></td><td className="py-2 px-4 text-gray-700">Sugarcane fiber</td><td className="py-2 px-4 text-gray-700 text-green-700">Yes</td><td className="py-2 px-4 text-gray-700">+15–30%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><strong>Seaweed packaging</strong></td><td className="py-2 px-4 text-gray-700">Brown seaweed extract</td><td className="py-2 px-4 text-gray-700 text-green-700">Yes</td><td className="py-2 px-4 text-gray-700">+60–100%</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Home Composting vs Industrial Composting
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This distinction is critical for brands making compostability claims. The certification your packaging carries determines where it can actually break down — and making claims that don't match reality risks greenwashing accusations.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Factor</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Home Composting</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Industrial Composting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Temperature</td><td className="py-2 px-4 text-gray-700">Ambient to 45°C</td><td className="py-2 px-4 text-gray-700">55–60°C maintained</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Degradation time</td><td className="py-2 px-4 text-gray-700">Up to 365 days</td><td className="py-2 px-4 text-gray-700">90 days (standard)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Availability to consumers</td><td className="py-2 px-4 text-gray-700">Backyard compost bins</td><td className="py-2 px-4 text-gray-700">Commercial facilities only (limited access)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Certification</td><td className="py-2 px-4 text-gray-700">OK Compost Home, TUV Austria Home</td><td className="py-2 px-4 text-gray-700">BPI Certified, OK Compost Industrial, EN 13432</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Compatible materials</td><td className="py-2 px-4 text-gray-700">Kraft paper, cellulose, bagasse, mushroom</td><td className="py-2 px-4 text-gray-700">All above + PLA, PBAT blends</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important reality check:</strong> Only about <strong>27% of US households</strong> have access to industrial composting facilities. If your packaging is only industrially compostable, most customers will put it in the trash — where it acts much like conventional plastic. For maximum environmental impact and customer-friendly claims, prefer <strong>home compostable materials</strong> whenever possible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Cost Comparison by Packaging Type
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Packaging Type</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Conventional</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Compostable Alternative</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Price Difference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Mailer box (8×6×3")</td><td className="py-2 px-4 text-gray-700">$1.20–$2.00</td><td className="py-2 px-4 text-gray-700">$1.40–$2.40 (kraft, uncoated)</td><td className="py-2 px-4 text-gray-700">+15–20%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Poly mailer bag</td><td className="py-2 px-4 text-gray-700">$0.10–$0.25</td><td className="py-2 px-4 text-gray-700">$0.18–$0.45 (PLA or cellulose)</td><td className="py-2 px-4 text-gray-700">+40–80%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Bubble wrap insert</td><td className="py-2 px-4 text-gray-700">$0.15–$0.30</td><td className="py-2 px-4 text-gray-700">$0.30–$0.60 (mushroom packaging)</td><td className="py-2 px-4 text-gray-700">+80–100%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Food container</td><td className="py-2 px-4 text-gray-700">$0.40–$0.80</td><td className="py-2 px-4 text-gray-700">$0.50–$1.00 (bagasse)</td><td className="py-2 px-4 text-gray-700">+15–30%</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Tissue paper</td><td className="py-2 px-4 text-gray-700">$0.08–$0.15</td><td className="py-2 px-4 text-gray-700">$0.08–$0.15 (recycled kraft)</td><td className="py-2 px-4 text-gray-700 font-semibold text-green-700">No difference</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Sticker/label</td><td className="py-2 px-4 text-gray-700">$0.03–$0.08</td><td className="py-2 px-4 text-gray-700">$0.05–$0.12 (compostable)</td><td className="py-2 px-4 text-gray-700">+40–60%</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The cost premium for compostable packaging varies widely by type. Paper-based items (boxes, tissue) have minimal premium, while plastic replacements (mailers, bubble wrap) carry higher premiums. The key insight: <strong>the biggest environmental gains often come at the smallest cost increases</strong>. Switching from coated to uncoated kraft paper boxes costs 15–20% more but makes your primary packaging fully compostable. See our <a href="/blog/custom-packaging-cost-guide" className="text-green-700 underline hover:text-green-600">cost guide</a> for detailed pricing by volume.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Certification Guide: What to Look For
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Certification is your proof of compostability. Without it, claims are meaningless — and potentially illegal in regulated markets. Here are the certifications that matter:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-3">
              <li><strong>BPI Certified Compostable</strong> — The North American gold standard. Products must meet ASTM D6400 or D6868 standards, breaking down within 90 days in industrial composting. Verified by the Biodegradable Products Institute.</li>
              <li><strong>OK Compost Industrial (TUV Austria)</strong> — European/international certification for industrial compostability. Aligns with EN 13432 standard. Required for EU market access.</li>
              <li><strong>OK Compost Home (TUV Austria)</strong> — The most stringent certification. Verifies breakdown in home composting conditions at ambient temperatures. Preferred for consumer-facing claims.</li>
              <li><strong>EN 13432</strong> — The European standard for compostable packaging. Requires 90% disintegration within 12 weeks and no ecotoxicity. The underlying standard that other certifications reference.</li>
              <li><strong>FSC Certification</strong> — While not a compostability certification, FSC ensures the paper in your packaging comes from responsibly managed forests. All <a href="/fsc-certified-packaging" className="text-green-700 underline hover:text-green-600">BUpack FSC-certified products</a> carry this label.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              How to Transition to Compostable Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Switching to compostable packaging doesn't have to happen overnight. Here's a phased approach that manages cost and risk:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Phase 1: Quick Wins (1–2 months)
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>Switch poly tape to kraft paper tape — same functionality, compostable, minimal cost change</li>
              <li>Replace plastic tissue with recycled kraft tissue — identical cost</li>
              <li>Swap plastic stickers for compostable labels — small premium, big perception gain</li>
              <li>Switch from coated to uncoated kraft paper for <a href="/industries/chocolate-confectionery" className="text-green-700 underline">food packaging</a> and <a href="/industries/candles-fragrance" className="text-green-700 underline">candle boxes</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Phase 2: Primary Packaging (3–6 months)
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>Replace poly mailers with PLA-lined kraft mailers or compostable mailer boxes</li>
              <li>Switch to soy-based or water-based inks on all printed packaging</li>
              <li>Add compostable insert cards instead of coated cardstock</li>
              <li>Test compostable packaging with a product line before rolling out across all SKUs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Phase 3: Full Transition (6–12 months)
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>Replace all plastic wraps and films with cellulose or PLA alternatives</li>
              <li>Switch protective inserts from foam/bubble wrap to mushroom packaging or corrugated cardboard inserts</li>
              <li>Achieve full compostability across your packaging line and communicate it prominently</li>
              <li>Pursue BPI certification for your complete packaging system</li>
            </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
              BUpack can support your transition with <a href="/services/design-support" className="text-green-700 underline hover:text-green-600">design consultation</a> and material recommendations tailored to your product category and budget. Browse our full range of <a href="/products/paper-boxes" className="text-green-700 underline font-semibold">custom paper boxes</a>, <a href="/products/custom-mailer-boxes" className="text-green-700 underline font-semibold">custom mailer boxes</a>, and <a href="/products/custom-paper-bags" className="text-green-700 underline font-semibold">eco-friendly paper bags</a> — all available with FSC-certified compostable materials. Our <a href="/blog/biodegradable-ecommerce-packaging-guide" className="text-green-700 underline hover:text-green-600">biodegradable packaging guide</a> covers additional material science details.
            </p>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-green-900">
                <li>Compostable is the strongest sustainability claim — it has defined timeframes and certifications that biodegradable lacks</li>
                <li>Home compostable materials (kraft paper, cellulose, bagasse) are preferable — most consumers lack access to industrial composting</li>
                <li>PLA requires industrial composting — don't assume it breaks down in backyard compost</li>
                <li>Paper-based compostable packaging has minimal cost premium (15–20%); plastic replacements cost 40–80% more</li>
                <li>Look for BPI Certified, OK Compost Home, or OK Compost Industrial certifications to validate claims</li>
                <li>Transition in phases: start with quick wins (tape, tissue, labels), then tackle primary packaging, then full system</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to switch to compostable packaging?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                BUpack offers certified compostable packaging with FSC-certified paper, soy-based inks, and water-based coatings. Free samples and design support available.
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
