import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Paper Bags with Logo | Bulk & Wholesale | BUpack",
  description:
    "Custom printed paper bags with your logo. Kraft, coated, and luxury options. Bulk and wholesale pricing. FSC-certified, MOQ from 200 units.",
  alternates: {
    canonical: "https://www.bupackeco.com/products/custom-paper-bags",
  },
  keywords: [
    "custom paper bags with logo",
    "wholesale paper bags",
    "bulk paper bags",
    "kraft paper bags custom",
    "printed paper bags",
  ],
  openGraph: {
    title: "Custom Paper Bags with Logo | Bulk & Wholesale | BUpack",
    description:
      "Custom printed paper bags with your logo. Kraft, coated, and luxury options. Bulk and wholesale pricing. FSC-certified, MOQ from 200 units.",
    url: "https://www.bupackeco.com/products/custom-paper-bags",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Paper Bags with Logo | Bulk & Wholesale | BUpack",
    description:
      "Custom printed paper bags with your logo. Kraft, coated, and luxury options. Bulk and wholesale pricing. FSC-certified, MOQ from 200 units.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const coreValues = [
  {
    icon: "🏷️",
    title: "Custom Logo Printing",
    description:
      "Full-color CMYK printing on one or both sides. Your logo, brand colors, and messaging printed crisp and vibrant on every bag.",
  },
  {
    icon: "📄",
    title: "Kraft & Coated Options",
    description:
      "Natural kraft for organic, eco-friendly branding. Coated art paper for premium, polished presentation. Luxury specialty paper available.",
  },
  {
    icon: "💪",
    title: "Durable Construction",
    description:
      "Reinforced handles, sturdy bottom board, and strong side gussets. Designed to carry weight without tearing or deforming.",
  },
  {
    icon: "🌿",
    title: "FSC Certified & Recyclable",
    description:
      "All paper bags made from FSC-certified paper. 100% recyclable and biodegradable. Soy-based ink and water-based lamination.",
  },
];

const bagTypes = [
  {
    name: "Kraft Paper Bag",
    emoji: "🛍️",
    description:
      "Natural brown kraft with twisted paper handles. The eco-friendly classic. Perfect for organic brands, bakeries, and retail shops. Available in brown and white kraft.",
    bestFor: "Eco Brands",
  },
  {
    name: "Coated Paper Bag",
    emoji: "✨",
    description:
      "Glossy or matte coated art paper with ribbon or flat handles. Premium look and feel for fashion, beauty, and luxury retail. Full-color printing with vivid results.",
    bestFor: "Fashion & Beauty",
  },
  {
    name: "Luxury Specialty Bag",
    emoji: "🎁",
    description:
      "Textured specialty paper with hot foil stamping and embossing. The ultimate retail bag for jewelry, perfume, and premium gift brands. Ribbon handle standard.",
    bestFor: "Luxury Retail",
  },
  {
    name: "Laminated Kraft Bag",
    emoji: "🛒",
    description:
      "Kraft paper with matte lamination for durability and water resistance. Combines eco-friendly perception with practical performance. Great for food and beverage.",
    bestFor: "Food & Beverage",
  },
];

const moqTable = [
  {
    quantity: "200 units",
    unitPrice: "$1.20 - $2.50",
    tooling: "$0 (digital)",
    leadTime: "7-12 days",
    bestFor: "Small Batch",
  },
  {
    quantity: "500 units",
    unitPrice: "$0.80 - $1.80",
    tooling: "$0 (digital) / $150 (offset)",
    leadTime: "12-15 days",
    bestFor: "Growing Brands",
  },
  {
    quantity: "2,000 units",
    unitPrice: "$0.45 - $1.10",
    tooling: "$150 (offset)",
    leadTime: "15-18 days",
    bestFor: "Retail Volume",
  },
  {
    quantity: "10,000 units",
    unitPrice: "$0.25 - $0.65",
    tooling: "$150 (offset)",
    leadTime: "18-22 days",
    bestFor: "Wholesale",
  },
];

const finishingOptions = [
  {
    option: "Matte Lamination",
    description: "Elegant soft-touch finish. Premium feel, fingerprint-resistant.",
    minOrder: "200+ units",
    emoji: "🖤",
  },
  {
    option: "Gloss Lamination",
    description: "High-shine finish that makes colors vibrant and eye-catching.",
    minOrder: "200+ units",
    emoji: "✨",
  },
  {
    option: "Hot Foil Stamping",
    description: "Metallic gold, silver, or rose gold accents for luxury branding.",
    minOrder: "500+ units",
    emoji: "🌟",
  },
  {
    option: "Embossing/Debossing",
    description: "Raised or recessed logo for tactile brand experience.",
    minOrder: "500+ units",
    emoji: "🎨",
  },
];

