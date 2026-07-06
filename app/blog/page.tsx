import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import { INITIAL_POSTS, BLOG_CATEGORIES } from "@/lib/data/blogs";

export const metadata: Metadata = {
  title: "Packaging Blog – Tips for eCommerce Brands | BUpack",
  description:
    "Actionable packaging guides: unboxing experience, sustainable packaging, subscription box design and more.",
  alternates: {
    canonical: "https://www.bupackeco.com/blog",
  },
  openGraph: {
    title: "Packaging Blog – Tips for eCommerce Brands | BUpack",
    description:
      "Actionable packaging guides for DTC brands: unboxing, sustainability, costs, subscription box design.",
    url: "https://www.bupackeco.com/blog",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packaging Blog – Tips for eCommerce Brands | BUpack",
    description:
      "Actionable packaging guides for DTC brands: unboxing, sustainability, costs, subscription box design.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

const posts = INITIAL_POSTS;

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com" },
          { name: "Blog", url: "https://www.bupackeco.com/blog" },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">The BUpack Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Packaging Insights for eCommerce Brands</h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Actionable guides on unboxing experience, sustainable packaging, and DTC growth strategy.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto py-3">
          {["All", ...BLOG_CATEGORIES].map((c) => (
            <button
              key={c}
              className="flex-shrink-0 text-sm font-medium px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-colors"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="group block mb-14">
              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 p-8 md:p-10 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="text-7xl flex-shrink-0">{featured.emoji}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                      <span className="text-xs text-gray-500">{featured.category} · {featured.date} · {featured.readTime} read</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm group-hover:gap-2 transition-all">
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <h2 className="text-xl font-bold text-gray-900 mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-green-200 transition-all"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center py-10">
                  <span className="text-5xl">{post.emoji}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full border border-green-100 mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="text-xs text-gray-400">{post.date} · {post.readTime} read</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 px-4 bg-[#f9fdf8] border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get packaging tips in your inbox</h2>
          <p className="text-gray-500 mb-6">Monthly insights for eCommerce founders. No spam.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@brand.com"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-700 text-white font-semibold px-5 py-3 rounded-xl hover:bg-green-600 transition-colors text-sm whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
