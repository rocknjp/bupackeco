import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Free Custom Packaging Design Support | BUpack",
  description:
    "Free packaging design support for your custom boxes. Professional structural design, artwork assistance, and 3D mockups. No design fees — included with every order from BUpack.",
  alternates: {
    canonical: "https://www.bupackeco.com/services/design-support",
  },
};

const includedServices = [
  {
    icon: "📐",
    title: "Structural Design",
    desc: "Our engineers design the box structure — dimensions, flap mechanics, material selection, and folding logic — so your packaging protects the product and looks professional on the shelf.",
  },
  {
    icon: "🎨",
    title: "Artwork Assistance",
    desc: "Not a designer? No problem. Our team helps layout your logo, copy, and brand elements onto the dieline. We ensure proper bleed, resolution, and color profiles for print-ready files.",
  },
  {
    icon: "🖥️",
    title: "3D Mockups",
    desc: "See your packaging before it's made. We create photorealistic 3D renders so you can evaluate proportions, color placement, and shelf appeal — no guesswork, no surprises.",
  },
  {
    icon: "✅",
    title: "Pre-Press Check",
    desc: "Before your files go to plate, our pre-press team reviews every detail: barcode legibility, font outlines, CMYK conversion, die-line alignment, and trap settings.",
  },
];

const howItWorksSteps = [
  {
    step: "1",
    title: "Submit Your Requirements",
    desc: "Tell us about your product, brand style, and packaging goals. Share your logo, dimensions, or even a rough sketch — we'll work with whatever you have.",
  },
  {
    step: "2",
    title: "Receive Your Design Draft",
    desc: "Our design team creates structural drawings and artwork layouts within 2–3 business days. You'll get a dieline with your branding placed and a 3D mockup for visual review.",
  },
  {
    step: "3",
    title: "Approve & Place Your Order",
    desc: "Review the design, request revisions if needed, and confirm. Once approved, your packaging goes straight into sampling or production — no extra design fees.",
  },
];

const comparisonData = [
  {
    feature: "Design Quality",
    pro: "Print-ready, structurally sound files optimized for manufacturing",
    diy: "Risk of bleed errors, wrong color profiles, and non-manufacturable layouts",
  },
  {
    feature: "Time to Market",
    pro: "2–3 day turnaround with professional templates and workflows",
    diy: "Weeks of back-and-forth trying to meet printer specifications",
  },
  {
    feature: "Cost",
    pro: "Included free with every BUpack order — $0 design fees",
    diy: "Freelancer ($300–$800) or agency ($1,500+) per project, or hours of your own time",
  },
  {
    feature: "3D Preview",
    pro: "Photorealistic 3D mockups included so you can visualize the final product",
    diy: "Flat 2D mockups that don't show how the box actually looks when assembled",
  },
  {
    feature: "Manufacturing Readiness",
    pro: "Files are pre-checked against our press specifications — zero rework risk",
    diy: "Files often rejected by manufacturers, causing delays and additional costs",
  },
  {
    feature: "Revisions",
    pro: "Multiple rounds included — we iterate until you're satisfied",
    diy: "Every revision costs more time or money with external designers",
  },
];

const faqs = [
  {
    question: "Is the design support really free?",
    answer:
      "Yes. Design support is included with every BUpack order at no additional charge. We believe professional packaging design shouldn't be a barrier for growing brands. Our structural engineers, graphic designers, and pre-press specialists are part of our standard service — you pay only for the packaging itself.",
  },
  {
    question: "What file formats do you accept for my artwork?",
    answer:
      "We accept AI, PSD, PDF, EPS, SVG, and high-resolution PNG files. Ideally, vector formats (AI, EPS, SVG) work best for print. If you only have a low-resolution logo or even a hand-drawn sketch, our designers can recreate it as a print-ready file — still at no extra cost.",
  },
  {
    question: "How many design revisions are included?",
    answer:
      "We include up to 3 rounds of revisions with every order. Most clients are satisfied after 1–2 rounds. If you need additional revisions beyond that, we'll still work with you — our goal is to get your packaging exactly right before it goes to production.",
  },
  {
    question: "Can you design from scratch if I only have a logo?",
    answer:
      "Absolutely. Many of our clients come to us with just a logo and a product description. Our design team will develop layout concepts, suggest typography, recommend color palettes, and create full artwork — all from a single logo file. We've designed thousands of packaging projects this way.",
  },
  {
    question: "How long does the design process take?",
    answer:
      "Initial design drafts are delivered within 2–3 business days after we receive your requirements. Revisions typically take 1 business day each. The entire design process — from first draft to final approval — usually takes 5–7 business days, depending on the number of revision rounds.",
  },
];

export default function DesignSupportPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Services", url: "https://www.bupackeco.com/services" },
          { name: "Design Support", url: "https://www.bupackeco.com/services/design-support" },
        ]}
      />
      <FAQSchema items={faqs} />

      {/* ── 1. Hero ── */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Free Design Support
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Free Custom Packaging Design Support
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Professional structural design, artwork assistance, and 3D mockups — included with every
            order. No design fees, no surprises. Your packaging looks right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors text-base"
            >
              Get Free Design Support
            </Link>
            <Link
              href="#whats-included"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              See What&apos;s Included
            </Link>
          </div>
        </div>
        {/* Trust strip */}
        <div className="max-w-3xl mx-auto mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            { n: "$0", label: "Design Fees" },
            { n: "2–3", label: "Day First Draft" },
            { n: "3+", label: "Revisions Included" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-300 mb-1">{s.n}</div>
              <div className="text-xs text-green-200">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. What's Included ── */}
      <section id="whats-included" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            What&apos;s Included in Free Design Support
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Every BUpack order comes with full-service design support — from structural engineering
            to pre-press checks. Here&apos;s what you get at no extra cost.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {includedServices.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. How It Works ── */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            How It Works
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            From your idea to a finished design — three simple steps, zero design fees.
          </p>
          <div className="space-y-6">
            {howItWorksSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 items-start bg-white rounded-xl p-6 border border-gray-100"
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
        </div>
      </section>

      {/* ── 4. Design vs DIY Comparison ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Professional Design Support vs. DIY
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Why professional design support matters — and what you risk without it.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Factor</th>
                    <th className="text-left px-5 py-4 font-semibold">BUpack Design Support</th>
                    <th className="text-left px-5 py-4 font-semibold">DIY / Freelance</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-5 py-3 font-medium text-gray-900">{row.feature}</td>
                      <td className="px-5 py-3 text-green-700 font-semibold">{row.pro}</td>
                      <td className="px-5 py-3 text-gray-600">{row.diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Design Support FAQ
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

      {/* ── 6. CTA ── */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Free Design Support for Your Packaging
          </h2>
          <p className="text-green-100 mb-8 text-lg leading-relaxed">
            Stop worrying about dielines, color profiles, and print specs. Our design team handles
            everything — structural design, artwork layout, 3D mockups, and pre-press checks — all
            included with your order at zero cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Contact Us for Free Design
            </Link>
            <Link
              href="/products"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Browse Products
            </Link>
          </div>
          <p className="text-green-300 text-sm mt-6">
            $0 design fees · 2–3 day first draft · 3+ revisions included
          </p>
        </div>
      </section>
    </>
  );
}
