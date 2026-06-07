import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema"

interface IndustryPageProps {
  params: Promise<{ slug: string }>
}

const industries = {
  "candles-fragrance": {
    name: "Candles & Home Fragrance",
    tagline: "Your candle deserves a box as beautiful as its scent",
    heroImage: "/images/industry_cosmetics.jpg",
    color: "from-amber-500 to-orange-600",
    icon: "🕯️",
    whyBUpack: "Candle brands pour their own wax and source packaging separately. Our 3-day design + 5-day sampling + 7-day delivery means your seasonal launches never miss the window.",
    painPoints: [
      "Glass jars arrive shattered — your beautiful candle becomes a refund request",
      "Holiday launch packaging takes 8-12 weeks from traditional suppliers",
      "Your gift sets feel generic — no brand personality in the unboxing",
      "Monthly subscription boxes look the same every month, killing subscriber excitement",
    ],
    solutions: [
      {
        title: "Custom Mailer Boxes with Inserts",
        desc: "E-flute corrugated mailers with precision-cut inserts that cradle glass jars. Drop-tested to survive FedEx, USPS, and DHL.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Holiday Gift Set Boxes",
        desc: "Rigid lid-and-base boxes with custom EVA foam or paperboard trays. 3-candle sets, diffuser kits, or wax melt collections — each piece has its place.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Monthly Subscription Boxes",
        desc: "Standardized sizes with monthly design refreshes. Same dieline, new artwork every month — subscribers can't wait to see what's next.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Botanical Flame Co.",
      stage: "DTC candle brand ($2M ARR)",
      challenge: "Holiday gift sets were shipping in plain brown boxes. Zero Instagram unboxing posts despite 50K followers.",
      solution: "Custom rigid lid-and-base box with gold foil stamping, EVA insert for 3 candles, and interior brand story printing.",
      result: "Unboxing posts jumped from 0 to 340+ in Q4. Gift set AOV increased 42%. Return rate dropped from 6% → 0.8%.",
    },
    recommendedProducts: [
      { name: "Mailer Boxes with Inserts", href: "/products/paper-boxes" },
      { name: "Rigid Gift Boxes", href: "/products/paper-boxes" },
      { name: "Subscription Boxes", href: "/products/subscription-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "E-flute corrugated with custom-fit jar inserts. Survives cross-country shipping.", icon: "📦" },
      { type: "Gift Set Box", desc: "Rigid lid-and-base with multi-candle inserts. The 'giftable' unboxing.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly theme rotation on standardized dieline. Fresh design, same structure.", icon: "🔄" },
      { type: "Product Sleeve", desc: "Paperboard wrap-around sleeve for single candles. Branding without the bulk.", icon: "📋" },
    ],
    seoKeywords: "custom candle packaging boxes, candle mailer box with insert, candle gift set packaging, candle subscription box, eco friendly candle packaging",
    faqs: [
      { q: "What's the minimum order for candle mailer boxes?", a: "We start at just 100 units — perfect for testing a new scent line or seasonal design before committing to volume." },
      { q: "How do you protect glass candle jars during shipping?", a: "We use E-flute corrugated with precision-cut paperboard or EVA foam inserts. Every design is drop-tested before production to ensure your jars arrive intact." },
      { q: "Can you match my candle brand's specific color palette?", a: "Absolutely. We use Pantone color matching and digital proofing. You'll see and approve a physical sample before production begins." },
      { q: "How fast can I get a new candle gift set box designed and delivered?", a: "3 days for design finalization, 5 days for sampling, and 7 days for production delivery — that's 15 days from concept to your door for orders under 10,000 units." },
      { q: "Are your materials safe for direct candle contact?", a: "Yes. We use FSC-certified paper, soy-based inks, and water-based adhesives. No harmful chemicals that could react with candle wax or fragrance oils." },
    ],
  },
  "jewelry": {
    name: "Jewelry & Accessories",
    tagline: "Small product, big moment — make the box part of the story",
    heroImage: "/images/industry_jewelry.jpg",
    color: "from-violet-600 to-purple-800",
    icon: "💍",
    whyBUpack: "Jewelry brands manufacture pieces separately from packaging. Your box IS the first thing customers see — we make sure it's worthy of the moment.",
    painPoints: [
      "Generic leatherette boxes cheapen even the finest pieces",
      "Tiny items get lost in oversized boxes — customers hate 'swimming in filler'",
      "No way to include care instructions that customers actually keep",
      "Ring boxes that don't photograph well for proposal posts",
    ],
    solutions: [
      {
        title: "Velvet-Insert Rigid Boxes",
        desc: "Custom-cut velvet or suede inserts that hold each piece exactly in place. Rings, necklaces, earrings — each has its perfect spot.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Magnetic Closure Gift Boxes",
        desc: "Soft-touch rigid boxes with magnetic flap — the slow reveal that makes every unboxing Instagram-worthy.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Travel Pouch + Box Combo",
        desc: "Reusable drawstring pouch inside a rigid box — customers keep both. Your brand travels with them.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "June & Stone",
      stage: "Engagement ring DTC brand",
      challenge: "Ring boxes were generic leatherette — customers posted the ring, never the box. The brand story stopped at the jewelry.",
      solution: "Custom velvet-lined rigid box with brand monogram emboss, plus a reusable travel pouch. Designed for the 'proposal shot.'",
      result: "Unboxing posts 5x increase. 40% of customers now post a photo of the box itself. AOV up 15% via pouch upsell.",
    },
    recommendedProducts: [
      { name: "Rigid Jewelry Boxes", href: "/products/paper-boxes" },
      { name: "Custom Insert Trays", href: "/products/paper-boxes" },
      { name: "Magnetic Gift Boxes", href: "/products/subscription-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "Compact corrugated mailer that protects the jewelry box inside. Small footprint = lower dimensional weight.", icon: "📦" },
      { type: "Gift Set Box", desc: "Multi-piece rigid box with layered inserts. Necklace + earrings + bracelet — one perfect presentation.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly jewelry curation in a standardized box. New insert design each month.", icon: "🔄" },
      { type: "Product Box", desc: "The primary jewelry box — velvet-lined, magnetic closure, embossed logo. Kept forever.", icon: "💎" },
    ],
    seoKeywords: "custom jewelry packaging box, engagement ring gift box, velvet insert jewelry packaging, eco friendly jewelry box, magnetic closure jewelry box",
    faqs: [
      { q: "What's the smallest jewelry box you can make?", a: "We can produce rigid boxes as small as 2x2 inches — perfect for rings and small earrings. Our minimum is 100 units per design." },
      { q: "Can you do velvet or suede interior lining?", a: "Yes. We offer velvet, suede, and microfiber interior options in a range of colors. All materials are tested for colorfastness to protect your jewelry." },
      { q: "How do I ensure the ring box photographs well?", a: "We optimize for 'Instagram lighting' — matte exterior finishes that don't glare, rich interior contrast colors, and clean edges that photograph beautifully from any angle." },
      { q: "Can you add my brand's monogram or logo in foil?", a: "Yes — gold, silver, rose gold, and copper foil stamping are available. We can also do blind embossing for a subtler luxury look." },
    ],
  },
  "chocolate-confectionery": {
    name: "Chocolate & Confectionery",
    tagline: "Great chocolate deserves a box that says 'this is special'",
    heroImage: "/images/industry_food_box.jpg",
    color: "from-rose-700 to-red-800",
    icon: "🍫",
    whyBUpack: "Chocolate makers craft their own products and buy packaging independently. Your box is the gift wrapper, the brand ambassador, and the first taste — all in one.",
    painPoints: [
      "Chocolate melts or breaks in transit with inadequate packaging",
      "Holiday rush: you need new gift boxes in days, not months",
      "FDA compliance questions keep you up at night",
      "Generic gold boxes make your artisan chocolate look like a supermarket brand",
    ],
    solutions: [
      {
        title: "FDA-Compliant Gift Boxes",
        desc: "Food-safe inks and coatings that meet FDA 21 CFR requirements. Your chocolate stays pure and your packaging stays compliant.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Windowed Presentation Boxes",
        desc: "PET or PLA windows that showcase your chocolate's craftsmanship without compromising freshness or food safety.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Holiday Quick-Turn Gift Sets",
        desc: "Pre-engineered dielines for Valentine's, Easter, Mother's Day, and Christmas. 7-day sampling + 15-day production.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Midtown Artisan Chocolate",
      stage: "DTC bean-to-bar brand ($1.5M ARR)",
      challenge: "Holiday gift boxes arrived with shifted chocolates and scuffed exteriors. 12% of Q4 orders resulted in complaints.",
      solution: "Custom rigid box with precision-cut EVA tray holding 12 truffles in place. Gold foil logo + satin ribbon closure.",
      result: "Complaint rate dropped from 12% → 0.5%. Q4 revenue up 85% YoY. Retailers started requesting the box for in-store display.",
    },
    recommendedProducts: [
      { name: "Rigid Gift Boxes", href: "/products/paper-boxes" },
      { name: "Windowed Cartons", href: "/products/paper-boxes" },
      { name: "Custom Insert Trays", href: "/products/paper-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "Insulated corrugated mailer for temperature-sensitive chocolate shipments.", icon: "📦" },
      { type: "Gift Set Box", desc: "Rigid box with individual truffle cavities. The 'luxury chocolate shop' experience at home.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly chocolate tasting box. New origins, new designs every month.", icon: "🔄" },
      { type: "Product Box", desc: "Folding carton or sleeve for individual bars. Brand story + tasting notes printed inside.", icon: "🍫" },
    ],
    seoKeywords: "custom chocolate packaging boxes, chocolate gift box with insert, FDA compliant chocolate packaging, artisan chocolate box, eco friendly confectionery packaging",
    faqs: [
      { q: "Are your materials food-safe for direct chocolate contact?", a: "Yes. We use FDA 21 CFR compliant inks, water-based adhesives, and FSC-certified paperboard. All materials are tested for indirect food contact safety." },
      { q: "Can you do window boxes so customers can see the chocolate?", a: "Absolutely. We offer PET (clear) and PLA (compostable) window options. Windows can be die-cut to any shape to showcase your product." },
      { q: "How fast can you produce holiday chocolate boxes?", a: "For holiday rushes: 7 days for sampling, 15 days for production. We recommend ordering 4-6 weeks before peak season for the best pricing." },
      { q: "What's the minimum order for custom chocolate boxes?", a: "100 units for standard designs. 300 units for window boxes or foil-stamped designs. Perfect for seasonal launches or limited editions." },
    ],
  },
  "stationery-gifts": {
    name: "Stationery & Lifestyle Gifts",
    tagline: "The paper that wraps the paper — packaging for people who love paper",
    heroImage: "/images/industry_gift_box.jpg",
    color: "from-sky-600 to-indigo-700",
    icon: "✒️",
    whyBUpack: "Stationery brands design and produce notebooks, cards, and gifts independently — then source packaging separately. Your box should feel as good as the journal inside.",
    painPoints: [
      "Flat products (notebooks, cards) slide around in oversized boxes",
      "Gift sets with multiple items look messy without proper organization",
      "Seasonal collections need new packaging on short notice",
      "Customers want packaging they'll reuse — not throw away",
    ],
    solutions: [
      {
        title: "Flat Mailer Boxes",
        desc: "Slim-profile corrugated mailers designed for notebooks, planners, and card sets. No wasted space, no wasted postage.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Journal Gift Set Boxes",
        desc: "Rigid lid-and-base boxes with compartments for journal + pen + accessories. The complete writing experience, beautifully presented.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Reusable Keepsake Boxes",
        desc: "Designed to be kept and reused — magnetic closure, durable construction, beautiful enough to live on a desk or shelf.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Papillon Press",
      stage: "DTC stationery brand (50K+ customers)",
      challenge: "Holiday gift sets shipped in generic boxes with kraft paper stuffing. Unboxing felt chaotic and un-branded.",
      solution: "Custom rigid box with 3 compartments for journal, pen, and washi tape set. Interior printed with brand manifesto. Magnetic closure.",
      result: "Gift set AOV increased 35%. Customer reviews mentioning 'beautiful packaging' went from 8% → 62%. Return rate near zero.",
    },
    recommendedProducts: [
      { name: "Flat Mailer Boxes", href: "/products/paper-boxes" },
      { name: "Rigid Gift Boxes", href: "/products/paper-boxes" },
      { name: "Subscription Boxes", href: "/products/subscription-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "Slim corrugated mailer for flat products. Optimized to minimize dimensional weight charges.", icon: "📦" },
      { type: "Gift Set Box", desc: "Multi-compartment rigid box for journal + accessories. The 'desk-worthy' presentation.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly stationery curation box. Standard size, rotating interior design.", icon: "🔄" },
      { type: "Product Sleeve", desc: "Paperboard wrap or belly band for individual notebooks. Minimal material, maximum brand.", icon: "📋" },
    ],
    seoKeywords: "custom stationery packaging, journal gift box, notebook mailer box, stationery subscription box, eco friendly stationery packaging",
    faqs: [
      { q: "What's the best box style for shipping notebooks?", a: "Slim-profile mailer boxes with a height of 0.75-1.5 inches are ideal. They protect the product while minimizing dimensional weight shipping charges." },
      { q: "Can you do foil stamping on stationery packaging?", a: "Yes — gold, silver, copper, and holographic foil stamping are available. Perfect for premium journal and planner brands." },
      { q: "Do you offer packaging that customers will keep and reuse?", a: "That's our specialty. Our rigid magnetic-closure boxes are designed to be kept — many customers use them as desk organizers, memory boxes, or gift boxes long after purchase." },
      { q: "How fast can I get seasonal packaging for my holiday collection?", a: "Design in 3 days, samples in 5 days, production in 7 days. We recommend reaching out 4-6 weeks before your launch for the smoothest experience." },
    ],
  },
  "tea-beverages": {
    name: "Tea & Specialty Beverages",
    tagline: "The box that opens to reveal a ritual",
    heroImage: "/images/industry_wine.jpg",
    color: "from-emerald-600 to-teal-700",
    icon: "🍵",
    whyBUpack: "Tea brands source leaves independently and buy packaging separately. Your box is the first steep — it sets the tone for the entire experience.",
    painPoints: [
      "Tea tins and sachets need organized, beautiful presentation",
      "Gift sets feel haphazard when items shift during shipping",
      "Monthly tea subscriptions need fresh packaging every month",
      "Airtight and moisture-resistant requirements add complexity",
    ],
    solutions: [
      {
        title: "Drawer-Style Tea Boxes",
        desc: "Slide-out drawer boxes that reveal tea sachets in organized rows. The ritual of opening matches the ritual of brewing.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Multi-Compartment Gift Sets",
        desc: "Rigid boxes with dedicated compartments for 4-6 tea varieties. Each tea gets its own space, plus room for a tasting guide.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Monthly Tea Subscription Boxes",
        desc: "Standardized format with rotating seasonal designs. Each month: 4 new teas, new artwork, same reliable structure.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Leaf & Story",
      stage: "DTC tea subscription (8K+ subscribers)",
      challenge: "Monthly tea boxes arrived with crushed sachets and mixed-up varieties. Subscriber churn was 12% per month.",
      solution: "Custom drawer-style box with 4 divided compartments + printed tasting cards. Each tea variety labeled and separated.",
      result: "Churn dropped from 12% → 4% monthly. Unboxing shares up 6x. Subscriber referrals became the #1 acquisition channel.",
    },
    recommendedProducts: [
      { name: "Drawer-Style Boxes", href: "/products/paper-boxes" },
      { name: "Subscription Boxes", href: "/products/subscription-boxes" },
      { name: "Gift Set Boxes", href: "/products/paper-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "Corrugated outer box protecting the tea packaging inside. Branded exterior for porch appeal.", icon: "📦" },
      { type: "Gift Set Box", desc: "Multi-tea rigid box with tasting guide. The 'tea ceremony' unboxing experience.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly tea discovery box. Standard size, rotating seasonal artwork.", icon: "🔄" },
      { type: "Product Box", desc: "Individual tea sachet box or tin sleeve. Compact, elegant, keeps tea fresh.", icon: "🍵" },
    ],
    seoKeywords: "custom tea packaging boxes, tea gift set box, tea subscription box packaging, drawer style tea box, eco friendly tea packaging",
    faqs: [
      { q: "Can your boxes protect tea from moisture and air?", a: "While paper boxes provide excellent physical protection, we recommend using sealed inner pouches for tea freshness. Our boxes are designed to hold these pouches beautifully and securely." },
      { q: "What's the most popular tea box style?", a: "Drawer-style boxes are our most popular for tea brands. The sliding reveal creates a ritual that tea drinkers love. It also keeps sachets organized and easy to access." },
      { q: "Can you do seasonal designs for my tea subscription box?", a: "Yes! This is one of our most requested services. We keep the same dieline and structure but refresh the artwork each season or month. Setup costs are minimal after the first design." },
      { q: "What's the minimum order for tea subscription boxes?", a: "100 units for the first design. After your dieline is established, you can reorder as few as 50 units with new artwork." },
    ],
  },
  "pet-subscription": {
    name: "Pet Treats & Subscription Boxes",
    tagline: "The box your dog can't wait to open",
    heroImage: "/images/industry_clothing.jpg",
    color: "from-orange-500 to-red-600",
    icon: "🐾",
    whyBUpack: "Pet brands source treats and toys independently from packaging. Your monthly box IS the brand experience — make it tail-waggingly good.",
    painPoints: [
      "Monthly themes need fresh packaging designs every cycle",
      "Dogs can smell through the box — packaging needs to contain strong pet treat odors",
      "Mixed items (toys + treats + accessories) need organized separation",
      "Subscriber fatigue: boxes that look the same every month lose excitement",
    ],
    solutions: [
      {
        title: "Monthly Theme Boxes",
        desc: "Standardized box dimensions with monthly artwork refreshes. Same reliable structure, new exciting design every shipment.",
        image: "/images/product_box_3.jpg",
      },
      {
        title: "Divided Interior Boxes",
        desc: "Built-in paperboard dividers that separate treats, toys, and accessories. Everything arrives organized and Instagram-ready.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Pet-Safe Printed Boxes",
        desc: "Soy-based inks and water-based adhesives — safe even if your dog decides the box is also a toy.",
        image: "/images/product_box_2.jpg",
      },
    ],
    caseStudy: {
      brand: "Wag & Wonder",
      stage: "DTC dog subscription box (15K+ subscribers)",
      challenge: "Monthly boxes used generic brown corrugated. Subscriber unboxing posts were declining. Churn was rising.",
      solution: "Full-color monthly themed rigid boxes with interior dividers + branded tissue. Each month: new artwork, same reliable structure.",
      result: "Instagram unboxing tags up 8x. Subscriber churn dropped 40%. Referral program launched — 25% of new subs come from unboxing posts.",
    },
    recommendedProducts: [
      { name: "Monthly Theme Boxes", href: "/products/subscription-boxes" },
      { name: "Divided Mailer Boxes", href: "/products/paper-boxes" },
      { name: "Custom Inserts", href: "/products/paper-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "Sturdy corrugated mailer that doubles as the subscription box. Ships directly — no outer box needed.", icon: "📦" },
      { type: "Gift Set Box", desc: "Pet birthday or 'gotcha day' gift box. Premium rigid construction for a special occasion.", icon: "🎁" },
      { type: "Subscription Box", desc: "The core product — monthly themed box with dividers. New artwork every month.", icon: "🔄" },
      { type: "Product Box", desc: "Individual treat bag or toy box. Pet-safe inks, fun designs.", icon: "🐾" },
    ],
    seoKeywords: "custom pet subscription box, dog treat packaging box, monthly pet box packaging, pet-safe printed box, eco friendly pet packaging",
    faqs: [
      { q: "Are your inks safe if a dog chews on the box?", a: "Yes. We use soy-based inks and water-based adhesives exclusively. They're non-toxic and pet-safe — though we still recommend supervising your pup's box-chewing adventures." },
      { q: "How do you handle monthly theme changes for subscription boxes?", a: "We keep the dieline and box structure consistent. You provide new artwork each month (or we can design it for you). Setup costs after the first design are minimal — just the printing plate change." },
      { q: "Can the box ship directly without an outer carton?", a: "Yes! Our subscription boxes are designed for direct shipping. We use B-flute corrugated for durability, and the exterior printing is scuff-resistant." },
      { q: "What's the minimum order for monthly themed boxes?", a: "100 units for the initial design. Once your dieline is established, monthly reorders with new artwork start at 50 units." },
      { q: "Can you do double-sided printing — outside theme + inside surprise?", a: "Absolutely. Many pet box brands print the monthly theme on the outside and a fun 'thank woof' message or puzzle on the inside. It's a subscriber favorite." },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = industries[slug as keyof typeof industries]
  if (!industry) return {}

  // SEO-optimized title & description per industry
  const seoTitleMap: Record<string, string> = {
    "candles-fragrance": "Custom Candle Packaging Boxes | Mailer & Gift Sets | Low MOQ | BUpack",
    "jewelry": "Jewelry Packaging Boxes Wholesale | Custom Rigid Boxes with Velvet Insert | BUpack",
    "chocolate-confectionery": "Chocolate Gift Box Packaging | Custom Confectionery Boxes | Food-Safe | BUpack",
    "stationery-gifts": "Stationery & Gift Packaging | Custom Flat Mailers & Gift Sets | BUpack",
    "tea-beverages": "Tea Packaging Boxes | Subscription & Gift Boxes for Tea Brands | BUpack",
    "pet-subscription": "Pet Subscription Box Packaging | Custom Monthly Boxes for Pet Brands | BUpack",
  }

  const seoDescMap: Record<string, string> = {
    "candles-fragrance": "Custom candle packaging boxes for DTC candle and home fragrance brands. Mailer boxes with glass jar inserts, holiday gift sets, and subscription boxes. FSC-certified, low MOQ from 100 units.",
    "jewelry": "Custom jewelry packaging boxes with velvet inserts and magnetic closures. Rigid gift boxes for rings, necklaces, and earrings. Low MOQ from 100 units, factory-direct pricing. Free samples available.",
    "chocolate-confectionery": "FDA-compliant custom chocolate gift box packaging for artisan confectionery brands. Window boxes, rigid gift sets with truffle inserts, and holiday quick-turn options. MOQ from 100 units.",
    "stationery-gifts": "Custom stationery and gift packaging — flat mailer boxes for notebooks, rigid gift set boxes for journal collections, and reusable keepsake boxes. Low MOQ, eco-friendly materials.",
    "tea-beverages": "Custom tea packaging boxes — drawer-style tea boxes, multi-compartment gift sets, and monthly subscription boxes for tea brands. FSC-certified, fast turnaround, MOQ from 100 units.",
    "pet-subscription": "Custom pet subscription box packaging with monthly theme rotation. Divided interior boxes for treats, toys, and accessories. Pet-safe soy inks, durable corrugated construction. MOQ from 100 units.",
  }

  return {
    title: seoTitleMap[slug] || `${industry.name} Packaging | Custom Boxes for ${industry.name} Brands | BUpack`,
    description: seoDescMap[slug] || `${industry.tagline}. Eco-friendly custom ${industry.name.toLowerCase()} packaging for DTC and eCommerce brands. Low MOQ, fast turnaround, factory-direct pricing. Get free samples.`,
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
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Industries", url: "https://www.bupackeco.com/industries" },
          { name: industry.name, url: `https://www.bupackeco.com/industries/${slug}` },
        ]}
      />
      <FAQSchema
        items={industry.faqs.map((f) => ({
          question: f.q,
          answer: f.a,
        }))}
      />

      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${industry.color} text-white py-24 pt-32`}>
        <div className="absolute inset-0 opacity-15">
          <Image src={industry.heroImage} alt={industry.name} fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Link href="/" className="text-white/70 hover:text-white text-sm mb-4 inline-block transition-colors">← Back to Home</Link>
          <div className="text-5xl mb-4">{industry.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{industry.name}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">{industry.tagline}</p>
        </div>
      </section>

      {/* Why BUpack for This Industry */}
      <section className="py-16 bg-green-50 border-b border-green-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Why {industry.name} Brands Choose BUpack</h2>
              <p className="text-gray-700 leading-relaxed">{industry.whyBUpack}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">The Challenges You&apos;re Facing</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We&apos;ve heard these from hundreds of {industry.name.toLowerCase()} brand founders — and solved every one.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-5 hover:bg-red-100/70 transition-colors">
                <span className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">✗</span>
                <p className="text-gray-800 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
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

      {/* Packaging Types */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">4 Packaging Types for {industry.name}</h2>
          <p className="text-center text-gray-600 mb-12">From shipping to gifting — we cover every touchpoint in your customer journey.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {industry.packagingTypes.map((pt, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-green-200 transition-colors">
                <div className="text-3xl flex-shrink-0">{pt.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{pt.type}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{pt.desc}</p>
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
          <h2 className="text-3xl font-bold mb-2">{industry.caseStudy.brand}</h2>
          <p className="text-green-300 mb-8">{industry.caseStudy.stage}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-green-300 text-sm font-medium mb-2">The Challenge</div>
              <p className="text-white/90 text-sm leading-relaxed">{industry.caseStudy.challenge}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-green-300 text-sm font-medium mb-2">Our Solution</div>
              <p className="text-white/90 text-sm leading-relaxed">{industry.caseStudy.solution}</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
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
              <Link key={i} href={prod.href} className="block bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl p-6 transition group">
                <div className="text-lg font-semibold text-gray-900 group-hover:text-green-700">{prod.name}</div>
                <div className="text-sm text-green-600 mt-2">View Details →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {industry.faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to upgrade your {industry.name.toLowerCase()} packaging?</h2>
          <p className="text-gray-600 mb-8">Get free samples and a custom quote in 24 hours. No commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition">Get Free Samples</Link>
            <Link href="/products" className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition">View All Products</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
