import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Supplement Packaging Guide | BUpack",
  description:
    "Complete guide to custom supplement and vitamin packaging. FDA-compliant materials, child-resistant options, and eco-friendly designs. Low MOQ from 100 units from BUpack.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/custom-supplement-packaging-guide/",
  },
  openGraph: {
    title: "Custom Supplement Packaging Guide | BUpack",
    description:
      "Complete guide to custom supplement and vitamin packaging. FDA-compliant materials, child-resistant options, and eco-friendly designs. Low MOQ from 100 units from BUpack.",
    url: "https://www.bupackeco.com/blog/custom-supplement-packaging-guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Supplement Packaging Guide | BUpack",
    description:
      "Complete guide to custom supplement and vitamin packaging. FDA-compliant materials, child-resistant options, and eco-friendly designs. Low MOQ from 100 units from BUpack.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "What are the FDA requirements for supplement packaging?",
    answer:
      "Supplement packaging falls under FDA 21 CFR Part 111 for dietary supplements. While packaging materials don't require direct FDA pre-approval, they must comply with indirect food contact safety standards. This means using food-grade inks, coatings, and adhesives that won't migrate into the product. BUpack uses FDA-compliant soy-based inks and water-based coatings on all supplement packaging orders.",
  },
  {
    question: "Do I need child-resistant packaging for my supplements?",
    answer:
      "Child-resistant packaging is required by the Poison Prevention Packaging Act (PPPA) for supplements containing iron in doses of 250mg or more per package, and for any product classified as a drug rather than a dietary supplement. However, many supplement brands choose child-resistant packaging voluntarily as a safety best practice — especially for gummy vitamins, high-potency formulations, and products sold in households with children. BUpack offers CR-certified folding cartons and mailer boxes.",
  },
  {
    question: "What's the minimum order quantity for custom supplement boxes?",
    answer:
      "BUpack offers custom supplement packaging starting at just 100 units per design using digital printing technology. This low MOQ is ideal for new supplement brands, limited-edition product launches, or brands testing new packaging designs before committing to larger production runs. For larger volumes (500+), offset printing becomes available with lower per-unit costs.",
  },
  {
    question: "What materials are best for supplement packaging?",
    answer:
      "The most common materials for supplement packaging are: (1) FSC-certified paperboard (12-18pt) for folding cartons — lightweight, printable, and recyclable; (2) Corrugated E-flute for mailer boxes — durable for DTC shipping; (3) Kraft paperboard for an eco-friendly, natural aesthetic that resonates with health-conscious consumers. All materials should use FDA-compliant inks and coatings for indirect food contact safety.",
  },
  {
    question: "Can I get eco-friendly supplement packaging?",
    answer:
      "Yes. BUpack offers FSC-certified paperboard, soy-based inks, water-based coatings, and fully recyclable designs for supplement packaging. You can also choose post-consumer recycled (PCR) paperboard with up to 100% recycled content. All materials meet FDA indirect food contact safety standards while supporting your brand's sustainability commitments. Learn more on our FSC-certified packaging page.",
  },
];

