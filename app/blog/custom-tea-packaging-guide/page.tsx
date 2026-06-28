import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Tea Packaging Guide | BUpack",
  description:
    "Complete guide to custom tea packaging. Drawer boxes, tea tin boxes, and pyramid bag sachets. FSC-certified, low MOQ from 100 units for tea brands.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/custom-tea-packaging-guide",
  },
  openGraph: {
    title: "Custom Tea Packaging Guide | BUpack",
    description:
      "Complete guide to custom tea packaging. Drawer boxes, tea tin boxes, and pyramid bag sachets. FSC-certified, low MOQ from 100 units for tea brands.",
    url: "https://www.bupackeco.com/blog/custom-tea-packaging-guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Tea Packaging Guide | BUpack",
    description:
      "Complete guide to custom tea packaging. Drawer boxes, tea tin boxes, and pyramid bag sachets. FSC-certified, low MOQ from 100 units for tea brands.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "What is the best packaging for loose leaf tea?",
    answer:
      "The best packaging for loose leaf tea is an airtight rigid box or tin with a resealable inner pouch that blocks light, moisture, and oxygen. FSC-certified paperboard drawer boxes with food-grade inner liners offer premium shelf presence while protecting freshness. For DTC tea brands, a rigid gift box with a branded interior insert creates an unboxing experience that justifies premium pricing. Always use FDA-compliant food-grade inks and coatings for any packaging that contacts tea directly.",
  },
  {
    question: "What's the minimum order quantity for custom tea packaging?",
    answer:
      "BUpack offers custom tea packaging starting at just 100 units per design using digital printing technology. This low MOQ is ideal for specialty tea brands, limited-edition seasonal blends, and new roasters testing market response. For larger volumes (500+ units), offset printing becomes available with lower per-unit costs. Tea tin boxes and pyramid sachet bags are also available at low MOQs, though tin minimums may be slightly higher due to tooling.",
  },
  {
    question: "Can I get eco-friendly custom tea packaging?",
    answer:
      "Yes. BUpack offers FSC-certified paperboard, soy-based inks, water-based coatings, and fully recyclable designs for tea packaging. You can also choose post-consumer recycled (PCR) paperboard with up to 100% recycled content. Pyramid tea bags are available in plant-based PLA mesh, which is industrially compostable. All materials meet FDA indirect food contact safety standards while supporting your brand's sustainability commitments. Learn more on our FSC-certified packaging page.",
  },
  {
    question: "Do tea bags need oxygen absorbers or nitrogen flushing?",
    answer:
      "For premium whole-leaf teas and sensitive green teas, nitrogen-flushed foil pouches with oxygen absorbers extend shelf life from 6 months to 18-24 months. For pyramid sachets and everyday tea bags, a multi-layer foil laminate with a strong seal is usually sufficient. The key is matching barrier protection to your tea type: green and white teas need the highest barrier, while black and herbal teas are more forgiving. BUpack can source and integrate food-grade liners and oxygen absorbers into your custom tea box packaging.",
  },
  {
    question: "How do I design tea packaging for both retail and DTC?",
    answer:
      "Design a primary folding carton or tin that works on retail shelves (compact, stackable, with clear branding and required label info), then ship it inside a branded corrugated mailer box for DTC orders. This dual-format approach keeps retail packaging compact while the mailer box delivers the unboxing experience online shoppers expect. Use the same visual identity across both layers — exterior mailer, interior carton, and pyramid sachet wrappers — for a cohesive brand presentation that scales from 100-unit launches to wholesale distribution.",
  },
];

