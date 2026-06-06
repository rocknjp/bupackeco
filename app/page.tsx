import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BUpack – Eco Packaging Built for Growing eCommerce Brands",
  description:
    "Stop losing customers at the unboxing moment. BUpack makes FSC-certified custom paper boxes and bags that reflect your brand values — low MOQ, factory direct, ships to North America.",
};

const painPoints = [
  {
    pain: "High MOQs force you to over-order and burn cash",
    fix: "Start from just 100 units. Test your design, validate demand, then scale — no dead inventory.",
    icon: "📦",
    stat: "15-25%",
    statLabel: "of packaging budget lost to overstock",
  },
  {
    pain: "Your packaging looks like everyone else's — no brand recall",
    fix: "Full custom printing with inside-print, foil stamping & soft-touch finish. Your box becomes shareable content.",
    icon: "🎨",
    stat: "3x",
    statLabel: "more unboxing shares with branded packaging",
  },
  {
    pain: "Shipping damage destroys reviews and drives returns",
    fix: "FEFCO-tested corrugated + custom-fit inserts. Every design is stress-tested before production.",
    icon: "🛡️",
    stat: "18%",
    statLabel: "of online sales affected by poor packaging",
  },
  {
    pain: "8–12 week lead times kill your product launch momentum",
    fix: "Digital printing + in-house production = samples in 3-5 days, bulk in 2-3 weeks.",
    icon: "⚡",
    stat: "7 days",
    statLabel: "average social media trend window",
  },
  {
    pain: "Oversized boxes inflate shipping costs by 'dimensional weight'",
    fix: "Right-size design optimization. We engineer packaging to minimize volume weight and cut freight spend.",
    icon: "📐",
    stat: "15-30%",
    statLabel: "shipping cost savings with optimized sizing",
  },
];

const useCases = [
  {
    stage: "Startup",
    tag: "100–500 units",
    desc: "Test your packaging design without a massive investment. We support early-stage brands with low MOQs and free sampling.",
    emoji: "🌱",
    color: "from-emerald-50 to-green-100",
    border: "border-green-200",
  },
  {
    stage: "Growth",
    tag: "500–5,000 units",
    desc: "Consistent quality at scale. Upgrade your unboxing experience to reduce returns and boost repeat purchases.",
    emoji: "🚀",
    color: "from-teal-50 to-teal-100",
    border: "border-teal-200",
  },
  {
    stage: "Scaling",
    tag: "5,000+ units",
    desc: "Dedicated account manager, priority production, and volume pricing. We grow with you.",
    emoji: "📈",
    color: "from-green-50 to-emerald-100",
    border: "border-emerald-200",
  },
];

const products = [
  {
    name: "eCommerce Mailer Boxes",
    slug: "paper-boxes",
    tags: ["DTC", "Subscription Box"],
    desc: "Corrugated or rigid paper mailer boxes with magnetic closure. Perfect for DTC shipments that need to look good on arrival.",
    img: "/images/product_box_1.jpg",
  },
  {
    name: "Retail Paper Bags",
    slug: "paper-bags",
    tags: ["Retail", "Event"],
    desc: "Matte or gloss laminated paper bags with rope handles. From boutique storefronts to pop-up events.",
    img: "/images/product_bag_1.jpg",
  },
  {
    name: "Subscription Boxes",
    slug: "subscription-boxes",
    tags: ["Monthly Box", "Gift Box"],
    desc: "Designed for repeat impressions. Custom interiors, tissue paper, and inserts included in one order.",
    img: "/images/product_box_2.jpg",
  },
];

const impactStats = [
  { number: "2.4M", unit: "trees saved", icon: "🌳" },
  { number: "850+", unit: "brands trust us", icon: "🤝" },
  { number: "18M+", unit: "eco units shipped", icon: "♻️" },
  { number: "100%", unit: "plastic-free options", icon: "🌿" },
];

