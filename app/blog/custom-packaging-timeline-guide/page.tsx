import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Packaging Timeline: From Design to Delivery | BUpack",
  description:
    "Complete timeline for custom packaging production. Design, sampling, manufacturing, and shipping breakdown. Get your boxes in 15 days with BUpack.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/custom-packaging-timeline-guide",
  },
  openGraph: {
    title: "Custom Packaging Timeline: From Design to Delivery | BUpack",
    description:
      "Complete timeline for custom packaging production. Design, sampling, manufacturing, and shipping breakdown. Get your boxes in 15 days with BUpack.",
    url: "https://www.bupackeco.com/blog/custom-packaging-timeline-guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Packaging Timeline: From Design to Delivery | BUpack",
    description:
      "Complete timeline for custom packaging production. Design, sampling, manufacturing, and shipping breakdown. Get your boxes in 15 days with BUpack.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "How long does it take to get custom packaging made?",
    answer:
      "The total timeline from initial consultation to delivery is typically 3-6 weeks. Digital printing orders (100-2,000 units) can be delivered in as fast as 15 days with air freight. Offset printing orders (2,000+ units) take 4-6 weeks including ocean shipping. Rush options are available for time-sensitive launches.",
  },
  {
    question: "Can I speed up the custom packaging production process?",
    answer:
      "Yes. Use digital printing to eliminate plate-making time (saves 3-5 days). Choose air freight over ocean shipping (saves 10-16 days). Have your artwork print-ready before ordering (saves 3-7 days). BUpack also offers a rush production option for an additional 15-20% fee that compresses production by 30-40%.",
  },
  {
    question: "Do I need a physical sample before full production?",
    answer:
      "It's recommended but not required. A physical sample adds 5-10 days and costs $50-$100, but it lets you verify materials, colors, and construction before committing to a full order. For repeat orders with no design changes, you can skip the sample and go straight to production with a digital proof approval.",
  },
  {
    question: "What causes delays in custom packaging production?",
    answer:
      "The most common causes are: artwork not being print-ready (wrong color mode, missing bleed), slow proof approval, design revisions after proofing, and shipping delays during peak season. Having print-ready CMYK artwork with 3mm bleed and approving proofs within 24 hours eliminates most delays.",
  },
];

