import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { ProductSchema, BreadcrumbSchema } from "@/components/Schema"

interface ProductPageProps {
  params: { slug: string }
}

const products = {
  "paper-boxes": {
    name: "Custom Paper Boxes",
    tagline: "Rigid. Beautiful. Recyclable.",
    heroImage: "/images/industry_gift_box.jpg",
    color: "from-green-700 to-emerald-800",
    overview: "From mailer boxes to rigid lid-and-base gift boxes — we engineer every unit for the unboxing moment your customers post about.",
    specs: {
      materials: ["FSC-Certified Kraft", "SBS C1S (White)", "Corrugated E-Flute", "Recycled Board (up to 100%)"],
      printOptions: ["CMYK Full Color", "Pantone Spot Color", "Soy-Based Ink (Default)", "Metallic / Foil Stamp"],
      finishes: ["Matte Lamination", "Gloss Lamination", "Soft-Touch Coating", "Spot UV", "Emboss / Deboss"],
      sizes: "Custom — any size, any shape",
      moq: "100 units (standard) / 500 units (rigid)",
      leadTime: "7-10 days (sampling) / 15-20 days (production)",
    },
    useCases: [
      { title: "DTC Shipping", desc: "Corrugated mailers that survive last-mile transit and look premium on arrival." },
      { title: "Retail Shelf", desc: "Folding cartons with high-color print that pop on the shelf." },
      { title: "Gift Sets", desc: "Rigid lid-and-base boxes with custom inserts for multi-item sets." },
      { title: "Subscription Box", desc: "Monthly boxes designed for repeat impressions and easy assembly." },
    ],
    seoKeywords: "custom paper boxes, eco friendly rigid boxes, FSC certified packaging boxes, DTC shipping boxes with logo",
  },
  "paper-bags": {
    name: "Custom Paper Bags",
    tagline: "Carry your brand — sustainably.",
    heroImage: "/images/industry_clothing.jpg",
    color: "from-emerald-700 to-teal-800",
    overview: "Premium paper bags with rope or die-cut handles. FSC-certified, plastic-free, and fully customizable — from boutique to tradeshow.",
    specs: {
      materials: ["FSC Kraft Paper (80-200gsm)", "Art Paper (128-300gsm)", "Recycled Paper (up to 100%)", "Waxed Paper (food-safe option)"],
      printOptions: ["CMYK Full Color", "Pantone Spot", "Soy-Based Ink", "White Ink on Kraft"],
      finishes: ["Matte / Gloss Lamination", "Hot Foil Stamp (Gold/Silver)", "Emboss / Deboss", "Spot UV (logo highlight)"],
      sizes: "Custom — from jewelry pouch size to large shopping bag",
      moq: "200 units",
      leadTime: "7-10 days (sampling) / 12-18 days (production)",
    },
    useCases: [
      { title: "Retail Boutiques", desc: "Branded shopping bags that customers reuse — free advertising." },
      { title: "Trade Shows & Events", desc: "Large-format bags that hold brochures, samples, and swag." },
      { title: "Gift / Holiday", desc: "Seasonal designs with rope handles — customers keep them for years." },
      { title: "Food & Bakery", desc: "Food-safe coated paper bags for takeaway and deli." },
    ],
    seoKeywords: "custom paper bags with logo, eco friendly retail shopping bags, kraft paper bags wholesale, FSC certified paper bags",
  },
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products[params.slug as keyof typeof products]
  if (!product) return {}
  return {
    title: `${product.name} | BUpack`,
    description: `${product.tagline} ${product.overview}`,
    keywords: product.seoKeywords,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products]
  if (!product) notFound()

  return (
    <div className="min-h-screen">
      <ProductSchema
        name={product.name}
        description={product.overview}
        image={product.heroImage}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://bupackeco.com" },
          { name: "Products", url: "https://bupackeco.com/products" },
          { name: product.name, url: `https://bupackeco.com/products/${params.slug}` },
        ]}
      />
      {/* Hero */}
      <section className={`relative bg-gradient-to-br ${product.color} text-white py-24 pt-32`}>
        <div className="absolute inset-0 opacity-20">
          <Image src={product.heroImage} alt={product.name} fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <a href="/products" className="text-white/70 hover:text-white text-sm mb-4 inline-block">← All Products</a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">{product.tagline}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{product.overview}</p>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-xs text-green-700 font-bold uppercase tracking-wider mb-3">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                </div>
                {Array.isArray(value) ? (
                  <ul className="space-y-1">
                    {value.map((v) => (
                      <li key={v} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span> {v}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-800 font-medium text-sm">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Perfect For</h2>
          <p className="text-center text-gray-500 mb-12">These are the most common ways our customers use this product.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.useCases.map((uc) => (
              <div key={uc.title} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-bold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-green-100 mb-8 text-lg">Get free samples and a custom quote in 24 hours. No MOQ surprises.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition">Get Free Samples</a>
            <a href="/industries" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold text-lg transition">See Industry Examples</a>
          </div>
        </div>
      </section>
    </div>
  )
}
