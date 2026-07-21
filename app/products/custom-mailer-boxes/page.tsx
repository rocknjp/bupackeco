import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Mailer Boxes for Ecommerce | Low MOQ | BUpack",
  description:
    "Custom printed mailer boxes for ecommerce and DTC brands. E-flute and B-flute options, custom inserts, full-color printing. MOQ from 100 units.",
  alternates: {
    canonical: "https://www.bupackeco.com/products/custom-mailer-boxes/",
  },
  keywords: [
    "custom mailer boxes",
    "ecommerce mailer boxes",
    "custom printed mailer boxes",
    "low MOQ mailer boxes",
    "DTC packaging",
  ],
  openGraph: {
    title: "Custom Mailer Boxes for Ecommerce | Low MOQ | BUpack",
    description:
      "Custom printed mailer boxes for ecommerce and DTC brands. E-flute and B-flute options, custom inserts, full-color printing. MOQ from 100 units.",
    url: "https://www.bupackeco.com/products/custom-mailer-boxes",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Mailer Boxes for Ecommerce | Low MOQ | BUpack",
    description:
      "Custom printed mailer boxes for ecommerce and DTC brands. E-flute and B-flute options, custom inserts, full-color printing. MOQ from 100 units.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const coreValues = [
  {
    icon: "📦",
    title: "E-Flute & B-Flute",
    description:
      "E-flute (1.5mm) for smooth printing surface, B-flute (3mm) for extra cushioning. Choose the right corrugation for your product and brand.",
  },
  {
    icon: "🎨",
    title: "Full-Color Printing",
    description:
      "CMYK offset and digital printing on both exterior and interior. No limits on colors — your brand, your design, your way.",
  },
  {
    icon: "🧩",
    title: "Custom Inserts",
    description:
      "Cardboard inserts, molded pulp trays, or EVA foam to keep products secure. Tailored to your exact product dimensions.",
  },
  {
    icon: "🌿",
    title: "FSC Certified",
    description:
      "All mailer boxes made from FSC-certified corrugated board. 100% recyclable, printed with soy-based ink.",
  },
];

const productTypes = [
  {
    name: "Standard Mailer Box",
    emoji: "📦",
    description:
      "Classic tuck-front mailer with self-locking closure. No tape needed. Easy assembly, secure seal, perfect for ecommerce shipping.",
    bestFor: "DTC Shipping",
  },
  {
    name: "Reverse Tuck Mailer",
    emoji: "📬",
    description:
      "Reverse tuck design with opposing flaps. Clean opening experience ideal for subscription boxes and repeat orders.",
    bestFor: "Subscription Boxes",
  },
  {
    name: "Snap-Lock Bottom",
    emoji: "🔒",
    description:
      "Auto-lock bottom for quick assembly. Extra secure base supports heavier products. Popular for skincare and beauty brands.",
    bestFor: "Beauty & Skincare",
  },
  {
    name: "Two-Piece Mailer",
    emoji: "🎁",
    description:
      "Separate lid and base for premium unboxing. Lift-off lid creates a gift-like reveal. Great for limited editions and gift sets.",
    bestFor: "Gift Sets",
  },
];

const moqTable = [
  {
    quantity: "100 units",
    unitPrice: "$2.80 - $4.50",
    tooling: "$0 (digital)",
    leadTime: "7-12 days",
    bestFor: "Test Run",
  },
  {
    quantity: "500 units",
    unitPrice: "$1.50 - $2.80",
    tooling: "$0 (digital) / $200 (offset)",
    leadTime: "12-15 days",
    bestFor: "Growing Brands",
  },
  {
    quantity: "1,000 units",
    unitPrice: "$0.90 - $1.80",
    tooling: "$200 (offset)",
    leadTime: "15-18 days",
    bestFor: "Steady Volume",
  },
  {
    quantity: "5,000 units",
    unitPrice: "$0.50 - $1.10",
    tooling: "$200 (offset)",
    leadTime: "18-22 days",
    bestFor: "Scale Production",
  },
];

