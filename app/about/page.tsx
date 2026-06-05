import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About BUpack – Eco Packaging for eCommerce Brands",
  description:
    "BUpack is an eCommerce-focused packaging manufacturer. We've spent 15+ years helping brands create unboxing experiences that earn reviews, shares, and repeat customers.",
};

const timeline = [
  { year: "2008", title: "Founded", desc: "BUpack was founded in Beijing, China, with a mission to make premium packaging accessible to every brand." },
  { year: "2015", title: "DTC Pivot", desc: "We pivoted to serve DTC and eCommerce brands — low MOQ, fast turnaround, unboxing-first design." },
  { year: "2019", title: "FSC Certified", desc: "Achieved FSC certification. Sustainability became our default, not an upsell." },
  { year: "2023", title: "850+ Brands", desc: "Crossed 850+ eCommerce brand partners across North America and Europe." },
  { year: "2025", title: "18M+ Units", desc: "Shipped over 18 million eco-friendly packaging units to date." },
];

const values = [
  {
    icon: "🌿",
    title: "Sustainability is the default",
    desc: "We don't charge extra to go green. FSC-certified paper and soy-based inks are standard across all of our products.",
  },
  {
    icon: "📦",
    title: "Built for the unboxing era",
    desc: "Since 2018, unboxing videos have driven billions in eCommerce sales. We design packaging that earns those shares.",
  },
  {
    icon: "🤝",
    title: "We grow with your brand",
    desc: "From 100-unit test runs to 100,000-unit reorders — our pricing and support scale with your success.",
  },
  {
    icon: "🔬",
    title: "Quality is measurable",
    desc: "Every order passes a 3-stage QC process. We share inspection reports and photos before every shipment.",
  },
];

const certifications = [
  { name: "FSC Certified", desc: "Forest Stewardship Council certified materials" },
  { name: "ISO 9001:2015", desc: "Quality management system certified" },
  { name: "ISO 14001:2015", desc: "Environmental management certified" },
  { name: "SGS Tested", desc: "Third-party quality verification" },
  { name: "SMETA Audited", desc: "Ethical trade audit passed" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a2e18] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/factory_workshop.jpg"
            alt="BUpack factory workshop"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0a2e18]/60"></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We&apos;re not just a factory.<br />
              <span className="text-green-400">We&apos;re your packaging partner.</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed">
              BUpack was built to serve a new generation of eCommerce brands — brands that care about the unboxing moment, brand storytelling, and their environmental footprint.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "15+", l: "Years manufacturing" },
              { n: "850+", l: "eCommerce brands" },
              { n: "18M+", l: "Eco units shipped" },
              { n: "24h", l: "Quote turnaround" },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-green-300 mb-1">{s.n}</div>
                <div className="text-green-200 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Image Showcase */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/factory_workshop.jpg"
          alt="BUpack eco packaging factory workshop - clean production line"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a2e18]/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Factory, Your Standards</h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">
              15,000 m² of FSC-certified production space. 3-stage QC. 100% factory-direct pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our story</h2>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              BUpack was founded in 2008 in Beijing, China, with one goal: to give brands packaging they&apos;re proud of, at a price they can afford.
            </p>
            <p>
              For our first few years, we served large retailers. But in 2015, something changed. The DTC revolution was starting. Small brands on Shopify, Amazon, and Etsy were growing fast — and they needed something traditional factories couldn&apos;t offer: <strong>low MOQs, fast turnaround, and packaging that looked expensive but wasn&apos;t.</strong>
            </p>
            <p>
              So we pivoted. We invested in digital printing lines, rebuilt our QC process around eCommerce standards, and started shipping samples direct to brand founders across North America.
            </p>
            <p>
              Today, BUpack works with 850+ DTC, subscription box, wellness, beauty, and lifestyle brands. Our clients range from 2-person Shopify startups to 8-figure brands. The mission stays the same: <em>packaging that makes people stop, feel something, and share.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our journey</h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="inline-block bg-green-700 text-white text-sm font-bold px-3 py-1 rounded-full">{item.year}</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-green-200 pl-8 relative">
                  <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-1.5"></div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What we believe</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#f9fdf8] rounded-2xl p-8 border border-green-100 hover:border-green-300 transition-colors">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Verified & Certified</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center hover:bg-green-100 transition-colors">
                <div className="text-green-600 text-lg mb-2">✓</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{c.name}</div>
                <div className="text-gray-500 text-xs">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0a2e18] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-green-200 mb-8">Start with a free sample kit — no MOQ, no commitment.</p>
          <Link href="/contact" className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors">
            Get Free Samples →
          </Link>
        </div>
      </section>
    </>
  );
}
