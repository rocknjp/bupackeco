import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Biodegradable Ecommerce Packaging Guide for DTC Brands | BUpack",
  description:
    "Complete guide to biodegradable packaging for ecommerce. Materials comparison, cost analysis, and certification guide. FSC-certified options from BUpack.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/biodegradable-ecommerce-packaging-guide",
  },
  openGraph: {
    title: "Biodegradable Ecommerce Packaging Guide for DTC Brands | BUpack",
    description:
      "Complete guide to biodegradable packaging for ecommerce. Materials comparison, cost analysis, and certification guide. FSC-certified options from BUpack.",
    url: "https://www.bupackeco.com/blog/biodegradable-ecommerce-packaging-guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biodegradable Ecommerce Packaging Guide for DTC Brands | BUpack",
    description:
      "Complete guide to biodegradable packaging for ecommerce. Materials comparison, cost analysis, and certification guide. FSC-certified options from BUpack.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "What is the best biodegradable packaging material for ecommerce?",
    answer:
      "For most DTC brands, FSC-certified kraft paper mailer boxes offer the best balance of biodegradability, cost, and branding potential. They're 100% recyclable, naturally biodegradable, and cost $1.20–$2.50 per unit at 500-unit orders. For food-contact packaging, compostable materials certified to EN 13432 are recommended.",
  },
  {
    question: "Is biodegradable packaging more expensive than regular packaging?",
    answer:
      "FSC-certified kraft paper boxes are typically only 8–12% more than standard paper boxes. However, the ROI often outweighs the premium: brands using sustainable packaging report 18–24% higher repeat purchase rates and 5–8% higher conversion rates. When you factor in lower return rates and UGC marketing value, sustainable packaging is often net-positive on your bottom line.",
  },
  {
    question: "What's the difference between biodegradable and compostable packaging?",
    answer:
      "Biodegradable means the material will eventually break down through natural processes, but there's no defined timeline. Compostable means the material will break down into non-toxic components within a specific timeframe (typically 90 days in industrial composting). If you're making environmental claims, compostable certification (EN 13432 or ASTM D6400) is more defensible than biodegradable claims.",
  },
  {
    question: "Which certifications should my biodegradable packaging have?",
    answer:
      "The essential certifications for eco-packaging are: FSC (responsible forestry), EN 13432 or ASTM D6400 (compostability), and ISO 14001 (environmental management). For consumer-facing claims, FSC is the most recognized. For food-contact packaging, EN 13432 compostability certification is critical.",
  },
  {
    question: "Can I get biodegradable packaging with low MOQ?",
    answer:
      "Yes. BUpack offers FSC-certified biodegradable packaging starting at 100 units per design using digital printing. This means you can test sustainable packaging without committing to large volumes. Kraft paper mailer boxes with soy-based ink and water-based coatings are the most cost-effective sustainable option for small runs.",
  },
];

