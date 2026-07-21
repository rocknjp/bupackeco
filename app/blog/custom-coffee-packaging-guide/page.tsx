import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Coffee Packaging Guide | BUpack",
  description:
    "Complete guide to custom coffee packaging. Resealable bags, coffee boxes, and subscription packaging for roasters. FSC-certified, low MOQ from 100 units.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/custom-coffee-packaging-guide/",
  },
  openGraph: {
    title: "Custom Coffee Packaging Guide | BUpack",
    description:
      "Complete guide to custom coffee packaging. Resealable bags, coffee boxes, and subscription packaging for roasters. FSC-certified, low MOQ from 100 units.",
    url: "https://www.bupackeco.com/blog/custom-coffee-packaging-guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Coffee Packaging Guide | BUpack",
    description:
      "Complete guide to custom coffee packaging. Resealable bags, coffee boxes, and subscription packaging for roasters. FSC-certified, low MOQ from 100 units.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "What is the best packaging for coffee beans?",
    answer:
      "The best packaging for coffee beans is a side-gusseted or flat-bottom bag with a one-way degassing valve and a resealable zipper closure. Multi-layer construction with a foil or metalized PET barrier blocks oxygen and light, while the valve lets CO2 escape without letting oxygen in. For whole bean coffee, 12oz bags are the industry standard; for ground coffee, smaller 8-12oz bags with the same barrier protection work best. Pairing the bag with a branded mailer box creates a premium DTC unboxing experience.",
  },
  {
    question: "Why do coffee bags need a one-way valve?",
    answer:
      "Freshly roasted coffee releases carbon dioxide (CO2) for up to 7-14 days after roasting. Without a one-way degassing valve, this gas builds up inside the sealed bag and can cause it to inflate or even burst. The valve lets CO2 escape while preventing oxygen from entering, which is critical because oxygen is the primary cause of coffee staling. Without a valve, you'd either have to wait days before packaging (losing freshness) or risk bag failure. BUpack installs WIPF or PPL valve technology on all coffee bag packaging custom orders.",
  },
  {
    question: "What's the minimum order quantity for custom coffee packaging?",
    answer:
      "BUpack offers custom coffee packaging starting at just 100 units per design using digital printing. This low MOQ is ideal for micro-roasters, limited-edition single-origin releases, and seasonal blends. For roasters needing larger volumes (500+ units), offset printing becomes available with significantly lower per-unit costs. Custom-printed mailer boxes for coffee subscription programs also start at 100 units, and we offer FSC-certified paperboard at no meaningful cost premium.",
  },
  {
    question: "Can I get eco-friendly coffee packaging?",
    answer:
      "Yes. BUpack offers several sustainable coffee packaging options: FSC-certified paperboard for outer boxes and labels, kraft paper coffee bags with biodegradable liners, compostable PLA-based valve films, and recyclable mono-material constructions. While traditional foil-lined coffee bags are difficult to recycle due to mixed materials, new mono-material PE and PP structures are fully recyclable where infrastructure exists. Learn more on our FSC-certified packaging page. Many specialty coffee roasters pair compostable bags with FSC-certified mailer boxes for a fully sustainable DTC program.",
  },
  {
    question: "How should I design coffee subscription box packaging?",
    answer:
      "Effective coffee subscription box packaging balances freshness, branding, and cost. The most successful coffee subscription programs use a consistent exterior mailer box (ordered in bulk at 2,000-5,000 units for cost efficiency) with monthly-rotating interior printing, origin story cards, and tasting notes via digital printing. This approach keeps the unboxing experience fresh every month while controlling costs. Include resealable bag packaging inside, brew recipe cards, and a personalized note. For roasters scaling past 2,000 monthly subscribers, transition to offset printing for the exterior box to reduce per-unit cost. See our packaging for subscription boxes guide for the full framework.",
  },
];

