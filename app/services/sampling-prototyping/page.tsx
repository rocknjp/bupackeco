import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Packaging Sampling & Prototyping | BUpack",
  description:
    "Get physical samples of your custom packaging before full production. 5-day sampling, structural prototypes, and color-matched proofs. MOQ from 100 units after sample approval.",
  alternates: {
    canonical: "https://www.bupackeco.com/services/sampling-prototyping",
  },
  openGraph: {
    title: "Custom Packaging Sampling & Prototyping | BUpack",
    description:
      "Get physical samples of your custom packaging before full production. 5-day sampling, structural prototypes, and color-matched proofs. MOQ from 100 units after sample approval.",
    url: "https://www.bupackeco.com/services/sampling-prototyping",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Packaging Sampling & Prototyping | BUpack",
    description:
      "Get physical samples of your custom packaging before full production. 5-day sampling, structural prototypes, and color-matched proofs. MOQ from 100 units after sample approval.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const sampleTypes = [
  {
    icon: "⬜",
    title: "White Sample",
    subtitle: "Structural Prototype",
    desc: "An unprinted, plain-material version of your packaging. Used to verify dimensions, structural integrity, and fit with your actual product. The fastest and most affordable sample type.",
    timeline: "3–5 days",
    bestFor: "Dimension & fit verification",
  },
  {
    icon: "🎨",
    title: "Color Sample",
    subtitle: "Printed Prototype",
    desc: "A fully printed sample with your artwork, colors, and finishing (foil, spot UV, embossing). Used to evaluate print quality, color accuracy, and overall visual impact before mass production.",
    timeline: "5–7 days",
    bestFor: "Visual & print quality approval",
  },
  {
    icon: "📦",
    title: "Production Sample",
    subtitle: "Pre-Production Run",
    desc: "A small batch (5–20 units) from the actual production line using the same materials, inks, and processes as your final order. The most accurate representation of what you'll receive.",
    timeline: "7–10 days",
    bestFor: "Final sign-off before bulk",
  },
];

const whySampleFirst = [
  {
    icon: "📏",
    title: "Verify Product Fit",
    desc: "Measurements on screen don't always translate to reality. A physical sample lets you test your actual product inside the box — checking for snug fit, adequate protection, and easy assembly.",
  },
  {
    icon: "🎨",
    title: "Confirm Print Quality",
    desc: "Colors on screen look different from printed ink on paper. A color sample ensures your brand colors, imagery, and finishing (foil, embossing, spot UV) look exactly as intended.",
  },
  {
    icon: "💰",
    title: "Avoid Costly Mistakes",
    desc: "Finding a structural issue or color mismatch after producing 5,000 units is expensive. Sampling costs a fraction of a production run and eliminates the risk of large-scale rework.",
  },
  {
    icon: "🤝",
    title: "Build Confidence",
    desc: "Seeing and holding your packaging before committing to a full order gives you — and your team — the confidence that the final product will meet expectations.",
  },
];

const timelineSteps = [
  {
    step: "1",
    title: "Design Approval",
    desc: "Finalize and approve your packaging design with our team. We'll confirm dimensions, artwork, materials, and finishing specifications.",
    time: "Day 0",
  },
  {
    step: "2",
    title: "Sample Production",
    desc: "Your sample enters production on our sample line. White samples are cut and folded same-day; color samples go through our full print and finishing process.",
    time: "Day 1–3",
  },
  {
    step: "3",
    title: "Quality Check",
    desc: "Our QC team inspects every sample against the approved specifications — dimensions, color density, structural integrity, and finishing quality.",
    time: "Day 3–4",
  },
  {
    step: "4",
    title: "Express Shipping",
    desc: "Samples ship via DHL/FedEx express. Delivery to North America in 3–5 business days, Europe in 4–6 business days.",
    time: "Day 4–5",
  },
  {
    step: "5",
    title: "Review & Approve",
    desc: "Receive your sample, test it with your product, and confirm it meets your expectations. Approved samples lock in specifications for production — no surprises.",
    time: "Day 7–10",
  },
];

