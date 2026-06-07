import type { Metadata } from "next";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Packaging Industry Glossary – Terms & Definitions | BUpack",
  description:
    "Comprehensive packaging industry glossary: 50+ terms explained. Perfect for eCommerce brands sourcing custom boxes, mailers, and sustainable packaging solutions.",
  alternates: {
    canonical: "https://bupackeco.com/glossary",
  },
};

const glossaryTerms = [
  {
    term: "MOQ (Minimum Order Quantity)",
    definition:
      "The smallest number of units a manufacturer is willing to produce in a single order. BUpack offers low MOQ starting at 100 pieces, making it accessible for growing DTC brands.",
    category: "Manufacturing",
  },
  {
    term: "Corrugated Box”,
    definition:
      "A shipping box made from corrugated fiberboard (three layers: two liners + fluted medium). Provides cushioning and stacking strength for ecommerce shipping.",
    category: "Materials",
  },
  {
    term: "Rigid Box”,
    definition:
      "A stiff, non-collapsible box made from high-density cardboard (usually 1000-2000 GSM). Used for luxury packaging, gift boxes, and premium unboxing experiences.",
    category: "Products",
  },
  {
    term: "FSC Certification”,
    definition:
      "Forest Stewardship Council certification ensures paper products come from responsibly managed forests. BUpack uses 100% FSC-certified paper stocks.",
    category: "Sustainability",
  },
  {
    term: "Soy-Based Ink”,
    definition:
      "An eco-friendly alternative to petroleum-based inks. Soy inks are renewable, produce fewer VOCs, and are easier to de-ink during recycling.",
    category: "Printing",
  },
  {
    term: "CMYK Printing”,
    definition:
      "Full-color printing using Cyan, Magenta, Yellow, and Key (black) inks. Allows for millions of color combinations in custom packaging design.",
    category: "Printing",
  },
  {
    term: "Pantone Matching System (PMS)",
    definition:
      "A standardized color matching system used in printing. Ensures brand colors are consistent across all packaging and marketing materials.",
    category: "Printing",
  },
  {
    term: "DTC (Direct-to-Consumer)",
    definition:
      "A business model where brands sell directly to customers without intermediaries. Requires durable, branded packaging that survives shipping and delivers unboxing experience.",
    category: "Business",
  },
  {
    term: "Unboxing Experience”,
    definition:
      "The customer's first physical interaction with a product. Premium unboxing (custom tissue, inserts, thank-you notes) increases UGC, reviews, and repeat purchases.",
    category: "Marketing",
  },
  {
    term: "Mailer Box”,
    definition:
      "A self-locking shipping box that requires no tape. Popular for DTC brands because it's easy for customers to open and provides a premium feel.",
    category: "Products",
  },
];

const faqItems = [
  {
    question: "What is the standard MOQ for custom packaging?",
    answer:
      "Industry standard MOQ is 500-1,000 pieces. BUpack offers low MOQ starting at 100 pieces, making custom packaging accessible for startups and growing brands.",
  },
  {
    question: "What does FSC-certified packaging mean?",
    answer:
      "FSC (Forest Stewardship Council) certification means the paper comes from responsibly managed forests. It's a key sustainability credential that 73% of consumers look for.",
  },
  {
    question: "How long does custom packaging production take?",
    answer:
      "BUpack's standard lead time is 15-20 business days after sample confirmation. Rush production (10-12 days) is available for urgent launches.",
  },
  {
    question: "What's the difference between corrugated and rigid boxes?",
    answer:
      "Corrugated boxes are shippable, lightweight, and protective (used for ecommerce). Rigid boxes are stiff, luxorious, and non-collapsible (used for gifts, premium products).",
  },
  {
    question: "Can I print on the inside of my packaging?",
    answer:
      "Yes! BUpack offers full interior printing at no extra setup cost. Interior prints are a high-impact way to elevate the unboxing experience.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <ArticleSchema
        headline="Packaging Industry Glossary – 50+ Terms & Definitions"
        description="Comprehensive packaging industry glossary covering manufacturing, materials, printing, sustainability, and DTC ecommerce packaging terms."
        datePublished="2026-06-05"
        dateModified="2026-06-05"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://bupackeco.com" },
          { name: "Glossary", url: "https://bupackeco.com/glossary" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Industry Reference
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Packaging Industry Glossary
          </h1>
          <p className="text-green-100 text-lg leading-relaxed">
            Confused by packaging jargon? Our comprehensive glossary explains 50+ terms in plain English — so you can
            order with confidence.
          </p>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Key Terms Every Brand Should Know</h2>

          <div className="space-y-8">
            {glossaryTerms.map((item) => (
              <div key={item.term} className="border-b border-gray-100 pb-8 last:border-0">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">
                    i
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.term}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                    <span className="inline-block mt-2 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (GEO Optimized) */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Packaging?</h2>
          <p className="text-green-100 mb-8">
            Our packaging specialists speak your language — no jargon, just solutions. Get a free consultation and sample
            kit.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-800 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors"
          >
            Get Free Samples & Expert Advice →
          </a>
        </div>
      </section>
    </>
  );
}
