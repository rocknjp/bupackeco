import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Rigid Box vs Corrugated Box: Which Is Right for Your Brand? | BUpack",
  description:
    "A comprehensive comparison of rigid boxes and corrugated boxes — cost, use cases, printing options, unboxing experience, and sustainability. Find the right box type for your brand.",
  alternates: {
    canonical: "https://www.bupackeco.com/compare/rigid-vs-corrugated-boxes",
  },
  openGraph: {
    title: "Rigid Box vs Corrugated Box: Which Is Right for Your Brand? | BUpack",
    description:
      "A comprehensive comparison of rigid boxes and corrugated boxes — cost, use cases, printing options, unboxing experience, and sustainability. Find the right box type for your brand.",
    url: "https://www.bupackeco.com/compare/rigid-vs-corrugated-boxes",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rigid Box vs Corrugated Box: Which Is Right for Your Brand? | BUpack",
    description:
      "A comprehensive comparison of rigid boxes and corrugated boxes — cost, use cases, printing options, unboxing experience, and sustainability. Find the right box type for your brand.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const comparisonData = [
  { factor: "Material", rigid: "Thick greyboard (1.5–3mm) wrapped with paper", corrugated: "Fluted cardboard (single/double/triple wall)" },
  { factor: "Structural Strength", rigid: "Very rigid, holds shape permanently", corrugated: "Strong but flexible, absorbs impact" },
  { factor: "Typical Unit Cost", rigid: "$1.50–$5.00+ (higher for small runs)", corrugated: "$0.30–$1.50 (scales down well)" },
  { factor: "MOQ for Custom", rigid: "300–500 units", corrugated: "100–200 units" },
  { factor: "Printing Quality", rigid: "Premium — foil, embossing, spot UV, soft-touch", corrugated: "Good — flexo or digital, limited special finishes" },
  { factor: "Unboxing Impact", rigid: "Luxury feel, magnetic closure, premium reveal", corrugated: "Functional, clean look, protective" },
  { factor: "Shipping Protection", rigid: "Moderate — needs outer carton for transit", corrugated: "Excellent — designed for shipping" },
  { factor: "Weight", rigid: "Heavy", corrugated: "Lightweight" },
  { factor: "Recyclability", rigid: "Recyclable (separate wrapping from board)", corrugated: "100% curbside recyclable" },
  { factor: "Best For", rigid: "Luxury goods, gifts, cosmetics, jewelry", corrugated: "E-commerce, subscriptions, shipping, bulk goods" },
  { factor: "Eco-Friendly Options", rigid: "FSC greyboard + soy ink", corrugated: "FSC corrugated + water-based ink" },
  { factor: "Stacking / Storage", rigid: "Stacks neatly, holds shape on shelf", corrugated: "Stackable but can compress under heavy load" },
];

const faqItems = [
  {
    question: "Is a rigid box or corrugated box better for e-commerce shipping?",
    answer:
      "Corrugated boxes are generally better for e-commerce shipping because they are lightweight, absorb impact during transit, and are designed for the rigors of logistics. Rigid boxes are best used as the inner product box within an outer shipping carton, providing a premium unboxing experience when the customer opens the package.",
  },
  {
    question: "Can I print full-color designs on corrugated boxes?",
    answer:
      "Yes. Modern digital and flexographic printing allow full-color CMYK printing on corrugated boxes. While the print quality is not as sharp as on rigid boxes (which use offset printing with special finishes), it is more than sufficient for most e-commerce brands. For photographic-quality printing, rigid boxes are the better choice.",
  },
  {
    question: "Which box type is more eco-friendly?",
    answer:
      "Both can be eco-friendly when made with FSC-certified materials and soy-based inks. Corrugated boxes have a slight edge because they are 100% curbside recyclable as-is. Rigid boxes require separating the outer wrapping paper from the greyboard core before recycling, though both materials are recyclable. Corrugated also uses less material per unit, resulting in a lower carbon footprint.",
  },
  {
    question: "What is the minimum order quantity for custom rigid boxes?",
    answer:
      "Most manufacturers require 300–500 units for custom rigid boxes due to the production process (wrapping, mounting, assembly). BUpack offers custom rigid boxes starting at 300 units with digital printing options that reduce setup costs.",
  },
  {
    question: "Should I use a rigid box inside a corrugated shipper?",
    answer:
      "This is a popular approach for premium DTC brands. The corrugated outer box protects the product during shipping, while the rigid inner box delivers a luxury unboxing experience. This combo works especially well for cosmetics, jewelry, and gift sets where the unboxing moment matters.",
  },
];