export default function CustomPackagingTimelineGuide() {
  return (
    <>
      <ArticleSchema
        headline="Custom Packaging Timeline: From Design to Delivery"
        description="Complete timeline for custom packaging production. Design, sampling, manufacturing, and shipping breakdown."
        datePublished="2026-06-13T00:00:00.000Z"
        authorName="BUpack Team"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Custom Packaging Timeline Guide", url: "/blog/custom-packaging-timeline-guide" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-green-400 text-sm hover:text-green-300 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              Packaging 101
            </span>
            <span className="text-green-300 text-sm">
              June 13, 2026 · 9 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Custom Packaging Timeline: From Design to Delivery
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            Complete timeline for custom packaging production. Design, sampling, manufacturing, and shipping breakdown. Get your boxes in 15 days with BUpack.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Understanding the Full Packaging Production Timeline
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the most common questions we get from DTC brands is: "How long will my custom packaging take?" The honest answer depends on your order size, printing method, and shipping preference. But after producing custom packaging for <strong>hundreds of brands over 17 years</strong>, we can give you a precise breakdown of every phase — and show you exactly where you can speed things up.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The total timeline from first contact to delivery at your door typically ranges from <strong>15 days (rush, air freight)</strong> to <strong>6 weeks (standard, ocean freight)</strong>. Here's what happens at every step.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Phase 1: Consultation & Specifications (1-3 Days)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Everything starts with defining what you need. During this phase, you'll work with our team to specify:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Box type</strong> — Mailer box, folding carton, rigid box, or <a href="/products/paper-bags" className="text-green-700 underline hover:text-green-600">paper bags</a></li>
              <li><strong>Dimensions</strong> — Based on your product measurements + padding allowance</li>
              <li><strong>Material</strong> — Kraft, coated art paper, specialty paper, or corrugated board</li>
              <li><strong>Printing method</strong> — Digital (fast, low MOQ) or offset (volume, precision)</li>
              <li><strong>Finishing</strong> — Lamination, foil stamping, embossing, spot UV</li>
              <li><strong>Quantity</strong> — Determines pricing tier and production approach</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Pro tip:</strong> Come prepared with your product dimensions and any reference images. This cuts consultation time from 3 days to 1 day.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Phase 2: Design & Artwork (3-7 Days)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have print-ready artwork, this phase is just about reviewing the dieline template and ensuring proper setup. If you need design help, BUpack provides free design support including:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Dieline template</strong> — Delivered within 24 hours of spec confirmation</li>
              <li><strong>Artwork review</strong> — We check CMYK color mode, 3mm bleed, safe zones, and resolution</li>
              <li><strong>Digital mockup</strong> — 3D render showing how your design looks on the actual box</li>
              <li><strong>Revision rounds</strong> — Most brands need 1-2 rounds of adjustments</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Speed tip:</strong> Design in CMYK from the start, include 3mm bleed, and keep text 5mm from cut lines. Files that pass our print-readiness check on the first submission save 3-4 days.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Phase 3: Digital Proof Approval (1-2 Days)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before production begins, you'll receive a digital proof — a precise representation of how your packaging will look when printed. This is your last chance to catch errors, adjust colors, or make minor tweaks. <strong>Approve within 24 hours to keep your timeline on track.</strong> Each revision cycle adds 1-2 days.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Phase 4: Sampling (Optional, 5-10 Days)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For first-time orders, we strongly recommend a physical sample. You'll receive a production-quality sample shipped via air to verify materials, print quality, and structural integrity. Sample cost is $50-$100, credited toward your full order.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>When to skip sampling:</strong> Repeat orders with no design changes, simple designs on standard materials, or time-critical launches where you trust the digital proof. For complex <a href="/products/rigid-gift-boxes" className="text-green-700 underline hover:text-green-600">rigid gift boxes</a> with inserts and finishing, always sample first.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Phase 5: Production (7-18 Days)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Production time depends on order volume and printing method:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Method</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Quantity</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Production Time</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-700 border-b">Add for Finishing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Digital printing</td><td className="py-2 px-4 text-gray-700">100-2,000</td><td className="py-2 px-4 text-gray-700">7-12 days</td><td className="py-2 px-4 text-gray-700">+2-3 days</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Offset printing</td><td className="py-2 px-4 text-gray-700">2,000-5,000</td><td className="py-2 px-4 text-gray-700">12-15 days</td><td className="py-2 px-4 text-gray-700">+3-5 days</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-4 text-gray-700">Offset printing</td><td className="py-2 px-4 text-gray-700">5,000+</td><td className="py-2 px-4 text-gray-700">15-18 days</td><td className="py-2 px-4 text-gray-700">+5-7 days</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Production includes printing, die-cutting, folding, gluing, lamination, and any finishing like foil stamping or embossing. Complex finishing adds time because each process is a separate production step.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              Phase 6: Shipping (3-21 Days)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shipping is the phase with the most variance. Your options:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
              <li><strong>Air freight</strong> — 3-5 business days. Cost is higher but ideal for orders under 500 units or time-sensitive launches. Most new brands start here.</li>
              <li><strong>Ocean freight (standard)</strong> — 15-21 business days. Most cost-effective for 1,000+ units. DDP (Delivered Duty Paid) service handles customs for you.</li>
              <li><strong>Ocean freight (express)</strong> — 7-12 business days. A middle-ground option for medium-volume orders that need faster delivery than standard ocean.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              BUpack handles all shipping logistics including customs clearance, duties, and delivery to your warehouse. No surprises, no hidden fees.
            </p>

            {/* Full Timeline Summary */}
            <div className="my-10 p-6 bg-green-50 rounded-2xl border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Complete Timeline Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="text-left py-2 px-4 font-semibold text-green-800 border-b">Scenario</th>
                      <th className="text-left py-2 px-4 font-semibold text-green-800 border-b">Total Time</th>
                      <th className="text-left py-2 px-4 font-semibold text-green-800 border-b">Cost Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-100"><td className="py-2 px-4 text-green-900">Rush: Digital + Air freight</td><td className="py-2 px-4 text-green-900 font-bold">15-20 days</td><td className="py-2 px-4 text-green-900">Higher</td></tr>
                    <tr className="border-b border-green-100"><td className="py-2 px-4 text-green-900">Standard: Digital + Ocean</td><td className="py-2 px-4 text-green-900 font-bold">3-4 weeks</td><td className="py-2 px-4 text-green-900">Moderate</td></tr>
                    <tr className="border-b border-green-100"><td className="py-2 px-4 text-green-900">Standard: Offset + Ocean</td><td className="py-2 px-4 text-green-900 font-bold">4-6 weeks</td><td className="py-2 px-4 text-green-900">Lowest per unit</td></tr>
                    <tr className="border-b border-green-100"><td className="py-2 px-4 text-green-900">With sampling: Any + Air</td><td className="py-2 px-4 text-green-900 font-bold">Add 7-10 days</td><td className="py-2 px-4 text-green-900">+$50-100 (credited)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
              5 Ways to Accelerate Your Packaging Timeline
            </h2>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-3">
              <li><strong>Have print-ready artwork before ordering</strong> — Saves 3-7 days. Use our free dieline templates and design checklist to prepare files that pass first time.</li>
              <li><strong>Choose digital printing</strong> — No plate-making saves 3-5 days. Perfect for runs under 2,000 units.</li>
              <li><strong>Approve proofs within 24 hours</strong> — Every day of delay adds a day to your timeline. Designate one decision-maker for proof approval.</li>
              <li><strong>Use air freight for first orders</strong> — Air freight costs more per unit but gets your boxes in hand 10-16 days faster. Worth it for launches and product drops.</li>
              <li><strong>Order 8 weeks before your launch date</strong> — Even with potential delays, you'll have buffer time. Most brands that rush end up paying premium for air freight.</li>
            </ul>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Need packaging fast? We can deliver in 15 days.
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Digital printing + air freight gets your custom boxes from design to door in 15 business days. Free design support included.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
                >
                  Get a Free Quote →
                </Link>
                <a
                  href="https://wa.me/8615064260757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl border border-green-200 hover:bg-green-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqItems.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-[#f9fdf8] border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Get packaging tips in your inbox</h2>
          <p className="text-gray-500 mb-6">Monthly insights for eCommerce founders. No spam.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
