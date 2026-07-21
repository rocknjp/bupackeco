import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Low MOQ Custom Packaging Guide | Start from 100 Units | BUpack",
  description:
    "Custom packaging with low minimum order quantities. Start from 100 units for paper boxes, 200 for paper bags. No forced overstock — scale at your own pace. FSC-certified, factory-direct.",
  keywords:
    "low MOQ custom packaging, custom packaging for small business low minimum order, custom boxes 100 units, small batch packaging manufacturer, low minimum custom boxes, startup packaging supplier",
  alternates: {
    canonical: "https://www.bupackeco.com/moq-guide/",
  },
  openGraph: {
    title: "Low MOQ Custom Packaging Guide | Start from 100 Units | BUpack",
    description:
      "Custom packaging with low minimum order quantities. Start from 100 units for paper boxes, 200 for paper bags. No forced overstock — scale at your own pace. FSC-certified, factory-direct.",
    url: "https://www.bupackeco.com/moq-guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Low MOQ Custom Packaging Guide | Start from 100 Units | BUpack",
    description:
      "Custom packaging with low minimum order quantities. Start from 100 units for paper boxes, 200 for paper bags. No forced overstock — scale at your own pace. FSC-certified, factory-direct.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const moqByProduct = [
  {
    name: "Folding Cartons & Cardstock Boxes",
    moq: "100",
    leadTime: "15–20 days",
    desc: "Thin paperboard boxes for retail products, cosmetics, and food packaging. Full CMYK printing, matte/gloss lamination.",
    href: "/products/paper-boxes",
  },
  {
    name: "Rigid Gift Boxes",
    moq: "500",
    leadTime: "20–25 days",
    desc: "Premium lid-and-base boxes with magnetic closure, velvet inserts, and foil stamping. Designed for luxury unboxing.",
    href: "/products/paper-boxes",
  },
  {
    name: "Corrugated Mailer Boxes",
    moq: "100",
    leadTime: "15–20 days",
    desc: "Durable shipping boxes for DTC and eCommerce brands. Self-locking design, custom print interior + exterior.",
    href: "/products/paper-boxes",
  },
  {
    name: "Custom Paper Bags",
    moq: "200",
    leadTime: "12–18 days",
    desc: "Kraft or coated art paper bags with rope, flat, or die-cut handles. Perfect for retail, events, and gift packaging.",
    href: "/products/paper-bags",
  },
  {
    name: "Subscription Boxes (Standard)",
    moq: "100",
    leadTime: "20–25 days",
    desc: "Magnetic closure boxes with custom inserts and interior printing. Standardized sizes for monthly subscription brands.",
    href: "/products/subscription-boxes",
  },
  {
    name: "Subscription Boxes (Fully Custom)",
    moq: "500",
    leadTime: "25–30 days",
    desc: "Fully custom sizes with EVA foam inserts, custom hardware, and premium finishes. For established subscription brands.",
    href: "/products/subscription-boxes",
  },
];

const faqs = [
  {
    question: "Why do most manufacturers have high minimum order quantities?",
    answer:
      "Traditional packaging factories are optimized for large runs — they make money on volume, not flexibility. Setup costs (die cutting, printing plates, machine calibration) are the same whether you order 100 or 10,000 units. Most factories simply won't accept orders that don't cover their setup costs. BUpack uses standardized die libraries, digital-first workflows, and flexible production scheduling to make small batches profitable — which means we can offer MOQs as low as 100 units.",
  },
  {
    question: "What does MOQ actually mean in custom packaging?",
    answer:
      "MOQ (Minimum Order Quantity) is the smallest number of units a manufacturer will produce for a single order. In packaging, MOQ varies by product type: folding cartons typically start at 100 units, rigid boxes at 500, and paper bags at 200. MOQ exists because factories need to cover setup costs (die preparation, printing plates, machine time). At BUpack, we've optimized our production process to offer industry-low MOQs without compromising quality.",
  },
  {
    question: "Can I really order just 100 custom boxes?",
    answer:
      "Yes. Our folding carton and mailer box MOQ is 100 units per design. This is ideal for testing a new product line, seasonal packaging, limited editions, or your first custom packaging order. You get the same print quality, material options, and finishing as orders of 10,000 units — just in a smaller batch.",
  },
  {
    question: "How does low MOQ pricing work? Is it more expensive per unit?",
    answer:
      "Per-unit cost is higher at lower quantities because fixed setup costs are spread across fewer units. However, the total investment is much lower — and for growing brands, avoiding 9,000 units of dead inventory more than offsets the per-unit premium. As a rough guide: a custom mailer box at 100 units might cost $2.50-3.50/unit, while the same box at 5,000 units might cost $0.80-1.20/unit. We're transparent about pricing at every quantity tier.",
  },
  {
    question: "What's the process for placing my first low-MOQ order?",
    answer:
      "1. Share your requirements (size, quantity, design idea) via our contact form. 2. We'll send a quote within 24 hours. 3. Upload your artwork — our prepress team reviews it for free. 4. We produce a physical sample (7-10 days) and ship it to you. 5. You approve the sample, and we begin production. 6. Your order ships to your door in 15-25 days depending on product type.",
  },
  {
    question: "Can I reorder the same design at different quantities?",
    answer:
      "Absolutely. Once your dieline and printing plates are on file, reorders are faster and slightly cheaper (no setup fees). You can reorder as few as 50 units for most products. Many brands start with 100 units to test, then scale to 500, 1,000, or more as they grow.",
  },
  {
    question: "Do you offer samples before I commit to an order?",
    answer:
      "Yes — we offer two types of samples. Material samples (blank paper swatches showing finish options) ship in 1 day. Printed physical samples (a fully finished box with your artwork) ship in 7-10 days. The printed sample is free — you only cover shipping. It's the best way to see and feel your packaging before committing to production.",
  },
  {
    question: "How does BUpack compare to US-based packaging companies for low MOQ?",
    answer:
      "US printers typically offer MOQs of 250-500 units but at significantly higher per-unit prices ($4-8/box vs $1-3/box). Their advantage is faster shipping (no ocean freight). BUpack's advantage is dramatically lower per-unit cost, more customization options (foil stamping, embossing, interior printing), and FSC certification included as standard. For most DTC brands, the 2-3 week shipping time is well worth the 50-70% cost savings.",
  },
];