export default function CustomCoffeePackagingGuide() {
  return (
    <>
      <ArticleSchema
        headline="Custom Coffee Packaging Guide: Resealable Bags, Valves, and Subscription Boxes"
        description="Complete guide to custom coffee packaging. Resealable bags, coffee boxes, and subscription packaging for roasters. FSC-certified, low MOQ from 100 units."
        datePublished="2026-06-27T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/custom-coffee-packaging-guide"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Custom Coffee Packaging Guide", url: "/blog/custom-coffee-packaging-guide" },
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
              Packaging 101
            </span>
            <span className="text-green-300 text-sm">
              June 27, 2026 · 10 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Custom Coffee Packaging Guide: Resealable Bags, Valves, and Subscription Boxes
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            Complete guide to custom coffee packaging. Resealable bags, coffee boxes, and subscription packaging for roasters. FSC-certified, low MOQ from 100 units.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <p className="text-gray-700 leading-relaxed mb-4">
              The specialty coffee market is projected to reach <strong>$85 billion by 2030</strong>, growing at 13.3% CAGR — nearly double the rate of the overall coffee market. For roasters, this growth is a double-edged sword: more demand, but also more competition. In a category where consumers are willing to pay $22 for a 12oz bag of single-origin beans, custom coffee packaging isn't a nice-to-have — it's the difference between a shelf standout and a commodity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide walks through everything a coffee roaster needs to know about custom coffee packaging: bag formats, valve technology, sustainability, subscription box design, and cost optimization for small-batch roasters. Whether you're roasting 50 pounds a week or 5,000, the right packaging protects your product, communicates your craft, and builds the kind of brand that keeps customers coming back. For broader beverage packaging strategies, see our <Link href="/industries/tea-beverages" className="text-green-700 underline font-semibold">tea and beverages industry page</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Why Coffee Packaging Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coffee is one of the most packaging-sensitive products on the planet. Within <strong>72 hours of roasting</strong>, coffee begins releasing carbon dioxide and absorbing oxygen — the primary cause of staling. A poorly sealed bag can turn a $24 Geisha lot into a flat, lifeless product before it ever reaches the customer's grinder. Quality coffee packaging isn't just about looks; it's the only thing standing between your roast profile and oxidation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond freshness, packaging is the primary brand differentiation tool for coffee roasters. Walk into any specialty grocery: there are 40+ bags competing for attention, most containing similar-quality beans from similar origins. The bag — its design, materials, finish, and feel — is what makes a customer reach for yours instead of the one next to it. For DTC coffee brands, the unboxing experience is even more critical because there's no retail shelf to provide context.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The third function is operational: coffee packaging must run efficiently on your filling equipment, survive shipping without leaking, and meet food safety standards for direct food contact. A beautiful bag that won't seal on your equipment or bursts in transit is a costly mistake. BUpack's coffee bag packaging custom designs are validated against common roastery filling systems and ISTA 3A shipping standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Types of Coffee Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coffee packaging comes in several formats, each suited to different product types, price points, and distribution channels. Choosing the right format depends on your grind (whole bean vs. ground), bag size, sales channel, and brand positioning.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Side-Gusseted and Flat-Bottom Bags
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Side-gusseted bags are the traditional coffee bag format — the workhorse of the industry. They're cost-effective, efficient to fill on automated equipment, and stand upright on retail shelves. Flat-bottom (box-bottom) bags offer a more premium look with a wide printable face ideal for brand storytelling, and they stand sturdier on shelves. Both formats typically use multi-layer construction: PET for strength, foil or metalized PET for oxygen barrier, and LLDPE for sealability. BUpack produces both formats from 100 units with full-color custom printing.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Coffee Mailer Boxes for DTC Brands
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For roasters selling direct-to-consumer, a coffee mailer box is the centerpiece of the unboxing experience. These corrugated E-flute or B-flute boxes are durable enough to ship without an outer carton, support full-color exterior and interior printing, and create the premium presentation that justifies a $20+ coffee purchase. Many DTC roasters use a branded mailer box as the outer layer, with resealable coffee bags inside — combining shipping protection with brand impact. Our <Link href="/products/custom-mailer-boxes" className="text-green-700 underline font-semibold">custom mailer boxes</Link> start at 100 units with digital printing, ideal for small-batch roasters launching online.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Coffee Subscription Box Packaging
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coffee subscription box packaging is its own discipline. Subscribers receive a box every month, so the experience must stay fresh or churn rises. The most successful programs use a consistent exterior mailer box (ordered in bulk for cost efficiency) paired with monthly-rotating interior printing, origin cards, and tasting notes. Coffee subscription box packaging must also accommodate different bag sizes, brew recipe cards, and occasionally brewing equipment. For the full framework, see our <Link href="/blog/packaging-for-subscription-boxes-guide" className="text-green-700 underline font-semibold">packaging for subscription boxes guide</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Freshness &amp; Valve Technology
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The one-way degassing valve is the single most important technical feature in coffee bag packaging custom design. Without it, freshly roasted coffee would either need to be left exposed to air for days before packaging (sacrificing freshness) or risk inflating and bursting the bag as CO2 releases.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's how the valve works: a small one-way valve is heat-sealed into the bag wall. The valve contains a membrane that opens under slight outward pressure (from CO2 building up inside the bag) and closes immediately when pressure equalizes. This lets gas escape while preventing oxygen from entering. Quality valves from manufacturers like WIPF and PPL maintain their seal integrity for 12+ months and are certified for food contact.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Valve placement matters. The industry standard is on the front face of the bag, slightly above center, where it's visible to consumers (the valve signals "freshly roasted"). Some roasters hide the valve on the back or bottom for cleaner front-panel design, but this can reduce consumer trust because the valve is a freshness cue. For ground coffee, the valve is less critical because ground coffee degasses quickly, but it's still recommended for any coffee packaged within 7 days of roasting.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond the valve, freshness depends on three other factors: <strong>oxygen barrier</strong> (foil or metalized PET layer), <strong>seal integrity</strong> (heat-sealable LLDPE inner layer with consistent seal strength), and <strong>resealability</strong> (a quality zipper closure that maintains barrier after opening). A bag with a perfect valve but poor oxygen barrier will still let coffee stale in weeks. BUpack tests all coffee packaging for oxygen transmission rate (OTR) and seal integrity before production.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Sustainable Coffee Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sustainability is a defining issue for specialty coffee. The same consumers who care about fair trade and direct trade also care about whether their coffee bag ends up in a landfill. <strong>71% of specialty coffee buyers</strong> say sustainable packaging influences their purchase decisions — and they're skeptical of vague eco claims. Real sustainability requires material choices backed by certifications.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              FSC-Certified Paperboard
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Forest Stewardship Council (FSC) certification is the gold standard for sustainable paper packaging. FSC-certified paperboard comes from responsibly managed forests that protect biodiversity, respect indigenous rights, and maintain ecosystem health. For coffee brands, FSC-certified paper is used for mailer boxes, retail cartons, sleeves, and bag labels. BUpack offers FSC-certified options across all coffee packaging formats at a negligible cost premium ($0.00-$0.05 per unit). Learn more on our <Link href="/fsc-certified-packaging" className="text-green-700 underline font-semibold">FSC-certified packaging</Link> page.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Compostable and Recyclable Bag Options
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional coffee bags use foil laminates that are nearly impossible to recycle due to mixed materials. Newer sustainable options include: <strong>kraft paper bags with biodegradable liners</strong> (home compostable in 12-26 weeks), <strong>compostable PLA-based valve films</strong> (replacing traditional plastic valves), and <strong>recyclable mono-material PE/PP structures</strong> (recyclable where store-drop flexible film recycling exists). None of these is a perfect solution yet — barrier performance and cost still trade off against sustainability — but they're improving rapidly. Many roasters pair compostable bags with FSC-certified mailer boxes for a fully sustainable DTC program. For broader guidance, see our <Link href="/blog/eco-friendly-packaging-small-business" className="text-green-700 underline font-semibold">eco-friendly packaging guide for small businesses</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Soy-Based Inks and Water-Based Coatings
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional petroleum-based printing inks contain volatile organic compounds (VOCs) harmful to both environment and human health. Soy-based inks offer the same print quality with significantly lower environmental impact — renewable, biodegradable, and lower VOC emissions. Combined with water-based coatings (instead of plastic lamination), coffee packaging can maintain vibrant print quality while remaining recyclable or compostable. BUpack uses soy-based inks and water-based coatings as standard on all coffee packaging orders.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Coffee Subscription Box Design
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coffee subscription is one of the fastest-growing segments in specialty coffee, with the U.S. market projected to reach $7.5 billion by 2028. But subscription box packaging that worked for your first 100 subscribers starts breaking down at scale — both operationally and creatively. The right design strategy keeps the unboxing experience fresh while controlling costs.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Monthly Design Rotation Strategy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The biggest mistake coffee subscription brands make is using the same packaging every month. After 3-4 identical boxes, subscribers develop unboxing fatigue and churn rates rise. The most cost-effective solution: keep the exterior mailer box design consistent (order in bulk at 2,000-5,000 units for the lowest per-unit cost) and rotate interior printing, origin cards, and tasting notes monthly using digital printing. This gives subscribers something new to discover each month without the cost of fully custom box designs every time. The exterior box becomes a recognizable brand asset; the interior becomes the storytelling canvas.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              What Goes Inside a Coffee Subscription Box
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Resealable coffee bag</strong> with one-way valve and roast date clearly printed</li>
              <li><strong>Origin story card</strong> — farm name, altitude, processing method, tasting notes (rotates monthly)</li>
              <li><strong>Brew recipe card</strong> — pour-over, espresso, or French press parameters specific to that month's bean</li>
              <li><strong>Personalized note</strong> — subscriber name, roaster signature, occasional surprises like a small chocolate pairing</li>
              <li><strong>Branded tissue or wrapper</strong> — adds tactile premium feel and protects the bag during shipping</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the exterior box, BUpack recommends E-flute corrugated with full-color exterior and interior printing. Pair with custom <Link href="/products/custom-paper-bags" className="text-green-700 underline font-semibold">custom paper bags</Link> for retail pickups or wholesale accounts to extend the brand system. As your subscriber base grows past 2,000 monthly, transition the exterior box to offset printing for lower per-unit costs while keeping the rotating interior on digital.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Cost Considerations for Small Roasters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coffee packaging costs vary significantly based on bag type, volume, printing method, and finishing. For small-batch roasters (under 1,000 units per SKU per order), digital printing unlocks custom packaging at accessible price points. Here's a realistic cost breakdown:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Packaging Type</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">100 Units</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">500 Units</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">1,000+ Units</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Side-gusseted bag (12oz, w/ valve)</td><td className="py-2 px-4 text-gray-700">$0.85–$1.40</td><td className="py-2 px-4 text-gray-700">$0.50–$0.85</td><td className="py-2 px-4 text-gray-700">$0.35–$0.60</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Flat-bottom bag (12oz, w/ valve)</td><td className="py-2 px-4 text-gray-700">$1.10–$1.75</td><td className="py-2 px-4 text-gray-700">$0.65–$1.05</td><td className="py-2 px-4 text-gray-700">$0.45–$0.75</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Coffee mailer box (E-flute)</td><td className="py-2 px-4 text-gray-700">$2.50–$4.00</td><td className="py-2 px-4 text-gray-700">$1.50–$2.20</td><td className="py-2 px-4 text-gray-700">$1.00–$1.60</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Subscription box (B-flute)</td><td className="py-2 px-4 text-gray-700">$2.80–$4.50</td><td className="py-2 px-4 text-gray-700">$1.70–$2.50</td><td className="py-2 px-4 text-gray-700">$1.20–$1.85</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Origin story card (4/color, 14pt)</td><td className="py-2 px-4 text-gray-700">$0.30–$0.55</td><td className="py-2 px-4 text-gray-700">$0.15–$0.30</td><td className="py-2 px-4 text-gray-700">$0.08–$0.18</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-6">* Prices are per-unit estimates including production. Shipping not included. Digital printing pricing shown; offset printing available at 500+ units with lower per-unit costs. Valve and zipper included in bag pricing.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              MOQ and Cost Optimization Tips
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Start at 100 units with digital printing</strong> — Zero plate fees ($200-$600 saved). Ideal for micro-roasters and limited single-origin releases.</li>
              <li><strong>Standardize bag size</strong> — Use one bag format for multiple SKUs with label-only customization. Reduces tooling costs and unlocks higher volume pricing.</li>
              <li><strong>Order at volume breakpoints</strong> — The biggest price drops happen at 500, 1,000, and 5,000 units. If you're close to a breakpoint, ordering up usually saves money.</li>
              <li><strong>Separate bag from box orders</strong> — Order bags at higher volumes (they're shelf-stable) and mailer boxes at lower volumes (they take more storage space).</li>
              <li><strong>Use FSC paper as default</strong> — At BUpack, FSC-certified paper adds only $0.00-$0.05 per unit. The sustainability marketing value far exceeds the cost.</li>
              <li><strong>Simplify finishing</strong> — Full-color print + matte coating looks premium without the cost of foil stamping or spot UV. Add specialty finishes on reorders once volume justifies it.</li>
            </ul>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-green-900">
                <li>Coffee packaging protects freshness (one-way valve + oxygen barrier), differentiates brand on shelf, and must run on filling equipment — all three matter</li>
                <li>Side-gusseted and flat-bottom bags with degassing valves are the industry standard; pair with a custom mailer box for DTC unboxing</li>
                <li>One-way degassing valves let CO2 escape without letting oxygen in — essential for any coffee packaged within 7 days of roasting</li>
                <li>FSC-certified paperboard, compostable bag liners, soy inks, and water-based coatings meet the sustainability expectations of 71% of specialty coffee buyers</li>
                <li>Coffee subscription box packaging should use a consistent exterior (bulk order) with monthly-rotating interior printing to keep unboxing fresh and control costs</li>
                <li>Start at 100 units with digital printing; scale to offset at 500-2,000+ units for maximum cost efficiency</li>
                <li>The biggest cost levers: standardize bag size, order at volume breakpoints, separate bag and box ordering cycles</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to design your coffee packaging?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Resealable bags with one-way valves, FSC-certified mailer boxes, and subscription packaging built for roasters. Start at 100 units with free design support and digital proofs.
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
