import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ProductSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

/* ── Product Data ─────────────────────────────────────────── */

const products: Record<string, ProductData> = {
  "paper-boxes": {
    name: "Custom Paper Boxes",
    shortName: "Paper Boxes",
    tagline: "Rigid. Beautiful. Recyclable. Built for the unboxing moment.",
    heroImage: "/images/product_box_1.jpg",
    color: "from-green-700 to-emerald-800",
    accent: "bg-green-600",
    overview:
      "From corrugated mailer boxes to rigid lid-and-base gift boxes — we engineer every unit for the unboxing moment your customers post about. Every box is printed with soy-based inks on FSC-certified paper, then cut, folded, and inspected in our ISO-certified factory.",
    highlights: [
      { icon: "🌲", title: "FSC-Certified Paper", desc: "Sourced from responsibly managed forests with full chain-of-custody documentation." },
      { icon: "🖨️", title: "Full-Bleed CMYK Print", desc: "Interior and exterior printing with color accuracy to 95% Delta-E." },
      { icon: "📐", title: "Any Size, Any Shape", desc: "No die-plate fees for standard box styles. Custom dies available from 500 units." },
      { icon: "✅", title: "3-Stage QC", desc: "Pre-production sample, inline inspection, and outbound random sampling." },
    ],
    specs: {
      materials: ["FSC-Certified Kraft", "SBS C1S (White Board)", "Corrugated E-Flute", "Recycled Board (up to 100% PCW)", "Rigid Greyboard (1.5–3mm)"],
      printOptions: ["CMYK Full Color (interior + exterior)", "Pantone Spot Color (up to 6 colors)", "Soy-Based Ink (default)", "Metallic / Foil Stamp", "White Ink on Kraft"],
      finishes: ["Matte Lamination", "Gloss Lamination", "Soft-Touch Coating ( Velvet )", "Spot UV / Varnish", "Emboss / Deboss", "Aqueous Coating (AQ)"],
      sizes: "Fully custom — any length, width, depth. Standard dies available: 6×4×2″ to 18×12×6″.",
      moq: "100 units (folding carton) / 500 units (rigid box)",
      leadTime: "7–10 days (sampling) / 15–20 days (production) / 25 days (rigid + inserts)",
      certifications: ["FSC Chain of Custody", "ISO 9001", "ISO 14001", "RoHS Compliant"],
    },
    useCases: [
      { title: "DTC Shipping & Mailers", desc: "Corrugated mailers that survive last-mile transit and look premium on arrival. Self-locking design means no tape needed.", tags: ["Ecommerce", "Subscription"] },
      { title: "Retail Shelf Packaging", desc: "Folding cartons with high-color print, hang-tabs, and tear-open features — ready for retail display.", tags: ["Retail", "FMCG"] },
      { title: "Gift & Premium Boxes", desc: "Rigid lid-and-base boxes with custom EVA or paperboard inserts for multi-item sets.", tags: ["Gift", "Luxury"] },
      { title: "Product Launch Kits", desc: "PR boxes with magnetic closures, ribbon pulls, and tissue paper — designed to be shared on social.", tags: ["PR", "Influencer"] },
    ],
    process: [
      { step: "01", title: "Design Review", desc: "You upload artwork (AI / PDF / PSD). Our prepress team checks bleed, resolution, and color mode — free of charge." },
      { step: "02", title: "Physical Sample", desc: "We produce a fully finished physical sample with your print and mail it to your address within 7–10 days." },
      { step: "03", title: "Production", desc: "Paperboard is printed, laminated, die-cut, and glued on automated lines. Inline cameras catch 99.2% of defects." },
      { step: "04", title: "QC & Packing", desc: "AQL 2.5 random sampling. Boxes are flat-packed, palletized, and loaded into containers with moisture protection." },
    ],
    whyChoose: [
      { title: "Low MOQ for Small Brands", desc: "Start from 100 units. No need to commit to 3,000+ units like traditional box manufacturers." },
      { title: "Factory-Direct Pricing", desc: "Own ISO-certified factory in Qingdao, China. No trading company markups — you talk to the people who make your boxes." },
      { title: "Ships to North America", desc: "We handle sea freight, customs docs, and door-to-door delivery to US and Canadian warehouses." },
      { title: "Sustainability Built In", desc: "FSC paper, soy inks, and plastic-free lamination options are standard — not expensive upgrades." },
    ],
    comparison: {
      headers: ["Feature", "BUpack", "Typical Trading Co.", "Local US Printer"],
      rows: [
        ["Minimum Order", "100 units", "1,000–3,000", "250–500"],
        ["Custom Size", "Free (standard dies)", "$300–$800 die fee", "$150–$500 die fee"],
        ["Interior Print", "Included", "Extra charge", "Often unavailable"],
        ["Physical Sample", "Free (you pay shipping)", "$100–$300", "$50–$150"],
        ["Production Time", "15–20 days", "25–45 days", "10–15 days"],
        ["FSC Certification", "Included", "Unavailable or extra", "Limited selection"],
      ],
    },
    faqs: [
      { question: "What is the minimum order quantity for custom paper boxes?", answer: "Our MOQ is 100 units for folding cartons and 500 units for rigid boxes. This is designed to support growing eCommerce brands who want custom packaging without committing to thousands of units upfront." },
      { question: "Can I print on the inside of the box as well as the outside?", answer: "Yes — full interior and exterior CMYK printing is included as standard. Many DTC brands use the interior for brand messaging, QR codes, or unboxing instructions." },
      { question: "What file format do you need for my artwork?", answer: "We accept AI, PDF, PSD, and EPS files. Artwork should be in CMYK color mode with a 3mm bleed on all sides. Our prepress team reviews every file for free and sends you a digital proof before production." },
      { question: "How long does production take?", answer: "Sampling takes 7–10 days. Production lead time is 15–20 days for folding cartons and 25 days for rigid boxes with custom inserts. Sea freight to the US West Coast adds 14–18 days." },
      { question: "Are your paper boxes really eco-friendly?", answer: "Yes. We use FSC-certified paper, soy-based inks (default), and offer 100% recycled board options. Our standard lamination is plastic-free aqueous coating. We can provide FSC chain-of-custody documentation for your sustainability reporting." },
      { question: "Can you ship directly to my 3PL or Amazon FBA warehouse?", answer: "Absolutely. We ship DDP (Delivered Duty Paid) to any address in the US or Canada. We can also prep cartons for Amazon FBA with suffocation warning labels and pallet configurations as required." },
    ],
    related: [
      { slug: "paper-bags", name: "Custom Paper Bags", tagline: "Retail & event bags with your branding." },
      { slug: "subscription-boxes", name: "Subscription & Gift Boxes", tagline: "Magnetic closure and custom inserts for premium unboxing." },
    ],
    seoKeywords: "custom paper boxes, eco friendly packaging boxes, FSC certified mailer boxes, DTC shipping boxes with logo, custom boxes low MOQ, corrugated mailer boxes wholesale, rigid gift boxes manufacturer, sustainable ecommerce packaging",
  },

  "paper-bags": {
    name: "Custom Paper Bags",
    shortName: "Paper Bags",
    tagline: "Carry your brand — sustainably. From boutique to tradeshow.",
    heroImage: "/images/product_bag_1.jpg",
    color: "from-emerald-700 to-teal-800",
    accent: "bg-emerald-600",
    overview:
      "Premium paper bags with rope, flat, or die-cut handles. Every bag is printed in full color on FSC-certified kraft or coated art paper, then reinforced at stress points for durability. Whether you need boutique shopping bags, tradeshow swag carriers, or food-safe takeaway bags — we deliver at the right price point.",
    highlights: [
      { icon: "🛍️", title: "Multiple Handle Types", desc: "Cotton rope, flat paper, die-cut, or ribbon — matched to your brand weight and feel." },
      { icon: "🎨", title: "Full-Color Print", desc: "CMYK on white art paper or 1–2 color on natural kraft with excellent color consistency." },
      { icon: "♻️", title: "100% Recyclable", desc: "All materials are curbside recyclable. Waxed food-safe options available." },
      { icon: "📏", title: "Fully Custom Sizes", desc: "From small jewelry pouches (4×6″) to extra-large shopping bags (20×24″)." },
    ],
    specs: {
      materials: ["FSC Kraft Paper (80–200gsm)", "Coated Art Paper (128–300gsm)", "Recycled Paper (up to 100%)", "Waxed Paper (food-safe option)", "Textured Paper (linen, embossed)"],
      printOptions: ["CMYK Full Color", "Pantone Spot", "Soy-Based Ink (default)", "White Ink on Kraft", "Metallic / Foil Stamp"],
      finishes: ["Matte / Gloss Lamination", "Hot Foil Stamp (Gold / Silver / Holographic)", "Emboss / Deboss", "Spot UV (logo highlight)", "Rope / Ribbon Handles"],
      sizes: "Custom — from jewelry pouch (4×6″) to extra-large shopping bag (20×24″). Standard sizes available with no die fee.",
      moq: "200 units",
      leadTime: "7–10 days (sampling) / 12–18 days (production)",
      certifications: ["FSC Chain of Custody", "FDA-Compliant Food Contact (waxed option)", "ISO 9001"],
    },
    useCases: [
      { title: "Retail Boutiques", desc: "Branded shopping bags that customers reuse — turning every shopper into a walking billboard.", tags: ["Fashion", "Retail"] },
      { title: "Trade Shows & Events", desc: "Large-format bags with reinforced handles that hold brochures, samples, and swag without tearing.", tags: ["B2B", "Events"] },
      { title: "Gift & Holiday Packaging", desc: "Seasonal designs with rope handles and foil stamping — bags customers keep and reuse for years.", tags: ["Gift", "Seasonal"] },
      { title: "Food & Bakery Takeaway", desc: "Food-safe coated paper bags with flat handles. FDA-compliant for direct food contact.", tags: ["Food", "Cafe"] },
    ],
    process: [
      { step: "01", title: "Size & Handle Selection", desc: "Choose your bag dimensions, paper weight, and handle type. We recommend the best combination for your use case." },
      { step: "02", title: "Artwork Proofing", desc: "We create a digital mockup showing print placement, handle position, and fold lines. You approve before sampling." },
      { step: "03", title: "Sampling", desc: "A physical sample bag is produced with your artwork and sent for review. Turnaround: 7–10 days." },
      { step: "04", title: "Bulk Production", desc: "Paper is printed, cut, folded, and handles are attached by machine or hand (for luxury finishes). Each batch is checked for handle pull strength." },
    ],
    whyChoose: [
      { title: "Reuse Rate = Brand Exposure", desc: "73% of shoppers say they reuse a paper bag if it looks premium. Our customers report bags being reused 3–5 times on average." },
      { title: "Handle That Holds", desc: "We reinforce handle attachment points with extra adhesive and backer board. No embarrassing bag breaks at the register." },
      { title: "Food-Safe Options", desc: "Waxed kraft and FDA-compliant coatings available for bakeries, cafes, and gourmet food brands." },
      { title: "Fast Turnaround", desc: "12–18 days production plus shipping. Reorders are even faster because your die is already on file." },
    ],
    comparison: {
      headers: ["Feature", "BUpack", "Typical Trading Co.", "Local Printer"],
      rows: [
        ["Minimum Order", "200 units", "1,000+", "500"],
        ["Custom Size", "Free (standard sizes)", "$200–$500 die", "$100–$300 die"],
        ["Handle Reinforcement", "Standard", "Basic", "Varies"],
        ["Foil Stamping", "Available", "Limited colors", "Available"],
        ["Production Time", "12–18 days", "20–35 days", "7–14 days"],
        ["Food-Safe Option", "Yes (FDA)", "Rare", "Limited"],
      ],
    },
    faqs: [
      { question: "What is the minimum order for custom paper bags?", answer: "Our MOQ is 200 units. This is lower than most manufacturers and is designed for small-to-medium retail brands and event organizers who want professional packaging without large commitments." },
      { question: "What types of handles can I choose from?", answer: "We offer cotton rope handles (most premium), flat paper handles (cost-effective), die-cut handles (integrated into the bag), and ribbon handles (luxury gift bags). We can recommend the best option based on your bag size and brand positioning." },
      { question: "Can I get paper bags for food contact?", answer: "Yes. We offer FDA-compliant waxed kraft paper bags and food-safe aqueous-coated options. These are popular with bakeries, cafes, and gourmet food brands." },
      { question: "What is the difference between kraft and art paper bags?", answer: "Kraft paper has a natural brown look and is great for eco-conscious brands. Coated art paper has a smooth white surface that makes colors pop — ideal for high-end retail and fashion. Both are FSC-certified and recyclable." },
      { question: "How strong are the handles?", answer: "We reinforce handle attachment points with extra adhesive and backer board. Standard rope handles can hold 5–8 kg. Reinforced options for heavier items are available on request." },
      { question: "Can you match my brand's Pantone colors?", answer: "Yes. We offer Pantone spot color printing for accurate brand color matching. We can also provide a printed color proof before production to ensure accuracy." },
    ],
    related: [
      { slug: "paper-boxes", name: "Custom Paper Boxes", tagline: "Mailers, cartons, and rigid boxes for every use case." },
      { slug: "subscription-boxes", name: "Subscription & Gift Boxes", tagline: "Premium unboxing experiences with custom inserts." },
    ],
    seoKeywords: "custom paper bags with logo, eco friendly retail shopping bags, kraft paper bags wholesale, FSC certified paper bags, custom printed bags low MOQ, boutique paper bags manufacturer, food safe paper bags, trade show bags custom",
  },

  "subscription-boxes": {
    name: "Subscription & Gift Boxes",
    shortName: "Subscription Boxes",
    tagline: "Designed for repeat impressions. The box they keep, not recycle.",
    heroImage: "/images/product_box_2.jpg",
    color: "from-teal-700 to-cyan-800",
    accent: "bg-teal-600",
    overview:
      "Subscription box brands know: the unboxing is the product. We design and manufacture magnetic-closure boxes, drawer boxes, and two-piece gift sets with custom-printed interiors, EVA inserts, tissue paper, and ribbon pulls — everything your brand needs to create a shareable moment.",
    highlights: [
      { icon: "🧲", title: "Magnetic Closure", desc: "Hidden magnets provide a satisfying snap close — no tape, no ribbon needed." },
      { icon: "🎀", title: "Custom Interiors", desc: "Printed tissue, foam inserts, paperboard dividers, and ribbon pulls included." },
      { icon: "📸", title: "Instagram-Ready", desc: "Designed with unboxing angles in mind. Every surface is an opportunity for UGC." },
      { icon: "🔄", title: "Reusability", desc: "Rigid construction means customers reuse the box — your brand stays in their home." },
    ],
    specs: {
      materials: ["Rigid Greyboard (1.5–3mm)", "FSC Art Paper Wrap (128–200gsm)", "Suede / Linen Textured Wrap", "Magnetic Closure Hardware", "EVA / Paperboard Inserts"],
      printOptions: ["CMYK Full Color (exterior + interior wrap)", "Pantone Spot Color", "Soy-Based Ink", "Foil Stamping (logo)", "Emboss / Deboss (texture)"],
      finishes: ["Soft-Touch Lamination", "Matte / Gloss Lamination", "Spot UV Highlight", "Anti-Scratch Varnish", "Ribbon / Magnetic Closure"],
      sizes: "Fully custom. Popular sizes: 8×6×3″ (beauty), 10×8×4″ (lifestyle), 12×9×5″ (premium).",
      moq: "100 units (standard) / 500 units (fully custom size + insert)",
      leadTime: "7–10 days (sampling) / 20–25 days (production) / 30 days (with custom EVA insert)",
      certifications: ["FSC Chain of Custody", "ISO 9001", "RoHS Compliant (magnets)"],
    },
    useCases: [
      { title: "Monthly Subscription Boxes", desc: "Beauty, wellness, and lifestyle boxes designed for repeat delivery. Consistent quality across every batch.", tags: ["Beauty", "Wellness"] },
      { title: "Curated Gift Sets", desc: "Holiday and seasonal gift boxes with custom-printed interiors, tissue, and thank-you cards.", tags: ["Gift", "Holiday"] },
      { title: "PR & Influencer Kits", desc: "Limited-edition boxes with numbered certificates, QR codes, and surprise inserts.", tags: ["PR", "Launch"] },
      { title: "Corporate Welcome Kits", desc: "Onboarding boxes for remote teams with branded stationery, swag, and a personalized note.", tags: ["HR", "Corporate"] },
    ],
    process: [
      { step: "01", title: "Box Style Selection", desc: "Choose from magnetic closure, drawer slide, two-piece lid, or book-style boxes. We recommend based on your product fit." },
      { step: "02", title: "Insert Design", desc: "We design foam or paperboard inserts that hold your products securely. 3D renderings provided for approval." },
      { step: "03", title: "Sample Production", desc: "A complete box with insert, tissue, and any accessories is produced and shipped for your review." },
      { step: "04", title: "Bulk Manufacturing", desc: "Board is wrapped, magnets are embedded, inserts are cut, and every box is hand-finished for sharp corners and clean edges." },
    ],
    whyChoose: [
      { title: "Unboxing Is the Product", desc: "Subscription brands see up to 40% higher retention when customers feel the packaging is premium. We design for that feeling." },
      { title: "Everything in One Order", desc: "Box, insert, tissue, ribbon, and printed collateral — all produced and packed in one facility. No coordination headaches." },
      { title: "Batch Consistency", desc: "Subscription boxes need to look identical month after month. Our color management system ensures <3% variance across batches." },
      { title: "Designed for Social", desc: "We consider camera angles, lighting, and hand-feel. Every element is designed to appear in your customers' unboxing videos." },
    ],
    comparison: {
      headers: ["Feature", "BUpack", "Typical Trading Co.", "Local US Manufacturer"],
      rows: [
        ["Minimum Order", "100 units", "500–1,000", "250–500"],
        ["Custom Insert", "Included (paperboard)", "$200–$500 extra", "$150–$400 extra"],
        ["Interior Print", "Included", "Extra charge", "Often unavailable"],
        ["Magnetic Closure", "Standard option", "Limited styles", "Available"],
        ["Production Time", "20–25 days", "30–50 days", "15–20 days"],
        ["Batch Color Match", "<3% variance", "5–10%", "3–5%"],
      ],
    },
    faqs: [
      { question: "What is the minimum order for subscription boxes with custom inserts?", answer: "Our MOQ is 100 units for standard-size boxes with paperboard inserts. Fully custom sizes with EVA foam inserts start at 500 units. This makes us accessible to early-stage subscription brands." },
      { question: "Can I include tissue paper, stickers, and inserts in the same order?", answer: "Yes — we produce the box, custom insert, printed tissue, and any paper collateral (thank-you cards, QR code cards) in the same facility. Everything arrives pre-assembled and ready to pack." },
      { question: "How do you ensure color consistency across monthly batches?", answer: "We use a digital color management system with spectrophotometer verification. Each batch is matched to the approved sample with a Delta-E target under 3.0 — meaning your customers won't notice any difference between months." },
      { question: "What box styles do you offer?", answer: "Magnetic closure (most popular), two-piece lid-and-base, drawer slide, and book-style fold-over. We can also develop custom structures for unique product shapes or limited-edition releases." },
      { question: "Can you design the insert layout for my products?", answer: "Absolutely. Share your product dimensions and we'll design a 3D insert layout with renderings. We offer paperboard inserts (included), EVA foam (premium feel), and molded pulp (eco option)." },
      { question: "How long does a subscription box order take?", answer: "Sampling takes 7–10 days. Production is 20–25 days for standard boxes and 30 days for boxes with custom EVA inserts. We recommend planning 6–8 weeks ahead of your ship date for the first order." },
    ],
    related: [
      { slug: "paper-boxes", name: "Custom Paper Boxes", tagline: "Mailers and cartons for shipping and retail." },
      { slug: "paper-bags", name: "Custom Paper Bags", tagline: "Retail bags that customers reuse and share." },
    ],
    seoKeywords: "subscription box packaging supplier, custom gift boxes with logo, magnetic closure box manufacturer, unboxing experience packaging, custom rigid boxes low MOQ, beauty box packaging, monthly subscription packaging, premium gift box wholesale",
  },
}