export default function BiodegradableEcommercePackagingGuide() {
  return (
    <>
      <ArticleSchema
        headline="Biodegradable Ecommerce Packaging Guide for DTC Brands"
        description="Complete guide to biodegradable packaging for ecommerce. Materials comparison, cost analysis, and certification guide. FSC-certified options from BUpack."
        datePublished="2026-06-13T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/biodegradable-ecommerce-packaging-guide"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Biodegradable Ecommerce Packaging Guide", url: "/blog/biodegradable-ecommerce-packaging-guide" },
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
              June 13, 2026 · 9 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Biodegradable Ecommerce Packaging Guide for DTC Brands
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            Complete guide to biodegradable packaging for ecommerce. Materials comparison, cost analysis, and certification guide. FSC-certified options from BUpack.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Why Biodegradable Packaging Matters for Ecommerce
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The ecommerce packaging problem is staggering. In the US alone, <strong>165 billion packages</strong> are shipped each year, and the vast majority end up in landfills. For DTC brands, packaging isn't just a sustainability issue — it's a customer acquisition and retention tool.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A 2025 McKinsey study found that products with sustainability claims grew <strong>2.7x faster</strong> than those without. Among Gen Z consumers — who will represent 40% of US purchasing power by 2027 — <strong>73% actively check</strong> for eco-packaging before buying. Biodegradable packaging isn't just good for the planet; it's good for your business.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              But "biodegradable" is a term that gets thrown around loosely. This guide cuts through the greenwashing and gives you a clear framework for choosing the right biodegradable packaging for your ecommerce brand.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Biodegradable vs. Compostable vs. Recyclable: What's the Difference?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These three terms are often used interchangeably, but they mean very different things — and using them incorrectly can expose your brand to greenwashing accusations.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Term</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Definition</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Timeline</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Consumer Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">Biodegradable</td><td className="py-2 px-4 text-gray-700">Will break down through natural biological processes</td><td className="py-2 px-4 text-gray-700">No defined timeframe (months to decades)</td><td className="py-2 px-4 text-gray-700">No specific disposal required</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">Compostable</td><td className="py-2 px-4 text-gray-700">Will break down into non-toxic components in compost conditions</td><td className="py-2 px-4 text-gray-700">90 days (industrial) or 180 days (home)</td><td className="py-2 px-4 text-gray-700">Must be composted, not just landfilled</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">Recyclable</td><td className="py-2 px-4 text-gray-700">Can be processed into new materials through recycling systems</td><td className="py-2 px-4 text-gray-700">Immediate (if recycled)</td><td className="py-2 px-4 text-gray-700">Must be placed in recycling bin</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Key insight:</strong> If you're making environmental claims on your packaging, "compostable" is the most defensible because it has a defined certification standard. "Biodegradable" is vaguer and harder to verify. "Recyclable" is the most practical for most ecommerce brands because recycling infrastructure is more accessible than industrial composting in most US cities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Materials Comparison: Biodegradable Packaging Options
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Material</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Biodegradable?</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Compostable?</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Recyclable?</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Kraft paper</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Eco brands, food, DTC shipping</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Coated white paper (FSC)</td><td className="py-2 px-4 text-gray-700">Yes (slower)</td><td className="py-2 px-4 text-gray-700">Industrial only</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Premium brands, cosmetics</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Corrugated cardboard</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Shipping boxes, subscription</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">PLA (polylactic acid)</td><td className="py-2 px-4 text-gray-700">Industrial only</td><td className="py-2 px-4 text-gray-700">Industrial only</td><td className="py-2 px-4 text-gray-700">No</td><td className="py-2 px-4 text-gray-700">Clear windows, food containers</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Mushroom packaging</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Yes (home)</td><td className="py-2 px-4 text-gray-700">No</td><td className="py-2 px-4 text-gray-700">Protective inserts, cushions</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Seaweed-based film</td><td className="py-2 px-4 text-gray-700">Yes</td><td className="py-2 px-4 text-gray-700">Yes (home)</td><td className="py-2 px-4 text-gray-700">No</td><td className="py-2 px-4 text-gray-700">Product wrapping, sachets</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              For most DTC brands, <strong>FSC-certified kraft paper</strong> offers the best combination of biodegradability, cost-effectiveness, and brand versatility. It's naturally unbleached, accepts printing well, and can be recycled or composted by the end consumer. Our <a href="/blog/kraft-paper-vs-coated-paper" className="text-green-700 underline hover:text-green-600">kraft vs. coated paper guide</a> goes deeper into the aesthetic and sustainability trade-offs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Cost Analysis: Biodegradable vs. Conventional Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many brands assume biodegradable packaging costs significantly more. The reality is more encouraging:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Packaging Option</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Unit Cost (500 units)</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Premium vs. Conventional</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Biodegradable?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Plain poly mailer</td><td className="py-2 px-4 text-gray-700">$0.15–$0.30</td><td className="py-2 px-4 text-gray-700">Baseline</td><td className="py-2 px-4 text-gray-700">No</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Recycled poly mailer</td><td className="py-2 px-4 text-gray-700">$0.30–$0.50</td><td className="py-2 px-4 text-gray-700">+100%</td><td className="py-2 px-4 text-gray-700">Partially</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Standard kraft mailer box</td><td className="py-2 px-4 text-gray-700">$1.20–$2.00</td><td className="py-2 px-4 text-gray-700">N/A (different product)</td><td className="py-2 px-4 text-gray-700">Yes</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">FSC-certified kraft mailer box</td><td className="py-2 px-4 text-gray-700 font-semibold">$1.30–$2.20</td><td className="py-2 px-4 text-gray-700 font-semibold">+8–12% vs standard kraft</td><td className="py-2 px-4 text-gray-700 font-semibold">Yes</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Compostable PLA mailer</td><td className="py-2 px-4 text-gray-700">$0.60–$1.00</td><td className="py-2 px-4 text-gray-700">+200–300% vs poly</td><td className="py-2 px-4 text-gray-700">Industrial compost only</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              The key insight: upgrading from a standard kraft box to an FSC-certified kraft box adds just 8–12% per unit — roughly $0.10–$0.20. That's a small premium for a certification your customers recognize and trust. For the full ROI analysis including return rate reduction and customer retention gains, see our <a href="/blog/eco-packaging-roi-small-dtc-brands" className="text-green-700 underline hover:text-green-600">eco packaging ROI guide</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Certification Guide: What to Look For
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Certifications protect your brand from greenwashing accusations and give consumers confidence. Here are the certifications that actually matter for biodegradable ecommerce packaging:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Certification</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">What It Proves</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">When You Need It</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">FSC (Forest Stewardship Council)</td><td className="py-2 px-4 text-gray-700">Paper sourced from responsibly managed forests</td><td className="py-2 px-4 text-gray-700">Any paper-based packaging — most recognized by consumers</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">EN 13432</td><td className="py-2 px-4 text-gray-700">Compostable in industrial facilities within 90 days</td><td className="py-2 px-4 text-gray-700">Making "compostable" claims, food-contact packaging</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">ASTM D6400</td><td className="py-2 px-4 text-gray-700">US equivalent of EN 13432 for compostability</td><td className="py-2 px-4 text-gray-700">US market, making "compostable" claims</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">ISO 14001</td><td className="py-2 px-4 text-gray-700">Environmental management system in place</td><td className="py-2 px-4 text-gray-700">B2B credibility, enterprise clients</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700 font-semibold">OK Compost Home</td><td className="py-2 px-4 text-gray-700">Compostable in home composting conditions</td><td className="py-2 px-4 text-gray-700">Making "home compostable" claims — highest bar</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              BUpack is <strong>FSC-certified</strong> and all our packaging uses soy-based ink and water-based coatings. We provide full chain-of-custody documentation with every order. Visit our <a href="/eco" className="text-green-700 underline hover:text-green-600">eco certifications page</a> for details.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              5 Steps to Transition to Biodegradable Packaging
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Step 1: Audit Your Current Packaging
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before making changes, catalog every piece of packaging material in your fulfillment process. Note which items are biodegradable and which aren't. The biggest offenders are usually: poly mailers, bubble wrap, plastic tape, and plastic-coated inserts. Focus on replacing these first.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Step 2: Choose Your Material Strategy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The "One Material" approach is the simplest: design your entire packaging system from a single recyclable and biodegradable material. For most brands, this means going all-kraft — kraft paper mailer box, kraft tissue paper, kraft insert cards, paper tape. This eliminates confusion for customers about how to dispose of each component.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Step 3: Right-Size Your Packaging
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Oversized boxes waste material and increase dimensional weight shipping charges. Custom-sizing your box to fit your product precisely — with just 3–5mm of padding — reduces material usage by 15–25% and lowers your per-order carbon footprint. BUpack provides custom dielines at no extra charge.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Step 4: Order Samples and Test
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Never commit to a full production run without testing. Order physical samples to evaluate material feel, print quality, and structural integrity. Ship a test order to yourself and assess the customer experience. BUpack offers free digital proofs and physical samples from $50–$80 (credited toward production).
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Step 5: Communicate Your Switch
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Don't switch silently. Your customers want to know about your sustainability efforts:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>Add a "Shipped in 100% recyclable packaging" badge to your product page</li>
              <li>Include an unboxing insert explaining why you switched</li>
              <li>Update your FAQ with sustainability information</li>
              <li>Send an email to existing customers announcing the change</li>
              <li>Share the transition story on social media</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brands that communicate their sustainability switch see an average <strong>5–8% conversion rate lift</strong> on product pages. For a deeper look at the transition process, see our guide on <a href="/blog/switch-plastic-to-paper-packaging-dtc-guide" className="text-green-700 underline hover:text-green-600">switching from plastic to paper packaging</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Biodegradable Packaging for Specific Industries
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Different industries have different requirements for biodegradable packaging. Here's what to consider for your vertical:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Industry</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Recommended Material</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Key Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><a href="/industries/cosmetics-beauty" className="text-green-700 underline">Cosmetics & Beauty</a></td><td className="py-2 px-4 text-gray-700">FSC-coated + soft-touch lamination</td><td className="py-2 px-4 text-gray-700">Premium feel required; FSC adds credibility</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><a href="/industries/chocolate-confectionery" className="text-green-700 underline">Food & Confectionery</a></td><td className="py-2 px-4 text-gray-700">EN 13432 compostable + food-safe liner</td><td className="py-2 px-4 text-gray-700">Regulatory compliance for food contact</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><a href="/industries/candles-fragrance" className="text-green-700 underline">Candles & Fragrance</a></td><td className="py-2 px-4 text-gray-700">FSC kraft with soy ink</td><td className="py-2 px-4 text-gray-700">Eco positioning aligns with brand values</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><a href="/industries/jewelry" className="text-green-700 underline">Jewelry</a></td><td className="py-2 px-4 text-gray-700">FSC rigid box with recycled greyboard</td><td className="py-2 px-4 text-gray-700">Luxury + sustainability together</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><a href="/industries/apparel-fashion" className="text-green-700 underline">Apparel & Fashion</a></td><td className="py-2 px-4 text-gray-700">Kraft mailer box + paper tape</td><td className="py-2 px-4 text-gray-700">Replace poly mailers entirely</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700"><a href="/industries/tea-beverages" className="text-green-700 underline">Tea & Beverages</a></td><td className="py-2 px-4 text-gray-700">FSC kraft + compostable inner pouch</td><td className="py-2 px-4 text-gray-700">Moisture barrier + biodegradability</td></tr>
                </tbody>
              </table>
            </div>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-green-900">
                <li>"Compostable" is the most defensible eco claim; "biodegradable" is vague without certification</li>
                <li>FSC-certified kraft paper is the best all-around biodegradable material for DTC brands</li>
                <li>FSC certification adds only 8–12% to unit cost — a small premium for major brand credibility</li>
                <li>The "One Material" approach (all kraft, all recyclable) simplifies disposal for customers</li>
                <li>Right-sizing your box saves 15–25% on material and shipping costs</li>
                <li>Communicating your sustainability switch yields 5–8% higher conversion rates</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              BUpack's Biodegradable Packaging Capabilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every <a href="/products/paper-boxes" className="text-green-700 underline hover:text-green-600">custom paper box</a> from BUpack is available with full biodegradable credentials:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>FSC-certified paper</strong> — Chain-of-custody documentation provided with every order</li>
              <li><strong>Soy-based ink</strong> — Petroleum-free printing, naturally biodegradable, comparable cost at scale</li>
              <li><strong>Water-based coatings</strong> — No VOC emissions, no petroleum-based lamination</li>
              <li><strong>Plastic-free options</strong> — Paper tape, cellulose windows, kraft cushioning for a 100% recyclable unboxing experience</li>
              <li><strong>Flexible MOQ from 100 units</strong> — Test biodegradable packaging without large commitments</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We also offer our <a href="/services/design-support" className="text-green-700 underline hover:text-green-600">design support service</a> to help you optimize your packaging for sustainability — from right-sizing to material selection. For brands ready to go fully plastic-free, our <a href="/fsc-certified-packaging" className="text-green-700 underline hover:text-green-600">FSC-certified packaging page</a> has detailed specifications.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to switch to biodegradable packaging?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                FSC-certified, soy ink, water-based coatings. 100% recyclable packaging starting at 100 units. Free design support included.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
                >
                  Request Free Sample Kit →
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
