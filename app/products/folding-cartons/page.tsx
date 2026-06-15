import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Folding Cartons | Retail & E-Commerce | BUpack",
  description:
    "Wholesale custom folding cartons for retail and eCommerce. SBS, FBB, CRB material options. Flexo, offset, digital printing. Low MOQ from 100 units.",
  alternates: {
    canonical: "https://www.bupackeco.com/products/folding-cartons",
  },
  keywords: [
    "custom folding cartons wholesale",
    "retail packaging boxes",
    "folding carton boxes",
    "custom printed cartons",
    "ecommerce folding boxes",
  ],
  openGraph: {
    title: "Custom Folding Cartons | Retail & E-Commerce | BUpack",
    description:
      "Wholesale custom folding cartons for retail and eCommerce. SBS, FBB, CRB material options. Flexo, offset, digital printing. Low MOQ from 100 units.",
    url: "https://www.bupackeco.com/products/folding-cartons",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Folding Cartons | Retail & E-Commerce | BUpack",
    description:
      "Wholesale custom folding cartons for retail and eCommerce. SBS, FBB, CRB material options. Flexo, offset, digital printing. Low MOQ from 100 units.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const applications = [
  {
    industry: "Cosmetics & Beauty",
    emoji: "💄",
    examples: "Lipstick boxes, skincare sets, makeup palettes",
    features: "Window cut, soft-touch lamination, hot foil",
  },
  {
    industry: "Pharmaceuticals",
    emoji: "💊",
    examples: "Medicine boxes, supplement packaging, medical devices",
    features: "Braille, tamper-evident, batch coding area",
  },
  {
    industry: "Food & Beverage",
    emoji: "🍪",
    examples: "Tea boxes, chocolate sleeves, bakery boxes",
    features: "Food-safe inks, grease-resistant coating",
  },
  {
    industry: "Electronics",
    emoji: "📱",
    examples: "Phone accessories, earbuds, small gadgets",
    features: "EVA insert compatible, anti-static options",
  },
];

const materialOptions = [
  {
    material: "SBS (Solid Bleached Sulphate)",
    grade: "Premium",
    whiteness: "⭐⭐⭐⭐⭐",
    printQuality: "Excellent",
    bestFor: "Cosmetics, premium retail",
    coating: "Clay-coated for smooth print",
  },
  {
    material: "FBB (Folding Box Board)",
    grade: "Mid-High",
    whiteness: "⭐⭐⭐⭐",
    printQuality: "Very Good",
    bestFor: "Food, pharmaceuticals, toys",
    coating: "Mechanical pulp center, virgin fiber top",
  },
  {
    material: "CRB (Coated Recycled Board)",
    grade: "Economy",
    whiteness: "⭐⭐⭐",
    printQuality: "Good",
    bestFor: "Eco-focused brands, dry food",
    coating: "100% recycled content, clay-coated",
  },
  {
    material: "Neslkote / SBS + Poly",
    grade: "Specialty",
    whiteness: "⭐⭐⭐⭐⭐",
    printQuality: "Excellent",
    bestFor: "Frozen food, moisture barrier",
    coating: "Polyethylene coating for moisture resistance",
  },
];

const printingMethods = [
  {
    method: "Flexographic Printing",
    emoji: "🖨️",
    bestFor: "Large volumes (10k+ units)",
    advantages: "Fast, cost-effective for simple designs",
    limitations: "Lower resolution, limited colors",
    moq: "10,000+ units",
  },
  {
    method: "Offset Printing",
    emoji: "🎨",
    bestFor: "Medium volumes (1k-10k units)",
    advantages: "High resolution, accurate colors, CMYK+ spot",
    limitations: "Higher setup cost, longer lead time",
    moq: "1,000+ units",
  },
  {
    method: "Digital Printing",
    emoji: "💻",
    bestFor: "Small batches, prototypes",
    advantages: "No plates, fast turnaround, variable data",
    limitations: "Higher unit cost, limited substrate options",
    moq: "100+ units",
  },
];

