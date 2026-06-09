import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";

// ============================================================
// Blog post data — shared with /blog page.tsx
// ============================================================
const posts = [
  {
    slug: "unboxing-experience-drives-dtc-growth",
    title: "Why Your Unboxing Experience Is Your Most Underrated Marketing Channel",
    excerpt:
      "Unboxing videos generate over 10 billion YouTube views per year. Here's how DTC brands are turning packaging into a repeatable growth loop — and how to engineer yours.",
    category: "Unboxing Experience",
    date: "May 28, 2025",
    readTime: "9 min",
    emoji: "📱",
    body: `
## The Unboxing Moment Is Marketing Gold

Unboxing isn't just about revealing a product — it's a content-creation moment. With over **10 billion cumulative views** on YouTube for unboxing videos, your packaging is generating free user-generated content (UGC) every time a customer films their experience.

For DTC brands, this is a compounding growth engine:

1. **Customer receives beautifully packaged product** → emotional delight
2. **Customer films unboxing** → shares on TikTok/Instagram/YouTube
3. **Viewers see the branded packaging** → brand awareness and trust
4. **New customers place orders** → cycle repeats

### What Makes a Great Unboxing Experience?

The best unboxing experiences share three characteristics:

**1. Layered Reveal**
Don't dump everything at once. Use tissue paper, stickers, inserts, and inner boxes to build anticipation. Each layer should feel intentional — not wasteful.

**2. Brand Storytelling**
Your packaging is a physical touchpoint. Include a thank-you card, brand story insert, or sustainability message that reinforces why your brand exists. Glossier and Allbirds are masters at this.

**3. Practical Reusability**
Boxes that can be repurposed (storage, gift wrapping, drawer organizers) extend your brand presence in the customer's home. A box that's kept is a box that keeps advertising.

### Engineering Your Unboxing for Your Budget

| Brand Stage | Budget-Friendly Approach | Premium Approach |
|-------------|-------------------------|-------------------|
| Startup (100-500 units) | Custom printed tissue + branded sticker seal | Foil-stamped rigid box + magnetic closure |
| Growth (500-5,000 units) | Full-color printed mailer + custom insert card | Double-layer box with ribbon pull |
| Scaling (5,000+ units) | Custom inner structure + seasonal variations | Multi-piece gift set with velvet inserts |

### The ROI Math

Consider this: if each unboxing video reaches 500 views, and you ship 1,000 orders per month, that's **500,000 monthly brand impressions** — without spending a dollar on ads.

The question isn't whether you can afford premium packaging. It's whether you can afford *not* to invest in it.

### How BUpack Helps

We work with DTC brands at every stage — from 100-unit test runs to 50,000-unit monthly subscriptions. Our design team helps you optimize the unboxing flow while keeping costs manageable. Flexible MOQ means you can start small and scale with confidence.
`,
  },
  {
    slug: "eco-packaging-guide-dtc-brands-2025",
    title: "The eCommerce Brand's Guide to Sustainable Packaging in 2025",
    excerpt:
      "What FSC-certified, soy ink, compostable, and plastic-free actually mean — and how to choose the right eco credentials for your brand without greenwashing.",
    category: "Sustainability",
    date: "May 15, 2025",
    readTime: "7 min",
    emoji: "🌿",
    body: `
## Sustainability Without Greenwashing

Sustainability is no longer optional for eCommerce brands. According to McKinsey, **60% of consumers** say they'd pay more for products in sustainable packaging. But the eco-packaging landscape is full of confusing terms — and your customers can smell greenwashing from a mile away.

### Decoding Eco Packaging Certifications

| Certification | What It Means | Best For |
|---------------|---------------|----------|
| **FSC-Certified** | Paper sourced from responsibly managed forests | Any paper-based packaging |
| **Soy-Based Ink** | Printing ink made from soybeans instead of petroleum | Full-color printed boxes |
| **Compostable (EN 13432)** | Breaks down in industrial composting within 90 days | Food-contact packaging |
| **Recycled Content** | Box made from 70-100% post-consumer waste | Eco-conscious DTC brands |
| **Plastic-Free** | Zero plastic in packaging — including tape and windows | Brands targeting zero-waste consumers |

### The Real Cost Comparison

Many brands assume sustainable packaging costs more. The truth is nuanced:

- **FSC paper**: ~8-12% premium over standard paper, but the marketing ROI often outweighs the cost
- **Soy ink**: Comparable to petroleum ink at scale (5,000+ units)
- **Water-based coatings**: Slightly more than UV coating, but no VOC emissions
- **Kraft boxes**: Often *cheaper* than coated white boxes — and naturally more eco-friendly

### 3 Sustainability Strategies for DTC Brands

**Strategy 1: "Right-Size First"**
Before switching materials, optimize your box size. Oversized boxes waste material, increase shipping costs (dimensional weight), and look wasteful to customers. This alone can reduce packaging costs by 15-25%.

**Strategy 2: "One Material" Approach**
Design your entire packaging system from a single recyclable material (e.g., all kraft paper — no mixed materials). This makes recycling easy for your customer and simplifies your supply chain.

**Strategy 3: "Communicate, Don't Preach"**
Instead of lecturing customers about sustainability, add a small note: "This box is 100% recyclable and printed with soy ink." Let the quality speak for itself.

### BUpack's Eco Capabilities

All our boxes are available in FSC-certified paper with soy-based ink and water-based coatings. We offer plastic-free options including paper tape and cellulose windows. Flexible MOQ starting from 100 units.
`,
  },
  {
    slug: "subscription-box-packaging-design",
    title: "How to Design Subscription Box Packaging That Reduces Churn",
    excerpt:
      "Monthly subscription brands with premium packaging see up to 40% higher 3-month retention. Here's the design framework top brands use.",
    category: "DTC Strategy",
    date: "Apr 30, 2025",
    readTime: "6 min",
    emoji: "🎁",
    body: `
## Packaging Is Your Silent Retention Tool

Subscription businesses live and die by retention. And while product quality and curation matter most, **packaging plays a surprisingly large role** in whether customers stick around.

Research shows that subscription brands with premium packaging see up to **40% higher 3-month retention rates**. Why? Because the monthly unboxing is the *only physical touchpoint* between your brand and your subscriber.

### The Subscription Packaging Design Framework

**1. The Outer Box — First Impression**
This is what sits on the doorstep. It needs to:
- Arrive undamaged (corrugated mailer or rigid box with padding)
- Look professional — branded exterior builds anticipation
- Be easy to open — no one wants to wrestle with tape for 2 minutes

**2. The Inner Reveal — The "Wow" Layer**
Tissue paper, branded inserts, and compartmentalized layouts transform opening from a chore into an experience. FabFitFun and BarkBox are masters of this.

**3. The Information Card — Why This Month's Curation**
A small card explaining the theme, product stories, and what's coming next month gives context and builds excitement for the next box.

**4. The Reorder / Referral Hook**
Include a QR code or discount code for add-on purchases or referrals. This turns packaging into a direct revenue driver.

### Cost-Effective Subscription Packaging

| Monthly Volume | Recommended Box Type | Estimated Unit Cost |
|----------------|---------------------|---------------------|
| 100-500 | Custom printed mailer box | $1.50-3.00 |
| 500-2,000 | Branded corrugated box + insert | $1.00-2.00 |
| 2,000-10,000 | Full custom with compartments | $0.70-1.50 |
| 10,000+ | High-volume optimized design | $0.50-1.00 |

### Seasonal Variations on a Budget

You don't need a completely new box for every season. Smart approaches:
- **Change the insert card** — cheapest seasonal refresh
- **Switch tissue paper color** — holiday red, spring pastel
- **Add a themed sticker seal** — costs pennies, big impact

### BUpack for Subscription Brands

We specialize in subscription box design with flexible MOQ. Whether you're a startup shipping 100 boxes/month or an established brand doing 20,000+, we can design a system that balances unboxing impact with unit economics.
`,
  },
  {
    slug: "custom-packaging-low-moq-guide",
    title: "How to Order Custom Packaging with Low MOQ: A Complete Walkthrough",
    excerpt:
      "Think you need 10,000 units to afford custom packaging? Think again. Here's how to get premium custom boxes starting at 100 units — and what to watch out for.",
    category: "Packaging 101",
    date: "Apr 12, 2025",
    readTime: "8 min",
    emoji: "📦",
    body: `
## Low MOQ Custom Packaging Is Real

If you've been told you need to order 5,000 or 10,000 units for custom packaging, you've been talking to the wrong suppliers. **Low MOQ custom packaging** is not only possible — it's increasingly the norm for DTC brands.

### What "Low MOQ" Actually Means

In the packaging industry, "low MOQ" generally means **100 to 500 units per design**. This is achievable because of digital printing technology, which eliminates the need for expensive printing plates.

### The Low MOQ Packaging Process

**Step 1: Define Your Box Specs**
- Dimensions (L × W × H in mm or inches)
- Material (kraft, white coated, corrugated)
- Printing type (digital for low MOQ, offset for 3,000+)
- Finishing (matte/gloss lamination, foil stamping, embossing)

**Step 2: Prepare Your Artwork**
You'll need print-ready files (AI, PDF, or PSD) with:
- Dieline (cut line)
- Artwork within safe zone
- CMYK color mode, 300 DPI minimum
- 3mm bleed on all sides

**Step 3: Request a Digital Proof**
Always get a digital proof (PDF or physical sample) before production. Check:
- Color accuracy
- Text positioning
- Dieline alignment
- Barcode readability (if applicable)

**Step 4: Production & Shipping**
Digital print runs take 7-14 days for production. Add 7-21 days for ocean freight to the US, or 3-5 days for air freight (higher cost).

### Cost Breakdown: 200 Units Custom Mailer Box

| Item | Estimated Cost |
|------|---------------|
| Digital printing setup | $0 (no plate fees) |
| Box production (200 units) | $300-500 |
| Custom insert cards | $40-80 |
| Air freight to US | $120-200 |
| **Total** | **$460-780** |

That's **$2.30-3.90 per box** — shipped. Compare that to generic boxes at $1.50-2.00 each with no branding.

### Common Pitfalls to Avoid

1. **Wrong dimensions**: Always measure your product + 5mm padding on each side
2. **RGB vs CMYK**: Colors look different — always design in CMYK
3. **No dieline**: Without a dieline file, your printer can't cut the box
4. **Skipping the proof**: A $30 digital proof saves you from a $500 mistake
5. **Forgetting shipping time**: Ocean freight takes 3-4 weeks. Plan ahead.

### BUpack's Low MOQ Advantage

We offer flexible MOQ starting from 100 units. Digital printing, no plate fees, free digital proofs, and a dedicated project manager to guide you through the process. Contact us for a quote.
`,
  },
  {
    slug: "packaging-impacts-product-reviews",
    title: "The Direct Link Between Packaging Quality and Your Amazon Reviews",
    excerpt:
      "A study of 500 Amazon listings found that products with premium packaging had 23% more 5-star reviews. Here's what the data says.",
    category: "DTC Strategy",
    date: "Mar 25, 2025",
    readTime: "5 min",
    emoji: "⭐",
    body: `
## Packaging Drives Reviews — The Data Proves It

A comprehensive analysis of **500 Amazon listings** across beauty, home goods, and electronics categories revealed a striking pattern: products shipped in premium packaging received **23% more 5-star reviews** than identical products in generic packaging.

### Why Packaging Impacts Reviews

**1. The Halo Effect**
Customers unconsciously associate packaging quality with product quality. A beautifully packaged $30 candle feels like a $50 candle. This perception bias directly influences star ratings.

**2. Damage Prevention**
Damaged-on-arrival (DOA) is the #1 cause of 1-2 star reviews for physical products. Proper packaging eliminates this risk entirely. Corrugated mailer boxes with inner padding reduce DOA rates to near zero.

**3. The Unboxing Share**
Customers who have a positive unboxing experience are 3x more likely to leave a review — and they're more likely to include photos and videos, which makes the review more helpful (and higher-ranking) on Amazon.

### Review Impact by Packaging Tier

| Packaging Type | Avg. Star Rating | Review Rate | Photo/Video % |
|---------------|------------------|-------------|---------------|
| Generic poly mailer | 3.8 | 2.1% | 8% |
| Branded poly mailer | 4.1 | 3.5% | 14% |
| Custom mailer box | 4.4 | 5.2% | 28% |
| Premium gift box | 4.7 | 7.8% | 41% |

### The ROI Calculation

Say you sell 1,000 units/month at $35. Moving from generic to custom mailer box packaging:

- **Additional packaging cost**: ~$1.00/unit = $1,000/month
- **Review rate increase**: 2.1% → 5.2% = 31 more reviews/month
- **Star rating improvement**: 3.8 → 4.4
- **Conversion rate lift**: ~8-12% (based on Amazon's algorithm favoring higher-rated products)
- **Revenue impact**: ~$2,800-4,200 additional monthly revenue

That's a **3-4x ROI** on your packaging investment — just from the review effect alone.

### BUpack for Amazon Sellers

We work with FBA and FBM sellers to design packaging optimized for Amazon's fulfillment requirements. Durable construction, easy-open design, and branded presentation that drives reviews. FSC-certified materials available.
`,
  },
  {
    slug: "kraft-paper-vs-coated-paper",
    title: "Kraft Paper vs. Coated Paper: Which Is Right for Your Brand?",
    excerpt:
      "Natural kraft or polished coated — both say something about your brand. Here's how to choose, plus the real sustainability difference between the two.",
    category: "Packaging 101",
    date: "Mar 10, 2025",
    readTime: "5 min",
    emoji: "📄",
    body: `
## The Great Paper Debate

Kraft or coated? It's one of the first decisions you'll make when designing custom packaging — and it says a lot about your brand. Let's break down the real differences.

### Kraft Paper: Natural & Earthy

**What it is**: Unbleached paper made from wood pulp, typically brown with visible fibers.

**Best for**:
- Natural/organic/eco-focused brands
- Rustic, handmade, artisanal aesthetics
- Minimalist brands that want packaging to feel honest
- Food products (kraft is naturally food-safe)

**Pros**:
- Inherently eco-friendly (no bleaching chemicals)
- Lower cost than coated paper
- High tear resistance
- Accepts printing well (especially white ink on kraft)
- Natural texture adds tactile appeal

**Cons**:
- Limited color accuracy (brown base shifts colors)
- Photos don't reproduce as sharply
- Can look "cheap" if not designed well

### Coated Paper: Polished & Premium

**What it is**: Paper with a clay or polymer coating that creates a smooth, sealed surface.

**Best for**:
- Luxury/premium brands
- Cosmetics and beauty products
- Brands requiring photographic-quality printing
- High-end retail packaging

**Pros**:
- Vibrant, accurate color reproduction
- Sharp photo and fine-detail printing
- Available in matte, gloss, or soft-touch finishes
- Perceived as more premium
- Better moisture resistance

**Cons**:
- Higher cost (10-20% premium)
- Coating makes recycling slightly more complex
- Can look "corporate" if brand is more casual

### The Sustainability Reality

Both kraft and coated papers can be sustainable — the difference is in the details:

| Factor | Kraft | Coated |
|--------|-------|--------|
| Base material | Unbleached wood pulp | Bleached wood pulp |
| Recyclability | 100% recyclable | Recyclable (coating removed in pulping) |
| Carbon footprint | Lower (no bleaching) | Slightly higher |
| FSC available? | Yes | Yes |
| Soy ink compatible? | Yes | Yes |

### The Hybrid Approach

Many brands use **kraft exterior + coated interior** — natural look outside, vibrant printing inside. This gives you the best of both worlds: eco-friendly first impression with a premium unboxing reveal.

### Making the Choice

Ask yourself:
- What does my brand stand for? (earthy → kraft, luxury → coated)
- What's my budget? (kraft is 10-20% cheaper)
- What kind of printing do I need? (photos → coated, simple designs → kraft)
- What do my customers expect? (eco-conscious audience → kraft, premium audience → coated)

### BUpack Offers Both

We produce both kraft and coated paper boxes with FSC certification, soy-based inks, and water-based coatings. Not sure which is right? We'll send you samples of both so you can feel the difference.
`,
  },
];

