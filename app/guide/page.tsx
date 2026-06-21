import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Packaging Guides for Ecommerce Brands | BUpack",
  description:
    "Expert guides on custom packaging sourcing, compliance, cost optimization, and supplier evaluation for US ecommerce brands. Free toolkits, templates, and real case studies.",
  alternates: {
    canonical: "https://www.bupackeco.com/guide",
  },
  openGraph: {
    title: "Packaging Guides for Ecommerce Brands | BUpack",
    description:
      "Expert guides on custom packaging sourcing, compliance, cost optimization, and supplier evaluation for US ecommerce brands. Free toolkits, templates, and real case studies.",
    url: "https://www.bupackeco.com/guide",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Guides for Ecommerce Brands | BUpack",
    description:
      "Expert guides on custom packaging sourcing, compliance, cost optimization, and supplier evaluation for US ecommerce brands. Free toolkits, templates, and real case studies.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const guides = [
  {
    title: "The Ultimate Ecommerce Packaging Sourcing Guide",
    description:
      "9-chapter definitive guide covering MOQ, sampling timelines, supplier evaluation, FSC compliance, cost optimization, real case studies, FAQ, and procurement toolkits. 14,000+ words of expert content.",
    href: "/guide/ecommerce-packaging-sourcing",
    chapters: 9,
    words: "14,000+",
    tags: ["MOQ", "Sampling", "Compliance", "Cost", "Case Studies", "FAQ"],
  },
];

export default function GuideIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Guides", url: "https://www.bupackeco.com/guide" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Packaging Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Expert Guides for Ecommerce Packaging
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto leading-relaxed">
            In-depth resources to help US brands source, evaluate, and optimize custom paper packaging — with data, templates, and real case studies.
          </p>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block bg-white rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-3">
                    {guide.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{guide.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center gap-2 md:ml-6">
                  <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                    <div className="text-2xl font-bold text-green-700">{guide.chapters}</div>
                    <div className="text-xs text-green-600">Chapters</div>
                  </div>
                  <div className="text-sm text-gray-400">{guide.words} words</div>
                </div>
              </div>
              <div className="mt-4 flex items-center text-green-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Read the Guide
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Low MOQ Guide", desc: "Start from 100 units with full customization", href: "/moq-guide" },
              { title: "FAQ", desc: "12 frequently asked questions answered", href: "/faq" },
              { title: "Case Studies", desc: "Real DTC brand packaging results", href: "/case-studies" },
            ].map((res) => (
              <Link
                key={res.href}
                href={res.href}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-400 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors mb-2">
                  {res.title}
                </h3>
                <p className="text-sm text-gray-500">{res.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Packaging Project?</h2>
          <p className="text-green-100 mb-8 text-lg leading-relaxed">
            Our packaging specialists are here to help. Get a personalized quote, free digital proof,
            or just talk through your needs — we reply within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
