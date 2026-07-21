import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema"

interface IndustryPageProps {
  params: Promise<{ slug: string }>
}

interface IndustryData {
  name: string
  tagline: string
  identitySlogan: string
  heroImage: string
  color: string
  icon: string
  whyBUpack: string
  painPoints: string[]
  solutions: { title: string; desc: string; image: string }[]
  caseStudy: { brand: string; stage: string; challenge: string; solution: string; result: string }
  recommendedProducts: { name: string; href: string }[]
  packagingTypes: { type: string; desc: string; icon: string }[]
  seoKeywords: string
  faqs: { q: string; a: string }[]
}

const industries: Record<string, IndustryData> = {
  "candles-fragrance": {
    name: "Candles & Home Fragrance",
    tagline: "Your candle deserves a box as beautiful as its scent",
    identitySlogan: "From glow to art, packaging completes",
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
    identitySlogan: "Jewelry reveals self, box begins story",
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
    identitySlogan: "From sweetness to indulgence, packaging elevates",
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
    identitySlogan: "From craft to legacy, packaging preserves",
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
    identitySlogan: "From leaf to ritual, packaging transforms",
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
    identitySlogan: "From treat to bond, packaging delivers",
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
  "cosmetics-beauty": {
    name: "Cosmetics & Beauty",
    tagline: "Your product deserves packaging as beautiful as the formula inside",
    identitySlogan: "From fragrance to identity, one box bridges",
    heroImage: "/images/industry_cosmetics.jpg",
    color: "from-pink-500 to-rose-600",
    icon: "💄",
    whyBUpack: "Beauty brands invest months perfecting formulas, then scramble for packaging that matches their quality. Our 100-unit MOQ and 15-day turnaround means indie beauty brands get the same premium packaging as the big players — without the big-player order commitments.",
    painPoints: [
      "Glass serum bottles and cream jars arrive cracked — each broken unit is lost revenue and a disappointed customer",
      "Your gorgeous packaging design looks cheap in mass-produced boxes that don't reflect your brand's premium positioning",
      "Gift sets with multiple SKUs look chaotic — serums, moisturizers, and masks all jumbled together",
      "Most suppliers require 1,000+ unit minimums — impossible for an indie beauty brand launching a new shade or limited edition",
    ],
    solutions: [
      {
        title: "Custom Skincare Mailer Boxes",
        desc: "Corrugated mailers with precision-cut inserts that cradle glass bottles and jars. Drop-tested for safe shipping. Interior printing for the unboxing moment.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Luxury Beauty Gift Sets",
        desc: "Rigid lid-and-base boxes with custom EVA foam or velvet-lined compartments. Each product has its designated spot — the department-store experience, delivered.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Monthly Beauty Subscription Boxes",
        desc: "Standardized structures with rotating seasonal artwork. Same reliable box, fresh design every month — subscribers can't wait to unbox.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Glow Rituals",
      stage: "DTC skincare brand ($3.2M ARR)",
      challenge: "Holiday gift sets shipped in plain white boxes with bubble wrap. Zero Instagram unboxing content despite 80K followers. Gift set returns at 8%.",
      solution: "Custom rigid magnetic-closure box with rose gold foil stamping, 4-compartment EVA insert for serum + cream + mask + eye patches. Interior printed with brand story.",
      result: "Unboxing posts went from 0 to 520+ during holiday season. Gift set AOV increased 55%. Return rate dropped from 8% → 0.3%. Gift sets became their #1 revenue channel.",
    },
    recommendedProducts: [
      { name: "Mailer Boxes with Inserts", href: "/products/paper-boxes" },
      { name: "Rigid Gift Boxes", href: "/products/rigid-gift-boxes" },
      { name: "Folding Cartons", href: "/products/folding-cartons" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "E-flute corrugated with custom bottle inserts. Protects glass skincare containers through FedEx and USPS.", icon: "📦" },
      { type: "Gift Set Box", desc: "Rigid lid-and-base with multi-product compartments. The 'retail counter' experience at home.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly beauty discovery box with rotating designs. Same structure, fresh artwork each cycle.", icon: "🔄" },
      { type: "Product Carton", desc: "Folding carton or sleeve for individual skincare items. Brand story and ingredients printed inside.", icon: "💄" },
    ],
    seoKeywords: "custom cosmetic packaging boxes, skincare product packaging custom, custom beauty box packaging, custom makeup packaging boxes, eco friendly cosmetics packaging, luxury beauty packaging wholesale",
    faqs: [
      { q: "What's the minimum order for custom cosmetic packaging boxes?", a: "We start at just 100 units — perfect for indie beauty brands launching new products or limited edition shades without overcommitting on inventory." },
      { q: "Can you protect glass skincare bottles during shipping?", a: "Absolutely. We design custom paperboard or EVA foam inserts that cradle each bottle precisely. Every design is drop-tested to ensure your products arrive intact." },
      { q: "Do you offer foil stamping for luxury beauty packaging?", a: "Yes — gold, silver, rose gold, copper, and holographic foil stamping are all available. We also offer soft-touch lamination for that ultra-premium feel beauty brands love." },
      { q: "Are your materials safe for cosmetic product packaging?", a: "Yes. We use FSC-certified paper, soy-based inks, and water-based adhesives. All materials comply with FDA requirements for indirect food contact, making them safe for cosmetic packaging." },
      { q: "How fast can I get beauty gift set boxes for a holiday launch?", a: "3 days for design, 5 days for sampling, 7 days for production — 15 days total from concept to delivery. We recommend reaching out 4-6 weeks before peak season for the best pricing." },
    ],
  },
  "wine-spirits": {
    name: "Wine & Spirits",
    tagline: "The box that makes your bottle a gift before it's even opened",
    identitySlogan: "From vintage to taste, packaging bears witness",
    heroImage: "/images/industry_wine.jpg",
    color: "from-red-800 to-burgundy-900",
    icon: "🍷",
    whyBUpack: "Wineries and craft spirit brands bottle their own products but source packaging independently. Your box is the gift presentation, the brand ambassador, and the protection — all in one.",
    painPoints: [
      "Wine bottles arrive broken — one shattered bottle ruins the entire gift experience and guarantee",
      "Generic kraft wine boxes make your premium bottle look like a supermarket special",
      "Gift sets with wine + glasses + accessories are chaotic without proper compartment design",
      "Seasonal and limited-release bottles need new packaging on short turnaround",
    ],
    solutions: [
      {
        title: "Protective Wine Bottle Boxes",
        desc: "Corrugated mailers with molded pulp or custom paperboard inserts that secure bottles upright. Drop-tested for safe shipping across all carriers.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Premium Gift Set Boxes",
        desc: "Rigid lid-and-base boxes with divided compartments for wine + glasses + accessories. The presentation that makes your bottle gift-worthy.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Club & Subscription Shipments",
        desc: "Standardized wine club boxes with seasonal design refreshes. Same reliable protection, new artwork every quarter.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Hillside Vine Co.",
      stage: "DTC winery (12K wine club members)",
      challenge: "Wine club shipments used plain styrofoam shippers. Zero Instagram content. 4% bottle breakage rate. Members complained the unboxing felt cheap.",
      solution: "Custom corrugated wine shipper with branded exterior, molded pulp insert for 2 or 4 bottles, and printed tasting notes insert. Quarterly design rotation.",
      result: "Breakage dropped from 4% → 0.1%. Instagram unboxing tags up 12x. Wine club retention improved 28%. Tasting note insert became a collector's item.",
    },
    recommendedProducts: [
      { name: "Wine Bottle Mailers", href: "/products/paper-boxes" },
      { name: "Rigid Gift Boxes", href: "/products/rigid-gift-boxes" },
      { name: "Subscription Boxes", href: "/products/subscription-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "Corrugated shipper with molded pulp insert. Protects bottles through cross-country shipping.", icon: "📦" },
      { type: "Gift Set Box", desc: "Rigid box with wine + glasses compartments. The 'winery tasting room' gift experience.", icon: "🎁" },
      { type: "Subscription Box", desc: "Wine club quarterly shipment box. Rotating seasonal artwork, consistent protection.", icon: "🔄" },
      { type: "Product Sleeve", desc: "Paperboard sleeve or wrap for individual bottles. Branding upgrade for retail shelves.", icon: "🍷" },
    ],
    seoKeywords: "custom wine packaging boxes, wine gift box with insert, wine club shipping box, spirit bottle packaging custom, eco friendly wine packaging, custom liquor gift boxes",
    faqs: [
      { q: "Can you protect wine bottles during shipping?", a: "Yes. We use custom molded pulp or precision-cut paperboard inserts that hold bottles securely upright. All designs are drop-tested to survive standard carrier handling." },
      { q: "What's the minimum order for custom wine boxes?", a: "100 units for standard designs. Perfect for small wineries or limited-release bottles. Volume pricing available for 500+ units." },
      { q: "Can you handle quarterly design changes for wine club shipments?", a: "Absolutely. We keep the structural dieline consistent and refresh the artwork each quarter. Setup costs after the first design are minimal." },
      { q: "Do you offer wine gift sets with glasses and accessories?", a: "Yes. We design multi-compartment rigid boxes that hold wine, glasses, corkscrews, and tasting cards — each item in its own place." },
      { q: "Are your materials safe for direct bottle contact?", a: "Yes. We use FSC-certified paper and soy-based inks. All materials are tested for indirect food contact safety, making them safe for wine and spirit bottles." },
    ],
  },
  "apparel-fashion": {
    name: "Apparel & Fashion",
    tagline: "The unboxing that makes your customer feel like they're opening a gift",
    identitySlogan: "From fabric to statement, packaging defines",
    heroImage: "/images/industry_clothing.jpg",
    color: "from-slate-700 to-gray-900",
    icon: "👗",
    whyBUpack: "Fashion brands design their garments but source packaging separately. Your shipping box is the first physical touchpoint with your customer — make it as intentional as your clothing design.",
    painPoints: [
      "Garments arrive wrinkled and crammed into undersized poly mailers — not the luxury experience your brand promises",
      "Subscription boxes look the same every month, killing the excitement that drives retention",
      "No branded tissue, no custom insert, no 'thank you' card — just a plastic bag with clothes inside",
      "Seasonal launches need new packaging designs on impossibly tight timelines",
    ],
    solutions: [
      {
        title: "Branded Apparel Mailer Boxes",
        desc: "Right-sized corrugated mailers that keep garments flat and presentation-ready. Interior printing turns every delivery into a branded experience.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Fashion Gift & Styling Boxes",
        desc: "Rigid boxes with tissue, custom inserts, and styling cards. The 'personal stylist' unboxing experience that drives social shares.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Monthly Style Subscription Boxes",
        desc: "Standardized structures with monthly artwork refreshes. Each box feels like a curated surprise — subscribers count down the days.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Thread & Theory",
      stage: "DTC women's fashion brand ($5M ARR)",
      challenge: "Garments shipped in poly mailers. Zero unboxing content. High return rate (22%) partly driven by 'cheap' first impression undermining perceived value.",
      solution: "Custom corrugated mailer with interior brand manifesto printing, tissue paper, and a personalized styling card. Rigid gift box option for orders over $150.",
      result: "Unboxing Instagram tags up 15x. Return rate dropped from 22% → 14%. AOV increased 30% (customers upgraded to qualify for the premium box). Repeat purchase rate up 35%.",
    },
    recommendedProducts: [
      { name: "Apparel Mailer Boxes", href: "/products/paper-boxes" },
      { name: "Rigid Gift Boxes", href: "/products/rigid-gift-boxes" },
      { name: "Custom Paper Bags", href: "/products/paper-bags" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "Corrugated mailer sized for flat-folded garments. Interior printing for the branded unboxing.", icon: "📦" },
      { type: "Gift Set Box", desc: "Rigid box for curated outfit or capsule collection. Styling card included.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly style box with rotating design. The 'curated surprise' subscribers love.", icon: "🔄" },
      { type: "Retail Bag", desc: "Custom branded paper bag for in-store or pop-up events. Matches your box design.", icon: "👗" },
    ],
    seoKeywords: "custom apparel packaging boxes, clothing subscription box packaging, fashion mailer boxes custom, branded garment packaging, eco friendly fashion packaging, custom retail clothing boxes",
    faqs: [
      { q: "What's the best box style for shipping apparel?", a: "For most garments, a corrugated mailer box that keeps items flat and wrinkle-free is ideal. We size each box to your specific garment dimensions to minimize shipping costs." },
      { q: "Can you include branded tissue and inserts?", a: "Yes. We offer custom tissue paper, branded stickers, thank-you cards, and styling inserts as add-ons. Everything coordinates for a cohesive brand experience." },
      { q: "What's the minimum order for custom apparel boxes?", a: "100 units for standard designs. This lets fashion brands test new packaging without committing to large inventory. Volume pricing kicks in at 500+ units." },
      { q: "How do you handle seasonal packaging changes for fashion brands?", a: "We keep the box structure consistent and refresh the design each season. Setup costs for new artwork are minimal after the initial dieline is established." },
      { q: "Can you do both boxes and matching paper bags?", a: "Absolutely. We design coordinated box + bag sets so your packaging looks consistent across online orders and in-store or pop-up purchases." },
    ],
  },
  "bakery-food": {
    name: "Bakery & Food",
    tagline: "Packaging that keeps your baked goods as fresh as your brand",
    identitySlogan: "From recipe to ritual, packaging presents",
    heroImage: "/images/industry_food_box.jpg",
    color: "from-yellow-500 to-amber-600",
    icon: "🥐",
    whyBUpack: "Bakery brands craft their products fresh daily and need packaging that keeps up. Our FDA-compliant materials, food-safe inks, and fast turnaround mean your cookies, pastries, and macarons arrive looking as good as they taste.",
    painPoints: [
      "Baked goods arrive crushed, stale, or misshapen — your beautiful croissants become crumbly disappointments",
      "FDA compliance keeps you up at night — are your inks, coatings, and adhesives truly food-safe?",
      "Seasonal products demand rapid packaging switches — Valentine's, Easter, Christmas all need different designs on tight timelines",
      "Small-batch artisan bakers can't meet the 5,000+ unit minimums most packaging suppliers require",
    ],
    solutions: [
      {
        title: "Food-Safe Mailer Boxes",
        desc: "FDA 21 CFR compliant corrugated mailers with food-safe inks and water-based adhesives. Custom inserts cradle cookies, macarons, and pastries for safe shipping.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Windowed Presentation Boxes",
        desc: "PET or PLA window boxes that showcase your baked goods' craftsmanship while keeping them fresh. Customers see the beauty before they even open the box.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Holiday Gift Boxes",
        desc: "Pre-engineered seasonal dielines for Valentine's, Easter, Mother's Day, and Christmas. Quick-turn production so you never miss a holiday rush.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Golden Crumb Bakery",
      stage: "DTC artisan bakery ($800K ARR)",
      challenge: "Online cookie orders arrived broken and stale in generic boxes. Zero repeat customers from online channel. Holiday gift sets looked no different from everyday packaging.",
      solution: "Custom corrugated mailer with precision-cut paperboard insert holding 12 cookies in individual slots. Windowed gift box with gold foil logo and satin ribbon for holiday sets.",
      result: "Breakage rate dropped from 18% → 1%. Online repeat purchase rate jumped from 8% → 34%. Holiday gift set revenue grew 120% YoY.",
    },
    recommendedProducts: [
      { name: "Food-Safe Mailer Boxes", href: "/products/paper-boxes" },
      { name: "Windowed Presentation Boxes", href: "/products/paper-boxes" },
      { name: "Holiday Gift Boxes", href: "/products/rigid-gift-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "FDA-compliant corrugated mailer with custom inserts for cookies and pastries. Food-safe materials throughout.", icon: "📦" },
      { type: "Gift Set Box", desc: "Rigid windowed box with individual pastry slots. The 'bakery showcase' experience delivered to the door.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly bakery discovery box with seasonal designs. Fresh artwork, same reliable structure.", icon: "🔄" },
      { type: "Product Box", desc: "Folding carton or windowed sleeve for individual items. Brand story and ingredient list printed inside.", icon: "🥐" },
    ],
    seoKeywords: "custom bakery packaging boxes, custom food packaging boxes, bakery gift box wholesale, eco friendly food packaging, FDA compliant bakery boxes, artisan pastry packaging",
    faqs: [
      { q: "Are your bakery packaging materials FDA-compliant?", a: "Yes. All our food-contact packaging uses FDA 21 CFR compliant inks, water-based adhesives, and FSC-certified paperboard. We provide compliance documentation upon request." },
      { q: "Can you make window boxes so customers can see the baked goods?", a: "Absolutely. We offer PET (clear) and PLA (compostable) window options in any die-cut shape. Windows let your product sell itself before the box is even opened." },
      { q: "What's the minimum order for custom bakery boxes?", a: "We start at just 100 units — perfect for artisan bakeries testing new products or seasonal designs. No need to commit to thousands of boxes upfront." },
      { q: "How fast can I get holiday-themed packaging for my bakery?", a: "3 days for design, 5 days for sampling, 7 days for production. We recommend ordering 4-6 weeks before peak season for best pricing, but we can rush orders when needed." },
      { q: "Can you design inserts for different pastry shapes and sizes?", a: "Yes. We create precision-cut paperboard or EVA foam inserts for cookies, macarons, croissants, cupcakes, and any other shape. Each item gets its own protective slot." },
    ],
  },
  // ── NEW: Target Industries (v3.0) ──────────────────────────────
  "beauty-skincare": {
    name: "Beauty & Skincare",
    tagline: "Your formula deserves packaging that matches its quality — from first impression to unboxing ritual",
    identitySlogan: "From glow to art, packaging completes",
    heroImage: "/images/industry_cosmetics.jpg",
    color: "from-pink-500 to-rose-700",
    icon: "✨",
    whyBUpack: "Indie beauty and skincare brands invest months perfecting formulas, then settle for generic packaging that undermines their premium positioning. Our 100-unit MOQ and FDA-compliant materials mean you get luxury presentation without luxury order commitments.",
    painPoints: [
      "Glass serum bottles and cream jars arrive cracked — each broken unit is lost revenue AND a disappointed customer who tells their friends",
      "Your gorgeous product looks cheap in mass-produced boxes that don't reflect your brand's clean-beauty or clinical-luxury positioning",
      "Gift sets with multiple SKUs (serum + cream + mask + oil) look chaotic when jumbled together in oversized boxes",
      "Most suppliers require 1,000+ unit minimums — impossible for an indie brand testing a new shade or limited-edition launch",
      "FDA compliance questions keep you up at night — are your inks, coatings, and adhesives safe for cosmetic contact?",
    ],
    solutions: [
      {
        title: "Skincare Mailer Boxes with Bottle Inserts",
        desc: "E-flute corrugated mailers with precision-cut paperboard or EVA foam inserts that cradle each bottle perfectly. Drop-tested for FedEx, USPS, DHL. Interior printing for the unboxing moment.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Luxury Beauty Gift Sets",
        desc: "Rigid lid-and-base boxes with custom compartments for multi-SKU sets (serum + moisturizer + eye patches + face oil). Soft-touch lamination, gold/rose-gold foil stamping. The department-store experience at home.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Monthly Beauty Discovery Boxes",
        desc: "Standardized structures with rotating seasonal artwork. Same reliable box, fresh design every month — subscribers can't wait to see this quarter's palette.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Glow Rituals",
      stage: "DTC skincare brand ($3.2M ARR)",
      challenge: "Holiday gift sets shipped in plain white boxes with bubble wrap. Zero Instagram unboxing content despite 80K followers. Gift set returns at 8% from 'cheap first impression.'",
      solution: "Custom rigid magnetic-closure box with rose gold foil stamping, 4-compartment EVA insert for serum + cream + mask + eye patches. Interior printed with ingredient story and usage guide.",
      result: "Unboxing posts went from 0 to 520+ during holiday season. Gift set AOV increased 55%. Return rate dropped from 8% → 0.3%. Gift sets became #1 revenue channel Q4-Q1.",
    },
    recommendedProducts: [
      { name: "Mailer Boxes with Inserts", href: "/products/paper-boxes" },
      { name: "Rigid Gift Boxes", href: "/products/rigid-gift-boxes" },
      { name: "Folding Cartons", href: "/products/folding-cartons" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "E-flute corrugated with custom bottle inserts. Protects glass skincare containers through all carriers.", icon: "📦" },
      { type: "Gift Set Box", desc: "Rigid lid-and-base with multi-product compartments. The 'retail counter' experience delivered home.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly beauty discovery box with rotating designs. Same structure, fresh artwork each cycle.", icon: "🔄" },
      { type: "Product Carton", desc: "Folding carton or sleeve for individual items. Ingredient story and how-to-use inside.", icon: "✨" },
    ],
    seoKeywords: "beauty packaging low moq, skincare brand custom boxes, custom cosmetic packaging boxes, eco friendly beauty packaging, FDA compliant beauty boxes wholesale, indie beauty packaging supplier",
    faqs: [
      { q: "What's the minimum order for beauty and skincare packaging?", a: "We start at just 100 units — perfect for indie beauty brands launching a new product line, limited edition shade, or seasonal collection without overcommitting on inventory." },
      { q: "Are your materials FDA-compliant for cosmetic product contact?", a: "Yes. All our cosmetic-contact packaging uses FSC-certified paper, soy-based inks, and water-based adhesives compliant with FDA 21 CFR requirements for indirect food/cosmetic contact." },
      { q: "Can you protect glass skincare bottles during shipping?", a: "Absolutely. We design custom paperboard or EVA foam inserts that cradle each bottle precisely by diameter and height. Every design is drop-tested to ensure your products survive cross-country shipping intact." },
      { q: "Do you offer foil stamping and soft-touch lamination for luxury beauty packaging?", a: "Yes — gold, silver, rose gold, copper, and holographic foil stamping are available. Soft-touch lamination, spot UV, and embossing too. Everything that makes your box feel as premium as your $85 serum." },
      { q: "How fast can I get beauty gift set boxes for a holiday launch?", a: "3 days for design finalization, 5 days for sampling, 7 days for production delivery — 15 days total from concept to door. We recommend reaching out 6 weeks before peak season for best pricing." },
    ],
  },
  "fragrance-candles": {
    name: "Fragrance & Candles",
    tagline: "Your candle deserves a box as beautiful as its scent — and your fragrance deserves packaging that sells the dream",
    identitySlogan: "From glow to art, packaging completes",
    heroImage: "/images/industry_cosmetics.jpg",
    color: "from-amber-500 to-orange-600",
    icon: "🕯️",
    whyBUpack: "Candle brands pour their own wax and source packaging separately. Home fragrance brands design bottles independently. Our 3-day design + 5-day sampling + 7-day production means your seasonal launches never miss the window — whether it's a soy candle or a $200 room diffuser.",
    painPoints: [
      "Glass jars arrive shattered — your beautiful candle becomes a refund request and a negative review",
      "Holiday launch packaging takes 8-12 weeks from traditional suppliers — you miss the entire selling season",
      "Your gift sets feel generic — no brand personality in the unboxing, zero Instagram-worthy moments",
      "Monthly subscription boxes look the same every month, killing subscriber excitement and increasing churn",
      "Premium fragrance bottles (diffusers, perfume) need presentation-level packaging, not just shipping protection",
    ],
    solutions: [
      {
        title: "Custom Candle Mailer Boxes with Inserts",
        desc: "E-flute corrugated mailers with precision-cut inserts that cradle glass jars of any size. Drop-tested to survive FedEx, USPS, and DHL. Interior branding for unboxing.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Luxury Fragrance Gift Sets",
        desc: "Rigid lid-and-base boxes with EVA foam or velvet-lined compartments for candles + diffusers + accessories. Gold foil, satin ribbon, magnetic closure. The giftable unboxing.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Monthly Subscription Boxes",
        desc: "Standardized sizes with monthly design refreshes. Same dieline, new artwork every month — subscribers can't wait to see what's next. Perfect for candle-of-the-month clubs.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Botanical Flame Co.",
      stage: "DTC candle & home fragrance brand ($2M ARR)",
      challenge: "Holiday gift sets were shipping in plain brown boxes. Zero Instagram unboxing posts despite 50K followers. Diffuser launches had no premium packaging option — they looked the same as $12 candles.",
      solution: "Custom rigid lid-and-base box with gold foil stamping, EVA insert for 3-candle sets, and separate luxury SKU for diffuser gift sets with magnetic closure and interior scent-story card.",
      result: "Unboxing posts jumped from 0 to 340+ in Q4. Gift set AOV increased 42%. Return rate dropped from 6% → 0.8%. Diffuser gift set became Q1 bestseller at $89/unit.",
    },
    recommendedProducts: [
      { name: "Mailer Boxes with Inserts", href: "/products/paper-boxes" },
      { name: "Rigid Gift Boxes", href: "/products/paper-boxes" },
      { name: "Subscription Boxes", href: "/products/subscription-boxes" },
    ],
    packagingTypes: [
      { type: "Candle Shipper", desc: "E-flute corrugated with custom-fit jar inserts. Survives cross-country shipping. Interior print for unboxing moment.", icon: "📦" },
      { type: "Gift Set Box", desc: "Rigid lid-and-base with multi-candle/diffuser inserts. The 'giftable' unboxing that drives social shares.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly theme rotation on standardized dieline. Fresh design, same structure. Candle-of-the-month club ready.", icon: "🔄" },
      { type: "Fragrance Sleeve", desc: "Paperboard wrap-around sleeve for single candles or diffusers. Premium branding without bulk.", icon: "🕯️" },
    ],
    seoKeywords: "custom candle packaging boxes, candle mailer box with insert, candle gift set packaging, candle subscription box, fragrance box manufacturer, luxury candle packaging that customers instagram",
    faqs: [
      { q: "What's the minimum order for candle mailer boxes?", a: "We start at just 100 units — perfect for testing a new scent line or seasonal design before committing to volume. Reorders can go as low as 50 units." },
      { q: "How do you protect glass candle jars during shipping?", a: "We use E-flute corrugated with precision-cut paperboard or EVA foam inserts sized to your exact jar dimensions. Every design is drop-tested before production to ensure jars arrive intact." },
      { q: "Can you match my candle brand's specific color palette?", a: "Absolutely. We use Pantone color matching and digital proofing. You'll see and approve a physical sample before production. Soy-based inks for clean, eco-friendly color reproduction." },
      { q: "How fast can I get a new candle gift set box designed and delivered?", a: "3 days for design finalization, 5 days for sampling, and 7 days for production delivery — that's 15 days from concept to your door for orders under 10,000 units." },
      { q: "Can you do packaging for home fragrance beyond candles — diffusers, room sprays?", a: "Yes! We design for the full home fragrance category: reed diffuser boxes, room spray cartons, car fragrance packaging, and electric melt warmer boxes. Each gets the same premium treatment as our candle packaging." },
    ],
  },
  "corporate-gifts-subscription": {
    name: "Corporate Gifts & Subscription Boxes",
    tagline: "From employee welcome kits to monthly subscriber experiences — packaging that makes every unboxing memorable",
    identitySlogan: "Every box is a touchpoint that builds loyalty",
    heroImage: "/images/industry_gift_box.jpg",
    color: "from-blue-600 to-indigo-800",
    icon: "🎁",
    whyBUpack: "Corporate gift programs and subscription box businesses live or die by unboxing experience. Your box IS the product for subscription brands, and it's the first touchpoint for corporate gifting. We've shipped 10M+ boxes and know what makes recipients say 'wow.'",
    painPoints: [
      "Subscriber churn because every month's box feels the same — no excitement, no shareability",
      "Corporate gifts arrive damaged or looking cheap — undermining your brand's relationship with clients and employees",
      "High per-unit costs from premium suppliers make subscription economics impossible at scale",
      "Long lead times mean you can't react to trends or customize for key client gifts",
      "No way to personalize at scale — every recipient gets the same generic box",
    ],
    solutions: [
      {
        title: "Monthly Subscription Boxes",
        desc: "Standardized dieline with unlimited artwork variations. Same structure, new surprise every month. Designed for high-volume, low-cost-per-unit economics at scale.",
        image: "/images/product_box_3.jpg",
      },
      {
        title: "Corporate Welcome & Appreciation Kits",
        desc: "Branded rigid boxes for employee onboarding, client appreciation, or event swag. Custom compartments for branded items + welcome letter + company swag.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Holiday & Event Gift Sets",
        desc: "Pre-engineered seasonal designs with quick-turn capability. From 100-unit executive gifts to 10,000-unit company-wide distributions. Consistent quality at any volume.",
        image: "/images/product_box_2.jpg",
      },
    ],
    caseStudy: {
      brand: "Thread & Thread Subscription Co.",
      stage: "DTC lifestyle subscription box (25K+ subscribers)",
      challenge: "Churn was at 14%/month — subscribers said 'the boxes all look the same.' Unboxing content on social media was declining. Competitor boxes felt more 'curated' and premium.",
      solution: "Redesigned box structure with magnetic closure, custom tissue pattern rotated quarterly, and interior panel with curated note explaining the theme. Per-unit cost reduced 18% through structural optimization while upgrading perceived value.",
      result: "Churn dropped from 14% → 7.8% monthly. Instagram unboxing tags increased 4x. Net Promoter Score improved from 32 → 61. Subscriber LTV increased 40%.",
    },
    recommendedProducts: [
      { name: "Subscription Boxes", href: "/products/subscription-boxes" },
      { name: "Rigid Gift Boxes", href: "/products/rigid-gift-boxes" },
      { name: "Mailer Boxes", href: "/products/paper-boxes" },
    ],
    packagingTypes: [
      { type: "Subscription Box", desc: "High-volume optimized rigid or corrugated box. Rotating artwork, fixed structure. Built for scale.", icon: "📦" },
      { type: "Corporate Kit", desc: "Rigid box with multi-compartment insert for curated items. Employee/client-ready presentation.", icon: "🎁" },
      { type: "Mail Pack", desc: "Flat corrugated or rigid mailer for document + small gift combinations. Cost-effective direct mail.", icon: "✉️" },
      { type: "Event Swag", desc: "Portable rigid or folding box for conference giveaways. Branded, memorable, keepsake-worthy.", icon: "🏆" },
    ],
    seoKeywords: "corporate gift box packaging, subscription box manufacturer, custom subscription boxes from 100 units, employee welcome kit boxes, monthly subscription box packaging supplier, custom boxes low MOQ",
    faqs: [
      { q: "What's the minimum order for custom subscription boxes?", a: "Just 100 units for your initial design. Once the dieline is established, monthly reorders with new artwork start at just 50 units. Perfect for testing concepts before scaling." },
      { q: "Can you handle different artwork each month without setup fees?", a: "After your initial design is finalized, artwork changes have minimal setup costs — typically just printing plate changes. Many subscription brands rotate 12 unique designs yearly with negligible per-design overhead." },
      { q: "What's the typical lead time for corporate gift orders?", a: "For standard designs: 5 business days after approval. For fully custom corporate gifts with logo, insert, and special finishes: 10-15 business days. Rush orders available for urgent executive gifting needs." },
      { q: "Can you include personalized elements like recipient names or messages?", a: "Yes. We support variable data printing for personalized thank-you cards, nameplates, and message inserts. Digital printing allows unique personalization on every box at scale — perfect for employee recognition programs." },
      { q: "How do your prices compare at 1,000 vs 10,000 units?", a: "At 1,000 units, expect $1.80-$3.50/unit depending on size and finishes. At 10,000+ units, pricing typically drops 30-45% due to material and setup efficiency gains. Volume tiers are clearly quoted upfront so you can model your unit economics accurately." },
    ],
  },
  "stationery-toys": {
    name: "Stationery & Designer Toys",
    tagline: "The paper that wraps the paper — and the collector's grade box that completes the limited edition",
    identitySlogan: "From craft to legacy, packaging preserves",
    heroImage: "/images/industry_gift_box.jpg",
    color: "from-sky-600 to-violet-700",
    icon: "✒️",
    whyBUpack: "Stationery brands design notebooks, pens, and journals separately from packaging. Designer toy creators craft collectible figures that demand museum-grade presentation. Your box is either kept forever on a desk or thrown away immediately — we make sure it's the former.",
    painPoints: [
      "Flat products (notebooks, cards, prints) slide around in oversized boxes — wasted space = wasted postage",
      "Designer toy collectors judge authenticity BY the packaging — a generic box devalues a $200 limited edition",
      "Gift sets with multiple items (journal + pen + washi tape + stickers) look messy without proper organization",
      "Seasonal collections and limited editions need new packaging on short notice — traditional suppliers take months",
      "Customers want packaging they'll reuse as desk organizers or display cases — not throw away",
    ],
    solutions: [
      {
        title: "Slim Flat Mailer Boxes",
        desc: "Purpose-built slim-profile corrugated mailers for notebooks, planners, card decks, and art prints. No wasted space, no dimensional weight penalty. Optimized for flat products.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Collector-Grade Toy Packaging",
        desc: "Rigid boxes with premium finishes designed for shelf display and collector preservation. Numbered edition printing, holographic seals, magnetic closure. Museum-quality presentation.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Journal & Creative Gift Set Boxes",
        desc: "Rigid lid-and-base with compartments for journal + pen + accessories + washi tape set. Interior printed with creative prompts or brand manifesto. Magnetic closure keepsake design.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Papillon Press x Inkling Toys",
      stage: "DTC stationery brand + designer toy collab (50K+ stationery customers)",
      challenge: "Holiday collaboration gift set shipped in generic boxes with kraft stuffing. Stationery fans were disappointed; toy collectors refused to display the packaging. Two audiences, one missed opportunity.",
      solution: "Custom rigid collector's box with dual-interior design: one side featured journal + pen + tape set, reverse side showcased limited-edition figurine with numbered certificate. Holographic seal, embossed collaboration logos.",
      result: "Gift set AOV increased 35% vs prior holiday sets. Collector resale value on secondary market confirmed packaging premium. Customer reviews mentioning 'collector-grade packaging' went from 0 → 67%.",
    },
    recommendedProducts: [
      { name: "Flat Mailer Boxes", href: "/products/paper-boxes" },
      { name: "Collector Rigid Boxes", href: "/products/rigid-gift-boxes" },
      { name: "Gift Set Boxes", href: "/products/subscription-boxes" },
    ],
    packagingTypes: [
      { type: "Slim Mailer", desc: "Optimized for notebooks, prints, card decks. Minimal dimensional weight. Maximum protection for flat goods.", icon: "📦" },
      { type: "Collector Box", desc: "Display-grade rigid box with numbering, seals, premium finish. For limited editions and designer toys.", icon: "🎨" },
      { type: "Gift Set Box", desc: "Multi-compartment rigid box for journal + accessories combos. Desk-worthy keepsake design.", icon: "🎁" },
      { type: "Product Sleeve", desc: "Paperboard wrap or belly band for individual notebooks or blind boxes. Minimal material, maximum brand impact.", icon: "✒️" },
    ],
    seoKeywords: "premium stationery packaging, designer toy box custom, collector grade packaging for limited editions, notebook mailer box, custom stationery gift boxes, blind box packaging manufacturer",
    faqs: [
      { q: "What's the best packaging style for shipping notebooks and planners?", a: "Slim-profile mailer boxes with height between 0.75-1.5 inches are ideal. They protect flat products while minimizing dimensional weight charges. Our most popular size ships at the lowest possible USPS Priority Mail rate." },
      { q: "Can you do numbered limited edition packaging for designer toys?", a: "Absolutely. We offer sequential numbering, holographic authenticity certificates, and edition-specific variant printing. Each box can be individually serialized for true limited edition verification." },
      { q: "Do you offer packaging that works for both stationery and toys?", a: "That's exactly what our collector-grade rigid boxes deliver. The same premium construction works for both categories — we've done successful collaborations where one box design serves both stationery fans and toy collectors." },
      { q: "What's the minimum order for custom blind box or mystery box packaging?", a: "100 units for standard designs. Blind/mystery boxes are one of our specialties — we can do varied interior printing so each box in a series has different internal artwork or reveals." },
      { q: "How fast can you produce limited edition packaging for a convention or drop date?", a: "Design in 3 days, samples in 5 days, production in 7 days. For convention exclusives, we recommend locking in your design 4 weeks before the event for the smoothest experience." },
    ],
  },
  "jewelry-accessories": {
    name: "Jewelry & Accessories",
    tagline: "Small product, big moment — make the box part of the story customers tell",
    identitySlogan: "Jewelry reveals self, box begins story",
    heroImage: "/images/industry_jewelry.jpg",
    color: "from-violet-600 to-purple-800",
    icon: "💍",
    whyBUpack: "Jewelry and accessory brands manufacture pieces separately from packaging. But your box IS the first thing customers see — it's the proposal moment, the birthday reveal, the self-gift ritual. We make sure it's worthy of the piece inside.",
    painPoints: [
      "Generic leatherette or cotton-filled boxes cheapen even the finest jewelry — the unboxing kills the magic before the piece is even seen",
      "Tiny items get lost in oversized boxes — customers hate opening a large box to find a small ring swimming in filler paper",
      "No way to include care instructions or brand story that customers actually keep (not throw away)",
      "Ring and earring boxes that don't photograph well for proposal posts, unboxings, or TikTok shows",
      "Accessory brands (watches, sunglasses, hair clips) need different proportions than traditional jewelry boxes",
    ],
    solutions: [
      {
        title: "Velvet-Insert Rigid Boxes",
        desc: "Custom-cut velvet or suede inserts holding each piece precisely in place. Rings, necklaces, earrings, watches — each has its perfect designated spot. Available in 20+ interior colors.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "Magnetic Closure Gift Boxes",
        desc: "Soft-touch laminated rigid boxes with hidden magnetic flap — the slow, satisfying reveal that makes every unboxing Instagram-worthy and TikTok-ready.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Travel Pouch + Box Combo",
        desc: "Reusable microfiber drawstring pouch nested inside a rigid presentation box. Customers keep both — your brand travels with them daily and lives on their vanity.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "June & Stone",
      stage: "DTC jewelry & accessories brand",
      challenge: "Ring boxes were generic black leatherette — customers posted the ring on Instagram, never the box. Brand story stopped at the jewelry. Accessory line (hair clips, sunglasses cloths) had no dedicated packaging at all.",
      solution: "Velvet-lined rigid box collection with brand monogram emboss, plus matching magnetic-closure accessory pouches. Designed specifically for 'proposal shot' and 'flat lay' photography. Hair clip boxes in complementary smaller format.",
      result: "Unboxing posts 5x increase across jewelry + accessories. 40% of customers now post a photo of the box itself. AOV up 15% via pouch upsell. Accessory attachment rate jumped from baseline to 34% of jewelry orders.",
    },
    recommendedProducts: [
      { name: "Rigid Jewelry Boxes", href: "/products/paper-boxes" },
      { name: "Magnetic Gift Boxes", href: "/products/subscription-boxes" },
      { name: "Accessory Pouches", href: "/products/paper-bags" },
    ],
    packagingTypes: [
      { type: "Jewelry Box", desc: "Primary presentation box — velvet/suede lined, magnetic or ribbon closure, embossed logo. Kept forever, gifted forward.", icon: "💎" },
      { type: "Shipper Mailer", desc: "Compact corrugated mailer protecting the jewelry box inside. Small footprint = lower dimensional weight shipping.", icon: "📦" },
      { type: "Accessory Box", desc: "Smaller rigid box for sunglasses cloths, hair clips, watch bands. Coordinates with main jewelry box family.", icon: "👓" },
      { type: "Travel Pouch", desc: "Reusable drawstring pouch included with purchase. Daily utility = daily brand exposure.", icon: "👜" },
    ],
    seoKeywords: "custom jewelry packaging box, affordable luxury unboxing for jewelry brands, engagement ring gift box, velvet insert jewelry packaging, accessory brand packaging, magnetic closure jewelry box low moq",
    faqs: [
      { q: "What's the smallest jewelry box you can make?", a: "We produce rigid boxes as small as 2x2 inches for rings and stud earrings, up to 12x9x2 inches for necklace sets. Minimum 100 units per design regardless of size." },
      { q: "Can you do velvet or suede interior lining in custom colors?", a: "Yes — we offer 20+ stock interior colors (black, navy, forest green, blush, champagne, etc.) and can PMS-match custom colors for orders of 300+ units. All materials tested for colorfastness to protect your jewelry." },
      { q: "How do I ensure the ring box photographs well for social media?", a: "We optimize for 'Instagram lighting' — matte exterior finishes that don't glare under ring lights, rich interior contrast colors that pop on camera, and clean edges that photograph beautifully from any angle. Many of our jewelry brand clients use our boxes specifically for content creation." },
      { q: "Can you add my brand's monogram or logo in foil?", a: "Yes — gold, silver, rose gold, copper, and holographic foil stamping. Blind embossing for subtler luxury. Debossed logo options also available. All positioned for maximum visibility in photos." },
      { q: "Do you offer different box sizes within a coordinated family design?", a: "Absolutely — this is one of our most requested features. We create coordinated box families: large for necklaces/sets, medium for bracelets/watches, small for rings/ear studs, extra-small for accessories. Same design language, proportioned for each product category." },
    ],
  },
  // ── END NEW Target Industries ──────────────────────────────────
  "cbd-hemp": {
    name: "CBD & Hemp",
    tagline: "Compliant packaging that looks as premium as your product",
    identitySlogan: "From nature to wellness, packaging safeguards",
    heroImage: "/images/industry_cosmetics.jpg",
    color: "from-green-600 to-lime-700",
    icon: "🌿",
    whyBUpack: "CBD and hemp brands face a unique challenge: packaging must meet strict regulatory requirements while still looking premium enough to justify the price point. We deliver both — compliant by design, luxurious by choice.",
    painPoints: [
      "Regulatory compliance is a maze — state-by-state labeling requirements, FDA warning letters, and changing laws keep you anxious",
      "Child-resistant packaging requirements add complexity and cost — most CR options look clinical, not premium",
      "Building brand trust is harder when your packaging looks like every other CBD brand on the shelf",
      "Fierce market competition means your packaging must differentiate instantly — generic boxes won't cut it",
    ],
    solutions: [
      {
        title: "Child-Resistant Mailer Boxes",
        desc: "CR-certified packaging that meets ASTM D3475 and 16 CFR §1700 standards. Premium exterior design meets mandatory safety requirements — compliance without compromising aesthetics.",
        image: "/images/product_box_1.jpg",
      },
      {
        title: "Compliant Display Boxes",
        desc: "Retail-ready packaging with required warning labels, QR codes, and batch information elegantly integrated into the design. Compliant doesn't have to mean ugly.",
        image: "/images/product_box_2.jpg",
      },
      {
        title: "CBD Subscription Boxes",
        desc: "Monthly curated boxes with rotating product combinations. Standardized structure, fresh designs each cycle, and full regulatory compliance built in.",
        image: "/images/product_box_3.jpg",
      },
    ],
    caseStudy: {
      brand: "Verde Botanics",
      stage: "DTC CBD wellness brand ($2.5M ARR)",
      challenge: "Packaging looked clinical and generic. Customers couldn't distinguish the brand on social media. Child-resistant requirements forced them into ugly stock options that hurt the premium positioning.",
      solution: "Custom CR-certified rigid box with matte black exterior, holographic foil logo, and interior brand story. Required warning text elegantly integrated into the design. QR code linking to lab results.",
      result: "Social media unboxing posts up 7x. Brand recognition in customer surveys improved 65%. Subscription retention increased from 3.2 → 5.8 month average. Zero compliance issues.",
    },
    recommendedProducts: [
      { name: "Child-Resistant Mailer Boxes", href: "/products/paper-boxes" },
      { name: "Compliant Display Boxes", href: "/products/paper-boxes" },
      { name: "CBD Subscription Boxes", href: "/products/subscription-boxes" },
    ],
    packagingTypes: [
      { type: "Shipping Mailer", desc: "CR-certified corrugated mailer for direct-to-consumer CBD orders. Compliant and presentable.", icon: "📦" },
      { type: "Display Box", desc: "Retail-ready box with required labeling elegantly integrated. Shelf appeal meets regulatory requirements.", icon: "🎁" },
      { type: "Subscription Box", desc: "Monthly CBD curation box. Compliant structure with rotating seasonal designs.", icon: "🔄" },
      { type: "Pre-Roll Pack", desc: "Custom pre-roll packaging with CR-certified closure. Premium look, mandatory safety compliance.", icon: "🌿" },
    ],
    seoKeywords: "custom CBD packaging boxes, CBD hemp packaging wholesale, child resistant packaging custom, custom pre-roll packaging boxes, compliant CBD packaging, premium hemp packaging",
    faqs: [
      { q: "Do your CBD packaging boxes meet child-resistant requirements?", a: "Yes. Our CR-certified packaging meets ASTM D3475 and 16 CFR §1700 standards. We provide certification documentation and test reports with every order." },
      { q: "Can you include required warning labels and QR codes in the design?", a: "Absolutely. We integrate all required regulatory text, warning labels, QR codes for lab results, and batch information directly into your packaging design — elegantly and compliantly." },
      { q: "What's the minimum order for custom CBD packaging?", a: "100 units for standard designs, 300 units for CR-certified packaging. We keep MOQs low so emerging CBD brands can access premium packaging without overcommitting on inventory." },
      { q: "How do you handle different state compliance requirements?", a: "We track labeling requirements across all 50 states and can produce state-specific variations. Our design team ensures your packaging meets the strictest applicable regulations." },
      { q: "Can you make packaging that looks premium but is still compliant?", a: "That's our specialty. Compliance and luxury aren't mutually exclusive. We use premium finishes — soft-touch lamination, foil stamping, spot UV — alongside required regulatory elements for packaging that looks as good as it complies." },
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
    // NEW: Target Industries v3.0
    "beauty-skincare": "Beauty & Skincare Packaging | Low MOQ Custom Boxes | BUpack",
    "fragrance-candles": "Fragrance & Candle Packaging | Custom Boxes Low MOQ | BUpack",
    "corporate-gifts-subscription": "Corporate Gift & Subscription Box Packaging | BUpack",
    "stationery-toys": "Stationery & Designer Toy Packaging | Collector-Grade Custom Boxes | BUpack",
    "jewelry-accessories": "Jewelry & Accessories Packaging | Luxury Unboxing | BUpack",
    // Legacy industries (archived from main navigation)
    "candles-fragrance": "Custom Candle Packaging Boxes | BUpack",
    "jewelry": "Custom Jewelry Packaging Boxes | BUpack",
    "chocolate-confectionery": "Chocolate Gift Box Packaging | BUpack",
    "stationery-gifts": "Stationery & Gift Packaging | BUpack",
    "tea-beverages": "Tea Packaging Boxes | Subscription & Gift | BUpack",
    "pet-subscription": "Pet Subscription Box Packaging | BUpack",
    "cosmetics-beauty": "Custom Cosmetic Packaging Boxes | BUpack",
    "wine-spirits": "Custom Wine Packaging Boxes | BUpack",
    "apparel-fashion": "Custom Apparel Packaging Boxes | BUpack",
    "bakery-food": "Custom Bakery & Food Packaging Boxes | BUpack",
    "cbd-hemp": "Custom CBD & Hemp Packaging Boxes | BUpack",
  }

  const seoDescMap: Record<string, string> = {
    // NEW: Target Industries v3.0
    "beauty-skincare": "Custom beauty & skincare packaging boxes. FDA-compliant materials, low MOQ from 100 units. Mailer boxes with bottle inserts, luxury gift sets. FSC-certified factory-direct.",
    "fragrance-candles": "Custom candle & home fragrance packaging. Mailer boxes with jar inserts, luxury diffuser gift sets. Low MOQ from 100 units. FSC-certified, fast turnaround.",
    "corporate-gifts-subscription": "Corporate gift box & subscription box packaging. Custom from 100 units. Employee welcome kits, monthly subscription boxes. Volume pricing available.",
    "stationery-toys": "Premium stationery & designer toy packaging. Collector-grade limited edition boxes, slim notebook mailers. Custom blind boxes. Low MOQ, factory-direct.",
    "jewelry-accessories": "Custom jewelry & accessories packaging. Velvet-insert rigid boxes, magnetic closure, affordable luxury unboxing. Low MOQ from 100 units.",
    // Legacy industries (archived)
    "candles-fragrance": "Custom candle packaging boxes with jar inserts. Mailer boxes, holiday gift sets. FSC-certified, low MOQ from 100 units.",
    "jewelry": "Custom jewelry boxes with velvet inserts. Magnetic closure rigid boxes for rings, necklaces. Low MOQ, factory-direct.",
    "chocolate-confectionery": "FDA-compliant chocolate gift boxes. Window boxes, rigid gift sets. FSC-certified, low MOQ from 100 units.",
    "stationery-gifts": "Custom stationery packaging — flat mailers & gift sets. Low MOQ, eco-friendly materials, fast turnaround.",
    "tea-beverages": "Custom tea packaging boxes — drawer-style, gift sets, subscription boxes. FSC-certified, low MOQ from 100 units.",
    "pet-subscription": "Pet subscription box packaging with monthly theme rotation. Divided interior, pet-safe inks. MOQ from 100 units.",
    "cosmetics-beauty": "Custom cosmetic packaging boxes for skincare & beauty brands. Mailer boxes, luxury gift sets, subscription boxes. FSC-certified, low MOQ from 100 units.",
    "wine-spirits": "Custom wine packaging boxes with protective inserts. Gift sets, wine club shipments. FSC-certified, low MOQ from 100 units.",
    "apparel-fashion": "Custom apparel packaging boxes for fashion brands. Branded mailers, gift sets, subscription boxes. Low MOQ from 100 units.",
    "bakery-food": "Custom bakery & food packaging boxes. FDA-compliant mailers, windowed presentation boxes, holiday gift sets. FSC-certified, low MOQ from 100 units.",
    "cbd-hemp": "Custom CBD & hemp packaging boxes. Child-resistant mailers, compliant display boxes, subscription packaging. CR-certified, low MOQ from 100 units.",
  }

  return {
    title: seoTitleMap[slug] || `${industry.name} Packaging | BUpack`,
    description: seoDescMap[slug] || `${industry.tagline}. FSC-certified, low MOQ, fast turnaround.`,
    keywords: industry.seoKeywords,
    alternates: {
      canonical: `https://www.bupackeco.com/industries/${slug}/`,
    },
    openGraph: {
      title: seoTitleMap[slug] || `${industry.name} Packaging | BUpack`,
      description: seoDescMap[slug] || `${industry.tagline}. FSC-certified, low MOQ.`,
      url: `https://www.bupackeco.com/industries/${slug}/`,
      siteName: "BUpack",
      locale: "en_US",
      type: "website",
      images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitleMap[slug] || `${industry.name} Packaging | BUpack`,
      description: seoDescMap[slug] || `${industry.tagline}. FSC-certified, low MOQ.`,
      images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
    },
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
          <Image src={industry.heroImage} alt={`${industry.name} packaging by BUpack`} fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Link href="/" className="text-white/70 hover:text-white text-sm mb-4 inline-block transition-colors">← Back to Home</Link>
          <div className="text-5xl mb-4">{industry.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{industry.name}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">{industry.tagline}</p>
          {/* Identity Transformation Slogan — single-line English, prominent */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl px-8 py-5 shadow-xl">
              <p className="text-2xl md:text-3xl font-serif italic text-white leading-snug tracking-wide">
                {industry.identitySlogan}
              </p>
            </div>
          </div>
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