export default function CustomSupplementPackagingGuide() {
  return (
    <>
      <ArticleSchema
        headline="Custom Supplement Packaging Guide: FDA-Compliant, Eco-Friendly Designs"
        description="Complete guide to custom supplement and vitamin packaging. FDA-compliant materials, child-resistant options, and eco-friendly designs. Low MOQ from 100 units from BUpack."
        datePublished="2026-06-21T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/custom-supplement-packaging-guide"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Custom Supplement Packaging Guide", url: "/blog/custom-supplement-packaging-guide" },
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
              June 21, 2026 · 10 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Custom Supplement Packaging Guide: FDA-Compliant, Eco-Friendly Designs
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            Complete guide to custom supplement and vitamin packaging. FDA-compliant materials, child-resistant options, and eco-friendly designs. Low MOQ from 100 units from BUpack.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Why Supplement Packaging Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The global dietary supplements market is projected to reach <strong>$327 billion by 2030</strong>, growing at 8.9% CAGR. In this crowded space, your packaging isn't just a container — it's your brand's first physical impression, a trust signal, and a regulatory requirement all rolled into one. The right supplement packaging communicates quality, safety, and brand identity before the customer ever opens the bottle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For supplement brands, packaging serves three critical functions: <strong>brand differentiation</strong> in a saturated market where consumers make split-second shelf decisions, <strong>regulatory compliance</strong> with FDA guidelines for dietary supplements, and <strong>product protection</strong> against moisture, light, and contamination that can degrade active ingredients. A generic white box with a sticker doesn't tell your customer why your turmeric is different from the 47 other turmeric supplements on the shelf. Custom packaging does.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For DTC supplement brands shipping directly to consumers, packaging plays an even bigger role. Your box is the <strong>entire unboxing experience</strong> — there's no retail shelf to lean on. Custom mailer boxes with branded interiors create the kind of memorable experience that drives repeat purchases and social shares. If you're launching a supplement brand, our <Link href="/blog/custom-packaging-for-startups-guide" className="text-green-700 underline font-semibold">startup packaging guide</Link> covers low-MOQ strategies in detail.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Types of Supplement Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Supplement packaging comes in several formats, each suited to different product types and distribution channels. Choosing the right format depends on your product's form factor, your sales channel (retail vs. DTC), and your brand positioning.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Custom Mailer Boxes for DTC Supplement Brands
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For supplement brands selling direct-to-consumer, custom mailer boxes are the gold standard. These corrugated boxes are durable enough to ship without an outer carton, reducing packaging waste and shipping costs. They support full-color exterior and interior printing, creating a premium unboxing experience. Our <Link href="/products/custom-mailer-boxes" className="text-green-700 underline font-semibold">custom mailer boxes</Link> are available from 100 units with digital printing, making them accessible even for new supplement brands.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Folding Cartons for Retail Supplement Packaging
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Folding cartons are the most common packaging format for supplements sold in retail stores. Made from 12-18pt paperboard, they're lightweight, cost-effective, and offer excellent print surface for branding and regulatory information. Folding cartons can be designed with tamper-evident seals and child-resistant locking mechanisms — important features for supplement safety. They ship flat and assemble easily, reducing storage and shipping costs compared to rigid boxes.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Bottle Inserts and Sleeves
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For brands that package supplements in bottles (pills, capsules, gummies), custom paperboard inserts and sleeves add branding without replacing the primary container. Inserts hold bottles securely in place during shipping, while printed sleeves wrap around bottles for shelf presence. Both options are cost-effective ways to elevate generic bottle packaging into a branded experience — especially when combined with a <Link href="/products/custom-mailer-boxes" className="text-green-700 underline font-semibold">custom mailer box</Link> for DTC orders.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              FDA Compliance for Supplement Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Supplement packaging operates under a specific regulatory framework that's different from both food and pharmaceutical packaging. Understanding these requirements is essential for compliance and consumer safety.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dietary supplements are regulated under <strong>FDA 21 CFR Part 111</strong> (Current Good Manufacturing Practice for Dietary Supplements). While packaging materials themselves don't require direct FDA pre-approval, they must comply with <strong>indirect food contact safety</strong> standards. This means any material that could potentially contact the supplement — including the interior of boxes, inserts, and even printing inks — must be safe and non-reactive.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Key FDA Packaging Requirements
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Indirect food contact safety</strong> — Inks, coatings, and adhesives must be formulated to prevent migration into the product. Soy-based inks and water-based coatings are the industry standard for compliance.</li>
              <li><strong>Tamper-evident features</strong> — While not universally required for supplements, tamper-evident packaging is a GMP best practice and expected by consumers. Options include tear strips, shrink bands, and break-away seals.</li>
              <li><strong>Labeling compliance</strong> — Supplement packaging must display the Supplement Facts panel, ingredient list, manufacturer information, and any required allergen warnings. The box design must accommodate these mandatory label elements.</li>
              <li><strong>Moisture and light protection</strong> — Many active ingredients (probiotics, omega-3s, vitamins A and C) degrade when exposed to moisture, oxygen, or UV light. Packaging must provide adequate barrier protection for the product's shelf life.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              BUpack uses FDA-compliant soy-based inks and water-based coatings on all supplement packaging orders. Our production team is experienced with the documentation requirements for nutraceutical packaging, including certificates of compliance for food-grade materials.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Child-Resistant Packaging Options
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Child-resistant (CR) packaging is a critical consideration for supplement brands, particularly those selling iron-containing supplements, gummy vitamins, or high-potency formulations. Even when not legally required, CR packaging demonstrates a commitment to consumer safety that builds trust.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              When Is Child-Resistant Packaging Required?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under the <strong>Poison Prevention Packaging Act (PPPA)</strong>, child-resistant packaging is mandatory for:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li>Dietary supplements containing <strong>iron in doses of 250mg or more</strong> per package</li>
              <li>Any product classified as an over-the-counter drug rather than a dietary supplement</li>
              <li>Products containing ingredients that pose acute toxicity risks at certain doses</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Even when not legally required, many supplement brands voluntarily choose child-resistant packaging. Gummy vitamins, which can be mistaken for candy by children, are a prime example where voluntary CR packaging is strongly recommended.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Child-Resistant Packaging Designs
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Push-and-turn caps</strong> — The most common CR mechanism for bottles. Requires simultaneous downward pressure and rotation. ASTM D3475 certified.</li>
              <li><strong>CR-certified folding cartons</strong> — Paperboard cartons with locking tabs that require a specific sequence to open. Lightweight, recyclable, and suitable for blister packs or pouches.</li>
              <li><strong>Squeeze-and-lift closures</strong> — Common for gummy and chewable supplement packaging. Requires squeezing designated areas while lifting the lid.</li>
              <li><strong>Slide-lock mechanisms</strong> — A sliding tab must be pushed to release the closure. Popular for premium supplement packaging with a modern look.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              BUpack can incorporate child-resistant features into your custom folding cartons and mailer boxes. CR certification testing follows ASTM D3475 standards, and we coordinate with certified testing laboratories to ensure compliance before production.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Eco-Friendly Supplement Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sustainability is no longer optional for supplement brands. A 2026 consumer survey found that <strong>78% of supplement buyers</strong> consider sustainable packaging important in their purchase decisions — higher than the average across consumer goods categories. Health-conscious consumers expect the brands they trust to care about planetary health, too.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              FSC-Certified Paperboard
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Forest Stewardship Council (FSC) certification is the gold standard for sustainable paper packaging. FSC-certified paperboard comes from responsibly managed forests that protect biodiversity, respect indigenous rights, and maintain ecosystem health. BUpack offers FSC-certified options across all supplement packaging formats. Learn more on our <Link href="/fsc-certified-packaging" className="text-green-700 underline font-semibold">FSC-certified packaging</Link> page.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Recyclable and Recycled Content Options
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Supplement packaging should be designed for end-of-life recyclability. This means avoiding mixed materials (paper-plastic laminates), using water-based coatings instead of plastic films, and clearly labeling packaging as recyclable. For brands wanting to maximize sustainability credentials, post-consumer recycled (PCR) paperboard with up to 100% recycled content is available — without compromising print quality or structural integrity. For more guidance, see our <Link href="/blog/eco-friendly-packaging-small-business" className="text-green-700 underline font-semibold">eco-friendly packaging guide for small businesses</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Soy-Based Inks and Water-Based Coatings
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional petroleum-based printing inks contain volatile organic compounds (VOCs) that are harmful to both the environment and human health. Soy-based inks offer the same print quality with significantly lower environmental impact — they're renewable, biodegradable, and produce fewer VOC emissions. Combined with water-based coatings (instead of plastic lamination), your supplement packaging can be fully recyclable while maintaining vibrant, professional print quality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Custom Packaging for Subscription Supplement Brands
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The supplement subscription market has exploded, with brands like Ritual, Care/of, and Persona leading the personalized nutrition trend. Subscription supplement brands face unique packaging challenges that differ from traditional retail models.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Monthly Design Rotation Strategy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For subscription brands, the same packaging every month leads to unboxing fatigue. A monthly or quarterly design rotation keeps the experience fresh and reduces subscriber churn. The most cost-effective approach: keep the exterior box design consistent (order in bulk at 2,000-5,000 units), and rotate interior printing, insert cards, or tissue paper monthly using digital printing. This gives subscribers something new to discover each month without the cost of fully custom box designs.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Packaging That Scales with Subscriber Growth
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscription brands grow month over month, which means packaging needs change. Start with digital printing at 100-500 units per month — no plate fees, fast turnaround. As you scale past 2,000 monthly subscribers, transition to offset printing for lower per-unit costs. BUpack's flexible production model supports this transition seamlessly, with no minimum commitment to switch printing methods. For more on scaling packaging costs, see our <Link href="/blog/custom-packaging-for-startups-guide" className="text-green-700 underline font-semibold">startup packaging guide</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Cost Considerations for Supplement Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Supplement packaging costs vary significantly based on format, volume, printing method, and finishing options. Here's a realistic cost breakdown for the most common supplement packaging formats:
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
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Folding carton (12pt, 4-color)</td><td className="py-2 px-4 text-gray-700">$1.80–$2.50</td><td className="py-2 px-4 text-gray-700">$0.90–$1.40</td><td className="py-2 px-4 text-gray-700">$0.60–$1.00</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Mailer box (E-flute, 4-color)</td><td className="py-2 px-4 text-gray-700">$2.50–$4.00</td><td className="py-2 px-4 text-gray-700">$1.50–$2.20</td><td className="py-2 px-4 text-gray-700">$1.00–$1.60</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Bottle insert (cardboard)</td><td className="py-2 px-4 text-gray-700">$0.30–$0.50</td><td className="py-2 px-4 text-gray-700">$0.15–$0.30</td><td className="py-2 px-4 text-gray-700">$0.08–$0.20</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Custom sleeve (12pt)</td><td className="py-2 px-4 text-gray-700">$0.80–$1.20</td><td className="py-2 px-4 text-gray-700">$0.40–$0.70</td><td className="py-2 px-4 text-gray-700">$0.25–$0.50</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">CR-certified folding carton</td><td className="py-2 px-4 text-gray-700">$2.20–$3.00</td><td className="py-2 px-4 text-gray-700">$1.20–$1.80</td><td className="py-2 px-4 text-gray-700">$0.80–$1.30</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-6">* Prices are per-unit estimates including production. Shipping not included. Digital printing pricing shown; offset printing available at 500+ units with lower per-unit costs.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Cost Optimization Tips
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Start with digital printing</strong> — Zero plate fees ($200-$600 saved). Ideal for runs under 2,000 units.</li>
              <li><strong>Standardize your box size</strong> — Use one box size for multiple SKUs with product-specific inserts. Reduces tooling costs and enables higher volume pricing.</li>
              <li><strong>Order at volume breakpoints</strong> — The biggest price drops happen at 500, 1,000, and 5,000 units. If you're close to a breakpoint, ordering up usually saves money.</li>
              <li><strong>Simplify finishing</strong> — Full-color print + matte lamination looks premium without the cost of foil stamping, embossing, or spot UV. Add specialty finishes on reorders.</li>
              <li><strong>Use FSC paper as default</strong> — At BUpack, FSC-certified paper adds only $0.00-$0.05 per unit. The sustainability marketing value far exceeds the cost.</li>
            </ul>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-green-900">
                <li>Supplement packaging must balance brand differentiation, FDA compliance, and product protection in a $327B global market</li>
                <li>Custom mailer boxes, folding cartons, and bottle inserts are the three primary packaging formats — each suited to different sales channels</li>
                <li>FDA indirect food contact safety requires food-grade inks and coatings; BUpack uses soy-based inks and water-based coatings as standard</li>
                <li>Child-resistant packaging is mandatory for iron supplements (250mg+) and recommended for gummy vitamins; CR-certified folding cartons are available</li>
                <li>FSC-certified paperboard, soy inks, and recyclable designs meet the sustainability expectations of 78% of supplement buyers</li>
                <li>Subscription supplement brands benefit from monthly design rotation using digital printing — fresh interiors at minimal cost premium</li>
                <li>Start at 100 units with digital printing; scale to offset at 2,000+ units for maximum cost efficiency</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to launch your supplement packaging?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                FDA-compliant materials, child-resistant options, FSC-certified paperboard. Start at 100 units with free design support and digital proofs.
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
