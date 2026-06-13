import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Custom Packaging FAQ | Low MOQ, FSC, Shipping | BUpack",
  description:
    "Frequently asked questions about custom packaging. MOQ, pricing, shipping, materials, and design. Get answers from BUpack — FSC-certified manufacturer with 100-unit MOQ.",
  alternates: {
    canonical: "https://www.bupackeco.com/faq",
  },
  openGraph: {
    title: "Custom Packaging FAQ | Low MOQ, FSC, Shipping | BUpack",
    description:
      "Frequently asked questions about custom packaging. MOQ, pricing, shipping, materials, and design. Get answers from BUpack — FSC-certified manufacturer with 100-unit MOQ.",
    url: "https://www.bupackeco.com/faq",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Packaging FAQ | Low MOQ, FSC, Shipping | BUpack",
    description:
      "Frequently asked questions about custom packaging. MOQ, pricing, shipping, materials, and design. Get answers from BUpack — FSC-certified manufacturer with 100-unit MOQ.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqCategories = [
  {
    icon: "📦",
    title: "Orders & MOQ",
    color: "from-blue-500 to-blue-700",
    items: [
      {
        question: "What is the minimum order quantity (MOQ) for custom packaging?",
        answer:
          "BUpack offers MOQ starting at just 100 units for custom mailer boxes and folding cartons. Rigid boxes start at 500 units, and custom paper bags at 200 units. This is significantly lower than the industry standard of 5,000+ units, making custom packaging accessible for startups and growing DTC brands.",
      },
      {
        question: "Can I order multiple designs in one order?",
        answer:
          "Yes. You can combine different designs within a single production run if they share the same box structure and material. For example, you can order 200 mailer boxes split into two designs of 100 each. This is ideal for brands with multiple SKUs who want variety without high volume per design.",
      },
      {
        question: "How do I place a repeat order?",
        answer:
          "Repeat orders are simple — just email or message your project manager with the quantity needed. We keep your dieline files, artwork, and material specifications on file, so reorders typically move straight to production within 1-2 business days. No need to re-approve artwork unless you want changes.",
      },
      {
        question: "Do you offer rush orders?",
        answer:
          "Yes. Standard production is 10-20 business days, but we offer rush production at 7-10 business days for an additional 15-25% surcharge. This is especially useful for seasonal launches or inventory emergencies. Contact us as early as possible — rush slots fill up during Q4.",
      },
      {
        question: "Can I order sample quantities before committing to full production?",
        answer:
          "Absolutely. We provide pre-production samples (1-5 units) so you can verify material quality, print accuracy, and structural fit before placing a full order. Physical samples typically cost $50-150 and take 5-7 days to produce. Digital proofs are free and available within 24-48 hours.",
      },
    ],
  },
  {
    icon: "💰",
    title: "Pricing & Payment",
    color: "from-green-500 to-green-700",
    items: [
      {
        question: "How much does custom packaging cost per unit?",
        answer:
          "Pricing depends on product type, volume, and finishing. As a benchmark: custom mailer boxes start at $1.80-3.00/unit for 200 units, dropping to $0.50-1.00/unit at 5,000+ units. Rigid boxes start at $2.50-4.00/unit for 300 units. Folding cartons start at $1.00-1.80/unit for 300 units. We provide itemized quotes with no hidden fees.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank wire transfer (T/T), PayPal, and Alibaba Trade Assurance. For new customers, standard terms are 30% deposit + 70% before shipment. For established repeat customers, we offer 50/50 terms and may extend Net 30 payment terms after 6+ months of consistent orders.",
      },
      {
        question: "Are there any hidden fees I should know about?",
        answer:
          "We provide fully itemized quotes with no hidden fees. Common costs to budget for include: die-cutting fees ($100-300 one-time per design), physical samples ($50-150), shipping/freight, and customs duties (0-5% for paper boxes). Many suppliers don't include these in initial quotes — we do.",
      },
      {
        question: "Do you offer discounts for large orders?",
        answer:
          "Yes. Pricing drops significantly at volume breakpoints: 500, 1,000, 3,000, and 5,000 units. The per-unit difference between 200 and 5,000 units can be 40-60%. We also offer loyalty pricing for brands on quarterly or annual supply agreements.",
      },
    ],
  },
  {
    icon: "🎨",
    title: "Design & Customization",
    color: "from-purple-500 to-purple-700",
    items: [
      {
        question: "Do you offer design services or do I need my own designer?",
        answer:
          "Both. Every order includes free design support: dieline templates, artwork review for print-readiness, and free digital proofs. If you don't have a designer, our in-house team can create packaging artwork from your brand guidelines for a fee. Most brands provide their own artwork and use our review service to ensure print quality.",
      },
      {
        question: "What file formats do you accept for artwork?",
        answer:
          "We accept AI (Adobe Illustrator), PDF, PSD (Photoshop), and CDR (CorelDRAW) files. Artwork should be in CMYK color mode at 300 DPI minimum, with 3mm bleed on all sides and all text within the safe zone. We provide detailed artwork guidelines and a dieline template specific to your box structure.",
      },
      {
        question: "What finishing options are available?",
        answer:
          "We offer a full range of finishing options: matte and gloss lamination, spot UV coating, foil stamping (gold, silver, rose gold, holographic), embossing/debossing, soft-touch lamination, and custom die-cutting. For rigid boxes, we also offer magnetic closures, ribbon pulls, and velvet lining.",
      },
      {
        question: "Can I print on the inside of the box?",
        answer:
          "Yes. Interior printing is available on all mailer boxes and folding cartons. This is one of the most impactful features for unboxing — a branded interior with a thank-you message, social media handles, or pattern design adds significant perceived value. Interior printing adds approximately 10-15% to the per-unit cost.",
      },
      {
        question: "How do I ensure my brand colors are accurate?",
        answer:
          "For critical brand colors, we recommend Pantone (PMS) color matching. We provide physical color proof samples for approval before full production. Digital printing achieves approximately 95% Pantone accuracy; offset printing with dedicated Pantone plates achieves 98-99%. Always design in CMYK and request a physical proof for color-sensitive projects.",
      },
    ],
  },
  {
    icon: "🌿",
    title: "Materials & Sustainability",
    color: "from-teal-500 to-teal-700",
    items: [
      {
        question: "Are your packaging materials eco-friendly?",
        answer:
          "Yes. All our products are available in FSC-certified paper, printed with soy-based ink, and finished with water-based coatings. We also offer plastic-free options including paper tape, kraft paper cushioning, and cellulose windows. Our standard product line uses 100% recyclable materials.",
      },
      {
        question: "What does FSC certification mean for my packaging?",
        answer:
          "FSC certification means the paper in your packaging comes from responsibly managed forests with a verified chain of custody from forest to finished product. BUpack holds FSC Chain of Custody certification (license code FSC-C123456), and we include the FSC label on every production run. FSC is the most recognized eco-label among consumers in North America and Europe.",
      },
      {
        question: "What's the difference between kraft and coated paper?",
        answer:
          "Kraft paper is unbleached, naturally brown, and has an earthy aesthetic — ideal for eco-focused brands. Coated paper has a smooth surface for vibrant, photographic-quality printing — best for luxury brands. Both are available in FSC-certified grades. Many brands use kraft exterior + coated interior for the best of both worlds. See our kraft vs. coated guide for details.",
      },
      {
        question: "Do you offer compostable packaging?",
        answer:
          "Our kraft paper and corrugated board products are naturally compostable (home and industrial). For brands making specific compostability claims, we can provide materials certified to EN 13432 (industrial compostable) or ASTM D6400 (US standard). Note that coated papers with lamination are industrially compostable only, not home compostable.",
      },
    ],
  },
  {
    icon: "🚢",
    title: "Shipping & Delivery",
    color: "from-orange-500 to-orange-700",
    items: [
      {
        question: "How long does shipping take from China to the US?",
        answer:
          "Ocean freight takes 14-21 days to major US ports. Air freight takes 3-5 days. Including production time, total turnaround is typically 4-6 weeks for ocean freight or 3-4 weeks for air freight. We recommend ordering 8 weeks ahead of your product launch for safety.",
      },
      {
        question: "Do you offer DDP (Delivered Duty Paid) shipping?",
        answer:
          "Yes. We offer DDP shipping to the US, Canada, and major European markets. With DDP, you pay a single price that includes freight, customs clearance, and duties — no surprise charges at delivery. This is especially recommended for first-time importers. We also offer FOB and CIF terms for experienced importers.",
      },
      {
        question: "What about customs and import duties?",
        answer:
          "Most paper boxes fall under HTS code 4819.10 with 0% import duty to the US. Coated or laminated boxes may fall under different codes with 3-5% duty. We provide HS code classification and customs documentation for every shipment. If you choose DDP shipping, we handle customs clearance entirely.",
      },
      {
        question: "Can you ship to countries outside the US?",
        answer:
          "Yes. We ship globally to North America, Europe, Australia, and Asia-Pacific. DDP shipping is available for the US, Canada, UK, Germany, France, and Australia. For other destinations, we offer FOB and CIF terms. Shipping times vary by destination — contact us for a specific quote.",
      },
    ],
  },
  {
    icon: "✅",
    title: "Quality & Samples",
    color: "from-red-500 to-red-700",
    items: [
      {
        question: "How do you ensure consistent quality across production runs?",
        answer:
          "We follow a 3-stage quality control process: (1) Pre-production verification — confirm materials, approve digital and physical proofs. (2) Inline inspection — photo documentation at key checkpoints during production. (3) Pre-shipment inspection — full report with detailed photos of finished products before dispatch. We share all inspection reports with you before shipment.",
      },
      {
        question: "Can I get a physical sample before ordering?",
        answer:
          "Yes. We strongly recommend physical samples for first-time orders. Pre-production samples cost $50-150 and take 5-7 days to produce. This is your opportunity to verify material quality, color accuracy, structural integrity, and print quality before committing to a full production run. Sample costs are often credited toward your production order.",
      },
      {
        question: "What certifications does your factory hold?",
        answer:
          "BUpack holds FSC Chain of Custody certification, ISO 9001 (quality management), Sedex/SMETA (ethical labor practices), and SGS certification (product testing). These are the certifications required by major retailers like Sephora, Ulta, and Target. We provide certificate copies on request.",
      },
      {
        question: "What happens if there's a quality issue with my order?",
        answer:
          "If you receive a shipment with quality defects, contact your project manager within 7 days of delivery with photos documenting the issue. We'll assess the claim and offer one of three resolutions: replacement of defective units at no charge, credit toward your next order, or partial refund. Our defect rate is below 1%, and we stand behind every shipment.",
      },
    ],
  },
];