const structureTypes = [
  {
    name: "Auto-Lock Bottom",
    emoji: "🔒",
    description:
      "Self-locking bottom that snaps into place. No tape or glue needed. Fast assembly for fulfillment.",
    assembly: "Fast (5 seconds)",
  },
  {
    name: "Aircraft Box (Tuck-End)",
    emoji: "✈️",
    description:
      "Classic tuck-end box with both top and bottom flaps. Most popular retail packaging structure.",
    assembly: "Medium (10 seconds)",
  },
  {
    name: "Display Box (Integrated)",
    emoji: "🛒",
    description:
      "Box that transforms into a retail display. Perfect for shelf-ready packaging (SRP).",
    assembly: "Medium (15 seconds)",
  },
];

const moqTable = [
  {
    quantity: "100 units",
    unitPrice: "$0.85 - $1.50",
    printing: "Digital",
    leadTime: "10-12 days",
    bestFor: "Prototyping / Small Batch",
  },
  {
    quantity: "500 units",
    unitPrice: "$0.45 - $0.90",
    printing: "Digital / Offset",
    leadTime: "12-15 days",
    bestFor: "Growing Brands",
  },
  {
    quantity: "1,000 units",
    unitPrice: "$0.30 - $0.65",
    printing: "Offset",
    leadTime: "15-18 days",
    bestFor: "Regular Production",
  },
];

const faqItems = [
  {
    question: "What is the minimum order quantity for custom folding cartons?",
    answer:
      "Our minimum order quantity starts at just 100 units for digital printing. For offset printing, MOQ is 1,000 units. This flexibility allows brands of all sizes to access custom packaging.",
  },
  {
    question: "What materials are best for food packaging cartons?",
    answer:
      "For food packaging, we recommend SBS or FBB with food-safe inks and grease-resistant coating. For frozen or moist food, Neslkote (poly-coated SBS) provides moisture barrier protection.",
  },
  {
    question: "Can I have window cutouts on folding cartons?",
    answer:
      "Yes! We offer clear PVC or PET window cutouts to showcase your product. Windows are available in custom shapes and sizes. Minimum order for window boxes is 500 units.",
  },
  {
    question: "What printing method should I choose for my cartons?",
    answer:
      "For small batches (100-500 units) or prototypes, digital printing is best. For medium to large runs (1,000+ units), offset printing offers the best quality-to-price ratio. Flexographic printing is ideal for very large volumes (10,000+ units).",
  },
  {
    question: "Are your folding cartons eco-friendly?",
    answer:
      "Yes! All our folding cartons use FSC-certified paperboard. We offer 100% recycled CRB options, soy-based inks, and plastic-free lamination alternatives. Cartons are fully recyclable.",
  },
];

