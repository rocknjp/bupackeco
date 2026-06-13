import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "Packaging 101: Complete Guide to Custom Box Types | BUpack",
  description:
    "Learn everything about custom packaging box types, materials, and printing methods. Beginner-friendly guide from BUpack — FSC-certified manufacturer.",
  alternates: {
    canonical: "https://www.bupackeco.com/packaging-101",
  },
  keywords: [
    "packaging 101",
    "custom box types guide",
    "packaging materials guide",
    "beginner packaging guide",
    "box types explained",
  ],
};

const boxTypes = [
  {
    name: "Mailer Box",
    emoji: "📦",
    description: "Self-locking corrugated box with tuck-in flap. The most popular ecommerce box type. No tape needed, easy assembly, ships flat.",
    material: "E-flute / B-flute corrugated",
    bestFor: "Ecommerce, DTC shipping",
    moq: "100 units",
  },
  {
    name: "Folding Carton",
    emoji: "📋",
    description: "Lightweight paperboard box with fold-flat design. Used for retail shelf display and product packaging. Printed in full color.",
    material: "250-400gsm paperboard",
    bestFor: "Retail, cosmetics, food",
    moq: "500 units",
  },
  {
    name: "Rigid Gift Box",
    emoji: "🎁",
    description: "Premium two-piece box with rigid walls. Magnetic closure, velvet or EVA inserts. The ultimate luxury unboxing experience.",
    material: "1200-2000gsm rigid board",
    bestFor: "Luxury, gifting, jewelry",
    moq: "500 units",
  },
  {
    name: "Subscription Box",
    emoji: "📬",
    description: "Corrugated mailer optimized for recurring shipments. Durable construction, interior printing, custom inserts for monthly products.",
    material: "E-flute / B-flute corrugated",
    bestFor: "Subscription services",
    moq: "100 units",
  },
];

const materials = [
  {
    name: "Kraft Paper",
    emoji: "🟫",
    properties: ["Natural brown color", "Visible fiber texture", "100% recyclable", "FSC-certified available"],
    bestFor: "Eco brands, organic products, artisan goods",
    cost: "$$ (lowest)",
  },
  {
    name: "Coated Art Paper",
    emoji: "⬜",
    properties: ["Smooth surface", "Vibrant CMYK printing", "Matte or gloss lamination", "Premium feel"],
    bestFor: "Fashion, beauty, tech products",
    cost: "$$$",
  },
  {
    name: "Specialty Paper",
    emoji: "✨",
    properties: ["Textured surfaces (linen, leather, etc.)", "Metallic finishes", "Unique tactile feel", "Hot foil compatible"],
    bestFor: "Luxury brands, gift packaging",
    cost: "$$$$",
  },
  {
    name: "Corrugated Board",
    emoji: "📦",
    properties: ["Fluted structure for cushioning", "E-flute (1.5mm) or B-flute (3mm)", "Printable surface", "Shipping-grade protection"],
    bestFor: "Ecommerce shipping, subscription boxes",
    cost: "$$",
  },
];

const printingMethods = [
  {
    method: "Digital Printing",
    description: "No printing plates required. Cost-effective for short runs under 2,000 units. Full CMYK color, quick turnaround.",
    bestFor: "100-2,000 units",
    setup: "No plate fees",
    turnaround: "7-12 days",
  },
  {
    method: "Offset Printing",
    description: "Traditional plate-based printing. Superior color consistency and Pantone matching. Best per-unit price at volume.",
    bestFor: "2,000+ units",
    setup: "Plate fee: $150-$300",
    turnaround: "12-18 days",
  },
  {
    method: "Hot Foil Stamping",
    description: "Metallic foil applied with heat and pressure. Available in gold, silver, rose gold, and custom colors. Premium accent finish.",
    bestFor: "500+ units",
    setup: "Die fee: $100-$200",
    turnaround: "+3-5 days",
  },
];

