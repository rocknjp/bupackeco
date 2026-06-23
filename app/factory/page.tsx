import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Our Factory | FSC-Certified Packaging Workshop | BUpack",
  description:
    "Tour BUpack's 10,000sqm ISO-certified factory in Qingdao, China. 17 years of custom packaging expertise, FSC chain-of-custody, Fortune 500 clients. See our production line, quality control, and sustainability practices.",
  alternates: {
    canonical: "https://www.bupackeco.com/factory",
  },
  openGraph: {
    title: "Our Factory | FSC-Certified Packaging Workshop | BUpack",
    description:
      "Tour BUpack's 10,000sqm ISO-certified factory in Qingdao. 17 years of custom packaging expertise, Fortune 500 clients.",
    url: "https://www.bupackeco.com/factory",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/factory_workshop.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Factory | FSC-Certified Packaging Workshop | BUpack",
    description:
      "Tour BUpack's 10,000sqm ISO-certified factory in Qingdao. 17 years of custom packaging expertise.",
    images: ["https://www.bupackeco.com/images/factory_workshop.jpg"],
  },
};

const stats = [
  { number: "10,000", unit: "sqm", label: "Factory Floor", desc: "Dedicated packaging production facility with climate-controlled printing and finishing zones" },
  { number: "17+", unit: "years", label: "Experience", desc: "Manufacturing custom paper packaging since 2008, serving clients across 30+ countries" },
  { number: "200+", unit: "brands", label: "Served", desc: "From DTC startups to Fortune 500 companies — we've produced packaging for every scale" },
  { number: "30", unit: "countries", label: "Shipped To", desc: "North America, Europe, Australia, and Asia — DDP door-to-door delivery included" },
];

const productionSteps = [
  {
    step: "01",
    title: "Design & Prepress",
    desc: "You submit artwork in AI, PDF, or PSD. Our prepress team checks resolution (300dpi min), color mode (CMYK), bleed (3mm), and font embedding. We send a digital proof within 24 hours — free of charge.",
    img: "/images/factory_workshop.jpg",
    alt: "BUpack prepress team reviewing packaging artwork on calibrated monitors",
  },
  {
    step: "02",
    title: "Physical Sampling",
    desc: "We produce a fully finished physical sample with your exact print, paper stock, and finishes. Shipped to your address via DHL within 7–10 days. Sample revisions are free until you're 100% satisfied.",
    img: "/images/factory_production.jpg",
    alt: "BUpack quality team inspecting physical packaging samples before client approval",
  },
  {
    step: "03",
    title: "Printing — Offset & Digital",
    desc: "Heidelberg 6-color offset presses deliver 95%+ Delta-E color accuracy. For short runs (under 500 units), our HP Indigo digital press eliminates plate costs. Soy-based inks are standard across both lines.",
    img: "/images/factory_workshop.jpg",
    alt: "Heidelberg offset printing press producing custom packaging at BUpack factory",
  },
  {
    step: "04",
    title: "Die-Cutting & Gluing",
    desc: "Automated die-cutting lines with inline defect detection (99.2% catch rate). Boxes are glued on BOBST folder-gluers with hot-melt and water-based adhesives. Every 500th unit is pulled for dimensional check.",
    img: "/images/factory_production.jpg",
    alt: "Automated die-cutting and gluing line at BUpack Qingdao packaging factory",
  },
  {
    step: "05",
    title: "Quality Control — 3 Stage",
    desc: "Stage 1: Inline camera inspection during production. Stage 2: AQL 2.5 random sampling at packing. Stage 3: Pre-shipment inspection by senior QC manager. Defect rate consistently below 0.5%.",
    img: "/images/factory_workshop.jpg",
    alt: "BUpack QC inspector performing AQL 2.5 random sampling on finished packaging boxes",
  },
  {
    step: "06",
    title: "Packing & Shipping",
    desc: "Boxes are flat-packed, palletized with moisture barrier, and loaded into containers. We handle all export documentation, customs clearance, and DDP delivery to your 3PL, warehouse, or FBA prep center.",
    img: "/images/factory_production.jpg",
    alt: "Finished packaging boxes flat-packed and palletized for DDP container shipping at BUpack",
  },
];

