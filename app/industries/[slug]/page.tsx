import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { BreadcrumbSchema } from "@/components/Schema"

interface IndustryPageProps {
  params: Promise<{ slug: string }>
}

const industries = {
  clothing: {
    name: "Apparel & Fashion",
    tagline: "Packaging that looks as good as what's inside",
    heroImage: "/images/industry_clothing.jpg",
    color: "from-emerald-600 to-teal-700",
    painPoints: [
      "Clothing arrives wrinkled because of low-quality mailers",
      "Generic packaging makes customers feel like they ordered from a commodity seller",
      "Sizing info and return instructions get lost in transit",
      "No way to encourage Instagram unboxing photos",
    ],
    solutions: [
      {
        title: "Custom Mailer Boxes",
        desc: "Rigid corrugated mailers that protect garments and double as a branding canvas.",
        image: "/images/industry_clothing.jpg",
      },
      {
        title: "Tissue Paper & Stickers",
        desc: "Acid-free tissue + custom stickers turn every order into a gift.",
        image: "/images/industry_gift_box.jpg",
      },
      {
        title: "Sustainable Poly Alternatives",
        desc: "Compostable mailers that replace plastic poly bags — same protection, zero guilt.",
        image: "/images/industry_food_box.jpg",
      },
    ],
    caseStudy: {
      brand: "Wildernest Outdoor",
      stage: "Series A DTC brand",
      challenge: "30% of Instagram unboxing posts showed garments in plain poly bags — zero brand recall.",
      solution: "Switched to custom-printed kraft mailers with interior branded tissue.",
      result: "Unboxing posts increased 3x. Repeat purchase rate went from 22% → 34% in 90 days.",
    },
    recommendedProducts: [
      { name: "Custom Mailer Boxes", href: "/products/paper-boxes" },
      { name: "Branded Tissue Paper", href: "/products/paper-bags" },
      { name: "Thank You Stickers", href: "/products/paper-boxes" },
    ],
    seoKeywords: "custom apparel packaging, clothing subscription box, eco friendly garment packaging, DTC fashion brand packaging",
  },
  cosmetics: {
    name: "Beauty & Cosmetics",
    tagline: "Your packaging is the first swatch customers try",
    heroImage: "/images/industry_cosmetics.jpg",
    color: "from-rose-500 to-pink-700",
    painPoints: [
      "Glass bottles arrive broken due to inadequate rigid box protection",
      "Undoable plastic wrap kills the premium feel of clean beauty",
      "Testers and samples have nowhere to live inside the package",
      "Subscription box unboxing feels flat without structure",
    ],
    solutions: [
      {
        title: "Rigid Drawer Boxes",
        desc: "Magnetic closure rigid boxes that make customers pause before opening — the premium feel drives reviews.",
        image: "/images/industry_cosmetics.jpg",
      },
      {
        title: "Insert Trays (EVA / Paperboard)",
        desc: "Precision-cut inserts that hold bottles, brushes, and samples in place.",
        image: "/images/industry_jewelry.jpg",
      },
      {
        title: "Soy Ink Printed Sleeves",
        desc: "Recyclable paper sleeves instead of plastic wraps — clean beauty, inside and out.",
        image: "/images/industry_clothing.jpg",
      },
    ],
    caseStudy: {
      brand: "GlowTheory",
      stage: "Growth-stage beauty brand",
      challenge: "Skincare sets were shipping in generic white corrugated boxes. Customers loved the product but never posted about the experience.",
      solution: "Designed a rigid lid-and-base box with soft-touch lamination and a tuck-in thank-you card.",
      result: "Unboxing posts drove 1,200+ organic Instagram tags in the first month. AOV increased 18% via bundle upsells enabled by the larger box format.",
    },
    recommendedProducts: [
      { name: "Rigid Boxes", href: "/products/paper-boxes" },
      { name: "Insert Trays", href: "/products/paper-boxes" },
      { name: "Custom Sleeves", href: "/products/paper-bags" },
    ],
    seoKeywords: "custom cosmetic packaging, beauty subscription box, eco friendly makeup packaging, rigid beauty box with insert",
  },
  food: {
    name: "Food & Gourmet Gifts",
    tagline: "Keep it fresh, keep it compliant, keep it beautiful",
    heroImage: "/images/industry_food_box.jpg",
    color: "from-amber-600 to-orange-700",
    painPoints: [
      "Grease-resistant packaging that actually works (no soggy bottoms)",
      "FDA-compliant food contact materials — customers ask, you need answers",
      "Windowed boxes that show the product without compromising freshness",
      "Seasonal gifting SKUs that need to launch in 10 days, not 10 weeks",
    ],
    solutions: [
      {
        title: "Grease-Resistant Folding Cartons",
        desc: "PLA-coated or PET-windowed cartons that pass the grease test and look premium on shelf.",
        image: "/images/industry_food_box.jpg",
      },
      {
        title: "Gift Box Sets",
        desc: "Rigid lid-and-base boxes with custom inserts for multi-item gourmet sets.",
        image: "/images/industry_gift_box.jpg",
      },
      {
        title: "Seasonal Quick-Turn Kits",
        desc: "Pre-engineered dielines for holiday/occasion packaging — 7-day sampling, 15-day production.",
        image: "/images/industry_wine.jpg",
      },
    ],
    caseStudy: {
      brand: "Midtown Bakery Co.",
      stage: "Local bakery → regional DTC",
      challenge: "Holiday cookie tins kept arriving dented. Customer complaints spiked every December.",
      solution: "Switched to rigid tin-style paperboard boxes with corrugated shippers for ecommerce fulfillment.",
      result: "Damage rate dropped from 12% → 0.8%. Holiday revenue doubled year-over-year with the new gift-ready packaging.",
    },
    recommendedProducts: [
      { name: "Folding Cartons", href: "/products/paper-boxes" },
      { name: "Gift Rigid Boxes", href: "/products/paper-boxes" },
      { name: "Food-Safe Inserts", href: "/products/paper-boxes" },
    ],
    seoKeywords: "food grade packaging boxes, gourmet gift box packaging, grease resistant food cartons, eco friendly bakery packaging",
  },
  wine: {
    name: "Wine & Spirits",
    tagline: "Packaging that respects the pour",
    heroImage: "/images/industry_wine.jpg",
    color: "from-red-800 to-burgundy-900",
    painPoints: [
      "Bottle labels get scuffed in transit without proper divider protection",
      "Gift sets need to feel premium but ship as cheaply as possible",
      "Sustainable packaging is now a purchasing requirement for top retailers",
      "Direct-to-consumer shipping requires ISTA 3A compliance",
    ],
    solutions: [
      {
        title: "Single & Multi-Bottle Rigid Boxes",
        desc: "Divider-protected rigid boxes for 1-, 2-, and 3-bottle gift sets. ISTA 3A tested.",
        image: "/images/industry_wine.jpg",
      },
      {
        title: "Shipping Cartons (ISTA 3A)",
        desc: "Corrugated shippers engineered to pass drop tests — no more breakage claims.",
        image: "/images/industry_food_box.jpg",
      },
      {
        title: "Sustainable Uncoated Kraft",
        desc: "FSC-certified kraft wine boxes with soy ink — premium feel, zero plastic laminate.",
        image: "/images/industry_clothing.jpg",
      },
    ],
    caseStudy: {
      brand: "Parker & Vineyard",
      stage: "DTC wine club (750+ members)",
      challenge: "Monthly wine club shipments had a 6% breakage rate with standard shippers. Members were canceling.",
      solution: "Custom 2-bottle rigid boxes with corrugated outer shipper, printed with club branding.",
      result: "Breakage dropped to <0.5%. Club renewal rate improved from 68% → 84%.",
    },
    recommendedProducts: [
      { name: "Wine Rigid Boxes", href: "/products/paper-boxes" },
      { name: "ISTA Shipping Cartons", href: "/products/paper-boxes" },
      { name: "Custom Divider Inserts", href: "/products/paper-boxes" },
    ],
    seoKeywords: "custom wine bottle packaging, sustainable wine gift box, ISTA 3A compliant shipping box, DTC wine club packaging",
  },
  jewelry: {
    name: "Jewelry & Accessories",
    tagline: "Small product, big moment",
    heroImage: "/images/industry_jewelry.jpg",
    color: "from-violet-600 to-purple-800",
    painPoints: [
      "Tiny items get lost in oversized boxes — customers hate 'swimming in filler'",
      "Cheap jewelry boxes tarnish the perceived value of even premium pieces",
      "No way to include care instructions that customers actually keep",
      "Ring boxes that don't photograph well for proposal posts",
    ],
    solutions: [
      {
        title: "Custom Insert Rigid Boxes",
        desc: "Precision-cut foam or velvet inserts that hold each piece exactly in place.",
        image: "/images/industry_jewelry.jpg",
      },
      {
        title: "Magnetic Closure Gift Boxes",
        desc: "Soft-touch rigid boxes with magnetic flap — the 'will they propose?' shot.",
        image: "/images/industry_cosmetics.jpg",
      },
      {
        title: "Pouch + Box Combo",
        desc: "Reusable drawstring pouch inside a rigid box — customers keep both.",
        image: "/images/industry_gift_box.jpg",
      },
    ],
    caseStudy: {
      brand: "June & Stone",
      stage: "Engagement ring DTC brand",
      challenge: "Ring boxes were generic leatherette — customers posted the ring, never the box.",
      solution: "Custom velvet-lined rigid box with brand monogram emboss, plus a reusable travel pouch.",
      result: "Unboxing posts 5x increase. 40% of customers now post a photo of the box itself. AOV up 15% via pouch upsell.",
    },
    recommendedProducts: [
      { name: "Rigid Jewelry Boxes", href: "/products/paper-boxes" },
      { name: "Custom Insert Trays", href: "/products/paper-boxes" },
      { name: "Branded Pouches", href: "/products/paper-bags" },
    ],
    seoKeywords: "custom jewelry packaging box, engagement ring gift box, velvet insert jewelry packaging, eco friendly jewelry box",
  },
  gift: {
    name: "Gifts & Premium Sets",
    tagline: "Make the first impression unforgettable",
    heroImage: "/images/industry_gift_box.jpg",
    color: "from-sky-600 to-blue-700",
    painPoints: [
      "Gift sets feel cheap when the box doesn't match the price tag",
      "Assembly time per order is too high with manual padding and stuffing",
      "No branded unboxing moment — the gift feels impersonal",
      "Sustainable gifting is now expected, not a nice-to-have",
    ],
    solutions: [
      {
        title: "Rigid Lid-and-Base Gift Boxes",
        desc: "Premium rigid boxes with custom insert trays — items stay in place, presentation is flawless.",
        image: "/images/industry_gift_box.jpg",
      },
      {
        title: "Magnetic Flip Boxes",
        desc: "The 'reveal' moment — magnetic flap opens smoothly for video unboxing.",
        image: "/images/industry_cosmetics.jpg",
      },
      {
        title: "Sustainable Kraft Gift Boxes",
        desc: "Recycled kraft rigid boxes — premium feel without the plastic laminate.",
        image: "/images/industry_clothing.jpg",
      },
    ],
    caseStudy: {
      brand: "Maker's Selection",
      stage: "Q4 gourmet gift set brand",
      challenge: "Gift boxes arrived with items shifted, tissue crumpled. Customers were disappointed before they even saw the product.",
      solution: "Rigid lid-and-base boxes with custom EVA insert trays holding each item securely.",
      result: "Customer satisfaction score went from 4.1 → 4.8 stars. Return rate dropped 60%.",
    },
    recommendedProducts: [
      { name: "Rigid Gift Boxes", href: "/products/paper-boxes" },
      { name: "Insert Trays", href: "/products/paper-boxes" },
      { name: "Magnetic Boxes", href: "/products/paper-boxes" },
    ],
    seoKeywords: "custom gift box packaging, premium gift set packaging, magnetic closure gift box, sustainable gift packaging",
  },
}

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = industries[slug as keyof typeof industries]
  if (!industry) return {}
  return {
    title: `${industry.name} Packaging | BUpack`,
    description: `${industry.tagline}. Eco-friendly custom ${industry.name.toLowerCase()} packaging for DTC and ecommerce brands. Get free samples.`,
    keywords: industry.seoKeywords,
  }
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const industry = industries[slug as keyof typeof industries]
  if (!industry) notFound()

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://bupackeco.com" },
          { name: "Industries", url: "https://bupackeco.com/industries" },
          { name: industry.name, url: `https://bupackeco.com/industries/${slug}` },
        ]}
      />
      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${industry.color} text-white py-24 pt-32`}>
        <div className="absolute inset-0 opacity-20">
          <Image src={industry.heroImage} alt={industry.name} fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <a href="/" className="text-white/70 hover:text-white text-sm mb-4 inline-block">← Back to Home</a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{industry.name}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">{industry.tagline}</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">The Challenges You're Facing</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We've heard these from hundreds of DTC brand founders — and solved every one.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-5">
                <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">✗</span>
                <p className="text-gray-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-center text-gray-600 mb-12">Designed specifically for {industry.name.toLowerCase()} brands that care about the unboxing moment.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {industry.solutions.map((sol, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative h-48">
                  <Image src={sol.image} alt={sol.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{sol.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block bg-green-700 px-4 py-1 rounded-full text-sm font-medium mb-6">Case Study</div>
          <h2 className="text-3xl font-bold mb-8">{industry.caseStudy.brand}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-green-300 text-sm font-medium mb-2">The Challenge</div>
              <p className="text-white/90 text-sm leading-relaxed">{industry.caseStudy.challenge}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-green-300 text-sm font-medium mb-2">Our Solution</div>
              <p className="text-white/90 text-sm leading-relaxed">{industry.caseStudy.solution}</p>
            </div>
            <div className="bg-white/10 rounded-md p-6">
              <div className="text-green-300 text-sm font-medium mb-2">The Result</div>
              <p className="text-white/90 text-sm leading-relaxed">{industry.caseStudy.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended for {industry.name}</h2>
          <p className="text-gray-600 mb-10">These products are most popular with brands in your industry.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {industry.recommendedProducts.map((prod, i) => (
              <a key={i} href={prod.href} className="block bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl p-6 transition group">
                <div className="text-lg font-semibold text-gray-900 group-hover:text-green-700">{prod.name}</div>
                <div className="text-sm text-green-600 mt-2">View Details →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to upgrade your {industry.name.toLowerCase()} packaging?</h2>
          <p className="text-gray-600 mb-8">Get free samples and a custom quote in 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">Get Free Samples</a>
            <a href="/products" className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition">View All Products</a>
          </div>
        </div>
      </section>
    </div>
  )
}