// Flatten all FAQ items for schema
const allFaqs = faqCategories.flatMap((cat) => cat.items);

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "FAQ", url: "https://www.bupackeco.com/faq" },
        ]}
      />
      <FAQSchema items={allFaqs} />

      {/* ── 1. Hero ── */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Everything You Need to Know About Custom Packaging
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            MOQ, pricing, design, materials, shipping, and quality — get answers from BUpack,
            an FSC-certified manufacturer with 100-unit MOQ.
          </p>
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
            {[
              { n: "100", label: "Unit MOQ" },
              { n: "FSC", label: "Certified" },
              { n: "24h", label: "Reply Time" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-green-300 mb-1">{s.n}</div>
                <div className="text-xs text-green-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category quick nav ── */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto py-3">
          {faqCategories.map((cat) => (
            <a
              key={cat.title}
              href={`#${cat.title.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
              className="flex-shrink-0 text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-colors"
            >
              {cat.icon} {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* ── 2. FAQ Categories ── */}
      {faqCategories.map((cat) => (
        <section
          key={cat.title}
          id={cat.title.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}
          className="py-16 px-4 bg-white even:bg-[#f9fdf8]"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center text-2xl flex-shrink-0`}
              >
                {cat.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{cat.title}</h2>
            </div>
            <div className="space-y-4">
              {cat.items.map((faq, i) => (
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
      ))}

      {/* ── 3. CTA ── */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-green-100 mb-8 text-lg leading-relaxed">
            Our packaging specialists are here to help. Get a personalized quote, free digital proof,
            or just talk through your packaging needs — we reply within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/8615064260757"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-green-300 text-sm mt-6">
            FSC-certified manufacturer · 100-unit MOQ · Free digital proofs · Reply in 24 hours
          </p>
        </div>
      </section>
    </>
  );
}