const certifications = [
  {
    name: "FSC Chain of Custody",
    code: "FSC-C XXXXXX",
    desc: "Every paper shipment is traceable to responsibly managed forests. We provide FSC certification documentation with every order for your sustainability reporting.",
    icon: "🌲",
    img: "/images/factory_workshop.jpg",
    alt: "FSC Chain of Custody certification document for BUpack eco-friendly paper packaging factory",
  },
  {
    name: "ISO 9001:2015",
    code: "Quality Management",
    desc: "Certified quality management system covering all stages: raw material inspection, in-process QC, final inspection, and corrective action procedures.",
    icon: "✅",
    img: "/images/factory_production.jpg",
    alt: "ISO 9001 certified quality management process at BUpack packaging factory Qingdao",
  },
  {
    name: "ISO 14001:2015",
    code: "Environmental Management",
    desc: "Certified environmental management system. We track and continuously reduce energy consumption, water usage, and waste across all production processes.",
    icon: "🌍",
    img: "/images/factory_workshop.jpg",
    alt: "ISO 14001 environmental management certified BUpack sustainable packaging production",
  },
  {
    name: "RoHS Compliant",
    code: "Hazardous Substances",
    desc: "All inks, adhesives, and finishes comply with RoHS restrictions on hazardous substances. This is critical for packaging that touches food, cosmetics, and children's products.",
    icon: "🛡️",
    img: "/images/factory_production.jpg",
    alt: "RoHS compliant soy-based inks and water-based adhesives used in BUpack packaging",
  },
];

const capabilities = [
  { label: "Printing Presses", value: "Heidelberg Speedmaster 6-color (×2) + HP Indigo 7900 Digital" },
  { label: "Die-Cutting Lines", value: "BOBST SP 102-E (×2) + automated feeder-stacker" },
  { label: "Folder-Gluers", value: "BOBST Ambition 106-A2 + Expertfold 110" },
  { label: "Laminators", value: "Automatic thermal + wet lamination (matte, gloss, soft-touch)" },
  { label: "Foil Stampers", value: "Hot foil + cold foil capable, up to 720×1020mm sheet size" },
  { label: "Annual Capacity", value: "10 million+ boxes across all product categories" },
  { label: "Sample Room", value: "Dedicated 200sqm sample studio with digital cutter for same-day mockups" },
  { label: "QC Equipment", value: "Spectrophotometers, calipers, humidity chambers, drop-test rigs" },
];

