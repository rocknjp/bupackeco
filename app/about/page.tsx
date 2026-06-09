import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "About BUpack – Qingdao Bejan Giant New Packaging",
  description:
    "Qingdao Bejan Giant New Packaging (BUpack) — 17 years of expertise in custom paper packaging. Owned factory in Qingdao, FSC & ISO 9001 certified, Fortune 500 trusted vendor.",
  alternates: {
    canonical: "https://www.bupackeco.com/about",
  },
};

const timeline = [
  { year: "2009", title: "Industry Entry", desc: "Founder entered the printing and packaging industry, building deep technical expertise." },
  { year: "2013", title: "Entrepreneurial Start", desc: "Started the entrepreneurial journey, serving first clients with custom packaging solutions." },
  { year: "2014", title: "Company Registered", desc: "Qingdao Bejan Giant New Packaging Science & Technology Co., Ltd. officially registered." },
  { year: "2019", title: "Owned Factory Established", desc: "Established controlled production base (10,000+ sqm) with complete pre-press, printing, and post-press equipment." },
  { year: "2022", title: "Foreign Trade Transformation", desc: "Transformed to serve global brands directly — US, UK, Israel, Saudi, UAE, Germany, France." },
];

const values = [
  {
    icon: "💡",
    title: "Innovative Design",
    desc: "Customized technical design based on customer needs. 1 new packaging structure developed every week.",
  },
  {
    icon: "⚡",
    title: "Rapid Prototyping",
    desc: "Material samples in 1 day, printed samples in 3 days. Professional sampling team for quick response.",
  },
  {
    icon: "🤝",
    title: "Efficient Cooperation",
    desc: "Full-cycle project management with proactive progress updates. Your project is always on track.",
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    desc: "ISO 9001 quality system + FSC chain of custody. 3-stage QC process, inspection reports shared before every shipment.",
  },
];

const certifications = [
  { name: "FSC Certified", img: "/images/cert_fsc.png", desc: "Forest Stewardship Council chain of custody certified" },
  { name: "ISO 9001", img: "/images/cert_iso9001.jpg", desc: "Quality management system certified" },
  { name: "Sedex / SMETA", img: "/images/cert_smeta.jpg", desc: "Ethical trade audit passed" },
  { name: "SGS Tested", img: "/images/cert_sgs.jpg", desc: "Third-party quality & safety verification" },
  { name: "RoHS Compliant", img: "/images/cert_rohs.jpg", desc: "Restriction of Hazardous Substances certified materials" },
];

const equipment = [
  { name: "Kodak CTP", desc: "Computer-to-plate pre-press system for precision plate making" },
  { name: "Koenig & Bauer 7+2-UV", desc: "German-made 7-color + 2-UV printing press for high-end work" },
  { name: "Komori CMYK", desc: "Japanese precision printing press for consistent color" },
  { name: "Automatic Laminating", desc: "High-speed lamination for matte/gloss/fabric textures" },
  { name: "Hot Foil Stamping", desc: "Gold/silver/color foil application for premium finish" },
  { name: "Die-Cutting & Box-Making", desc: "Precision die-cutting and automatic box assembly" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "About", url: "https://www.bupackeco.com/about" },
        ]}
      />
      {/* Hero */}
      <section className="relative bg-[#0a2e18] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/factory_hero.jpg"
            alt="Bejan Packaging Factory"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0a2e18]/70"></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              17 Years of<br />
              <span className="text-green-400">Packaging Expertise</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-6">
              Qingdao Bejan Giant New Packaging (BUpack) is a trusted custom paper packaging manufacturer
              based in Qingdao, China. Since 2014, we&apos;ve helped global brands create packaging that
              empowers their products and delights their customers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-500 transition-colors text-sm"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/8615064260757"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-700 text-green-300 font-semibold px-6 py-3 rounded-lg hover:bg-green-900/30 transition-colors text-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "17", l: "Years of Expertise" },
              { n: "10,000+", l: "㎡ Factory Area" },
              { n: "50,000+", l: "Daily Capacity" },
              { n: "500+", l: "Happy Clients" },
            ].map((s) => (
              <div key={s.l} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
                <p className="text-3xl md:text-4xl font-black text-green-400">{s.n}</p>
                <p className="text-green-200 text-sm mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-3">About Bejan</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Packaging That<br />Empowers Your Brand
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Qingdao Bejan Giant New Packaging Science & Technology Co., Ltd. (BUpack) is a professional
                custom paper packaging manufacturer established in 2014 in Qingdao, China.
              </p>
              <p>
                With <strong>17 years of industry expertise</strong>, an owned <strong>10,000+ ㎡ factory</strong>,
                and a complete production line including German Koenig & Bauer and Japanese Komori printing presses,
                we provide one-stop packaging solutions from sampling to mass production.
              </p>
              <p>
                We are a <strong>Fortune 500 supply chain provider</strong> and have served well-known brands
                across candles, jewelry, cosmetics, wine, food, and gifts industries.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">FSC Certified</span>
              <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">ISO 9001</span>
              <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">Sedex Certified</span>
              <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100">DDP Shipping</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/factory_printing.png"
                alt="Bejan factory printing center"
                width={560}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white rounded-2xl p-5 shadow-lg">
              <p className="text-sm font-bold">📍 No. 96, Tianfeng North Road</p>
              <p className="text-sm">Chengyang District, Qingdao, China</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Bejan?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Four core advantages that make us the trusted packaging partner for 500+ global brands.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Equipment */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Production Equipment</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Industry-leading complete production line ensuring quality and efficiency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((eq) => (
              <div key={eq.name} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 text-green-700 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm mb-1">{eq.name}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-[#0a2e18] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-green-200 max-w-2xl mx-auto text-lg">
              17 years of growth, innovation, and partnership.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {timeline.map((t) => (
              <div key={t.year} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-green-400 font-black text-2xl mb-3">{t.year}</div>
                <h3 className="text-white font-bold text-sm mb-2">{t.title}</h3>
                <p className="text-green-200 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Our certifications ensure your packaging meets global quality and sustainability standards. Need originals? <a href="/contact" className="text-green-700 font-medium hover:underline">Contact us</a> for certified copies.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {certifications.map((c) => (
              <div key={c.name} className="flex flex-col items-center text-center group">
                <div
                  className="relative w-32 h-40 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-3 select-none cert-protected"
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                  }}
                >
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={128}
                    height={160}
                    className="object-contain w-full h-full p-2"
                    draggable={false}
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none">
                    <span className="text-[8px] text-gray-400/60 font-mono rotate-[-30deg] whitespace-nowrap bg-white/80 px-2 py-1 rounded">
                      bupackeco.com
                    </span>
                  </div>
                </div>
                <h4 className="text-gray-900 font-bold text-sm mb-1">{c.name}</h4>
                <p className="text-gray-400 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Packaging Project?</h2>
          <p className="text-gray-500 mb-8 text-lg">
            Get a free quote and sample kit. Our team responds within 12 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-colors text-base inline-flex items-center gap-2"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://wa.me/8615064260757"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-700 text-green-700 font-semibold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors text-base inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