// ============================================================
// Generate static params
// ============================================================
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// ============================================================
// Generate metadata
// ============================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | BUpack Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.bupackeco.com/blog/${slug}`,
    },
  };
}

// ============================================================
// Page component
// ============================================================
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  // Find related posts (same category, excluding current)
  const related = posts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  // Convert body markdown sections to HTML-like rendering
  const renderBody = (body: string) => {
    return body
      .split("\n")
      .map((line) => {
        if (line.startsWith("## ")) {
          return { type: "h2", content: line.replace("## ", "") };
        }
        if (line.startsWith("### ")) {
          return { type: "h3", content: line.replace("### ", "") };
        }
        if (line.startsWith("**") && line.includes("**")) {
          return { type: "bold", content: line };
        }
        if (line.startsWith("|")) {
          return { type: "table", content: line };
        }
        if (/^\d+\.\s/.test(line.trim())) {
          return { type: "list", content: line };
        }
        return { type: "p", content: line };
      })
      .filter((l) => l.content.trim() !== "");
  };

  const bodyElements = renderBody(post.body);

  // FAQ for Schema
  const faqItems = [
    {
      question: `What is "${post.title}" about?`,
      answer: post.excerpt,
    },
    {
      question: "How can BUpack help with my packaging needs?",
      answer: "BUpack offers custom paper packaging with flexible MOQ starting from 100 units, FSC-certified materials, and free digital proofs. Contact us for a quote tailored to your brand.",
    },
  ];

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        datePublished="2025-01-01"
        authorName="BUpack Team"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-green-400 text-sm hover:text-green-300 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-green-300 text-sm">
              {post.date} · {post.readTime} read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <p className="text-green-200 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-green max-w-none">
            {bodyElements.map((el, i) => {
              if (el.type === "h2") {
                return (
                  <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
                    {el.content}
                  </h2>
                );
              }
              if (el.type === "h3") {
                return (
                  <h3 key={i} className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                    {el.content}
                  </h3>
                );
              }
              if (el.type === "table") {
                const cells = el.content.split("|").filter((c) => c.trim());
                const isHeader = cells.every((c) => c.trim().startsWith("-") || c.trim().match(/^-{2,}$/));
                if (isHeader) return null;
                const isBold = cells.some((c) => c.includes("**"));
                return (
                  <div key={i} className={`grid grid-cols-${cells.length} gap-2 py-2 text-sm ${isBold ? "font-semibold bg-green-50 rounded-lg px-4 -mx-4" : "border-b border-gray-100 px-4"}`}>
                    {cells.map((cell, j) => (
                      <span key={j} className="text-gray-700">{cell.replace(/\*\*/g, "").trim()}</span>
                    ))}
                  </div>
                );
              }
              if (el.type === "list") {
                return (
                  <li key={i} className="text-gray-700 leading-relaxed ml-4 mb-1">
                    {el.content.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
                  </li>
                );
              }
              if (el.type === "bold") {
                return (
                  <p key={i} className="text-gray-700 leading-relaxed mb-3">
                    {el.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                  {el.content}
                </p>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border border-green-200 text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to upgrade your packaging?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Get custom packaging starting at 100 units. Free digital proofs, FSC-certified materials, flexible MOQ.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
              >
                Request Free Sample Kit →
              </Link>
              <a
                href="https://wa.me/8615064260757"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl border border-green-200 hover:bg-green-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all"
                  >
                    <span className="text-3xl flex-shrink-0">{rp.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors text-sm leading-snug mb-1">
                        {rp.title}
                      </h4>
                      <span className="text-xs text-gray-400">{rp.date} · {rp.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-[#f9fdf8] border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Get packaging tips in your inbox</h2>
          <p className="text-gray-500 mb-6">Monthly insights for eCommerce founders. No spam.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
