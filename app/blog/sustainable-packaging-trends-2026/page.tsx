import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Sustainable Packaging Trends 2026 | BUpack",
  description:
    "Top sustainable packaging trends for 2026. From FSC-certified materials to compostable solutions and circular packaging design. Stay ahead with BUpack.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/sustainable-packaging-trends-2026/",
  },
  openGraph: {
    title: "Sustainable Packaging Trends 2026 | BUpack",
    description:
      "Top sustainable packaging trends for 2026. From FSC-certified materials to compostable solutions and circular packaging design. Stay ahead with BUpack.",
    url: "https://www.bupackeco.com/blog/sustainable-packaging-trends-2026",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainable Packaging Trends 2026 | BUpack",
    description:
      "Top sustainable packaging trends for 2026. From FSC-certified materials to compostable solutions and circular packaging design. Stay ahead with BUpack.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "What are the top sustainable packaging trends for 2026?",
    answer:
      "The six biggest sustainable packaging trends for 2026 are: (1) FSC-certified materials going mainstream as brands seek credible third-party verification; (2) compostable and biodegradable innovations including PHA, PLA, and mushroom-based materials; (3) minimalist packaging design that reduces material use altogether; (4) reusable and refillable systems that shift packaging from single-use to multi-use; (5) smart packaging with QR codes that enables digital storytelling without printed waste; and (6) water-based inks and adhesives that replace petroleum-based alternatives. Together, these eco packaging trends reflect a broader shift from linear take-make-dispose models toward circular packaging design.",
  },
  {
    question: "What is the difference between compostable and biodegradable packaging?",
    answer:
      "Biodegradable packaging will eventually break down in any environment through natural microbial action, but the timeline is undefined and can range from months to decades. Compostable packaging is a stricter subset — it must break down completely in a specific timeframe (typically 90 days for industrial composting under EN 13432 or ASTM D6400) leaving no toxic residue. Home compostable certification (TÜV OK Compost HOME) is even stricter, requiring breakdown at ambient home-composting temperatures. For brands making sustainability claims, compostable certification carries far more credibility than a generic 'biodegradable' label, which is increasingly scrutinized as greenwashing. See our deep dive in the compostable packaging alternatives guide.",
  },
  {
    question: "How much does sustainable packaging cost compared to conventional packaging?",
    answer:
      "Sustainable packaging typically costs 5-15% more per unit than conventional packaging, but the gap is narrowing fast. FSC-certified paperboard adds only $0.00-$0.05 per unit. Soy-based inks are now cost-comparable to petroleum inks at 5,000+ unit volumes. Compostable materials like PLA and PHA still carry a 20-40% premium over conventional plastics, but prices are dropping as production scales. The hidden ROI is significant: brands using sustainable packaging report 18-24% higher customer lifetime value, lower return rates, and growing access to retail buyers who now require sustainability credentials. For small DTC brands, see our eco-friendly packaging guide for small businesses for low-MOQ strategies starting at 100 units.",
  },
  {
    question: "Is FSC certification worth it for small brands?",
    answer:
      "Yes — FSC certification is one of the highest-ROI sustainability investments a small brand can make. The per-unit premium is minimal ($0.00-$0.05 on most paperboard packaging), but the marketing and trust value is substantial. FSC is the only forest certification recognized by major retailers like Target, Whole Foods, and Amazon's Climate Pledge Friendly program. Many B2B buyers now require FSC as a baseline. When you work with a manufacturer like BUpack that already holds FSC chain-of-custody certification, your brand can use the FSC logo on packaging without holding your own certificate — making it accessible even for brands ordering 100 units. Learn more on our FSC-certified packaging page.",
  },
  {
    question: "How can DTC brands transition to sustainable packaging in 2026?",
    answer:
      "Start with a packaging audit to identify every material in your fulfillment flow — outer box, inner protection, tissue, inserts, tape, and labels. Then transition in phases: (1) swap plastic inner protection for honeycomb paper or shredded kraft; (2) replace poly mailers with custom corrugated mailer boxes; (3) upgrade to FSC-certified paperboard with soy-based inks; (4) add QR codes to replace printed inserts; (5) communicate the change to customers through product page badges, unboxing inserts, and email. Order at 100-unit MOQ to test, then scale to offset printing at 2,000+ units for lower per-unit costs. BUpack supports every phase with free design support and digital proofs.",
  },
];

