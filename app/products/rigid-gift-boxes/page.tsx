import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Rigid Gift Boxes | Low MOQ 500 Units | BUpack",
  description:
    "Premium custom rigid gift boxes with low MOQ from 500 units. Magnetic closure, velvet/EVA inserts, hot foil stamping, FSC-certified materials. Perfect for luxury brands.",
  alternates: {
    canonical: "https://www.bupackeco.com/products/rigid-gift-boxes/",
  },
  keywords: [
    "custom rigid boxes low minimum",
    "rigid gift boxes wholesale",
    "luxury packaging boxes",
    "magnetic closure boxes",
    "low MOQ rigid boxes",
  ],
  openGraph: {
    title: "Custom Rigid Gift Boxes | Low MOQ 500 Units | BUpack",
    description:
      "Premium custom rigid gift boxes with low MOQ from 500 units. Magnetic closure, velvet/EVA inserts, hot foil stamping, FSC-certified materials. Perfect for luxury brands.",
    url: "https://www.bupackeco.com/products/rigid-gift-boxes",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Rigid Gift Boxes | Low MOQ 500 Units | BUpack",
    description:
      "Premium custom rigid gift boxes with low MOQ from 500 units. Magnetic closure, velvet/EVA inserts, hot foil stamping, FSC-certified materials. Perfect for luxury brands.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const coreValues = [
  {
    icon: "🧲",
    title: "Magnetic Closure",
    description:
      "Secure magnetic flap closure creates a premium unboxing experience. Hidden magnets maintain clean lines.",
  },
  {
    icon: "🎀",
    title: "Velvet/EVA Inserts",
    description:
      "Custom foam and velvet inserts protect and elevate your product. Precision-cut to fit your items perfectly.",
  },
  {
    icon: "✨",
    title: "Hot Foil & Embossing",
    description:
      "Add metallic foil stamping, embossing, or debossing for luxury branding that catches the light.",
  },
  {
    icon: "🌿",
    title: "FSC Certified Materials",
    description:
      "Sustainable rigid board made from FSC-certified paper. Recyclable and eco-friendly luxury packaging.",
  },
];

const productTypes = [
  {
    name: "Collapsible Rigid Box",
    emoji: "📦",
    description:
      "Space-saving design folds flat for shipping. Pops up instantly when needed. Perfect for eCommerce.",
    bestFor: "DTC Shipping",
  },
  {
    name: "Book-Style Box",
    emoji: "📖",
    description:
      "Hinged lid opens like a book. Elegant presentation for premium products. Ribbon pull-tab optional.",
    bestFor: "Luxury Retail",
  },
  {
    name: "Slide Sleeve Box",
    emoji: "🎯",
    description:
      "Drawer-style box with sliding sleeve. Multiple reveal options create memorable unboxing moments.",
    bestFor: "Gift Sets",
  },
  {
    name: "Drawer Box",
    emoji: "🗄️",
    description:
      "Matchbox-style pull-out drawer. Ideal for jewelry, cosmetics, and small premium items.",
    bestFor: "Jewelry & Cosmetics",
  },
];

const moqTable = [
  {
    quantity: "500 units",
    unitPrice: "$3.20 - $5.80",
    tooling: "$150 (one-time)",
    leadTime: "18-22 days",
    bestFor: "Small Batch / Test",
  },
  {
    quantity: "1,000 units",
    unitPrice: "$2.40 - $4.20",
    tooling: "$150 (one-time)",
    leadTime: "18-22 days",
    bestFor: "Growing Brands",
  },
  {
    quantity: "5,000 units",
    unitPrice: "$1.50 - $2.80",
    tooling: "$150 (one-time)",
    leadTime: "25-30 days",
    bestFor: "Volume Production",
  },
];

const finishingOptions = [
  {
    option: "Hot Foil Stamping",
    description: "Metallic gold, silver, rose gold, or custom colors",
    minOrder: "500+ units",
    emoji: "✨",
  },
  {
    option: "Spot UV",
    description: "Glossy highlight on specific areas (logo, pattern)",
    minOrder: "500+ units",
    emoji: "💎",
  },
  {
    option: "Embossing/Debossing",
    description: "Raised or recessed logo for tactile luxury feel",
    minOrder: "500+ units",
    emoji: "🎨",
  },
  {
    option: "Window Cut",
    description: "Clear PVC or PET window to showcase product",
    minOrder: "1,000+ units",
    emoji: "👁️",
  },
];

const faqItems = [
  {
    question: "What is the minimum order quantity for custom rigid boxes?",
    answer:
      "Our minimum order quantity starts at 500 units for custom rigid gift boxes. This low MOQ makes premium packaging accessible to growing brands and small businesses.",
  },
  {
    question: "How long does production take for rigid boxes?",
    answer:
      "Production lead time is 18-22 business days for orders under 1,000 units, and 25-30 days for larger orders. Shipping to North America takes an additional 7-12 days via DDP service.",
  },
  {
    question: "Can I get samples before placing a large order?",
    answer:
      "Yes! We provide digital mockups for approval before production. Physical samples are available for $50-$100 depending on customization level, which is credited toward your first order.",
  },
  {
    question: "What materials are used for rigid boxes?",
    answer:
      "Our rigid boxes are made from high-density paperboard (1200-2000gsm) wrapped with specialty paper, art paper, or fabric. All materials are FSC-certified and eco-friendly.",
  },
  {
    question: "Do you offer inserts for rigid boxes?",
    answer:
      "Yes, we offer custom inserts including EVA foam, velvet lining, cardboard dividers, and molded pulp trays. Inserts are designed to securely hold your products and enhance presentation.",
  },
];

export default function RigidGiftBoxesPage() {
  return (
    <>
      <ProductSchema
        name="Custom Rigid Gift Boxes"
        description="Premium custom rigid gift boxes with low MOQ from 500 units. Magnetic closure, velvet/EVA inserts, hot foil stamping, FSC-certified materials."
        image="https://www.bupackeco.com/images/product_box_1.jpg"
        offers={{ price: "3.20", priceCurrency: "USD", moq: 500, availability: "https://schema.org/InStock", url: "https://www.bupackeco.com/products/rigid-gift-boxes" }}
      />

      <FAQSchema items={faqItems} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Products", url: "https://www.bupackeco.com/products" },
          { name: "Rigid Gift Boxes", url: "https://www.bupackeco.com/products/rigid-gift-boxes" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
              <span>📦</span>
              <span>RIGID GIFT BOXES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom Rigid Gift Boxes
              <span className="block text-green-400 text-3xl md:text-4xl lg:text-5xl mt-2">
                Low MOQ 500 Units
              </span>
            </h1>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Premium rigid boxes that make your product unforgettable. Magnetic closure,
              luxury inserts, and endless customization options. FSC-certified materials
              with low minimums starting at 500 units.
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
                View MOQ Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points / Solutions Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Rigid Gift Boxes?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Premium packaging solutions designed to elevate your brand and delight your customers
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

      {/* Product Showcase */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rigid Box Types
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the perfect structure for your product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productTypes.map((product) => (
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
              Transparent pricing for custom rigid boxes. All prices in USD.
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
            * Prices vary based on box size, materials, and finishing options. Contact us for exact quote.
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
              Elevate your rigid boxes with premium finishing touches
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
          <div className="text-5xl mb-6">🎁</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Custom Rigid Boxes?
          </h2>
          <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
            Start with just 500 units. Get a free quote and physical sample to experience
            our premium quality firsthand.
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