export default function FoldingCartonsPage() {
  return (
    <>
      <ProductSchema
        name="Custom Folding Cartons"
        description="Wholesale custom folding cartons for retail and eCommerce. SBS, FBB, CRB material options. Flexo, offset, digital printing."
        image="https://www.bupackeco.com/images/folding_carton_1.jpg"
        offers={{ price: "0.30", priceCurrency: "USD", moq: 100, availability: "https://schema.org/InStock", url: "https://www.bupackeco.com/products/folding-cartons" }}
      />

      <FAQSchema items={faqItems} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Products", url: "https://www.bupackeco.com/products" },
          { name: "Folding Cartons", url: "https://www.bupackeco.com/products/folding-cartons" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
              <span>📦</span>
              <span>FOLDING CARTONS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom Folding Cartons
              <span className="block text-green-400 text-3xl md:text-4xl lg:text-5xl mt-2">
                Retail & E-Commerce
              </span>
            </h1>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Wholesale folding cartons for every industry. SBS, FBB, CRB materials
              with flexo, offset, or digital printing. Low MOQ from 100 units.
              FSC-certified and fully customizable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors text-center"
              >
                Get Quote →
              </Link>
              <Link
                href="#materials"
                className="border-2 border-green-500 text-green-400 font-bold px-8 py-4 rounded-xl hover:bg-green-500 hover:text-white transition-colors text-center"
              >
                Compare Materials
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Scenarios
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Folding cartons for every industry and use case
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div
                key={app.industry}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{app.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{app.industry}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      <span className="font-semibold">Examples:</span> {app.examples}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">Features:</span> {app.features}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section id="materials" className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material Options
            </h2>
            <p className="text-gray-600 text-lg">
              Compare folding carton materials to find the best fit
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#0a2e18] text-white">
                  <th className="text-left p-4 font-bold">Material</th>
                  <th className="text-left p-4 font-bold">Grade</th>
                  <th className="text-left p-4 font-bold">Whiteness</th>
                  <th className="text-left p-4 font-bold">Print Quality</th>
                  <th className="text-left p-4 font-bold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {materialOptions.map((material, idx) => (
                  <tr
                    key={material.material}
                    className={idx % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    <td className="p-4">
                      <div className="font-bold text-gray-900">{material.material}</div>
                      <div className="text-xs text-gray-500 mt-1">{material.coating}</div>
                    </td>
                    <td className="p-4 text-gray-700">{material.grade}</td>
                    <td className="p-4">{material.whiteness}</td>
                    <td className="p-4 text-gray-700">{material.printQuality}</td>
                    <td className="p-4 text-gray-600 text-sm">{material.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Printing Methods
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the right printing method for your volume and quality needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {printingMethods.map((method) => (
              <div
                key={method.method}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{method.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.method}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Best for:</span>
                    <p className="text-gray-600">{method.bestFor}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Advantages:</span>
                    <p className="text-gray-600">{method.advantages}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Limitations:</span>
                    <p className="text-gray-600">{method.limitations}</p>
                  </div>
                  <div className="pt-2 border-t border-green-200">
                    <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold">
                      MOQ: {method.moq}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Types */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Box Structure Types
            </h2>
            <p className="text-gray-600 text-lg">
              Popular folding carton structures for fast assembly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {structureTypes.map((structure) => (
              <div
                key={structure.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 h-40 flex items-center justify-center">
                  <div className="text-7xl">{structure.emoji}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{structure.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{structure.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Assembly time:</span>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      {structure.assembly}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MOQ & Pricing Guide
            </h2>
            <p className="text-gray-600 text-lg">
              Transparent pricing for custom folding cartons. All prices in USD.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#0a2e18] text-white">
                  <th className="text-left p-4 font-bold">Quantity</th>
                  <th className="text-left p-4 font-bold">Unit Price</th>
                  <th className="text-left p-4 font-bold">Printing Method</th>
                  <th className="text-left p-4 font-bold">Lead Time</th>
                  <th className="text-left p-4 font-bold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {moqTable.map((row, idx) => (
                  <tr
                    key={row.quantity}
                    className={idx % 2 === 0 ? "bg-green-50" : "bg-white"}
                  >
                    <td className="p-4 font-bold text-gray-900">{row.quantity}</td>
                    <td className="p-4 text-green-700 font-semibold">{row.unitPrice}</td>
                    <td className="p-4 text-gray-600">{row.printing}</td>
                    <td className="p-4 text-gray-600">{row.leadTime}</td>
                    <td className="p-4">
                      <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                        {row.bestFor}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            * Prices vary based on box size, material, and finishing options. Contact us for exact quote.
          </p>
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
                className="bg-white rounded-xl p-6 border border-green-100 shadow-sm"
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
          <div className="text-5xl mb-6">📦</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order Your Custom Folding Cartons?
          </h2>
          <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
            Start with just 100 units. Get a free quote and digital mockup within 24 hours.
            Fast turnaround and worldwide shipping available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors"
            >
              Request Free Quote
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
