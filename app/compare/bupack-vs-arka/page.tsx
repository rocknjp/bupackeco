import Link from "next/link";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "BUpack vs Arka: Custom Packaging Comparison (MOQ, Price, Certifications) | BUpack",
  description:
    "Detailed comparison of BUpack vs Arka for custom packaging. MOQ, pricing, lead time, certifications, DDP shipping, factory capacity, and product range — side by side.",
  alternates: { canonical: "https://www.bupackeco.com/compare/bupack-vs-arka" },
};

const comparison = [
  { feature: "MOQ — Folding Cartons", bupack: "100 pcs", arka: "100 pcs" },
  { feature: "MOQ — Rigid Boxes", bupack: "500 pcs", arka: "500 pcs" },
  { feature: "Unit Price (1,000 pcs mailer box)", bupack: "$1.00–1.50", arka: "$2.50–4.00" },
  { feature: "Production Lead Time", bupack: "7–25 days", arka: "7–14 days" },
  { feature: "Factory Location", bupack: "Qingdao, China (owned)", arka: "California, USA" },
  { feature: "Daily Capacity", bupack: "50,000+ pcs", arka: "~5,000 pcs" },
  { feature: "DDP Shipping to US", bupack: "Yes (included in quote)", arka: "N/A (domestic)" },
  { feature: "FSC Certified", bupack: "Yes", arka: "Yes" },
  { feature: "ISO 9001", bupack: "Yes", arka: "—" },
  { feature: "Sedex / SMETA", bupack: "Yes", arka: "—" },
  { feature: "SGS Tested", bupack: "Yes", arka: "Yes" },
  { feature: "Foiling / Embossing / Spot UV", bupack: "Yes (all)", arka: "Yes (limited)" },
  { feature: "Custom Inserts (EVA/pulp)", bupack: "Yes (in-house)", arka: "Limited" },
  { feature: "Interior Printing", bupack: "Yes (standard)", arka: "Yes (+15% cost)" },
  { feature: "Structure R&D", bupack: "1 new structure/week", arka: "Standard templates" },
  { feature: "Sampling Speed", bupack: "Material: same day, Print: 3 days", arka: "3–5 days" },
  { feature: "Enterprise Clients", bupack: "HUAWEI, Chivas", arka: "DTC brands" },
  { feature: "Total Landed Cost (5K units)", bupack: "~$0.70–2.50/pc (DDP)", arka: "~$3.00–6.00/pc" },
];

export default function BupackVsArkaPage() {
  return (
    <>
      <ArticleSchema
        headline="BUpack vs Arka: Custom Packaging Supplier Comparison"
        description="Side-by-side comparison of BUpack and Arka for custom packaging sourcing. MOQ, pricing, lead time, certifications, DDP shipping, and production capacity."
        datePublished="2025-06-23"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Compare", url: "https://www.bupackeco.com/compare/bupack-vs-arka" },
        ]}
      />

      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Supplier Comparison</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">BUpack vs Arka: Which Custom Packaging Supplier Is Right for You?</h1>
          <p className="text-green-200 text-lg leading-relaxed">A data-driven comparison across 18 dimensions — MOQ, pricing, lead time, certifications, and total landed cost.</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-green-700">BUpack (Bejan)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Arka</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-4 py-3 text-gray-700">{row.bupack}</td>
                    <td className="px-4 py-3 text-gray-700">{row.arka}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Choose BUpack</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Your order volume is 1,000+ units and total landed cost matters</li>
            <li>You need custom inserts, structural design, or luxury finishes (foiling, embossing)</li>
            <li>You want DDP shipping — no customs hassle, no surprise fees</li>
            <li>You need FSC + ISO 9001 + Sedex certification stack for retailer compliance</li>
            <li>Your production capacity needs exceed 5,000 units/day</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Choose Arka</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>You need US-domestic production for fastest delivery (7–14 days)</li>
            <li>Your order is under 500 units and unit price is secondary to speed</li>
            <li>You want to avoid international shipping entirely</li>
            <li>You prioritize US-made branding for your marketing story</li>
          </ul>

          <blockquote className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded-r-lg my-6 italic text-gray-700">
            <strong>Bottom Line:</strong> For orders above 1,000 units, BUpack's DDP landed cost is typically 40–60% lower than Arka. For orders under 500 units where speed is critical, Arka's domestic production wins. Many DTC brands use both — Arka for launches, BUpack for scale.
          </blockquote>

          <div className="flex gap-4 mt-8">
            <Link href="/contact" className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">Get a DDP Quote</Link>
            <Link href="/guide/ecommerce-packaging-sourcing" className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl font-semibold transition-colors">Read the Full Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
