import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Packaging for Startups Guide | BUpack",
  description:
    "How startups can get custom packaging with low MOQ from 100 units. Budget tips, design advice, and timeline planning for new DTC brands.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/custom-packaging-for-startups-guide",
  },
  openGraph: {
    title: "Custom Packaging for Startups Guide | BUpack",
    description:
      "How startups can get custom packaging with low MOQ from 100 units. Budget tips, design advice, and timeline planning for new DTC brands.",
    url: "https://www.bupackeco.com/blog/custom-packaging-for-startups-guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Packaging for Startups Guide | BUpack",
    description:
      "How startups can get custom packaging with low MOQ from 100 units. Budget tips, design advice, and timeline planning for new DTC brands.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "What is the minimum order quantity for custom packaging as a startup?",
    answer:
      "BUpack offers custom packaging starting at just 100 units per design thanks to digital printing technology. This means you can test your packaging concept without committing to thousands of units upfront.",
  },
  {
    question: "How much should a startup budget for custom packaging?",
    answer:
      "For a first order of 200 custom mailer boxes, budget $460–$780 total (including production and shipping to the US). That works out to $2.30–$3.90 per box. Start with digital printing to avoid plate fees.",
  },
  {
    question: "How long does it take to get custom packaging made?",
    answer:
      "Digital printing production takes 7–14 business days. Add 7–21 days for ocean freight to the US or 3–5 days for air freight. From artwork approval to delivery, plan for 3–6 weeks total.",
  },
  {
    question: "Can I get design help if I don't have a packaging designer?",
    answer:
      "Yes. BUpack provides free design support including dieline templates, artwork review, and digital proofs. We check your files for print readiness, color mode (CMYK), bleed, and safe zones before production.",
  },
  {
    question: "Should my startup use kraft or coated paper for packaging?",
    answer:
      "It depends on your brand positioning. Kraft paper signals natural, eco-friendly, and honest — great for organic or sustainable brands. Coated paper delivers premium, polished results — ideal for beauty and luxury startups. Many brands use kraft exterior with a coated interior for the best of both worlds.",
  },
];