const industries = [
  {
    name: "Candles & Home Fragrance",
    slug: "candles-fragrance",
    img: "/images/industry_cosmetics.jpg",
    desc: "Mailer boxes, gift sets, and subscription boxes for candle brands that want unboxing to be part of the experience.",
    tags: ["Fast Turnaround", "Gift-Ready", "Seasonal"],
  },
  {
    name: "Jewelry & Accessories",
    slug: "jewelry",
    img: "/images/industry_jewelry.jpg",
    desc: "Small-batch luxury rigid boxes with velvet inserts. Your packaging is the proposal moment.",
    tags: ["Low MOQ", "Magnetic Closure", "Velvet Insert"],
  },
  {
    name: "Chocolate & Confectionery",
    slug: "chocolate-confectionery",
    img: "/images/industry_food_box.jpg",
    desc: "FDA-compliant gift boxes that make chocolate feel like a luxury — not a commodity.",
    tags: ["Food-Safe", "Holiday Rush", "Window Boxes"],
  },
  {
    name: "Stationery & Lifestyle Gifts",
    slug: "stationery-gifts",
    img: "/images/industry_gift_box.jpg",
    desc: "Journals, pens, and gift sets deserve packaging that matches the craft inside.",
    tags: ["Flat Mailers", "Gift Sets", "Floral Print"],
  },
  {
    name: "Tea & Specialty Beverages",
    slug: "tea-beverages",
    img: "/images/industry_wine.jpg",
    desc: "Tea tins, sachet boxes, and monthly subscription boxes for the modern tea brand.",
    tags: ["Subscription Box", "Drawer Style", "Airtight"],
  },
  {
    name: "Pet Treats & Subscription Boxes",
    slug: "pet-subscription",
    img: "/images/industry_clothing.jpg",
    desc: "Monthly themed boxes that dogs (and their owners) can't wait to open.",
    tags: ["Monthly Themes", "Durable", "Pet-Safe Ink"],
  },
];

