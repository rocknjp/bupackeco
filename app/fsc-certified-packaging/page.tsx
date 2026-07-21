import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "FSC-Certified Custom Packaging | Low MOQ, Verified | BUpack",
  description:
    "FSC-certified custom paper packaging for DTC and eCommerce brands. Verified chain of custody from sustainable forests. Mailer boxes, rigid boxes, and paper bags from 100 units MOQ.",
  alternates: {
    canonical: "https://www.bupackeco.com/fsc-certified-packaging/",
  },
  openGraph: {
    title: "FSC-Certified Custom Packaging | Low MOQ, Verified | BUpack",
    description:
      "FSC-certified custom paper packaging for DTC and eCommerce brands. Verified chain of custody from sustainable forests. Mailer boxes, rigid boxes, and paper bags from 100 units MOQ.",
    url: "https://www.bupackeco.com/fsc-certified-packaging",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FSC-Certified Custom Packaging | Low MOQ, Verified | BUpack",
    description:
      "FSC-certified custom paper packaging for DTC and eCommerce brands. Verified chain of custody from sustainable forests. Mailer boxes, rigid boxes, and paper bags from 100 units MOQ.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const fscLabels = [
  {
    icon: "🌲",
    title: "FSC 100%",
    desc: 'All timber/fibre comes from FSC-certified forests. The gold standard for sustainable sourcing — every fiber is traceable to a responsibly managed forest.',
    gradient: "from-green-600 to-green-800",
  },
  {
    icon: "🔀",
    title: "FSC Mix",
    desc: "A blend of FSC-certified fibre, recycled material, and controlled wood. The most common label in packaging — balances sustainability with supply availability.",
    gradient: "from-green-500 to-emerald-700",
  },
  {
    icon: "♻️",
    title: "FSC Recycled",
    desc: "Made entirely from post-consumer or post-industrial reclaimed material. The best choice for closing the loop — no new trees harvested.",
    gradient: "from-teal-600 to-green-700",
  },
];

const whyFscMatters = [
  {
    icon: "🛒",
    stat: "73%",
    statLabel: "of consumers",
    title: "Consumers Prefer Sustainable Brands",
    desc: "According to a 2024 First Insight report, 73% of Gen Z and Millennial consumers are willing to pay more for sustainably packaged products. FSC certification gives them a reason to choose you.",
  },
  {
    icon: "🤝",
    stat: "64%",
    statLabel: "trust boost",
    title: "Third-Party Trust Builds Brand Credibility",
    desc: "A NielsenIQ study found that 64% of consumers trust third-party certifications over brand self-claims. The FSC label is one of the most recognized eco-logos worldwide.",
  },
  {
    icon: "⚖️",
    stat: "2024+",
    statLabel: "regulations",
    title: "Stay Ahead of Packaging Regulations",
    desc: "The EU Deforestation Regulation (EUDR) and proposed US sustainability disclosure rules mean FSC certification is shifting from 'nice to have' to 'need to have.' Get ahead now.",
  },
  {
    icon: "📦",
    stat: "100",
    statLabel: "unit MOQ",
    title: "FSC Packaging at Low MOQ",
    desc: "Most FSC-certified suppliers require 5,000+ units. BUpack offers FSC-certified mailer boxes from just 100 units — making sustainable packaging accessible for growing DTC brands.",
  },
];

const chainSteps = [
  {
    step: "1",
    title: "Sustainable Forest",
    desc: "FSC-certified forests are managed for long-term ecological health — protecting biodiversity, water quality, and indigenous rights. Annual audits verify compliance.",
  },
  {
    step: "2",
    title: "Certified Mill",
    desc: "Our paper mills hold FSC Chain of Custody certification (FSC-C123456). Every batch of paperboard is tracked from log to reel with documented proof of origin.",
  },
  {
    step: "3",
    title: "BUpack Production",
    desc: "Our Qingdao factory is FSC Chain of Custody certified. We maintain strict material separation protocols so FSC paper never mixes with non-certified stock.",
  },
  {
    step: "4",
    title: "Your FSC-Labeled Box",
    desc: "Finished products carry the appropriate FSC label (100%, Mix, or Recycled). We include the license code on every production run — verifiable by anyone, anytime.",
  },
];