const faqs = [
  {
    question: "How much does a sample cost?",
    answer:
      "White samples typically cost $30–$50 depending on size and complexity. Color samples range from $80–$150 due to printing and finishing setup. Production samples are priced based on quantity. Sample costs are fully credited toward your production order — so effectively, your sample is free when you proceed to production.",
  },
  {
    question: "How fast can I get a sample?",
    answer:
      "White samples are produced in 3–5 business days. Color samples take 5–7 business days. Production samples require 7–10 business days. Add 3–5 business days for express shipping to North America. In total, you can have a white sample in hand within 8–10 business days from approval.",
  },
  {
    question: "What's the difference between a white sample and a color sample?",
    answer:
      "A white sample (also called a blank or structural sample) is an unprinted version made from the actual material — it verifies dimensions, fit, and structural integrity. A color sample includes your full artwork, printed with the same inks and finishing (foil, spot UV, embossing) as the final product — it verifies visual appearance, color accuracy, and print quality. We recommend starting with a white sample for fit, then a color sample for visual approval.",
  },
  {
    question: "Can I order a sample before committing to full production?",
    answer:
      "Absolutely — and we encourage it. Ordering a sample before committing to a full production run is the smartest way to ensure your packaging meets expectations. There's no obligation to proceed with production after receiving your sample. However, if you do proceed, the sample cost is credited toward your production order.",
  },
  {
    question: "Do you offer digital mockups before physical samples?",
    answer:
      "Yes. Every BUpack order includes free 3D digital mockups as part of our design support service. You'll receive photorealistic renders showing your packaging from multiple angles before we produce any physical samples. This lets you evaluate proportions, color placement, and overall design direction — and often reduces the need for multiple physical sample rounds.",
  },
];

export default function SamplingPrototypingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Services", url: "https://www.bupackeco.com/services" },
          { name: "Sampling & Prototyping", url: "https://www.bupackeco.com/services/sampling-prototyping" },
        ]}
      />
      <FAQSchema items={faqs} />

      {/* ── 1. Hero ── */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Sampling & Prototyping
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Custom Packaging Sampling & Prototyping
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            See it, feel it, test it — before you commit. Get physical samples of your custom
            packaging in as fast as 5 days. White samples, color proofs, and production runs
            from 100 units MOQ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors text-base"
            >
              Request a Sample
            </Link>
            <Link
              href="#sample-types"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Compare Sample Types
            </Link>
          </div>
        </div>
        {/* Trust strip */}
        <div className="max-w-3xl mx-auto mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            { n: "5", label: "Day Sampling" },
            { n: "3", label: "Sample Types" },
            { n: "100", label: "Unit MOQ After Approval" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-300 mb-1">{s.n}</div>
              <div className="text-xs text-green-200">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Sample Types ── */}
      <section id="sample-types" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Three Types of Samples for Every Stage
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you need a quick fit check or a full-color proof, we offer the right sample
            type for your stage in the process.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {sampleTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-green-200 text-sm mt-1">{item.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
                    <div>
                      <span className="text-gray-500">Timeline:</span>{" "}
                      <span className="text-green-700 font-semibold">{item.timeline}</span>
                    </div>
                  </div>
                  <div className="text-sm mt-2">
                    <span className="text-gray-500">Best for:</span>{" "}
                    <span className="text-gray-700 font-medium">{item.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Why Sample First ── */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Why You Should Sample First
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            A small investment in sampling saves you from expensive surprises in production.
            Here&apos;s why every smart brand samples before committing.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whySampleFirst.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Sampling Timeline ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Sampling Timeline
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            From design approval to sample in your hands — here&apos;s how the process unfolds.
          </p>
          <div className="space-y-6">
            {timelineSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 items-start bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-green-700 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sampling & Prototyping FAQ
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
            Request Your Packaging Sample
          </h2>
          <p className="text-green-100 mb-8 text-lg leading-relaxed">
            Don&apos;t guess — test. Get a physical sample of your custom packaging before
            committing to production. White samples in 5 days, color samples in 7. Sample costs
            are credited toward your production order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Request a Sample
            </Link>
            <Link
              href="/services/design-support"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Free Design Support
            </Link>
          </div>
          <p className="text-green-300 text-sm mt-6">
            5-day sampling · Sample cost credited to order · MOQ from 100 units
          </p>
        </div>
      </section>
    </>
  );
}
