import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Packaging Blog – Tips for eCommerce Brands | BUpack",
  description:
    "Actionable packaging guides for DTC and eCommerce brands: unboxing experience, sustainable packaging, reducing costs, subscription box design and more.",
};

const categories = ["All", "Unboxing Experience", "Sustainability", "DTC Strategy", "Packaging 101"];

const posts = [
  {
    slug: "switch-plastic-to-paper-packaging-dtc-guide",
    title: "How to Switch from Plastic to Paper Packaging: A Practical Guide for DTC Brands",
    excerpt:
      "DTC brands investing in sustainable packaging see a 24% higher LTV and 18% lower return rates. Here's the step-by-step transition plan — from audit to full rollout.",
    category: "Sustainability",
    date: "June 7, 2026",
    readTime: "7 min",
    featured: true,
    emoji: "♻️",
  },
  {
    slug: "unboxing-experience-drives-dtc-growth",
    title: "Why Your Unboxing Experience Is Your Most Underrated Marketing Channel",
    excerpt:
      "Unboxing videos generate over 10 billion YouTube views per year. Here's how DTC brands are turning packaging into a repeatable growth loop — and how to engineer yours.",
    category: "Unboxing Experience",
    date: "May 28, 2025",
    readTime: "9 min",
    featured: false,
    emoji: "📱",
  },
  {
    slug: "eco-packaging-guide-dtc-brands-2025",
    title: "The eCommerce Brand's Guide to Sustainable Packaging in 2025",
    excerpt:
      "What FSC-certified, soy ink, compostable, and plastic-free actually mean — and how to choose the right eco credentials for your brand without greenwashing.",
    category: "Sustainability",
    date: "May 15, 2025",
    readTime: "7 min",
    featured: false,
    emoji: "🌿",
  },
  {
    slug: "subscription-box-packaging-design",
    title: "How to Design Subscription Box Packaging That Reduces Churn",
    excerpt:
      "Monthly subscription brands with premium packaging see up to 40% higher 3-month retention. Here's the design framework top brands use.",
    category: "DTC Strategy",
    date: "Apr 30, 2025",
    readTime: "6 min",
    featured: false,
    emoji: "🎁",
  },
  {
    slug: "custom-packaging-low-moq-guide",
    title: "How to Order Custom Packaging with Low MOQ: A Complete Walkthrough",
    excerpt:
      "Think you need 10,000 units to afford custom packaging? Think again. Here's how to get premium custom boxes starting at 100 units — and what to watch out for.",
    category: "Packaging 101",
    date: "Apr 12, 2025",
    readTime: "8 min",
    featured: false,
    emoji: "📦",
  },
  {
    slug: "packaging-impacts-product-reviews",
    title: "The Direct Link Between Packaging Quality and Your Amazon Reviews",
    excerpt:
      "A study of 500 Amazon listings found that products with premium packaging had 23% more 5-star reviews. Here's what the data says.",
    category: "DTC Strategy",
    date: "Mar 25, 2025",
    readTime: "5 min",
    featured: false,
    emoji: "⭐",
  },
  {
    slug: "kraft-paper-vs-coated-paper",
    title: "Kraft Paper vs. Coated Paper: Which Is Right for Your Brand?",
    excerpt:
      "Natural kraft or polished coated — both say something about your brand. Here's how to choose, plus the real sustainability difference between the two.",
    category: "Packaging 101",
    date: "Mar 10, 2025",
    readTime: "5 min",
    featured: false,
    emoji: "📄",
  },
  {
    slug: "china-vs-us-packaging-manufacturer",
    title: "China vs US Custom Packaging Manufacturers: Cost, Quality & Lead Time Compared",
    excerpt:
      "Should you source custom packaging from China or the US? This data-driven comparison covers unit costs, quality standards, lead times, certifications, MOQ, and hidden fees — so you can make the right call for your brand.",
    category: "DTC Strategy",
    date: "June 5, 2026",
    readTime: "10 min",
    featured: false,
    emoji: "🌏",
  },
  {
    slug: "custom-packaging-cost-guide",
    title: "How Much Does Custom Packaging Cost? Complete Pricing Guide for DTC Brands",
    excerpt:
      "A transparent breakdown of custom packaging costs by product type, volume, and finishing — plus the hidden fees most suppliers won't mention and 7 proven strategies to cut costs without sacrificing quality.",
    category: "Packaging 101",
    date: "May 20, 2026",
    readTime: "9 min",
    featured: false,
    emoji: "💰",
  },
];

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
          {categories.map((c) => (
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