const finishingOptions = [
  {
    option: "Matte Lamination",
    description: "Soft-touch matte finish. Premium feel, fingerprint-resistant.",
    minOrder: "100+ units",
    emoji: "🖤",
  },
  {
    option: "Gloss Lamination",
    description: "High-shine finish that makes colors pop. Great for bold designs.",
    minOrder: "100+ units",
    emoji: "✨",
  },
  {
    option: "Spot UV",
    description: "Glossy highlight on specific areas like logos or patterns.",
    minOrder: "500+ units",
    emoji: "💎",
  },
  {
    option: "Interior Printing",
    description: "Full-color print inside the box for surprise unboxing moments.",
    minOrder: "100+ units",
    emoji: "🎉",
  },
];

const faqItems = [
  {
    question: "What is the minimum order quantity for custom mailer boxes?",
    answer:
      "Our MOQ starts at just 100 units for digital printing. This makes custom mailer boxes accessible to new DTC brands and small businesses. Offset printing is available at 500+ units for lower per-unit pricing.",
  },
  {
    question: "What is the difference between E-flute and B-flute?",
    answer:
      "E-flute is 1.5mm thick with a smoother surface, ideal for high-quality printing. B-flute is 3mm thick with better cushioning, ideal for heavier or fragile products. E-flute is the most popular choice for ecommerce mailer boxes.",
  },
  {
    question: "Can I print on the inside of the mailer box?",
    answer:
      "Yes! We offer full-color interior printing on all mailer boxes. Interior printing is one of the most effective ways to create a branded unboxing experience. You can print patterns, messages, social handles, or QR codes inside.",
  },
  {
    question: "How long does production take for custom mailer boxes?",
    answer:
      "Digital printing orders (100-500 units) take 7-12 business days. Offset printing orders (500+ units) take 12-18 business days. Add 7-21 days for ocean shipping or 3-5 days for air freight to the US.",
  },
  {
    question: "Do mailer boxes provide enough protection for shipping?",
    answer:
      "Yes. Our corrugated mailer boxes are designed for direct-to-customer shipping. E-flute and B-flute corrugated board provides excellent protection. For fragile items, we recommend adding custom inserts for extra security.",
  },
];

export default function CustomMailerBoxesPage() {
  return (
    <>
      <ProductSchema
        name="Custom Mailer Boxes for Ecommerce"
        description="Custom printed mailer boxes for ecommerce and DTC brands. E-flute and B-flute options, custom inserts, full-color printing. MOQ from 100 units."
        image="https://www.bupackeco.com/images/product_box_1.jpg"
        offers={{ price: "2.80", priceCurrency: "USD", moq: 100, availability: "https://schema.org/InStock", url: "https://www.bupackeco.com/products/custom-mailer-boxes" }}
      />

      <FAQSchema items={faqItems} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Products", url: "https://www.bupackeco.com/products" },
          { name: "Custom Mailer Boxes", url: "https://www.bupackeco.com/products/custom-mailer-boxes" },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4">
              <span>📦</span>
              <span>CUSTOM MAILER BOXES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom Mailer Boxes
              <span className="block text-green-400 text-3xl md:text-4xl lg:text-5xl mt-2">
                Low MOQ from 100 Units
              </span>
            </h1>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              The workhorse of ecommerce packaging. Custom printed mailer boxes with E-flute
              and B-flute options, full-color interior printing, and custom inserts. FSC-certified
              with MOQ starting at just 100 units.
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

      {/* Core Values Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Custom Mailer Boxes?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Purpose-built for ecommerce shipping and DTC brand experiences
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
              Mailer Box Types
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
              Transparent pricing for custom mailer boxes. All prices in USD.
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
              Make your mailer boxes stand out with premium finishing
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
          <div className="text-5xl mb-6">📦</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Custom Mailer Boxes?
          </h2>
          <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
            Start with just 100 units. Get a free quote and digital proof to see
            exactly how your boxes will look before production.
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