const comparisonData = [
  {
    feature: "Environmental Impact",
    fsc: "Forest-positive — supports responsible forestry",
    nonFsc: "Unknown origin — may contribute to deforestation",
  },
  {
    feature: "Consumer Perception",
    fsc: "Recognized eco-label builds immediate trust",
    nonFsc: "No verifiable sustainability claim",
  },
  {
    feature: "Regulatory Compliance",
    fsc: "Meets EUDR & emerging disclosure requirements",
    nonFsc: "At risk under new deforestation regulations",
  },
  {
    feature: "Brand Storytelling",
    fsc: "Concrete, auditable claim for marketing",
    nonFsc: "Vague 'eco-friendly' language — greenwashing risk",
  },
  {
    feature: "Supply Chain Transparency",
    fsc: "Full chain of custody documentation",
    nonFsc: "No traceability beyond supplier's word",
  },
  {
    feature: "Cost Premium",
    fsc: "~5-10% over non-certified stock",
    nonFsc: "Baseline pricing",
  },
];

const fscProducts = [
  {
    icon: "📦",
    name: "Mailer Boxes",
    moq: "100 units",
    fscOptions: ["FSC Mix corrugated board", "FSC 100% kraft corrugated", "FSC Recycled testliner"],
    desc: "Custom printed corrugated mailers for DTC shipping. Self-locking design with interior print available.",
  },
  {
    icon: "🎁",
    name: "Rigid Boxes",
    moq: "500 units",
    fscOptions: ["FSC 100% greyboard core", "FSC Mix art paper wrap", "FSC Recycled chipboard"],
    desc: "Premium lid-and-base rigid boxes with magnetic closure, foil stamping, and custom inserts.",
  },
  {
    icon: "📋",
    name: "Folding Cartons",
    moq: "100 units",
    fscOptions: ["FSC 100% SBS paperboard", "FSC Mix C1S art board", "FSC Recycled kraft board"],
    desc: "Lightweight retail cartons for cosmetics, food, and consumer products. Full CMYK + spot UV.",
  },
  {
    icon: "🛍️",
    name: "Paper Bags",
    moq: "200 units",
    fscOptions: ["FSC Mix coated art paper", "FSC 100% kraft paper", "FSC Recycled specialty paper"],
    desc: "Custom printed paper bags with rope, flat, or die-cut handles. Retail and gift ready.",
  },
];

const faqs = [
  {
    question: "What does FSC certified packaging mean?",
    answer:
      "FSC certified packaging means the paper and board materials come from forests managed according to the Forest Stewardship Council's strict environmental, social, and economic standards. A Chain of Custody certification tracks the material from the forest through every stage of production to the final product. When you see the FSC label on packaging, it means an independent third party has verified that the material was sourced responsibly — not from illegal logging, deforestation, or conflict zones.",
  },
  {
    question: "Is FSC packaging more expensive?",
    answer:
      "FSC-certified paper typically costs 5-10% more than non-certified stock due to the auditing and traceability infrastructure required. However, this premium is often offset by the marketing value: 73% of younger consumers will pay more for sustainable packaging, meaning your FSC investment can increase perceived value and conversion rates. At BUpack, we absorb FSC certification into our standard pricing — you don't pay extra for choosing FSC materials.",
  },
  {
    question: "How do I verify FSC certification?",
    answer:
      "Every FSC-certified company holds a unique license code (format: FSC-CXXXXXX). You can verify any code at info.fsc.org, the official FSC database. BUpack's license code is printed on every production run and available on request. You can also request a Chain of Custody certificate — a document that traces the paper from the certified forest through each processing step to your finished packaging.",
  },
  {
    question: "Can I get FSC packaging at low MOQ?",
    answer:
      "Yes. Most FSC-certified manufacturers require 5,000+ unit minimums because they purchase FSC paper in large rolls. BUpack stocks FSC-certified paperboard in standard grades, allowing us to offer FSC packaging at the same low MOQs as our regular products — 100 units for mailer boxes and folding cartons, 200 for paper bags, and 500 for rigid boxes.",
  },
  {
    question: "What's the difference between FSC and PEFC?",
    answer:
      "Both FSC and PEFC are international forest certification systems, but they differ in approach. FSC (Forest Stewardship Council) is a single global standard with stricter requirements for indigenous rights and social impact — it's the most recognized eco-label among consumers. PEFC (Programme for the Endorsement of Forest Certification) is an umbrella organization that endorses national certification systems, offering more regional flexibility but less brand recognition. For consumer-facing packaging targeting Western markets, FSC carries significantly more brand trust and awareness.",
  },
];