export default function FactoryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Our Factory", url: "/factory" },
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "Where is BUpack's factory located?",
            answer: "BUpack's 10,000sqm factory is located in Chengyang District, Qingdao, Shandong Province, China — approximately 40 minutes from Qingdao Port, one of the world's top 10 container ports.",
          },
          {
            question: "Is BUpack a trading company or a factory?",
            answer: "BUpack is a direct factory — not a trading company. We own our production facility, equipment, and quality control team. There are no middlemen between you and the people making your packaging.",
          },
          {
            question: "Can I visit the factory in person?",
            answer: "Yes, we welcome factory visits. We can arrange transportation from Qingdao airport or train station. You'll tour the full production line, meet the QC team, and review samples in person. Contact us to schedule.",
          },
          {
            question: "What certifications does BUpack hold?",
            answer: "BUpack holds FSC Chain of Custody certification, ISO 9001:2015 (quality management), ISO 14001:2015 (environmental management), and RoHS compliance for all inks and adhesives used in production.",
          },
          {
            question: "How does BUpack ensure consistent quality across large orders?",
            answer: "We use 3-stage quality control: inline camera inspection during production, AQL 2.5 random sampling at packing, and pre-shipment inspection by senior QC. Our defect rate is consistently below 0.5% across all orders.",
          },
        ]}
      />

      {/* ── HERO ─────────────────────────── */}
      <section className="relative bg-[#0a2e18] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/factory_workshop.jpg"
            alt="BUpack 10,000sqm ISO-certified packaging factory workshop in Qingdao China"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-green-400 text-sm font-bold tracking-widest uppercase mb-4 block">
            Factory Tour
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Where Your Packaging<br />Gets Made
          </h1>
          <p className="text-green-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Step inside our 10,000sqm production facility in Qingdao, China. See the people, 
            machines, and processes behind every box we ship.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors inline-flex items-center gap-2"
            >
              Schedule a Factory Visit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border border-green-500/40 text-green-300 font-semibold px-8 py-4 rounded-xl hover:bg-green-900/50 transition-colors"
            >
              Request Free Sample
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-700 mb-1">
                {s.number}
                <span className="text-lg text-green-500 ml-1">{s.unit}</span>
              </div>
              <div className="text-sm font-bold text-gray-800 mb-2">{s.label}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTION TOUR ─────────────────────────── */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-green-600 text-sm font-bold tracking-widest uppercase">
              End-to-End Production
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              From Design File to Your Doorstep
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six stages. One factory. Every step under our roof means no outsourcing, 
              no communication gaps, and full quality control.
            </p>
          </div>

          <div className="space-y-16">
            {productionSteps.map((s, idx) => (
              <div
                key={s.step}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="md:w-1/2 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-sm font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    {s.step}
                  </div>
                </div>
                {/* Text */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ─────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-green-600 text-sm font-bold tracking-widest uppercase">
              Trust & Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Certifications That Matter
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your customers ask about sustainability. We make sure you have the documentation 
              to answer — with internationally recognized third-party certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-green-50 border border-green-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <span className="text-xs text-green-600 font-bold tracking-wider uppercase bg-green-100 px-2 py-0.5 rounded">
                      {cert.code}
                    </span>
                    <p className="text-gray-600 mt-3 leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES TABLE ─────────────────────────── */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Production Capabilities at a Glance
            </h2>
            <p className="text-gray-600">
              Industrial-grade equipment operated by experienced craftsmen.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="divide-y divide-gray-100">
              {capabilities.map((c) => (
                <div key={c.label} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-sm font-bold text-gray-800 sm:w-48 shrink-0">{c.label}</span>
                  <span className="text-sm text-gray-600">{c.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BUPACK FACTORY ─────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Brands Choose Our Factory
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "No Middlemen",
                desc: "You talk directly to the factory manager, not a trading company agent. Quotes, samples, and production updates come straight from the source.",
                emoji: "🏭",
              },
              {
                title: "Transparent Pricing",
                desc: "Your quote breaks down material, printing, finishing, and packing costs line by line. No hidden fees, no surprise surcharges.",
                emoji: "💰",
              },
              {
                title: "Rapid Sampling",
                desc: "Dedicated sample room produces physical samples in 3–5 days. Digital proofs in 24 hours. Iterate until you're satisfied.",
                emoji: "⚡",
              },
              {
                title: "Flexible MOQ",
                desc: "Start from 100 units for folding cartons, 200 for rigid boxes. No need to commit to thousands before testing the market.",
                emoji: "📦",
              },
              {
                title: "DDP Shipping",
                desc: "We handle sea freight, customs clearance, duties, and door-to-door delivery. Your boxes arrive at your 3PL — you handle nothing.",
                emoji: "🚢",
              },
              {
                title: "Sustainability Tracked",
                desc: "Every order comes with FSC documentation, carbon footprint data, and material sourcing certificates for your ESG reporting.",
                emoji: "📋",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────── */}
      <section className="py-16 px-4 bg-[#0a2e18] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl mb-4">🏭</div>
          <h2 className="text-3xl font-bold mb-4">Ready to See Your Packaging Come to Life?</h2>
          <p className="text-green-200 mb-8">
            Tell us about your project and we'll send you a free physical sample 
            within 7–10 days. Or schedule a video call factory tour — walk the production 
            line from your office.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors"
            >
              Get Free Sample + Quote
            </Link>
            <Link
              href="/about"
              className="border border-green-500/40 text-green-300 font-semibold px-8 py-4 rounded-xl hover:bg-green-900/50 transition-colors"
            >
              About BUpack
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