/* ── Type Definition ──────────────────────────────────────── */

interface ProductData {
  name: string
  shortName: string
  tagline: string
  heroImage: string
  color: string
  accent: string
  overview: string
  highlights: { icon: string; title: string; desc: string }[]
  specs: Record<string, string | string[]>
  useCases: { title: string; desc: string; tags: string[] }[]
  process: { step: string; title: string; desc: string }[]
  whyChoose: { title: string; desc: string }[]
  comparison: { headers: string[]; rows: string[][] }
  faqs: { question: string; answer: string }[]
  related: { slug: string; name: string; tagline: string }[]
  seoKeywords: string
}

/* ── Static Params ────────────────────────────────────────── */

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }))
}

/* ── Metadata ─────────────────────────────────────────────── */

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products[slug]
  if (!product) return {}
  return {
    title: `${product.name} | BUpack — Low MOQ, Factory Direct`,
    description: `${product.tagline} ${product.overview.slice(0, 120)}...`,
    keywords: product.seoKeywords,
    openGraph: {
      title: `${product.name} | BUpack`,
      description: product.tagline,
      images: [{ url: `https://bupackeco.com${product.heroImage}` }],
    },
  }
}

/* ── Page Component ───────────────────────────────────────── */

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products[slug]
  if (!product) notFound()

  return (
    <div className="min-h-screen">
      {/* Schema.org */}
      <ProductSchema
        name={product.name}
        description={product.overview}
        image={product.heroImage}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://bupackeco.com" },
          { name: "Products", url: "https://bupackeco.com/products" },
          { name: product.name, url: `https://bupackeco.com/products/${slug}` },
        ]}
      />
      <FAQSchema items={product.faqs} />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={`relative bg-gradient-to-br ${product.color} text-white py-24 pt-32`}>
        <div className="absolute inset-0 opacity-20">
          <Image src={product.heroImage} alt={product.name} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Link href="/products" className="text-white/70 hover:text-white text-sm mb-4 inline-block transition-colors">
            ← All Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">{product.tagline}</p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Sample
            </Link>
            <Link
              href="#specs"
              className="border-2 border-white/40 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Specs
            </Link>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + HIGHLIGHTS ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why brands choose {product.shortName}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{product.overview}</p>
              <div className="flex flex-wrap gap-2">
                {product.specs.certifications && Array.isArray(product.specs.certifications) && product.specs.certifications.map((c) => (
                  <span key={c} className="text-xs bg-green-50 text-green-700 font-medium px-3 py-1 rounded-full border border-green-100">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.highlights.map((h) => (
                <div key={h.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-green-200 transition-colors">
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{h.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIFICATIONS ─────────────────────────────────── */}
      <section id="specs" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Technical Specifications</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Everything you need to know to spec your order. Need something custom? We can accommodate.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(product.specs).map(([key, value]) => {
              if (key === "certifications") return null
              const label = key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (s) => s.toUpperCase())
                .replace("C 1 S", "C1S")
                .replace("Moq", "MOQ")
              return (
                <div key={key} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-sm transition-shadow">
                  <div className="text-xs text-green-700 font-bold uppercase tracking-wider mb-3">{label}</div>
                  {Array.isArray(value) ? (
                    <ul className="space-y-1.5">
                      {value.map((v) => (
                        <li key={v} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-green-600 mt-0.5 flex-shrink-0">•</span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-800 font-medium text-sm leading-relaxed">{value}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── USE CASES ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Common Use Cases</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            These are the most popular ways our customers use {product.shortName.toLowerCase()}.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {product.useCases.map((uc) => (
              <div key={uc.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-green-200 transition-colors">
                <div className="flex flex-wrap gap-2 mb-3">
                  {uc.tags.map((t) => (
                    <span key={t} className="text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="py-20 bg-[#0a2e18] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-green-200 max-w-xl mx-auto">
              From artwork to your warehouse in 4 steps. We handle the complexity so you can focus on your brand.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {product.process.map((p) => (
              <div key={p.step} className="relative">
                <div className="text-4xl font-black text-green-800 mb-3">{p.step}</div>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE BUPACK ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why Brands Choose BUpack</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            We're not a trading company. We're a factory-owned packaging partner for growing brands.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {product.whyChoose.map((wc) => (
              <div key={wc.title} className="flex gap-4 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className={`w-10 h-10 rounded-lg ${product.accent} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{wc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{wc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">How We Compare</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
            See why more eCommerce brands are switching from trading companies to factory-direct.
          </p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    {product.comparison.headers.map((h, i) => (
                      <th key={h} className={`text-left px-5 py-4 font-semibold ${i === 0 ? "w-1/4" : ""}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.comparison.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={`px-5 py-4 ${ci === 1 ? "text-green-700 font-semibold" : "text-gray-600"}`}>
                          {ci === 0 ? <span className="font-medium text-gray-900">{cell}</span> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-500 mb-12">
            Everything you need to know before placing your first order.
          </p>
          <div className="space-y-4">
            {product.faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100 open:border-green-200 open:bg-green-50/30 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className="text-green-600 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ───────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">You Might Also Like</h2>
          <p className="text-center text-gray-500 mb-12">
            Explore our full range of eco-friendly packaging solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {product.related.map((rel) => {
              const relProduct = products[rel.slug]
              return (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src={relProduct?.heroImage || "/images/factory_hero.jpg"}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">{rel.name}</h3>
                    <p className="text-gray-500 text-sm">{rel.tagline}</p>
                  </div>
                </Link>
              )
            })}
            <Link
              href="/industries"
              className="group bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all overflow-hidden flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">Industries We Serve</h3>
              <p className="text-gray-500 text-sm">See packaging examples for clothing, beauty, food, and more.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-green-100 mb-8 text-lg">Get free samples and a custom quote in 24 hours. No MOQ surprises.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Get Free Samples
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
            >
              Tour Our Factory
            </Link>
          </div>
          <p className="text-green-300 text-sm mt-6">
            📦 Free physical sample shipped to your door · 💬 Reply in 24 hours · 🌲 FSC-certified materials
          </p>
        </div>
      </section>
    </div>
  )
}