export default function MoqGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Low MOQ Guide", url: "https://www.bupackeco.com/moq-guide" },
        ]}
      />
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Start Small, Scale Fast</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Custom Packaging with Low Minimum Orders
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mb-8">
            You don't need 10,000 units to get premium custom packaging. Start from 100 boxes — perfect for testing, launching, or growing at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors text-base"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#product-moq"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              View MOQ by Product
            </Link>
          </div>
        </div>
      </section>

      {/* Why Low MOQ Matters */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why Low MOQ Matters for Your Brand</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Traditional packaging suppliers lock you into 3,000+ unit orders. For growing DTC brands, that means cash tied up in inventory, no room to test, and anxiety about every design change.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧪",
                title: "Test Before You Invest",
                desc: "Launch a seasonal design or new product line with 100 units. Validate before committing to volume.",
              },
              {
                icon: "💰",
                title: "No Dead Inventory",
                desc: "Order what you need, when you need it. No warehouse full of outdated packaging.",
              },
              {
                icon: "🎨",
                title: "Iterate Faster",
                desc: "Refresh your packaging every season without worrying about leftover stock. Stay relevant.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:border-green-200 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ by Product */}
      <section id="product-moq" className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">MOQ by Product Type</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Every product has its own minimum order quantity based on manufacturing complexity. Here's exactly what you need to know.
          </p>
          <div className="space-y-4">
            {moqByProduct.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-100 hover:border-green-200 transition-colors overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 bg-green-50 flex flex-col items-center justify-center py-6 px-4 border-r border-green-100">
                    <div className="text-3xl font-black text-green-700">{item.moq}</div>
                    <div className="text-xs text-green-600 font-medium">min units</div>
                    <div className="text-[10px] text-gray-400 mt-1">{item.leadTime} lead</div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <Link
                      href={item.href}
                      className="flex-shrink-0 inline-flex items-center gap-1 text-green-700 font-semibold text-sm hover:gap-2 transition-all mt-2 sm:mt-0"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Your First Order: Step by Step</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            From idea to your doorstep — here's exactly what happens when you place your first low-MOQ order with BUpack.
          </p>
          <div className="space-y-6">
            {[
              { step: "1", title: "Share Your Requirements", desc: "Tell us your product type, desired size, quantity, and any design ideas. Our team responds within 24 hours with a custom quote." },
              { step: "2", title: "Upload Your Artwork", desc: "Send us your design files (AI, PDF, PSD). Our prepress team reviews for free — checking bleed, resolution, and color mode." },
              { step: "3", title: "Approve Your Sample", desc: "We produce a fully finished physical sample with your print and ship it to you in 7-10 days. Touch it, feel it, approve it." },
              { step: "4", title: "Production & Delivery", desc: "Once approved, production takes 12-25 days depending on product type. We ship DDP to your door — no customs headaches." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">BUpack vs. Traditional Suppliers</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            See why growing brands choose factory-direct with low MOQ over traditional high-volume suppliers.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Feature</th>
                    <th className="text-left px-5 py-4 font-semibold">BUpack</th>
                    <th className="text-left px-5 py-4 font-semibold">Traditional Factory</th>
                    <th className="text-left px-5 py-4 font-semibold">US Printer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Folding Carton MOQ", "100 units", "1,000–3,000", "250–500"],
                    ["Rigid Box MOQ", "500 units", "2,000–5,000", "500–1,000"],
                    ["Paper Bag MOQ", "200 units", "1,000–5,000", "500–1,000"],
                    ["Custom Size Fee", "Free (standard dies)", "$200–$800", "$100–$500"],
                    ["Interior Print", "Included", "Extra charge", "Often unavailable"],
                    ["Physical Sample", "Free (you pay shipping)", "$100–$300", "$50–$150"],
                    ["FSC Certification", "Included", "Rare", "Limited"],
                    ["Per-Unit Cost (at MOQ)", "$1.50–3.50", "$1.00–2.00", "$4.00–8.00"],
                    ["Total Min Investment", "~$150–350", "~$3,000+", "~$2,000+"],
                    ["Production Time", "15–25 days", "25–45 days", "7–14 days"],
                  ].map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-5 py-3 font-medium text-gray-900">{row[0]}</td>
                      <td className="px-5 py-3 text-green-700 font-semibold">{row[1]}</td>
                      <td className="px-5 py-3 text-gray-600">{row[2]}</td>
                      <td className="px-5 py-3 text-gray-600">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions About Low MOQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-xl border border-gray-200 group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed text-sm">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start small and scale big?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Tell us about your brand and get a free quote + physical sample. No minimum commitment beyond the order you place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Get Free Quote & Sample
            </Link>
            <Link
              href="/products"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Browse Products
            </Link>
          </div>
          <p className="text-green-300 text-sm mt-6">
            📦 Free physical sample · 💬 Reply in 24 hours · 🌲 FSC-certified materials
          </p>
        </div>
      </section>
    </>
  );
}