const faqItems = [
  {
    question: "What type of box should I choose for my product?",
    answer:
      "It depends on your product type, price point, and shipping method. For ecommerce shipping, choose a mailer box or subscription box. For retail shelf display, choose a folding carton. For luxury products and gifts, choose a rigid gift box. Our team can help you select the right box type based on your specific needs.",
  },
  {
    question: "What is the difference between E-flute and B-flute corrugated?",
    answer:
      "E-flute is 1.5mm thick with approximately 90 flutes per meter. It has a smoother surface for high-quality printing and is ideal for lightweight products. B-flute is 3mm thick with approximately 47 flutes per meter. It provides more cushioning and is better for heavier or fragile products. Most DTC brands use E-flute for its print quality.",
  },
  {
    question: "Should I use kraft paper or coated paper for my packaging?",
    answer:
      "Kraft paper signals natural, organic, and eco-friendly — ideal for sustainable brands, artisan products, and organic goods. Coated paper delivers a premium, polished look with vibrant colors — ideal for beauty, fashion, and tech brands. Both are FSC-certified and recyclable. Many brands combine kraft exterior with a coated interior print.",
  },
  {
    question: "What is the difference between digital and offset printing?",
    answer:
      "Digital printing requires no plates, making it cost-effective for runs under 2,000 units with fast turnaround (7-12 days). Offset printing uses plates for superior color consistency and lower per-unit cost at volume (2,000+ units), but requires plate fees ($150-$300) and longer lead time (12-18 days).",
  },
  {
    question: "How do I know what size box I need?",
    answer:
      "Measure your product dimensions and add 5mm padding on each side for protection. For products with inserts, the box interior should match your insert dimensions. BUpack provides free dieline templates and can recommend optimal box sizes based on your product specs. We also offer custom insert design to ensure a perfect fit.",
  },
];

export default function Packaging101Page() {
  return (
    <>
      <ProductSchema
        name="Packaging 101: Complete Guide to Custom Box Types"
        description="Learn everything about custom packaging box types, materials, and printing methods. Beginner-friendly guide from BUpack — FSC-certified manufacturer."
        image="https://www.bupackeco.com/images/packaging_101_hero.jpg"
        offers={{ price: "0.50", priceCurrency: "USD", url: "https://www.bupackeco.com/packaging-101" }}
      />

      <FAQSchema items={faqItems} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Packaging 101", url: "https://www.bupackeco.com/packaging-101" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
              <span>📚</span>
              <span>PACKAGING 101</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Complete Guide to
              <span className="block text-green-400 text-3xl md:text-4xl lg:text-5xl mt-2">
                Custom Box Types & Materials
              </span>
            </h1>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Everything you need to know about custom packaging — box types, materials,
              printing methods, and finishing options. A beginner-friendly guide from
              BUpack, your FSC-certified packaging manufacturer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors text-center"
              >
                Get Expert Advice →
              </Link>
              <Link
                href="#box-types"
                className="border-2 border-green-500 text-green-400 font-bold px-8 py-4 rounded-xl hover:bg-green-500 hover:text-white transition-colors text-center"
              >
                Explore Box Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Box Types */}
      <section id="box-types" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Box Types Explained
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Understanding the four main categories of custom packaging boxes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boxTypes.map((box) => (
              <div
                key={box.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 h-40 flex items-center justify-center">
                  <div className="text-7xl">{box.emoji}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{box.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{box.description}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Material:</span>
                      <span className="text-gray-700 font-medium">{box.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Best For:</span>
                      <span className="text-gray-700 font-medium">{box.bestFor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">MOQ:</span>
                      <span className="text-green-700 font-bold">{box.moq}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packaging Materials Comparison
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the right material for your brand and product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((mat) => (
              <div
                key={mat.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{mat.emoji}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{mat.name}</h3>
                    <span className="text-green-700 text-sm font-semibold">{mat.cost}</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-4">
                  {mat.properties.map((prop) => (
                    <li key={prop} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-green-500">&#10003;</span> {prop}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-xs">Best for: {mat.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Printing Methods Compared
            </h2>
            <p className="text-gray-600 text-lg">
              Understanding the right printing method for your order size
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#0a2e18] text-white">
                  <th className="text-left p-4 font-bold">Method</th>
                  <th className="text-left p-4 font-bold">Best For</th>
                  <th className="text-left p-4 font-bold">Setup Cost</th>
                  <th className="text-left p-4 font-bold">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {printingMethods.map((method, idx) => (
                  <tr
                    key={method.method}
                    className={idx % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    <td className="p-4">
                      <div className="font-bold text-gray-900">{method.method}</div>
                      <div className="text-gray-500 text-xs mt-1">{method.description}</div>
                    </td>
                    <td className="p-4 text-green-700 font-semibold">{method.bestFor}</td>
                    <td className="p-4 text-gray-600">{method.setup}</td>
                    <td className="p-4 text-gray-600">{method.turnaround}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-xl p-6 border border-green-100"
              >
                <summary className="text-lg font-bold text-gray-900 cursor-pointer hover:text-green-700 transition-colors">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">📚</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Box Type Is Right?
          </h2>
          <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
            Our packaging experts will help you choose the right box type, material,
            and printing method for your product. Free consultation, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/products"
              className="border-2 border-green-500 text-green-400 font-bold px-8 py-4 rounded-xl hover:bg-green-500 hover:text-white transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