const faqItems = [
  {
    question: "What is the minimum order quantity for custom paper bags?",
    answer:
      "Our MOQ starts at 200 units for custom paper bags. Digital printing is available at this quantity with no plate fees. For offset printing, we recommend 500+ units for the best per-unit pricing.",
  },
  {
    question: "What types of handles are available?",
    answer:
      "We offer twisted paper handles (standard for kraft bags), flat paper handles (for coated bags), ribbon handles (for luxury bags), and cotton cord handles (for premium specialty bags). All handles are securely glued and reinforced.",
  },
  {
    question: "Can I print on both sides of the paper bag?",
    answer:
      "Yes. We offer single-sided and double-sided printing. Double-sided printing is recommended for retail bags since customers carry them in public — both sides become a walking advertisement for your brand.",
  },
  {
    question: "What is the difference between kraft and coated paper bags?",
    answer:
      "Kraft paper bags have a natural, organic look with visible fiber texture — ideal for eco-friendly branding. Coated paper bags have a smooth surface that produces sharper, more vibrant printing — ideal for fashion and beauty brands. Both are FSC-certified and recyclable.",
  },
  {
    question: "Do you offer wholesale pricing for large orders?",
    answer:
      "Yes. We offer tiered wholesale pricing with significant savings at 2,000 and 10,000 units. As a factory-direct supplier, our wholesale prices are 40-60% lower than domestic distributors. Contact us for a custom wholesale quote.",
  },
];

export default function CustomPaperBagsPage() {
  return (
    <>
      <ProductSchema
        name="Custom Paper Bags with Logo"
        description="Custom printed paper bags with your logo. Kraft, coated, and luxury options. Bulk and wholesale pricing. FSC-certified, MOQ from 200 units."
        image="https://www.bupackeco.com/images/product_box_1.jpg"
        offers={{ price: "1.20", priceCurrency: "USD", moq: 200, availability: "https://schema.org/InStock", url: "https://www.bupackeco.com/products/custom-paper-bags" }}
      />

      <FAQSchema items={faqItems} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Products", url: "https://www.bupackeco.com/products" },
          { name: "Custom Paper Bags", url: "https://www.bupackeco.com/products/custom-paper-bags" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
              <span>🛍️</span>
              <span>CUSTOM PAPER BAGS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom Paper Bags with Logo
              <span className="block text-green-400 text-3xl md:text-4xl lg:text-5xl mt-2">
                Bulk & Wholesale Pricing
              </span>
            </h1>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Turn every customer into a walking advertisement. Custom printed paper bags
              in kraft, coated, and luxury options. FSC-certified materials, MOQ from 200 units,
              factory-direct wholesale pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors text-center"
              >
                Get Quote →
              </Link>
              <Link
                href="#moq-table"
                className="border-2 border-green-500 text-green-400 font-bold px-8 py-4 rounded-xl hover:bg-green-500 hover:text-white transition-colors text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Custom Paper Bags?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Branded paper bags that carry your products and your reputation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bag Types */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paper Bag Types
            </h2>
            <p className="text-gray-600 text-lg">
              The right bag for your brand and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bagTypes.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 h-48 flex items-center justify-center">
                  <div className="text-8xl">{product.emoji}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      {product.bestFor}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Table */}
      <section id="moq-table" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MOQ & Pricing Guide
            </h2>
            <p className="text-gray-600 text-lg">
              Transparent pricing for custom paper bags. All prices in USD.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#0a2e18] text-white">
                  <th className="text-left p-4 font-bold">Quantity</th>
                  <th className="text-left p-4 font-bold">Unit Price</th>
                  <th className="text-left p-4 font-bold">Tooling Fee</th>
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
                    <td className="p-4 text-gray-600">{row.tooling}</td>
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
            * Prices vary based on bag size, paper type, and finishing. Contact us for exact quote.
          </p>
        </div>
      </section>

      {/* Finishing Options */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Finishing Options
            </h2>
            <p className="text-gray-600 text-lg">
              Elevate your paper bags with premium finishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishingOptions.map((option) => (
              <div
                key={option.option}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{option.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{option.option}</h3>
                <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                <span className="inline-block text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                  {option.minOrder}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
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
                className="bg-[#f9fdf8] rounded-xl p-6 border border-green-100"
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
          <div className="text-5xl mb-6">🛍️</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Custom Paper Bags?
          </h2>
          <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
            Start with 200 units. Wholesale pricing available for volume orders.
            FSC-certified materials, free design support included.
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
