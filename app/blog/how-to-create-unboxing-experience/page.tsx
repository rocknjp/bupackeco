import Link from "next/link";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Create Unboxing Experience That Drives Shares | BUpack",
  description:
    "Design a memorable unboxing experience for DTC brands. 8 proven strategies with real examples, custom inserts, and interior printing from BUpack.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog/how-to-create-unboxing-experience",
  },
  openGraph: {
    title: "Create Unboxing Experience That Drives Shares | BUpack",
    description:
      "Design a memorable unboxing experience for DTC brands. 8 proven strategies with real examples, custom inserts, and interior printing from BUpack.",
    url: "https://www.bupackeco.com/blog/how-to-create-unboxing-experience",
    siteName: "BUpack",
    locale: "en_US",
    type: "article",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Unboxing Experience That Drives Shares | BUpack",
    description:
      "Design a memorable unboxing experience for DTC brands. 8 proven strategies with real examples, custom inserts, and interior printing from BUpack.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const faqItems = [
  {
    question: "What is an unboxing experience?",
    answer:
      "An unboxing experience is the physical and emotional journey a customer goes through when opening your product packaging. It includes the visual design, tactile feel, layered reveal, and surprise elements inside the box. A well-designed unboxing experience turns a routine delivery into a memorable brand moment that customers share on social media.",
  },
  {
    question: "Why does unboxing experience matter for DTC brands?",
    answer:
      "Unboxing videos generate over 10 billion YouTube views per year. For DTC brands, a great unboxing experience drives social sharing, generates user-generated content, increases repeat purchase rates by 18-24%, and reduces return rates by improving perceived product value. It is one of the highest-ROI marketing investments a brand can make.",
  },
  {
    question: "How much does a premium unboxing experience cost?",
    answer:
      "A basic unboxing upgrade (custom tissue paper + branded sticker seal) adds $0.15-0.30 per order. A mid-tier upgrade (custom printed mailer box + insert card) adds $1.00-2.00 per order. A premium upgrade (rigid box + foil stamping + custom insert + branded tissue) adds $3.00-6.00 per order. Most DTC brands see positive ROI at the mid-tier level.",
  },
  {
    question: "Can I create a great unboxing experience at low MOQ?",
    answer:
      "Yes. BUpack offers custom printed mailer boxes from 100 units, custom tissue paper from 1,000 sheets, branded sticker seals from 500 units, and custom insert cards from 100 units. Digital printing makes low-MOQ unboxing affordable — no plate fees and quick turnaround.",
  },
];