export default function SustainablePackagingTrends2026() {
  return (
    <>
      <ArticleSchema
        headline="Sustainable Packaging Trends 2026: From FSC to Circular Design"
        description="Top sustainable packaging trends for 2026. From FSC-certified materials to compostable solutions and circular packaging design. Stay ahead with BUpack."
        datePublished="2026-06-27T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/sustainable-packaging-trends-2026"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Sustainable Packaging Trends 2026", url: "/blog/sustainable-packaging-trends-2026" },
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
              June 27, 2026 · 11 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Sustainable Packaging Trends 2026: From FSC-Certified Materials to Circular Design
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            The green packaging innovations reshaping eCommerce in 2026. From compostable materials and refillable systems to smart QR codes and water-based inks — here are the six sustainable packaging trends defining the year, and how DTC brands can act on them.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Why Sustainable Packaging Matters More Than Ever
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The sustainable packaging market is projected to reach <strong>$470 billion by 2027</strong>, growing at nearly 7.5% CAGR — outpacing conventional packaging more than two-to-one. For DTC and eCommerce brands, sustainable packaging trends in 2026 are no longer a niche differentiator. They're a baseline expectation, a regulatory necessity, and increasingly a competitive moat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              On the consumer side, <strong>73% of global consumers</strong> now say they would change consumption habits to reduce environmental impact, and 60% will pay more for products in sustainable packaging, according to recent McKinsey and Nielsen data. Gen Z and Millennial shoppers — who now represent over 60% of DTC purchases — are particularly vocal, with 81% citing packaging sustainability as a factor in their purchase decisions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              On the regulatory side, the landscape is tightening fast. The EU Packaging and Packaging Waste Regulation (PPWR) takes full effect in 2026, mandating recyclability, recycled content minimums, and extended producer responsibility (EPR) fees. California's SB 54 requires all packaging in the state to be recyclable or compostable by 2032, with interim targets kicking in this year. Similar regulations are advancing in the UK, Canada, Australia, and dozens of US states. Brands that delay sustainability investments today will pay escalating EPR fees tomorrow — or lose market access entirely.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The good news is that green packaging innovations have matured. The materials, certifications, and manufacturing capabilities now exist to make sustainable packaging accessible to brands of any size — starting at MOQs as low as 100 units. Let's break down the six trends defining sustainable packaging in 2026 and how your brand can act on each one. For a broader design lens, see our <Link href="/blog/packaging-design-trends-2026" className="text-green-700 underline font-semibold">packaging design trends 2026</Link> guide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Trend 1: FSC-Certified Materials Go Mainstream
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Forest Stewardship Council (FSC) certification has shifted from a niche eco-credential to a mainstream baseline. In 2026, every major US and EU retailer — from Target to Whole Foods to Amazon's Climate Pledge Friendly program — either requires or strongly prefers FSC-certified paper packaging. The certification guarantees that paper comes from responsibly managed forests that protect biodiversity, respect indigenous rights, and maintain ecosystem health.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The cost gap has also closed. FSC-certified paperboard now carries a premium of just <strong>$0.00-$0.05 per unit</strong> over conventional paperboard — a rounding error for most brands, especially when amortized across higher-volume runs. Combined with soy-based inks and water-based coatings, FSC-certified packaging delivers a fully recyclable, credible sustainability story that consumers and regulators can verify.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The strategic move for DTC brands: make FSC-certified paperboard your default spec, not an upsell. When your manufacturer already holds FSC chain-of-custody certification, you can use the FSC logo on your packaging without holding your own certificate — making this credential accessible even at 100-unit MOQs. Explore BUpack's <Link href="/fsc-certified-packaging" className="text-green-700 underline font-semibold">FSC-certified packaging</Link> options to get started.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Trend 2: Compostable &amp; Biodegradable Innovations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Compostable packaging is one of the fastest-growing eco packaging trends in 2026. Unlike conventional plastics — which persist for centuries — compostable materials break down into nutrient-rich compost under specific conditions. The technology has matured significantly, with three material families leading the way:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>PLA (Polylactic Acid)</strong> — Derived from corn or sugarcane. Industrially compostable under EN 13432. Best for rigid containers, windows, and food-contact packaging.</li>
              <li><strong>PHA (Polyhydroxyalkanoates)</strong> — Microbially produced from fermentation. Marine-degradable and home-compostable. Premium pricing but the most promising material for flexible packaging.</li>
              <li><strong>Mycelium (mushroom-based)</strong> — Grown from agricultural waste and fungal roots. Fully home-compostable. Replaces foam inserts and protective packaging.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The critical distinction brands must understand is <strong>industrial vs. home compostable</strong>. Industrial compostable (EN 13432, ASTM D6400) requires commercial composting facilities at 55-60°C. Home compostable (TÜV OK Compost HOME) breaks down at ambient home-composting temperatures. Most US consumers lack access to industrial composting, so home-compostable certification carries far more practical value — and increasingly more marketing credibility.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brands must also avoid the biodegradable greenwashing trap. "Biodegradable" is an unregulated term — everything biodegrades eventually, even conventional plastics (just over centuries). Always use certified compostable materials and clearly label the disposal pathway. For a deep dive on materials and certifications, see our <Link href="/blog/compostable-packaging-alternatives" className="text-green-700 underline font-semibold">compostable packaging alternatives</Link> guide and the <Link href="/blog/biodegradable-ecommerce-packaging-guide" className="text-green-700 underline font-semibold">biodegradable ecommerce packaging guide</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Trend 3: Minimalist Packaging Design
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most sustainable packaging is no packaging — and the next best is less packaging. Minimalist design has emerged as one of the most impactful sustainable packaging trends because it reduces material use at the source rather than trying to recycle it after the fact.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Right-sizing alone — designing boxes that fit the product without excess air space — can reduce material use by <strong>15-25%</strong>, lower dimensional shipping costs, and dramatically cut corrugated waste. Major brands like Apple and Allbirds have made minimalist packaging a signature of their brand identity, proving that "less" can feel premium rather than cheap.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond right-sizing, minimalist design in 2026 means:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Monomaterial construction</strong> — using a single recyclable material (e.g., all-paper) instead of mixed laminates that can't be separated for recycling.</li>
              <li><strong>Eliminating inserts</strong> — replacing printed inserts with QR codes that link to digital care instructions and brand stories.</li>
              <li><strong>Tamper-evident design without plastic seals</strong> — using tear-strips and die-cut closures instead of shrink bands.</li>
              <li><strong>Structural protection over filler</strong> — designing box interiors with custom folds and tabs that hold products in place without bubble wrap or foam.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Minimalism is also where sustainability meets economics. Less material means lower unit cost, lower shipping weight, and lower storage footprint. For DTC brands operating on thin margins, the minimalist approach often pays for itself within the first production run.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Trend 4: Reusable &amp; Refillable Systems
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The circular packaging design movement is shifting packaging from single-use to multi-use. Reusable and refillable systems — once limited to niche zero-waste shops — are now scaling across beauty, personal care, household, and supplement categories. The global refillable packaging market is projected to reach $52 billion by 2028.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Three models are proving commercially viable in 2026:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Brand-owned refill systems</strong> — Brands sell a durable "forever" container (glass bottle, metal tin) and ship refills in minimal, recyclable pouches. Examples: Ritual supplements, Byredo perfume, Blueland cleaners.</li>
              <li><strong>Loop-style pooled logistics</strong> — Third-party platforms (Loop, Olive) collect, clean, and redistribute standardized durable packaging across multiple brands. The brand pays a per-use fee instead of per-unit packaging cost.</li>
              <li><strong>In-store refill stations</strong> — Retailers like Whole Foods and Lush offer bulk refills where customers bring their own containers. The model works best for high-frequency consumables.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              For DTC brands, the brand-owned refill model is the most accessible starting point. The durable primary container becomes a one-time cost amortized over many uses, while refill packaging can be ultra-minimal — often a small recyclable pouch or paperboard carton. The unit economics improve dramatically after the customer's second purchase, and retention metrics typically jump 30-50% as customers commit to the refill loop. Even if your brand isn't ready for full refill systems, designing packaging that's <em>reuse-friendly</em> — durable, beautiful, and functional enough to keep — extends brand presence in the customer's home.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Trend 5: Smart Packaging with QR Codes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              QR codes have evolved from a pandemic-era restaurant menu gimmick into a core sustainability tool. By moving information from print to digital, smart packaging with QR codes lets brands reduce insert waste, update content dynamically, and create richer customer experiences without adding physical material.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The sustainability case is straightforward: every printed insert, instruction card, and marketing flyer adds weight, material, and end-of-life burden. A single QR code printed on the box can replace all of it — linking to:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Digital care instructions</strong> — video tutorials, product guides, and usage tips that update in real time.</li>
              <li><strong>Sustainability storytelling</strong> — material sourcing, carbon footprint data, and end-of-life disposal instructions specific to the customer's location.</li>
              <li><strong>Batch and authenticity tracking</strong> — supply chain transparency that combats counterfeits and builds trust.</li>
              <li><strong>Loyalty and reordering</strong> — one-scan reordering, referral codes, and unboxing-experience landing pages that drive retention.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The data upside is significant. QR scans give brands anonymous engagement analytics — scan rate, time-on-page, geographic distribution — that printed inserts simply cannot provide. This data closes the loop on packaging ROI, showing exactly how customers interact with your packaging after the unboxing moment. The cost of adding a QR code is essentially zero (it's just ink on paper), making this one of the highest-ROI sustainable packaging trends of 2026.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Trend 6: Water-Based Inks &amp; Adhesives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The least visible but most pervasive sustainability shift in 2026 is happening in inks and adhesives — the materials that hold packaging together and carry its branding. Conventional petroleum-based inks contain volatile organic compounds (VOCs) that harm air quality and human health. Conventional adhesives often contaminate recycling streams, rendering otherwise recyclable paper unrecyclable.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Water-based inks and adhesives solve both problems. Soy-based and water-based inks are renewable, biodegradable, and produce significantly fewer VOC emissions during printing. Repulpable adhesives dissolve during paper recycling, allowing the full package to be processed in standard paper recycling streams. Combined with water-based coatings (instead of plastic lamination), packaging becomes fully recyclable without sacrificing print quality.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The cost gap has narrowed dramatically. At volumes of 5,000+ units, soy-based inks are cost-comparable to petroleum inks. Water-based coatings cost slightly more than UV coating but eliminate the plastic contamination that disqualifies packaging from recycling. For brands serious about end-to-end sustainability — not just surface-level eco claims — water-based inks and adhesives are non-negotiable. BUpack uses FDA-compliant soy-based inks and water-based coatings as standard on every order. Learn more on our <Link href="/eco" className="text-green-700 underline font-semibold">eco packaging</Link> page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              How DTC Brands Can Adapt
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Understanding sustainable packaging trends is one thing. Acting on them is another. Here's a practical, phased roadmap for DTC brands looking to align with the 2026 landscape without breaking budgets or disrupting fulfillment:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Phase 1 (Month 1) — Audit &amp; quick wins.</strong> Catalog every material in your fulfillment flow. Swap plastic inner protection for honeycomb paper or shredded kraft. Switch from poly mailers to corrugated mailer boxes. These changes reduce plastic by 80%+ with minimal cost impact.</li>
              <li><strong>Phase 2 (Month 2-3) — Material upgrades.</strong> Specify FSC-certified paperboard as your default. Move to soy-based inks and water-based coatings. Replace plastic tape with paper tape. These add $0.05-$0.15 per unit but unlock major sustainability marketing value.</li>
              <li><strong>Phase 3 (Month 4-6) — Design for circularity.</strong> Right-size every box to eliminate air space. Replace printed inserts with QR codes. Test compostable materials for product-contact packaging. Explore refillable primary containers if your category supports it.</li>
              <li><strong>Phase 4 (Month 6+) — Communicate &amp; certify.</strong> Add sustainability badges to product pages. Include an unboxing insert explaining your journey. Pursue third-party certifications (FSC, Plastic-Free, Climate Neutral) that validate your claims and unlock retail distribution.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most important principle: <strong>don't let perfection be the enemy of progress.</strong> A brand that swaps plastic mailers for FSC-certified paper mailers next month is doing more than one waiting for a "perfect" compostable solution next year. Start with the changes you can make at 100-unit MOQ, measure the customer response, and scale from there. For more on the small-brand playbook, see our <Link href="/blog/eco-friendly-packaging-small-business" className="text-green-700 underline font-semibold">eco-friendly packaging guide for small businesses</Link>.
            </p>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-green-900">
                <li>The sustainable packaging market is reaching $470B by 2027, driven by consumer demand (73% prefer sustainable) and tightening regulations (EU PPWR, California SB 54)</li>
                <li>FSC-certified materials have gone mainstream — the $0.00-$0.05 per unit premium is now a baseline, not an upsell, with retailers increasingly requiring it</li>
                <li>Compostable innovations (PLA, PHA, mycelium) are maturing; understand the industrial vs. home compostable distinction and avoid "biodegradable" greenwashing</li>
                <li>Minimalist design reduces material at the source — right-sizing alone cuts material use 15-25% while lowering shipping costs</li>
                <li>Reusable and refillable systems are scaling across beauty, supplements, and household categories, with brand-owned refill models showing 30-50% retention lifts</li>
                <li>QR codes replace printed waste while delivering engagement analytics — essentially zero-cost sustainability with measurable ROI</li>
                <li>Water-based inks, repulpable adhesives, and water-based coatings eliminate the invisible plastic contamination that disqualifies packaging from recycling</li>
                <li>DTC brands should follow a phased 6-month roadmap: audit, material upgrades, circular design, then certification and communication</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to align with 2026's sustainable packaging trends?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                FSC-certified paperboard, soy-based inks, water-based coatings, and circular design — all starting at 100 units with free design support and digital proofs.
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
