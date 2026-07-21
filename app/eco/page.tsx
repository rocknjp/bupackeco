import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Sustainability – Eco Packaging Commitments | BUpack",
  description:
    "FSC-certified paper, soy-based inks, plastic-free options. Learn how BUpack helps eCommerce brands go green.",
  alternates: {
    canonical: "https://www.bupackeco.com/eco/",
  },
  openGraph: {
    title: "Sustainability – Eco Packaging Commitments | BUpack",
    description:
      "FSC-certified paper, soy-based inks, plastic-free options. BUpack helps eCommerce brands go green.",
    url: "https://www.bupackeco.com/eco",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability – Eco Packaging Commitments | BUpack",
    description:
      "FSC-certified paper, soy-based inks, plastic-free options. BUpack helps eCommerce brands go green.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const commitments = [
  {
    icon: "🌲",
    title: "FSC-Certified Paper",
    detail: "All of our paper stocks are sourced from Forest Stewardship Council certified forests. This ensures responsible forest management and traceability from tree to box.",
    badge: "100% of standard products",
  },
  {
    icon: "🖨️",
    title: "Soy-Based Inks",
    detail: "We use soy-based and water-based inks across all print runs. Unlike petroleum inks, soy inks are renewable, produce less VOC, and are easier to de-ink during recycling.",
    badge: "All print orders",
  },
  {
    icon: "♻️",
    title: "Recyclable & Compostable",
    detail: "Every product in our standard line is 100% curbside recyclable. We also offer compostable liner and tissue options for brands targeting zero-waste.",
    badge: "Compostable add-on available",
  },
  {
    icon: "🚫",
    title: "Plastic-Free by Default",
    detail: "Our standard packaging line contains zero plastic components — no poly bags, no plastic tape, no foam inserts. We use paper tape, kraft paper, and tissue alternatives.",
    badge: "Standard product line",
  },
  {
    icon: "🏭",
    title: "ISO 14001 Factory",
    detail: "Our production facility is ISO 14001 certified for environmental management. We track waste, energy, and water usage — and publish our numbers annually.",
    badge: "ISO 14001:2015",
  },
  {
    icon: "🌍",
    title: "Carbon-Neutral Shipping",
    detail: "We offset 100% of shipping emissions for orders to North America through verified carbon offset programs. Your order arrives carbon-neutral, no action needed.",
    badge: "All NA orders",
  },
];

const ecoGuide = [
  {
    step: "01",
    title: "Choose recycled or FSC paper",
    desc: "Opt for our recycled paperboard grades to reduce virgin fiber usage. Both are available in all product lines.",
  },
  {
    step: "02",
    title: "Minimize ink coverage",
    desc: "Designs with less ink coverage use fewer resources and are easier to recycle. Our designers can help you create a high-impact minimal design.",
  },
  {
    step: "03",
    title: "Skip the lamination",
    desc: "Unlaminated paper is fully recyclable. If you need protection, we offer water-based coating — which is compostable — instead of plastic lamination.",
  },
  {
    step: "04",
    title: "Add an eco message",
    desc: "We print recycling/composting instructions directly on your box — a simple touch that helps your customers do the right thing.",
  },
];

export default function EcoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Sustainability", url: "https://www.bupackeco.com/eco" },
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Is BUpack packaging truly eco-friendly?",
            answer: "Yes. All BUpack packaging uses FSC-certified paper, soy-based inks, and contains zero plastic components. Our standard product line is 100% curbside recyclable.",
          },
          {
            question: "What does FSC certification mean for my packaging?",
            answer: "FSC certification means the paper comes from responsibly managed forests with a verified chain of custody. BUpack holds FSC Chain of Custody certification and includes the FSC label on every production run.",
          },
          {
            question: "Are BUpack boxes compostable?",
            answer: "Our kraft paper and corrugated board products are naturally compostable (home and industrial). Coated papers with lamination are industrially compostable only. We can provide EN 13432 and ASTM D6400 certified materials.",
          },
          {
            question: "Does eco-friendly packaging cost more?",
            answer: "BUpack's eco packaging is priced the same as conventional options. FSC-certified paper, soy-based inks, and plastic-free components are our default — not premium add-ons.",
          },
        ]}
      />
      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Sustainability</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Packaging that&apos;s good for your brand <em className="text-green-400 not-italic">and</em> the planet.
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8">
              We believe sustainability shouldn&apos;t be a premium add-on. It&apos;s the default. Here&apos;s exactly what we do — and what you can tell your customers.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors">
              Get Eco-Certified Packaging
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { n: "100%", label: "FSC Certified" },
              { n: "0", label: "Plastic Components" },
              { n: "18M+", label: "Eco Units Shipped" },
              { n: "2.4M", label: "Trees Protected" },
              { n: "ISO", label: "14001 Certified Factory" },
              { n: "♻️", label: "Curbside Recyclable" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-green-300 mb-1">{s.n}</div>
                <div className="text-xs text-green-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Commitments</h2>
          <p className="text-gray-500 mb-12">Not buzzwords. Verified, measurable, and third-party audited.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all">
                <div className="text-3xl mb-4">{c.icon}</div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{c.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.detail}</p>
                <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-100">
                  {c.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to be more eco guide */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">How to make your packaging even greener</h2>
          <p className="text-gray-500 mb-12">A quick guide for eCommerce brand owners who want to go further.</p>
          <div className="space-y-8">
            {ecoGuide.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-700 text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Make sustainability part of your brand story</h2>
          <p className="text-green-100 mb-8">
            We&apos;ll help you choose the right eco-certified materials and even write the sustainability copy for your product pages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-green-800 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors">
              Start with Free Samples →
            </Link>
            <Link href="/faq" className="inline-block border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              Read the FAQ
            </Link>
          </div>
          <p className="text-green-200 text-sm mt-6">Explore our <Link href="/products" className="underline hover:text-white">eco product lineup</Link> or <Link href="/blog" className="underline hover:text-white">read packaging guides</Link></p>
        </div>
      </section>
    </>
  );
}