export default function HowToCreateUnboxingExperience() {
  return (
    <>
      <ArticleSchema
        headline="How to Create an Unboxing Experience That Drives Social Shares"
        description="How to design a memorable unboxing experience for your DTC brand. 8 proven strategies with real brand examples."
        datePublished="2026-06-13T00:00:00.000Z"
        authorName="BUpack Team"
        url="/blog/how-to-create-unboxing-experience"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Create Unboxing Experience", url: "/blog/how-to-create-unboxing-experience" },
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
              Unboxing Experience
            </span>
            <span className="text-green-300 text-sm">
              June 13, 2026 · 9 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            How to Create an Unboxing Experience That Drives Social Shares
          </h1>
          <p className="text-green-200 text-lg leading-relaxed">
            How to design a memorable unboxing experience for your DTC brand. 8 proven strategies
            with real brand examples. Custom inserts, tissue, and interior printing from BUpack.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-green max-w-none">

          <figure className="my-8 max-w-md mx-auto">
            <Image
              src="/images/product_packaging.jpg"
              alt="Custom printed paper packaging boxes finished product display — branded mailer and gift boxes that create memorable unboxing experiences for DTC ecommerce brands"
              width={600}
              height={800}
              className="w-full h-auto rounded-xl mx-auto"
              loading="eager"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Custom packaging is the physical touchpoint where unboxing experiences begin — every detail from material to finish shapes how customers perceive your brand.
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            The Unboxing Moment Is Your Most Powerful Brand Touchpoint
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When a customer opens your package, they are experiencing your brand in its most physical, most intimate form. No ad, no email, no social post can match the sensory impact of holding your product in your packaging for the first time. And increasingly, customers are filming that moment and sharing it with the world.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Unboxing videos generate over <strong>10 billion cumulative views</strong> on YouTube. On TikTok, #unboxing has over 90 billion views. This is not a trend — it is a permanent shift in how consumers discover and evaluate brands. The question is no longer whether you should invest in your unboxing experience, but how to do it effectively.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This guide covers 8 proven strategies to design an unboxing experience that customers want to share — with real brand examples and cost breakdowns for each.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Strategy 1: The Layered Reveal
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most share-worthy unboxing experiences build anticipation through layers. Instead of opening a box and seeing the product immediately, each layer adds a moment of discovery:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Layer 1: The outer box</strong> — Your branded mailer or rigid box creates the first impression. The moment they see your logo, anticipation begins.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Layer 2: Tissue paper or sleeve</strong> — Custom printed tissue or a branded paper sleeve adds a sense of ceremony to the reveal.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Layer 3: The product</strong> — Nestled in a custom insert or surrounded by kraft paper cushioning. The product should feel presented, not packed.</p>
          <p className="text-gray-700 leading-relaxed mb-4"><strong>Layer 4: The surprise</strong> — A hidden message on the inside lid, a thank-you card, a sample, or a QR code. This is the moment that makes people reach for their camera.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Real example:</strong> Apple&apos;s iPhone packaging is the gold standard of layered reveal. The slow-slide lid, the precisely fitted inserts, the document envelope underneath — every layer is engineered to build anticipation. You can achieve a similar effect at a fraction of the cost with a custom mailer box, branded tissue, and a printed insert card. For more inspiration, explore our collection of <Link href="/blog/branded-packaging-ideas-ecommerce" className="text-green-700 underline hover:text-green-600">branded packaging ideas for ecommerce brands</Link> — from minimalist luxury to bold pattern-driven designs.
          </p>

          <figure className="my-8">
            <Image
              src="/images/product_box_2.jpg"
              alt="Custom paper boxes arranged to show layered unboxing reveal — branded outer box with interior print and custom insert demonstrating multi-layer packaging design"
              width={800}
              height={600}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              The layered reveal — outer box, interior print, and fitted insert work together to build anticipation with every layer opened.
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Strategy 2: Interior Printing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most brands focus exclusively on the exterior of their boxes. But interior printing is where the magic happens — it is the moment of surprise that makes customers feel like they have been let inside something special.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Interior printing options include: a full-color pattern or illustration, your brand story or founding date, social media handles or a QR code linking to an exclusive page, a personalized thank-you message, or product care instructions presented as a design element rather than fine print.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Interior printing adds approximately 10-15% to the per-unit cost but delivers outsized emotional impact. It is the single most cost-effective unboxing upgrade you can make.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Strategy 3: Custom Inserts & Fitments
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nothing says &quot;premium&quot; like a product that sits perfectly in its designated space. Custom inserts serve both functional and emotional purposes:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Functional:</strong> They protect your product during shipping, reducing damage rates by 40-60%. They eliminate the need for bubble wrap or air pillows, making your packaging more sustainable.</p>
          <p className="text-gray-700 leading-relaxed mb-4"><strong>Emotional:</strong> They make your product feel purposefully presented, not casually packed. This is the difference between &quot;I received a product&quot; and &quot;I opened an experience.&quot;</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Real example:</strong> MeUndies uses a custom corrugated insert that holds their product in a precise folded position. The insert is printed with their signature pattern, making even the functional element feel on-brand. Cost: approximately $0.20-0.40 per unit at 2,000+ volume.
          </p>

          <figure className="my-8">
            <Image
              src="/images/product_corrugated_mailer.jpg"
              alt="Custom corrugated mailer box with die-cut insert for ecommerce shipping — self-locking DTC mailer box designed for unboxing experience and product protection"
              width={800}
              height={803}
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              A custom corrugated mailer box with die-cut insert — protection and presentation in one self-locking structure, no tape needed.
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Strategy 4: Branded Tissue Paper & Sticker Seals
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are working with a tight budget, branded tissue paper and sticker seals are the highest-impact, lowest-cost unboxing upgrade. For $0.15-0.30 per order, you transform a plain box opening into a gift-like reveal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Custom tissue paper starts at 1,000 sheets (approximately $0.05-0.10 per sheet for a custom print). Branded sticker seals start at 500 units (approximately $0.05-0.15 each). The tissue creates a sense of care and attention; the sticker seal creates a moment of &quot;breaking in&quot; that feels special.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Real example:</strong> Glossier wraps every order in their signature pink tissue paper sealed with a Glossier sticker. The cost is minimal, but the visual impact on Instagram is enormous — their pink packaging is one of the most recognizable brand assets in beauty.
          </p>

          <figure className="my-8">
            <Image
              src="/images/product_cardstock_foldable.jpg"
              alt="Custom foldable cardstock box for retail and cosmetics packaging — flat-foldable paper box with full color print used for branded tissue and sticker seal unboxing presentation"
              width={700}
              height={778}
              className="w-full h-auto rounded-xl mx-auto"
              loading="lazy"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Foldable cardstock boxes — the affordable base layer that pairs with branded tissue and sticker seals for a gift-like reveal.
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Strategy 5: The Thank-You Card
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A handwritten-style thank-you card is one of the most powerful tools for building emotional connection with your customers. It transforms a transaction into a relationship. Key principles:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Keep it short.</strong> 2-3 sentences maximum. &quot;Thank you for choosing [Brand]. We started this company because [reason]. Your support means the world.&quot;</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Include a next step.</strong> A discount code for their next purchase, a QR code to an exclusive community, or an invitation to share their unboxing on social media with your branded hashtag.</p>
          <p className="text-gray-700 leading-relaxed mb-4"><strong>Make it sustainable.</strong> Print on uncoated recycled paper with soy-based ink. This reinforces your eco-credentials and costs no more than standard printing.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Strategy 6: Sensory Triggers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most memorable unboxing experiences engage multiple senses, not just sight:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Touch:</strong> Soft-touch lamination on your box exterior creates a velvet-like feel that customers instinctively stroke and comment on. It adds $0.15-0.30 per unit but is one of the most frequently mentioned features in unboxing videos.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Sound:</strong> The &quot;crinkle&quot; of tissue paper, the satisfying &quot;thock&quot; of a well-fitting box lid, the subtle tear of a perforated opening strip. These sounds are why people film unboxings — they are ASMR-worthy.</p>
          <p className="text-gray-700 leading-relaxed mb-4"><strong>Smell:</strong> Some brands add a subtle scent to their packaging — a hint of lavender for a wellness brand, cedar for a menswear brand. This is an advanced tactic but creates a powerful memory association.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Strategy 7: Seasonal & Limited-Edition Variations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Collectors and repeat customers love variety. Seasonal packaging variations create urgency and give existing customers a reason to share again. You do not need a completely new box for every season — small changes create big impact:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Swap the insert card</strong> — Cheapest seasonal refresh. Design a new card for each season or holiday. Cost: $0.05-0.10 per card.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Change tissue paper color</strong> — Holiday red, spring pastel, summer bright. Cost: $0.01-0.03 more per sheet than standard white.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Add a themed sticker seal</strong> — Seasonal designs cost pennies and transform the opening moment. Cost: $0.05-0.10 each.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Use a sleeve box system</strong> — The base box stays the same year-round; only the printed paper sleeve changes with each season. This cuts seasonal packaging costs by 40-60% compared to a fully new box design. For a complete playbook on seasonal execution, read our <Link href="/blog/seasonal-packaging-strategy" className="text-green-700 underline hover:text-green-600">seasonal packaging strategy guide</Link> — covering holiday planning, limited-edition drops, and Q4 readiness.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Strategy 8: Encourage & Incentivize Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Design your unboxing to make sharing feel natural, not forced:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Include your social handles inside the box lid</strong> — &quot;Share your unboxing @brandname #brandunboxing&quot;</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Print a QR code</strong> that links to a landing page with a discount code for sharing. &quot;Scan to get 15% off your next order when you post your unboxing.&quot;</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Feature customer unboxings</strong> on your social media and website. When customers see that you share their content, they are more likely to post.</p>
          <p className="text-gray-700 leading-relaxed mb-4"><strong>Run a monthly unboxing contest.</strong> Feature the best unboxing photo/video each month and reward the creator with free product. This costs you almost nothing but generates consistent UGC.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            Budget Guide: Unboxing by Brand Stage
          </h2>

          <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3 font-semibold">Brand Stage</th>
                  <th className="text-left px-5 py-3 font-semibold">Budget Approach</th>
                  <th className="text-left px-5 py-3 font-semibold">Cost Per Order</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-5 py-3 font-medium text-gray-900">Startup (100-500 orders/mo)</td>
                  <td className="px-5 py-3 text-gray-600">Custom tissue + sticker seal + thank-you card</td>
                  <td className="px-5 py-3 text-green-700 font-semibold">+$0.20-0.50</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">Growth (500-2,000 orders/mo)</td>
                  <td className="px-5 py-3 text-gray-600">Printed mailer box + interior print + insert card</td>
                  <td className="px-5 py-3 text-green-700 font-semibold">+$1.00-2.50</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-3 font-medium text-gray-900">Scaling (2,000+ orders/mo)</td>
                  <td className="px-5 py-3 text-gray-600">Rigid/soft-touch box + custom insert + tissue + seasonal variations</td>
                  <td className="px-5 py-3 text-green-700 font-semibold">+$3.00-6.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            For subscription brands, the unboxing experience is your single most important retention tool — it's the moment that determines whether a subscriber stays or cancels. Our <Link href="/blog/packaging-for-subscription-boxes-guide" className="text-green-700 underline hover:text-green-600">subscription box packaging guide</Link> covers monthly theme refreshes, cost-per-box optimization, and retention-focused design strategies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            The ROI of a Great Unboxing Experience
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The numbers speak for themselves. Brands that invest in premium unboxing see:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>18-24% higher repeat purchase rates</strong> — customers who have a memorable unboxing are more likely to order again.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>3-5x more social media shares</strong> — beautiful packaging generates organic UGC that would cost thousands in paid influencer fees.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>23% more 5-star reviews</strong> — premium packaging creates a halo effect that improves product perception.</p>
          <p className="text-gray-700 leading-relaxed mb-4"><strong>40-60% lower damage rates</strong> — custom inserts and proper sizing protect products better than generic packaging.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
            How BUpack Helps You Engineer the Perfect Unboxing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We work with DTC brands at every stage to design unboxing experiences that drive shares, reviews, and repeat purchases. Every <a href="/products/paper-boxes" className="text-green-700 underline">custom paper box</a>, <a href="/products/custom-mailer-boxes" className="text-green-700 underline font-semibold">custom mailer box</a>, and <a href="/products/rigid-gift-boxes" className="text-green-700 underline font-semibold">rigid gift box</a> includes:
          </p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Interior printing</strong> — full-color print on the inside of your mailer box. The surprise that makes people reach for their camera.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Custom inserts</strong> — die-cut corrugated or paperboard inserts that hold your product perfectly. No bubble wrap needed.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Branded tissue paper</strong> — custom printed tissue from 1,000 sheets. Your logo or pattern on every layer.</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>Sticker seals</strong> — branded sticker seals from 500 units. The ceremonial finishing touch.</p>
          <p className="text-gray-700 leading-relaxed mb-4"><strong>FSC-certified materials</strong> with soy-based ink and water-based coatings — sustainable unboxing that your customers will love. For luxury and gift-oriented products, our <Link href="/products/rigid-gift-boxes" className="text-green-700 underline hover:text-green-600">rigid gift boxes</Link> with magnetic closures deliver the most premium unboxing experience — starting at 500 units MOQ with full customization. Flexible MOQ starting from 100 units for <a href="/products/custom-mailer-boxes" className="text-green-700 underline font-semibold">custom mailer boxes</a>, <a href="/products/subscription-boxes" className="text-green-700 underline font-semibold">subscription boxes</a>, and insert cards.</p>

        </div>

        {/* CTA Box */}
        <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ready to design your unboxing experience?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get custom packaging with interior printing, custom inserts, and branded tissue — starting at 100 units MOQ.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
            >
              Request Free Sample Kit
            </Link>
            <Link
              href="/blog/unboxing-experience-drives-dtc-growth"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl border border-green-200 hover:bg-green-50 transition-colors"
            >
              Read: Unboxing Drives Growth
            </Link>
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
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