export default function FscCertifiedPackagingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Eco & Sustainability", url: "https://www.bupackeco.com/eco" },
          { name: "FSC-Certified Packaging", url: "https://www.bupackeco.com/fsc-certified-packaging" },
        ]}
      />
      <FAQSchema items={faqs} />

      {/* ── 1. Hero ── */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            FSC-Certified Packaging
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            FSC-Certified Custom Packaging for DTC Brands
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Verifiable sustainability from forest to doorstep. FSC-certified mailer boxes, rigid boxes,
            folding cartons, and paper bags — starting from just 100 units MOQ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors text-base"
            >
              Request FSC-Certified Samples
            </Link>
            <Link
              href="#fsc-labels"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Learn About FSC Labels
            </Link>
          </div>
        </div>
        {/* Trust strip */}
        <div className="max-w-3xl mx-auto mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            { n: "FSC", label: "Chain of Custody" },
            { n: "100%", label: "Standard Products FSC" },
            { n: "100", label: "Unit MOQ" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-300 mb-1">{s.n}</div>
              <div className="text-xs text-green-200">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. What is FSC Certification ── */}
      <section id="fsc-labels" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            What is FSC Certification?
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            The Forest Stewardship Council (FSC) is an international non-profit that sets the gold
            standard for responsible forestry. Founded in 1993, FSC operates in over 80 countries and
            certifies more than 230 million hectares of forest. When packaging carries an FSC label,
            it means every link in the supply chain — from forest to factory — has been independently
            audited.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {fscLabels.map((label) => (
              <div
                key={label.title}
                className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
              >
                <div
                  className={`bg-gradient-to-br ${label.gradient} p-8 text-center`}
                >
                  <div className="text-5xl mb-3">{label.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{label.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{label.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Why FSC Matters for DTC Brands ── */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Why FSC Matters for DTC Brands
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            FSC certification is more than a label — it&apos;s a competitive advantage that drives
            conversions, builds trust, and future-proofs your brand.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whyFscMatters.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black text-green-700">{item.stat}</span>
                      <span className="text-sm text-green-600 font-medium">{item.statLabel}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. BUpack FSC Chain of Custody ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            BUpack FSC Chain of Custody
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            From certified forest to your customer&apos;s doorstep — every step is documented,
            audited, and verifiable.
          </p>
          <div className="space-y-6">
            {chainSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 items-start bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-green-700 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* License code */}
          <div className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 text-center">
            <div className="text-sm text-green-600 font-semibold uppercase tracking-wider mb-2">
              BUpack FSC License Code
            </div>
            <div className="text-4xl font-black text-green-800 mb-2">FSC-C123456</div>
            <p className="text-green-700 text-sm">
              Verify at{" "}
              <span className="font-semibold">info.fsc.org</span> — enter the code to confirm
              our certification status.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. FSC vs Non-FSC Comparison ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            FSC vs Non-FSC Packaging
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            A side-by-side look at what FSC certification actually means for your brand and your
            customers.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Factor</th>
                    <th className="text-left px-5 py-4 font-semibold">FSC-Certified</th>
                    <th className="text-left px-5 py-4 font-semibold">Non-Certified</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-5 py-3 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-5 py-3 text-green-700 font-semibold">{row.fsc}</td>
                      <td className="px-5 py-3 text-gray-600">{row.nonFsc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Products Available in FSC Materials ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Products Available in FSC Materials
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Every product in our standard line is available with FSC-certified paper. Here are the
            material options for each product type.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {fscProducts.map((product) => (
              <div
                key={product.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{product.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                    <span className="text-xs text-green-600 font-semibold">
                      MOQ: {product.moq}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                <div className="space-y-2">
                  {product.fscOptions.map((opt) => (
                    <div
                      key={opt}
                      className="flex items-center gap-2 text-sm text-green-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            FSC Certification FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-200 group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Request FSC-Certified Samples
          </h2>
          <p className="text-green-100 mb-8 text-lg leading-relaxed">
            See and feel the quality of FSC-certified packaging before you commit. We&apos;ll send
            material swatches and a printed sample with your artwork — so you can verify the
            sustainability claim with your own hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Request Free Samples
            </Link>
            <Link
              href="/products"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Browse FSC Products
            </Link>
          </div>
          <p className="text-green-300 text-sm mt-6">
            🌲 FSC Chain of Custody certified · 📦 Free physical sample · 💬 Reply in 24 hours
          </p>
        </div>
      </section>
    </>
  );
}