export default function RigidVsCorrugatedPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Compare", url: "/compare" },
          { name: "Rigid Box vs Corrugated Box", url: "/compare/rigid-vs-corrugated-boxes" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Packaging Comparison Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Rigid Box vs Corrugated Box: Which Is Right for Your Brand?
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            A side-by-side breakdown of cost, strength, printing quality, unboxing experience, and sustainability — so you can choose with confidence.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <div className="text-4xl mb-3">🎁</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Rigid Boxes If&hellip;</h2>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>Your product is premium or luxury (cosmetics, jewelry, watches)</li>
                <li>The unboxing moment is a core part of your brand identity</li>
                <li>You need foil stamping, embossing, or soft-touch lamination</li>
                <li>Your product sits on a retail shelf and needs to look premium</li>
                <li>Budget allows $1.50–$5.00+ per unit for packaging</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="text-4xl mb-3">📦</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Corrugated Boxes If&hellip;</h2>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>You ship directly to consumers and need transit protection</li>
                <li>Cost efficiency is a priority ($0.30–$1.50 per unit)</li>
                <li>You need low MOQ (starting at 100 units)</li>
                <li>Sustainability and recyclability are key brand values</li>
                <li>Your packaging doubles as the shipping container</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Full Comparison: Rigid Box vs Corrugated Box
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a2e18] text-white">
                  <th className="text-left py-3 px-4 font-semibold rounded-tl-xl">Factor</th>
                  <th className="text-left py-3 px-4 font-semibold">Rigid Box</th>
                  <th className="text-left py-3 px-4 font-semibold rounded-tr-xl">Corrugated Box</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b border-gray-100`}
                  >
                    <td className="py-3 px-4 font-semibold text-gray-900">{row.factor}</td>
                    <td className="py-3 px-4 text-gray-700">{row.rigid}</td>
                    <td className="py-3 px-4 text-gray-700">{row.corrugated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dive: Cost */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Cost Deep Dive: What You&apos;ll Actually Pay
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              Pricing depends on size, quantity, printing, and finishing. Here are realistic ranges for a
              medium-sized box (approximately 8&quot; &times; 6&quot; &times; 3&quot;) ordered at different volumes:
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-green-50 border-b border-green-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Quantity</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Rigid Box / Unit</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Corrugated Box / Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">200 units</td>
                  <td className="py-3 px-4 text-gray-700">$3.50–$5.00</td>
                  <td className="py-3 px-4 text-gray-700">$0.80–$1.50</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">1,000 units</td>
                  <td className="py-3 px-4 text-gray-700">$2.00–$3.50</td>
                  <td className="py-3 px-4 text-gray-700">$0.50–$1.00</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">5,000 units</td>
                  <td className="py-3 px-4 text-gray-700">$1.50–$2.50</td>
                  <td className="py-3 px-4 text-gray-700">$0.35–$0.70</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">10,000+ units</td>
                  <td className="py-3 px-4 text-gray-700">$1.20–$2.00</td>
                  <td className="py-3 px-4 text-gray-700">$0.30–$0.55</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            * Prices are estimates for reference only. Actual pricing depends on material, finishing, and printer. Contact BUpack for a detailed quote.
          </p>
        </div>
      </section>

      {/* Deep Dive: Use Cases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Real-World Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Rigid Box Use Cases</h3>
              <div className="space-y-4">
                {[
                  { product: "Luxury Candle Sets", why: "Premium unboxing matches the $50+ price point; magnetic closure adds perceived value" },
                  { product: "Jewelry & Watches", why: "Rigid structure protects delicate items; velvet/flocking inserts possible; gift-ready presentation" },
                  { product: "Premium Cosmetics", why: "Foil stamping and embossing communicate luxury; shelf display maintains shape" },
                  { product: "Corporate Gift Boxes", why: "Impressive presentation for VIP clients; custom inserts organize multiple items" },
                  { product: "Tech Accessories", why: "Premium feel justifies high price; soft-touch lamination conveys sophistication" },
                ].map((item) => (
                  <div key={item.product} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.product}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.why}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Corrugated Box Use Cases</h3>
              <div className="space-y-4">
                {[
                  { product: "Subscription Boxes", why: "Lightweight for monthly shipping; durable for repeated transit; cost-effective at scale" },
                  { product: "E-commerce Orders", why: "Ships as the outer container; no need for additional packaging; reduces waste" },
                  { product: "Food & Beverage", why: "FDA-compliant corrugated available; excellent insulation properties; eco-friendly image" },
                  { product: "Apparel & Accessories", why: "Lightweight keeps shipping costs down; clean branded exterior for DTC brands" },
                  { product: "Bulk / B2B Shipping", why: "Double/triple wall for heavy items; stackable on pallets; lowest cost per unit" },
                ].map((item) => (
                  <div key={item.product} className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.product}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.why}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Printing Comparison */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Printing & Finishing Options
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              Printing quality is one of the biggest differentiators between rigid and corrugated boxes.
              Rigid boxes use offset printing on smooth paper wrap, enabling photographic detail and
              elaborate finishes. Corrugated boxes use flexographic or digital printing on the board surface,
              which produces clean but less refined results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Rigid Box Finishes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Foil stamping (gold, silver, rose gold, holographic)</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Embossing & debossing</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Spot UV coating</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Soft-touch lamination</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Matte or gloss lamination</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Textured paper (linen, leather grain)</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Magnetic closure</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Corrugated Box Finishes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Full-color CMYK printing</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Flexographic printing (cost-effective at scale)</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Digital printing (great for low MOQ)</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Aqueous coating (gloss or matte)</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Lamination (adds durability)</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">&#10005;</span> Foil stamping (limited availability)</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">&#10005;</span> Embossing (not possible on corrugated)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unboxing Experience */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            The Unboxing Experience Factor
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              In the DTC era, unboxing is marketing. A study by Dotcom Distribution found that <strong>40% of online shoppers</strong> are more likely to make a repeat purchase from a brand that uses premium packaging. The box your product arrives in directly affects customer perception, social sharing, and review quality.
            </p>
            <p>
              <strong>Rigid boxes</strong> deliver a luxury unboxing moment: the weight of the box, the magnetic closure, the smooth lamination — these tactile signals tell the customer &ldquo;this is premium.&rdquo; This is why brands like Apple, Tiffany, and Glossier use rigid boxes for their hero products.
            </p>
            <p>
              <strong>Corrugated boxes</strong> can still create a strong impression when designed well. Full-color printing, custom inserts, and branded tissue paper transform a simple mailer box into a branded experience. Brands like Allbirds and Warby Parker use corrugated mailer boxes effectively — proving that &ldquo;functional&rdquo; doesn&apos;t mean &ldquo;boring.&rdquo;
            </p>
          </div>
          <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">The Hybrid Strategy</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Many successful DTC brands use a <strong>rigid box inside a corrugated shipper</strong>. The corrugated outer box protects the product during transit, while the rigid inner box delivers the premium unboxing experience. This approach is ideal for products priced at $30+ where the unboxing moment matters but shipping protection is non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Sustainability Comparison
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              Both rigid and corrugated boxes can be manufactured with eco-friendly materials. The key differences are in recyclability ease and material efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Rigid Box Sustainability</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> FSC-certified greyboard available</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Soy-based ink printing</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Water-based lamination (no VOC)</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">!</span> Requires separating wrap from board for recycling</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">!</span> Heavier = higher shipping carbon footprint</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 mt-0.5">!</span> More material per unit than corrugated</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Corrugated Box Sustainability</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> FSC-certified corrugated available</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> 100% curbside recyclable as-is</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Lighter weight = lower shipping emissions</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Made from 70–100% recycled content</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Water-based ink printing</li>
                <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">&#10003;</span> Biodegradable if uncoated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#f9fdf8] border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-4xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Still Not Sure Which Box Type to Choose?
          </h2>
          <p className="text-gray-500 mb-6">
            Tell us about your product and brand goals — we&apos;ll recommend the perfect box type and send you free samples of both.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
            >
              Request Free Sample Kit &rarr;
            </Link>
            <a
              href="https://wa.me/8615064260757"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl border border-green-200 hover:bg-green-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