const testimonials = [
  {
    quote: "We switched to BUpack for our subscription box and our unboxing video shares went up 3x in the first month.",
    brand: "Bloom Beauty Co.",
    role: "Founder",
    country: "🇺🇸",
  },
  {
    quote: "The MOQ was the deal-breaker with other manufacturers. BUpack let us start with 200 units and the quality was incredible.",
    brand: "PureLeaf Wellness",
    role: "Head of Operations",
    country: "🇨🇦",
  },
  {
    quote: "Our customers constantly mention the packaging in their reviews. It's become part of our brand identity.",
    brand: "Cedar & Stone",
    role: "Co-Founder",
    country: "🇺🇸",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative bg-[#0a2e18] text-white overflow-hidden">
        {/* factory background image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/factory_workshop.jpg"
            alt="Packaging factory workshop"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0a2e18]/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium tracking-wide uppercase">For Growing eCommerce Brands</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your packaging is the{" "}
              <span className="relative inline-block">
                <span className="text-green-400">first review</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400/50 rounded"></span>
              </span>{" "}
              your customer writes.
            </h1>
            <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              BUpack makes FSC-certified custom paper boxes and bags for DTC and eCommerce brands that care about unboxing experience and the planet — starting from just 100 units.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors text-base"
              >
                Get Free Samples
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-base"
              >
                Browse Products
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {["FSC Certified", "100+ MOQ", "Ships to North America", "Free Sampling"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-sm text-green-200">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>

            {/* Factory Showcase */}
            <div className="mt-14 pt-8 border-t border-white/10">
              <p className="text-green-400/80 text-xs font-semibold uppercase tracking-widest mb-4">Built in Our Own ISO-Certified Factory</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { img: "/images/factory_hero.jpg", label: "Assembly Workshop" },
                  { img: "/images/factory_printing.png", label: "Printing Center" },
                  { img: "/images/factory_production.jpg", label: "Production Line" },
                  { img: "/images/factory_workers.jpg", label: "Skilled Team" },
                  { img: "/images/factory_machine.jpg", label: "Precision Machinery" },
                ].map((item) => (
                  <div key={item.label} className="relative h-24 sm:h-28 rounded-lg overflow-hidden border border-white/20 hover:border-green-400/60 transition-all group cursor-pointer">
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <span className="text-[10px] sm:text-xs text-white/90 font-medium block text-center">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTORY PREVIEW ─────────────────────────── */}
      <section className="relative h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/factory_production.jpg"
          alt="BUpack factory workshop - eco packaging production"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a2e18]/75"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Built in our own factory.<br />Shipped to your customers.
          </h2>
          <p className="text-green-100 text-lg mb-6">
            FSC-certified materials, soy-based inks, and a 3-stage QC process — every unit is inspected before it leaves our facility.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-400 transition-colors"
          >
            Tour Our Factory
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── PAIN POINTS ────────────────────────────── */}
      <section className="py-20 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-3">Sound Familiar?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The packaging problems keeping you up at night
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We talk to 100+ growing brands every month. These are the same 5 frustrations we hear again and again — and exactly how we solve them.
            </p>
          </div>

          <div className="space-y-6">
            {painPoints.map((p, i) => (
              <div
                key={p.pain}
                className="group rounded-2xl border border-gray-100 bg-white hover:border-green-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Pain Side */}
                  <div className="md:w-2/5 p-6 md:p-8 bg-gray-50/50 group-hover:bg-red-50/30 transition-colors border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-red-100 flex items-center justify-center text-2xl flex-shrink-0 transition-colors">
                        {p.icon}
                      </div>
                      <div>
                        <p className="text-red-700/70 text-xs font-bold uppercase tracking-wider mb-1">Pain Point {String(i + 1).padStart(2, '0')}</p>
                        <p className="text-gray-800 font-bold text-lg leading-snug">{p.pain}</p>
                        <div className="mt-3 inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                          <span className="text-red-500">⚠</span> {p.stat} {p.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Solution Side */}
                  <div className="md:w-3/5 p-6 md:p-8 flex items-center">
                    <div className="flex items-start gap-4 w-full">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-700 text-xs font-bold uppercase tracking-wider mb-1">BUpack Solution</p>
                        <p className="text-gray-700 text-base leading-relaxed">{p.fix}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition-colors text-base"
            >
              See How We Can Solve Yours
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-gray-400 text-sm mt-3">Free sample kit · No commitment · Ships in 3-5 days</p>
          </div>
        </div>
      </section>

      {/* ── IMPACT COUNTER ─────────────────────────── */}
      <section className="py-12 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((s) => (
              <div key={s.unit}>
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-3xl md:text-4xl font-bold">{s.number}</div>
                <div className="text-green-200 text-sm mt-1">{s.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BY BRAND STAGE ─────────────────────────── */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Packaging that grows with your brand
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Whether you&apos;re just launching or shipping thousands of orders a week, we have the right solution at the right price.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <div key={u.stage} className={`rounded-2xl p-8 border ${u.border} bg-gradient-to-br ${u.color}`}>
                <div className="text-4xl mb-4">{u.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{u.stage} Brand</h3>
                  <span className="text-xs bg-white/80 text-green-700 font-semibold px-2.5 py-0.5 rounded-full border border-green-200">{u.tag}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{u.desc}</p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm mt-5 hover:gap-2 transition-all">
                  Get a quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ───────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Products</h2>
              <p className="text-gray-500">Designed for the eCommerce journey — from first click to repeat purchase.</p>
            </div>
            <Link href="/products" className="text-green-700 font-semibold text-sm hover:underline whitespace-nowrap">
              View all products →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug + p.name}
                href={`/products/${p.slug}`}
                className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-green-200 transition-all"
              >
                <div className="relative h-56 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={400}
                    height={224}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-green-50 text-green-700 font-medium px-2.5 py-0.5 rounded-full border border-green-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-700 transition-colors">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-green-700 font-medium text-sm mt-4 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ───────────────────── */}
      <section className="py-20 px-4 bg-[#f9fdf8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-3">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your packaging is your product. We get that.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              These 6 industries share one thing: the packaging IS the experience. Your customers judge your brand the moment they open the box — and we make sure that moment is unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all block"
              >
                <div className="relative h-40 sm:h-44 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={ind.img}
                    alt={ind.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-green-900/5 group-hover:bg-green-900/10 transition-colors"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-gray-900 font-bold text-base mb-2 group-hover:text-green-700 transition-colors">{ind.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{ind.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {ind.tags.map((t) => (
                      <span key={t} className="text-[11px] bg-green-50 text-green-700 font-medium px-2 py-0.5 rounded-full border border-green-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore {ind.name} Packaging →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {/* Bottom insight */}
          <div className="mt-12 text-center max-w-2xl mx-auto bg-white rounded-2xl border border-green-100 p-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-bold text-green-700">Why these 6?</span> These industries buy packaging independently from their product supply chain — which means you control the packaging decision. No OEM lock-in, no middleman markup. Just direct factory quality at brand-friendly MOQs.
            </p>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY STRIP ──────────────────── */}
      <section className="py-16 px-4 bg-[#0a2e18] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Sustainability First</span>
            <h2 className="text-3xl font-bold mb-4">Packaging your customers will actually brag about</h2>
            <p className="text-green-100 leading-relaxed mb-6">
              Today&apos;s consumers research brands before buying. 73% say they&apos;re willing to pay more for sustainable packaging. Show your values from the moment the box arrives.
            </p>
            <Link href="/eco" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-400 transition-colors">
              Our Sustainability Commitments
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { icon: "🌲", label: "FSC Certified Paper", desc: "Responsibly sourced from certified forests" },
              { icon: "🖨️", label: "Soy-Based Inks", desc: "Non-toxic, compostable printing" },
              { icon: "♻️", label: "100% Recyclable", desc: "All packaging is curbside recyclable" },
              { icon: "📦", label: "Plastic-Free", desc: "Zero plastic in standard product line" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-green-300 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What brands are saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.brand} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg">
                    {t.country}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.brand}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────── */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🌿</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to make packaging part of your brand story?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Tell us about your brand and we&apos;ll send you a free sample kit — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-700 text-white font-bold px-10 py-4 rounded-xl hover:bg-green-600 transition-colors text-lg"
          >
            Get Your Free Sample Kit →
          </Link>
          <p className="text-gray-400 text-sm mt-4">Shipped to your door · No obligation · Responds in 24h</p>
        </div>
      </section>
    </>
  );
}