export default function CustomTeaPackagingGuide() {
  return (
    <>
      <ArticleSchema
        headline="Custom Tea Packaging Guide: Drawer Boxes, Tins, and Pyramid Sachets"
        description="Complete guide to custom tea packaging. Drawer boxes, tea tin boxes, and pyramid bag sachets. FSC-certified, low MOQ from 100 units for tea brands."
        datePublished="2026-06-29T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/custom-tea-packaging-guide"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Custom Tea Packaging Guide", url: "/blog/custom-tea-packaging-guide" },
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
              June 29, 2026 · 11 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Custom Tea Packaging Guide: Drawer Boxes, Tins, and Pyramid Sachets
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            Complete guide to custom tea packaging. Drawer boxes, tea tin boxes, and pyramid bag sachets. FSC-certified, low MOQ from 100 units for tea brands.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Why Custom Tea Packaging Defines Your Brand
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The global tea market is projected to reach <strong>$86 billion by 2030</strong>, growing at 6.6% CAGR, with specialty and loose-leaf teas outpacing the overall category by nearly two-to-one. In a category dominated by mass-market tea bags, custom tea packaging is the single most powerful tool a specialty tea brand has to command premium pricing, communicate quality, and build shelf presence — whether that shelf is in a Whole Foods, a boutique tea shop, or a customer's monthly subscription box.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tea is a sensory product. Customers don't just buy tea — they buy ritual, calm, provenance, and craft. A generic kraft box with a sticker doesn't tell the story of your single-estate Darjeeling or your hand-rolled jasmine pearls. Custom tea box packaging does. It's the difference between a $9 commodity and a $34 luxury experience. For specialty tea brands, packaging is also a freshness technology: tea degrades rapidly when exposed to oxygen, moisture, light, or strong odors, and the right packaging protects those delicate flavor compounds.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For DTC tea brands, packaging plays an even bigger role. Your box is the <strong>entire unboxing experience</strong> — there's no retail shelf to lean on. Drawer boxes with tea tin boxes and pyramid bag sachets create the kind of memorable ritual that drives repeat purchases, gift orders, and social shares. Explore our <Link href="/industries/tea-beverages" className="text-green-700 underline font-semibold">tea and beverage packaging</Link> solutions for industry-specific designs, or read on for the complete guide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Types of Custom Tea Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tea packaging comes in several formats, each suited to different product types, price points, and distribution channels. Choosing the right format depends on your tea's form factor (loose leaf vs. bagged vs. pyramid sachets), your sales channel (retail vs. DTC vs. wholesale), and your brand positioning.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Drawer Boxes for Premium Loose Leaf Tea
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Drawer boxes — also called matchbox-style or slide-out boxes — are the gold standard for premium loose leaf tea packaging. A rigid outer sleeve holds an inner tray that slides out, revealing the tea in a deliberate, ritualistic motion that elevates the perceived value. Drawer boxes support full-color exterior and interior printing, foil stamping, and embossing for a true luxury feel. Our <Link href="/products/rigid-gift-boxes" className="text-green-700 underline font-semibold">rigid gift boxes</Link> are available from 100 units with digital printing, making them accessible even for new specialty tea brands launching their first SKU.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Tea Tin Boxes for Shelf Presence and Reusability
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tea tin boxes — paperboard-wrapped rigid boxes with metal or food-grade interior lining — offer superior shelf presence and brand longevity. Tins are inherently reusable; customers keep them for storage, planters, or travel kits, extending your brand's presence in their home long after the tea is gone. Tea tin boxes provide excellent barrier protection against light, moisture, and oxygen, making them ideal for delicate green and white teas. They also stack cleanly on retail shelves and survive DTC shipping without damage when paired with a custom insert.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Pyramid Bag Sachets and Folding Cartons
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pyramid tea bags — made from plant-based PLA mesh or nylon — have become the standard for premium bagged tea. The pyramid shape gives whole-leaf tea room to expand, delivering a superior brew compared to flat tea bags. Pyramid sachets are typically packaged in branded folding cartons (12-18pt paperboard) holding 12-25 sachets, with each sachet wrapped in its own foil envelope for freshness. Custom printed envelopes and outer cartons create a cohesive brand system. For DTC tea subscriptions, a branded <Link href="/products/custom-mailer-boxes" className="text-green-700 underline font-semibold">custom mailer box</Link> with pyramid sachets inside creates a memorable monthly ritual.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Tea Bag Packaging Wholesale for Multi-SKU Brands
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For tea brands scaling beyond a single SKU, tea bag packaging wholesale — bulk production of folding cartons, sachet envelopes, and mailer boxes — unlocks significant cost savings. Wholesale pricing typically kicks in at 1,000-2,000 units per SKU, with the steepest discounts at 5,000+ units. The most cost-effective approach is to standardize carton sizes across your entire tea line and use product-specific sachet envelopes and labels to differentiate SKUs. This reduces tooling costs, simplifies inventory, and lets you hit higher volume breakpoints on shared components.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Food Safety and FDA Compliance for Tea Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tea packaging operates under specific food safety regulations that govern any material in contact with the product. Understanding these requirements is essential for both compliance and consumer safety — and for protecting your brand from costly recalls.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the United States, tea is regulated as a food under the <strong>FDA Federal Food, Drug, and Cosmetic Act</strong>. While packaging materials don't require direct FDA pre-approval, they must comply with <strong>indirect food contact safety</strong> standards under 21 CFR Part 174-179. This means any material that could potentially contact the tea — including the interior of boxes, sachet envelopes, and even printing inks — must be safe and non-reactive, with no migration of harmful substances into the product.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Key FDA Compliance Requirements
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Indirect food contact safety</strong> — Inks, coatings, and adhesives must be formulated to prevent migration into the tea. Soy-based inks and water-based coatings are the industry standard for compliance.</li>
              <li><strong>Multi-layer barrier liners</strong> — Tea packaging that contacts tea directly requires a food-grade liner (foil, PLA, or food-grade paper) between the printed outer carton and the product. The liner provides the FDA-compliant food contact surface.</li>
              <li><strong>Labeling compliance</strong> — Tea packaging must display the product name, net weight, ingredient list, manufacturer/distributor information, and country of origin. The box design must accommodate these mandatory label elements without obscuring branding.</li>
              <li><strong>Moisture, light, and oxygen barrier</strong> — Tea's flavor compounds degrade rapidly when exposed to moisture, UV light, or oxygen. Packaging must provide adequate barrier protection for the product's intended shelf life — typically 12-24 months for premium teas.</li>
              <li><strong>Odor neutrality</strong> — Tea readily absorbs surrounding odors. Packaging materials, adhesives, and inks must be odor-neutral to prevent flavor contamination. Low-VOC soy inks are essential.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              BUpack uses FDA-compliant soy-based inks and water-based coatings on all tea packaging orders. We source food-grade inner liners and sachet materials with full documentation, including certificates of compliance for food-contact materials.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Freshness Technology: Barrier Protection for Tea
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tea is one of the most packaging-sensitive products on the planet. Within weeks of harvest, tea begins losing volatile aroma compounds, and improper packaging accelerates this degradation dramatically. The right barrier protection can extend shelf life from 6 months to 24 months — a make-or-break factor for premium tea brands importing from single-origin estates.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Understanding Barrier Layers
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Foil laminate (PET/AL/PE)</strong> — The gold standard for tea freshness. Aluminum foil blocks 100% of light, oxygen, and moisture. Used for premium sachet envelopes and inner pouches.</li>
              <li><strong>Metallized film (PET/VMPET/PE)</strong> — A cost-effective alternative to pure foil. Vacuum-deposited aluminum layer provides 95%+ barrier at lower cost. Suitable for everyday and mid-tier teas.</li>
              <li><strong>PLA biopolymer</strong> — Plant-based, industrially compostable. Lower barrier than foil but sufficient for short-shelf-life teas and brands prioritizing sustainability.</li>
              <li><strong>Kraft paper with food-grade wax lining</strong> — A traditional, natural-feeling option for whole-leaf tea tins. Provides moisture barrier without synthetic films.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Nitrogen Flushing and Oxygen Absorbers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For ultra-premium teas — first-flush Darjeeling, shade-grown Japanese gyokuro, aged pu-erh — nitrogen-flushed packaging with oxygen absorbers extends shelf life to 18-24 months. Nitrogen flushing replaces oxygen inside the sealed package with nitrogen gas, preventing oxidation. Oxygen absorbers (small iron-based packets) scavenge residual oxygen down to less than 0.01%. BUpack can integrate both technologies into your tea packaging production, with sourcing for food-grade oxygen absorbers and nitrogen-flush sealing equipment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Eco-Friendly Tea Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sustainability is a defining purchase driver for tea consumers. A 2026 category survey found that <strong>74% of specialty tea buyers</strong> consider sustainable packaging important — well above the consumer-goods average. Tea's natural, wellness-oriented customer base expects the brands they trust to care about planetary health, too.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              FSC-Certified Paperboard
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Forest Stewardship Council (FSC) certification is the gold standard for sustainable paper packaging. FSC-certified paperboard comes from responsibly managed forests that protect biodiversity, respect indigenous rights, and maintain ecosystem health. BUpack offers FSC-certified options across all tea packaging formats — drawer boxes, tins, folding cartons, and sachet envelopes. When your manufacturer already holds FSC chain-of-custody certification, you can use the FSC logo on your packaging without holding your own certificate — accessible even at 100-unit MOQs. Learn more on our <Link href="/fsc-certified-packaging" className="text-green-700 underline font-semibold">FSC-certified packaging</Link> page.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Compostable Pyramid Sachets
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional nylon pyramid tea bags are a hidden source of microplastic pollution. The 2026 alternative is plant-based PLA mesh — derived from corn or sugarcane — which is industrially compostable under EN 13432 standards. PLA sachets perform identically to nylon in brewing, with the same pyramid shape that gives whole-leaf tea room to expand. For brands targeting home-compostable certification, newer PHA (polyhydroxyalkanoates) sachets are emerging as a marine-degradable, home-compostable option, though at a higher cost.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Soy-Based Inks and Water-Based Coatings
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional petroleum-based printing inks contain volatile organic compounds (VOCs) that are harmful to both the environment and human health — and that can migrate into tea through packaging. Soy-based inks offer the same print quality with significantly lower environmental impact and near-zero odor, which is critical for flavor-sensitive tea packaging. Combined with water-based coatings (instead of plastic lamination), your tea packaging can be fully recyclable while maintaining vibrant, premium print quality. For more on eco-strategy for small brands, see our <Link href="/blog/eco-friendly-packaging-small-business" className="text-green-700 underline font-semibold">eco-friendly packaging guide for small businesses</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Tea Subscription Box Packaging Strategy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The tea subscription market has exploded, with brands like Sips By, Free Your Tea, and Plum Deluxe leading the personalized tea curation trend. Tea subscription brands face unique packaging challenges that differ from traditional retail models — the same box every month leads to unboxing fatigue, while fully custom designs break the unit economics.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Monthly Design Rotation Strategy
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most cost-effective subscription tea packaging strategy: keep the exterior box consistent (order in bulk at 2,000-5,000 units for maximum price break), and rotate interior printing, sachet envelopes, and tasting note cards monthly using digital printing. This gives subscribers something new to discover each month without the cost of fully custom box designs. A branded mailer box with seasonal interior artwork creates the kind of monthly ritual that drives retention. For a deeper framework on subscription packaging, see our <Link href="/blog/packaging-for-subscription-boxes-guide" className="text-green-700 underline font-semibold">subscription box packaging guide</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Tasting Note Cards and Brand Storytelling
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tasting note cards are the heart of the tea subscription experience. Include a 4x6 card with each tea's origin, brewing instructions, flavor profile, and pairing suggestions. Premium brands add foil stamping or deckled edges for a tactile, gift-like quality. The card is also where you communicate sustainability credentials (FSC, compostable sachet, fair-trade sourcing) — turning packaging into brand storytelling that customers photograph and share on social media.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Packaging That Scales with Subscriber Growth
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscription tea brands grow month over month, which means packaging needs change. Start with digital printing at 100-500 units per month — no plate fees, fast turnaround, ability to test designs. As you scale past 2,000 monthly subscribers, transition to offset printing for lower per-unit costs. BUpack's flexible production model supports this transition seamlessly, with no minimum commitment to switch printing methods.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Cost Considerations for Custom Tea Packaging
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tea packaging costs vary significantly based on format, volume, printing method, and finishing options. Here's a realistic cost breakdown for the most common tea packaging formats:
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
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Drawer box (rigid, w/ sleeve)</td><td className="py-2 px-4 text-gray-700">$3.50–$6.00</td><td className="py-2 px-4 text-gray-700">$2.20–$3.80</td><td className="py-2 px-4 text-gray-700">$1.50–$2.80</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Tea tin box (paper-wrapped)</td><td className="py-2 px-4 text-gray-700">$2.80–$4.50</td><td className="py-2 px-4 text-gray-700">$1.60–$2.60</td><td className="py-2 px-4 text-gray-700">$1.10–$1.90</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Pyramid sachet envelope (per 25)</td><td className="py-2 px-4 text-gray-700">$1.20–$2.00</td><td className="py-2 px-4 text-gray-700">$0.60–$1.10</td><td className="py-2 px-4 text-gray-700">$0.35–$0.70</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Mailer box (E-flute, 4-color)</td><td className="py-2 px-4 text-gray-700">$2.50–$4.00</td><td className="py-2 px-4 text-gray-700">$1.50–$2.20</td><td className="py-2 px-4 text-gray-700">$1.00–$1.60</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Tasting note card (4x6, 2-sided)</td><td className="py-2 px-4 text-gray-700">$0.30–$0.55</td><td className="py-2 px-4 text-gray-700">$0.15–$0.30</td><td className="py-2 px-4 text-gray-700">$0.08–$0.18</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-6">* Prices are per-unit estimates including production. Shipping not included. Digital printing pricing shown; offset printing available at 500+ units with lower per-unit costs.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">
              Cost Optimization Tips
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Start with digital printing</strong> — Zero plate fees ($200-$600 saved). Ideal for runs under 2,000 units.</li>
              <li><strong>Standardize carton size</strong> — Use one folding carton size for multiple tea SKUs with product-specific sachet envelopes and labels. Reduces tooling costs and enables higher volume pricing.</li>
              <li><strong>Order at volume breakpoints</strong> — The biggest price drops happen at 500, 1,000, and 5,000 units. If you're close to a breakpoint, ordering up usually saves money.</li>
              <li><strong>Separate box from sachet orders</strong> — Sachets are shelf-stable for 24+ months in sealed cases. Order boxes more frequently; order sachets in larger runs for better pricing.</li>
              <li><strong>Simplify finishing</strong> — Full-color print + matte lamination looks premium without the cost of foil stamping or embossing. Add specialty finishes on reorders.</li>
              <li><strong>Use FSC paper as default</strong> — At BUpack, FSC-certified paper adds only $0.00-$0.05 per unit. The sustainability marketing value far exceeds the cost.</li>
            </ul>

            {/* Key Takeaways */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-green-900">
                <li>Custom tea packaging is the primary tool for premium positioning in an $86B market dominated by commodity tea bags</li>
                <li>Drawer boxes, tea tin boxes, folding cartons, and pyramid sachet envelopes each serve distinct product types and price points</li>
                <li>FDA indirect food contact safety requires food-grade inks, coatings, and inner liners; soy-based inks and water-based coatings are the standard</li>
                <li>Foil laminate barriers and nitrogen flushing extend tea shelf life from 6 months to 18-24 months for premium whole-leaf teas</li>
                <li>FSC-certified paperboard, compostable PLA sachets, and soy inks meet the sustainability expectations of 74% of specialty tea buyers</li>
                <li>Tea subscription brands benefit from monthly interior rotation using digital printing — fresh experiences at minimal cost premium</li>
                <li>Start at 100 units with digital printing; scale to offset at 2,000+ units for maximum cost efficiency</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">🍵</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ready to launch your custom tea packaging?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                FDA-compliant materials, FSC-certified paperboard, foil barrier liners, and compostable PLA sachets. Start at 100 units with free design support and digital proofs.
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
