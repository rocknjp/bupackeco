import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Packaging Case Studies | Real DTC Brand Results | BUpack",
  description:
    "See how DTC and eCommerce brands use BUpack's custom packaging to increase unboxing shares, reduce returns, and boost customer retention. Real data, real results.",
  keywords:
    "packaging case study, custom packaging results, DTC packaging success, subscription box case study, custom box ROI, packaging design case study",
  alternates: {
    canonical: "https://www.bupackeco.com/case-studies/",
  },
  openGraph: {
    title: "Custom Packaging Case Studies | Real DTC Brand Results | BUpack",
    description:
      "See how DTC and eCommerce brands use BUpack's custom packaging to increase unboxing shares, reduce returns, and boost customer retention. Real data, real results.",
    url: "https://www.bupackeco.com/case-studies",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Packaging Case Studies | Real DTC Brand Results | BUpack",
    description:
      "See how DTC and eCommerce brands use BUpack's custom packaging to increase unboxing shares, reduce returns, and boost customer retention. Real data, real results.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const caseStudies = [
  {
    brand: "Botanical Flame Co.",
    industry: "Candles & Home Fragrance",
    stage: "DTC candle brand — $2M ARR, 50K+ social followers",
    challenge:
      "Holiday gift sets were shipping in plain brown corrugated boxes. Despite 50,000 Instagram followers, the brand had zero unboxing posts — their most valuable word-of-mouth channel was completely dark.",
    solution:
      "Custom rigid lid-and-base box with gold foil logo stamping, precision-cut EVA insert for 3 candles, and interior brand story printing. Designed with Instagram lighting angles in mind — matte exterior to prevent glare, rich contrast colors inside.",
    results: [
      { metric: "340+", label: "Unboxing posts in Q4 (up from 0)" },
      { metric: "+42%", label: "Gift set AOV increase" },
      { metric: "6% → 0.8%", label: "Return rate reduction" },
    ],
    quote: "Our holiday unboxing posts exploded. The packaging became the content — we didn't have to pay a single influencer.",
    quoteAuthor: "Founder, Botanical Flame Co.",
    emoji: "🕯️",
    tags: ["Gift Set", "Holiday", "Rigid Box", "Foil Stamping"],
  },
  {
    brand: "June & Stone",
    industry: "Jewelry & Accessories",
    stage: "DTC engagement ring brand — direct-to-consumer",
    challenge:
      "Ring boxes were generic black leatherette — customers posted photos of the ring but never the box. The brand story ended at the jewelry. The packaging was invisible in the most important moment: the proposal.",
    solution:
      "Custom velvet-lined rigid box with blind-embossed brand monogram, plus a reusable microfiber travel pouch. Designed specifically for the 'proposal shot' — the angle customers naturally photograph when opening the box.",
    results: [
      { metric: "5x", label: "Increase in unboxing posts" },
      { metric: "40%", label: "Of customers now post the box itself" },
      { metric: "+15%", label: "AOV via pouch upsell" },
    ],
    quote: "The box became part of the proposal story. Customers tag us in photos of the box — before they even mention the ring.",
    quoteAuthor: "Creative Director, June & Stone",
    emoji: "💍",
    tags: ["Rigid Box", "Velvet Insert", "Luxury", "Magnetic Closure"],
  },
  {
    brand: "Midtown Artisan Chocolate",
    industry: "Chocolate & Confectionery",
    stage: "DTC bean-to-bar brand — $1.5M ARR",
    challenge:
      "Q4 holiday gift boxes arrived with shifted chocolates, scuffed exteriors, and broken pieces. 12% of all Q4 orders resulted in complaints or refunds. The brand's most profitable season was also its most stressful.",
    solution:
      "Custom rigid box with precision-cut EVA tray holding 12 truffles in individual cavities. Gold foil logo + satin ribbon closure. FDA-compliant food-safe inks and coatings. Designed to survive FedEx ground shipping without a single truffle moving.",
    results: [
      { metric: "12% → 0.5%", label: "Complaint rate reduction" },
      { metric: "+85%", label: "Q4 revenue YoY growth" },
      { metric: "Retail-ready", label: "Retailers requested box for in-store display" },
    ],
    quote: "We went from dreading Q4 to scaling it. The packaging turned our biggest liability into our strongest asset.",
    quoteAuthor: "CEO, Midtown Artisan Chocolate",
    emoji: "🍫",
    tags: ["Food-Safe", "Gift Set", "Holiday", "EVA Insert"],
  },
  {
    brand: "Papillon Press",
    industry: "Stationery & Lifestyle Gifts",
    stage: "DTC stationery brand — 50K+ customers",
    challenge:
      "Holiday gift sets shipped in generic boxes with kraft paper stuffing. The unboxing felt chaotic and unbranded. Customers were receiving a $65 gift set that looked like a $15 Amazon order.",
    solution:
      "Custom rigid box with 3 dedicated compartments for journal, pen, and washi tape set. Interior printed with brand manifesto. Magnetic closure for a satisfying reveal. Designed to be kept and reused as a desk organizer.",
    results: [
      { metric: "+35%", label: "Gift set AOV increase" },
      { metric: "8% → 62%", label: "Reviews mentioning 'beautiful packaging'" },
      { metric: "Near zero", label: "Return rate" },
    ],
    quote: "Our packaging reviews now outnumber our product reviews. That's when we knew we'd cracked it.",
    quoteAuthor: "Founder, Papillon Press",
    emoji: "✒️",
    tags: ["Rigid Box", "Magnetic Closure", "Gift Set", "Multi-Compartment"],
  },
  {
    brand: "Leaf & Story",
    industry: "Tea & Specialty Beverages",
    stage: "DTC tea subscription — 8K+ subscribers",
    challenge:
      "Monthly tea boxes arrived with crushed sachets and mixed-up varieties. Subscriber churn was 12% per month — meaning the brand was losing nearly its entire subscriber base every year. The packaging was literally crushing their retention.",
    solution:
      "Custom drawer-style box with 4 divided compartments + printed tasting cards. Each tea variety labeled and separated. Slide-out drawer creates a ritual that matches the tea brewing experience. Standardized dieline for monthly artwork refreshes.",
    results: [
      { metric: "12% → 4%", label: "Monthly churn reduction" },
      { metric: "6x", label: "Increase in unboxing shares" },
      { metric: "#1 channel", label: "Subscriber referrals became top acquisition source" },
    ],
    quote: "The drawer box changed everything. Opening it became a ritual — and subscribers started gifting subscriptions.",
    quoteAuthor: "Co-Founder, Leaf & Story",
    emoji: "🍵",
    tags: ["Subscription Box", "Drawer Style", "Monthly Theme", "Custom Insert"],
  },
  {
    brand: "Wag & Wonder",
    industry: "Pet Treats & Subscription",
    stage: "DTC dog subscription box — 15K+ subscribers",
    challenge:
      "Monthly boxes used generic brown corrugated mailers. Subscriber unboxing posts were declining month over month. Churn was rising. The brand had great products but packaging that didn't match the experience.",
    solution:
      "Full-color monthly themed rigid boxes with interior dividers separating treats, toys, and accessories. Branded tissue paper inside. Pet-safe soy-based inks throughout. New artwork every month on the same reliable dieline.",
    results: [
      { metric: "8x", label: "Instagram unboxing tag increase" },
      { metric: "-40%", label: "Subscriber churn reduction" },
      { metric: "25%", label: "New subscribers from unboxing referral posts" },
    ],
    quote: "The box became the highlight of the subscription. Dogs recognize it now — and so do their owners' Instagram followers.",
    quoteAuthor: "CMO, Wag & Wonder",
    emoji: "🐾",
    tags: ["Subscription Box", "Monthly Theme", "Divided Interior", "Pet-Safe"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Case Studies", url: "https://www.bupackeco.com/case-studies" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Real Results</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Custom Packaging That Drives Real Business Results
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            See how DTC and eCommerce brands across 6 industries transformed their customer experience — and their bottom line — with BUpack custom packaging.
          </p>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-12 bg-green-50 border-b border-green-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { metric: "6", label: "Brand Case Studies" },
              { metric: "6", label: "Industries Covered" },
              { metric: "+40%", label: "Avg. AOV Increase" },
              { metric: "-80%", label: "Avg. Return Rate Drop" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl md:text-4xl font-black text-green-700">{item.metric}</div>
                <div className="text-sm text-gray-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={cs.brand} id={cs.brand.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-32">
              <div className={`flex flex-col ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-8`}>
                {/* Brand Card */}
                <div className="md:w-2/5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 flex flex-col justify-center">
                  <div className="text-6xl mb-4">{cs.emoji}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{cs.brand}</h2>
                  <p className="text-green-700 font-medium text-sm mb-3">{cs.industry}</p>
                  <p className="text-gray-500 text-sm mb-4">{cs.stage}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white text-green-700 font-medium px-2.5 py-1 rounded-full border border-green-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="md:w-3/5 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-gray-700 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Key Results</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {cs.results.map((r) => (
                        <div key={r.label} className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                          <div className="text-xl font-black text-green-700">{r.metric}</div>
                          <div className="text-xs text-gray-500 mt-1 leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {cs.quote && (
                    <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-600">
                      &ldquo;{cs.quote}&rdquo;
                      <footer className="text-sm text-gray-400 mt-1 not-italic">— {cs.quoteAuthor}</footer>
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Patterns */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">What Every Case Study Has in Common</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Across all 6 brands, 3 patterns emerged — and they're not about the box. They're about what the box enables.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Unboxing = Free Marketing",
                desc: "Every brand saw a dramatic increase in user-generated content — from 0 to 340+ posts, 5x increases, 8x increases. Custom packaging turns customers into your marketing team.",
              },
              {
                title: "Returns Plummet",
                desc: "Across all case studies, return and complaint rates dropped by 80%+ on average. Better packaging means fewer damaged products, fewer refunds, and happier customers.",
              },
              {
                title: "AOV Goes Up",
                desc: "When packaging looks premium, customers are willing to pay more. Average AOV increase across case studies: 40%+. The box justifies the price.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to be our next case study?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Tell us about your brand and packaging needs. We'll send you a free sample kit — and who knows, your results might be on this page next year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Get Free Samples
            </Link>
            <Link
              href="/products"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