export default function CustomPackagingForStartupsGuide() {
  return (
    <>
      <ArticleSchema
        headline="Custom Packaging for Startups: A Complete Guide (2026)"
        description="How startups can get custom packaging with low MOQ from 100 units. Budget tips, design advice, and timeline planning for new DTC brands."
        datePublished="2026-06-13T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/custom-packaging-for-startups-guide"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Custom Packaging for Startups Guide", url: "/blog/custom-packaging-for-startups-guide" },
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
              Startup Guide
            </span>
            <span className="text-green-300 text-sm">
              June 13, 2026 · 9 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Custom Packaging for Startups: A Complete Guide (2026)
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            How startups can get custom packaging with low MOQ from 100 units. Budget tips, design advice, and timeline planning for new DTC brands.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Why Custom Packaging Matters for Startups
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a startup founder, every dollar matters. So why invest in custom packaging when plain brown boxes are cheaper? Because custom packaging isn't a cost — it's a growth lever. Brands using custom packaging see <strong>23% more 5-star reviews</strong>, <strong>18% lower return rates</strong>, and <strong>3-5x more social media shares</strong> from unboxing content. For a new DTC brand competing against established players, your packaging is often the first — and sometimes only — physical touchpoint with your customer. Explore our <Link href="/products/paper-boxes" className="text-green-700 underline font-semibold">low-MOQ custom boxes</Link> to get started.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The good news: you no longer need to order 10,000 units to get started. Digital printing and flexible manufacturing have made <Link href="/products/paper-boxes" className="text-green-700 underline font-semibold">low-MOQ custom boxes</Link> accessible to brands shipping as few as 100 orders per month.
            </p>

            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">📚 Deep Dive: The Ultimate Packaging Sourcing Guide</h3>
              <p className="text-gray-600 text-sm mb-3">
                Struggling with MOQ negotiation and supplier evaluation? Our 9-chapter sourcing guide covers MOQ strategies for startups, supplier vetting frameworks, sampling workflows, and compliance checklists — everything you need to find and qualify the right packaging partner.
              </p>
              <Link href="/guide/ecommerce-packaging-sourcing" className="text-green-700 font-semibold text-sm hover:text-green-600 transition-colors">
                Read the Full Guide →
              </Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Budget Planning: What Startups Actually Pay
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Let's cut through the vague pricing. Here's what you'll actually pay for custom packaging as a startup ordering your first batch:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Scenario: New DTC Brand, 200 Custom Mailer Boxes
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Item</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Digital printing setup</td><td className="py-2 px-4 text-gray-700">$0 (no plate fees)</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Box production (200 units)</td><td className="py-2 px-4 text-gray-700">$300–$500</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Custom insert cards</td><td className="py-2 px-4 text-gray-700">$40–$80</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Air freight to US</td><td className="py-2 px-4 text-gray-700">$120–$200</td></tr>
                  <tr className="bg-green-50 font-semibold"><td className="py-2 px-4 text-gray-900">Total</td><td className="py-2 px-4 text-gray-900">$460–$780</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              That's <strong>$2.30–$3.90 per box</strong>, shipped to your door. Compare that to generic unbranded boxes at $1.50–$2.00 each with zero branding value. For less than $2 more per order, you get a branded unboxing experience that drives reviews, UGC, and repeat purchases. For a detailed breakdown across volumes and product types, see our <a href="/blog/custom-packaging-cost-guide" className="text-green-700 underline hover:text-green-600">complete custom packaging cost guide</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Cost by Volume Tier
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Volume</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Unit Cost (Standard)</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Unit Cost (Premium)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">200 units</td><td className="py-2 px-4 text-gray-700">$1.80–$3.00</td><td className="py-2 px-4 text-gray-700">$2.50–$4.00</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">500 units</td><td className="py-2 px-4 text-gray-700">$1.20–$2.00</td><td className="py-2 px-4 text-gray-700">$1.80–$3.00</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">1,000 units</td><td className="py-2 px-4 text-gray-700">$0.80–$1.50</td><td className="py-2 px-4 text-gray-700">$1.20–$2.20</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">5,000 units</td><td className="py-2 px-4 text-gray-700">$0.50–$1.00</td><td className="py-2 px-4 text-gray-700">$0.80–$1.50</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Design Guide for First-Time Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your first custom packaging design doesn't need to be complex. In fact, the most effective startup packaging follows one principle: <strong>clarity over cleverness</strong>. Your customer should instantly know who you are, what's inside, and why they should care.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              The Startup Packaging Design Checklist
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Brand logo and name</strong> — Front and center. If someone films an unboxing, your brand should be visible in the first frame.</li>
              <li><strong>Brand colors</strong> — Use 2-3 colors maximum. Consistency builds recognition faster than variety.</li>
              <li><strong>Tagline or value prop</strong> — One line that tells the customer what your brand stands for. Example: "Clean beauty, shipped sustainably."</li>
              <li><strong>Sustainability message</strong> — If your packaging is FSC-certified or recyclable, say so. 73% of consumers prefer brands with sustainable packaging.</li>
              <li><strong>Social handles or QR code</strong> — Make it easy for customers to find you and share their unboxing.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Common Design Mistakes Startups Make
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Too much text</strong> — Your box isn't a brochure. White space is your friend.</li>
              <li><strong>RGB instead of CMYK</strong> — Design files must be in CMYK color mode for accurate print results. RGB colors shift unpredictably in print.</li>
              <li><strong>No bleed or safe zone</strong> — Add 3mm bleed on all sides and keep critical elements 5mm from cut lines.</li>
              <li><strong>Overcomplicating finishing</strong> — Start with full-color print + matte lamination. You can add foil or spot UV on your next order once you've validated the design.</li>
              <li><strong>Wrong box dimensions</strong> — Always measure your product + 5mm padding on each side. An oversized box wastes material and increases shipping costs.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Timeline Planning: From Idea to Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Startups often underestimate how long packaging production takes. Here's a realistic timeline for your first order:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Phase</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Timeline</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Design & Specs</td><td className="py-2 px-4 text-gray-700">Week 1–2</td><td className="py-2 px-4 text-gray-700">Define box dimensions, material, and finalize artwork</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Digital Proof</td><td className="py-2 px-4 text-gray-700">3–5 days</td><td className="py-2 px-4 text-gray-700">Review and approve digital proof from supplier</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Physical Sample</td><td className="py-2 px-4 text-gray-700">5–10 days</td><td className="py-2 px-4 text-gray-700">Optional but recommended: receive sample box via air</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Production</td><td className="py-2 px-4 text-gray-700">7–14 business days</td><td className="py-2 px-4 text-gray-700">Digital printing, die-cutting, lamination, assembly</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Shipping (Ocean)</td><td className="py-2 px-4 text-gray-700">7–21 days</td><td className="py-2 px-4 text-gray-700">Standard shipping to US warehouse</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Shipping (Air)</td><td className="py-2 px-4 text-gray-700">3–5 days</td><td className="py-2 px-4 text-gray-700">Faster but more expensive — ideal for under 300 units</td></tr>
                  <tr className="bg-green-50 font-semibold"><td className="py-2 px-4 text-gray-900">Total (Ocean)</td><td className="py-2 px-4 text-gray-900">4–6 weeks</td><td className="py-2 px-4 text-gray-900">From artwork approval to delivery</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Pro tip:</strong> If you're launching on a specific date, order your packaging 8 weeks in advance. This gives you buffer time for revisions, shipping delays, or quality issues. Read our <a href="/blog/china-vs-us-packaging-manufacturer" className="text-green-700 underline hover:text-green-600">China vs US manufacturer comparison</a> for more on lead times.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Choosing the Right Box Type for Your Product
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Not every startup needs the same box. Here's a quick guide to matching box type with your product category — all available as <Link href="/products/paper-boxes" className="text-green-700 underline font-semibold">custom paper boxes</Link> from 100 units.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Product Type</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Recommended Box</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Skincare & beauty</td><td className="py-2 px-4 text-gray-700">Rigid setup box or folding carton</td><td className="py-2 px-4 text-gray-700">Premium feel, fits <a href="/industries/beauty-skincare" className="text-green-700 underline">beauty brand expectations</a></td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Candles & fragrance</td><td className="py-2 px-4 text-gray-700">Mailer box with insert</td><td className="py-2 px-4 text-gray-700">Protection + unboxing, see <a href="/industries/fragrance-candles" className="text-green-700 underline">candle packaging</a></td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Jewelry & accessories</td><td className="py-2 px-4 text-gray-700">Rigid gift box</td><td className="py-2 px-4 text-gray-700">Luxury presentation, <a href="/industries/jewelry-accessories" className="text-green-700 underline">jewelry box standards</a></td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Apparel & fashion</td><td className="py-2 px-4 text-gray-700">Custom mailer box</td><td className="py-2 px-4 text-gray-700">Branded shipping + unboxing, <a href="/industries/corporate-gifts-subscription" className="text-green-700 underline">fashion packaging</a></td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Food & confectionery</td><td className="py-2 px-4 text-gray-700">Folding carton + food-safe liner</td><td className="py-2 px-4 text-gray-700">FDA compliance, <a href="/industries/beauty-skincare" className="text-green-700 underline">packaging guide</a></td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Subscription products</td><td className="py-2 px-4 text-gray-700">Corrugated mailer box</td><td className="py-2 px-4 text-gray-700">Durable, <a href="/products/subscription-boxes" className="text-green-700 underline">subscription box design</a></td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              5 Ways Startups Can Cut Packaging Costs
            </h2>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-3">
              <li><strong>Start with digital printing</strong> — No plate fees ($200–$600 saved), perfect for runs under 2,000 units. Switch to offset at 3,000+ units when per-unit cost becomes cheaper.</li>
              <li><strong>Right-size your box</strong> — Oversized boxes waste material and increase dimensional weight shipping charges. A 20% size reduction saves 15–25% on costs.</li>
              <li><strong>Order at volume breakpoints</strong> — Pricing drops significantly at 500 and 1,000 units. If you need 800 units, ordering 1,000 saves more per unit — even with storage costs.</li>
              <li><strong>Simplify finishing</strong> — Full-color print + matte lamination achieves a premium look without foil stamping or embossing. Add special finishes on reorders once you've validated the design.</li>
              <li><strong>Consolidate SKUs into one box design</strong> — Use the same box for multiple products with SKU-specific insert cards or stickers. This lets you order one design at higher volume.</li>
            </ul>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-green-900">
                <li>Custom packaging is accessible from 100 units with digital printing — no 10,000-unit minimums required</li>
                <li>Budget $460–$780 for your first 200-box order including shipping</li>
                <li>Design in CMYK, add 3mm bleed, and always get a digital proof before production</li>
                <li>Plan 4–6 weeks from artwork approval to delivery; order 8 weeks ahead of launch for safety</li>
                <li>Start simple: full-color print + matte lamination. Add premium finishes on reorder</li>
                <li>Right-sizing your box saves 15–25% on both packaging and shipping costs</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Free Design Support from BUpack
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We know most startups don't have an in-house packaging designer. That's why every BUpack order includes free design support:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Dieline templates</strong> — Pre-made templates for all standard box styles so you design on the correct canvas</li>
              <li><strong>Artwork review</strong> — Our team checks your files for print readiness: color mode, resolution, bleed, safe zones</li>
              <li><strong>Free digital proofs</strong> — See exactly how your design will look before a single box is printed</li>
              <li><strong>Design consultation</strong> — Need advice on materials, structure, or finishing? We'll walk you through your options</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              All our <a href="/products/paper-boxes" className="text-green-700 underline hover:text-green-600">custom paper boxes</a> are available in FSC-certified paper with soy-based ink and water-based coatings. Explore our <a href="/services/design-support" className="text-green-700 underline hover:text-green-600">design support service</a> for more details.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to get your first custom packaging?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Start with 100 units. Free digital proofs, free design support, FSC-certified materials. No plate fees on digital print orders.
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
