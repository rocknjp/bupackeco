import Script from "next/script";

/**
 * JSON-LD Schema.org structured data for SEO.
 * Add to layout.tsx (site-wide) or per-page for page-specific schemas.
 */
export function SiteSchema() {
  const baseUrl = "https://www.bupackeco.com";
  return (
    <>
      {/* Organization */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BUpack",
            alternateName: [
              "Bejan Giant New Packaging",
              "BEJAN GIANT",
              "Qingdao Bejan Giant New Packaging Science and Technology Co., Ltd.",
              "BUpack Packaging",
            ],
            url: baseUrl,
            logo: `${baseUrl}/images/bupack-logo.png`,
            description:
              "FSC-certified custom paper boxes and bags manufacturer for DTC and eCommerce brands. Low MOQ from 100 units, owned factory in Qingdao, ships to North America.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "No. 96, Tianfeng North Road, Chengyang District",
              addressLocality: "Qingdao",
              addressRegion: "Shandong",
              addressCountry: "CN",
            },
            areaServed: [
              { "@type": "Country", name: "US" },
              { "@type": "Country", name: "CA" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "Canada" },
            ],
            makesOffer: {
              "@type": "Offer",
              priceCurrency: "USD",
              eligibleRegion: "US",
              description: "Wholesale custom packaging, MOQ from 100 units",
            },
            sameAs: [
              "https://www.bzpackage.com",
              "https://bzpackage.en.alibaba.com",
              "https://www.qingdaobaina.com",
              "https://www.linkedin.com/company/bejan-giant-new-packaging",
              "https://www.tiktok.com/@bejangiant",
              "https://www.youtube.com/@BejanGiantNewPackaging",
              "https://x.com/BejanGiant",
              "https://www.facebook.com/BejanGiant",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "hello@qingdaobaina.com",
              availableLanguage: ["English", "Chinese"],
            },
            knowsAbout: [
              "Custom Packaging",
              "Eco-Friendly Boxes",
              "Paper Bags",
              "DTC Packaging",
              "Sustainable Packaging",
              "FSC Certified Packaging",
              "Low MOQ Packaging",
            ],
          }),
        }}
      />

      {/* WebSite + SearchAction */}
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "BUpack",
            url: baseUrl,
            description:
              "Custom eco-friendly paper packaging for growing eCommerce brands. FSC-certified boxes and bags with low MOQ.",
            potentialAction: {
              "@type": "SearchAction",
              target: `${baseUrl}/blog?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}

/** Page-specific Product schema — supports wholesale MOQ + price */
export function ProductSchema({
  name,
  description,
  image,
  brand = "BUpack",
  offers,
}: {
  name: string;
  description: string;
  image: string;
  brand?: string;
  offers?: {
    price: string;
    priceCurrency?: string;
    moq?: number;
    url?: string;
    availability?: string;
  };
}) {
  const baseUrl = "https://www.bupackeco.com";
  return (
    <Script
      id="schema-product"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name,
          description,
          image: image.startsWith("http") ? image : `${baseUrl}${image}`,
          brand: { "@type": "Brand", name: brand },
          ...(offers && {
            offers: {
              "@type": "Offer",
              price: offers.price,
              priceCurrency: offers.priceCurrency || "USD",
              ...(offers.moq && {
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: offers.moq,
                  unitText: "units",
                },
              }),
              availability: offers.availability || "https://schema.org/InStock",
              ...(offers.url && { url: offers.url }),
              priceValidUntil: "2026-12-31",
              areaServed: { "@type": "Country", name: "US" },
            },
          }),
        }),
      }}
    />
  );
}

/** FAQPage schema — pass items [{ question, answer }] */
export function FAQSchema({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <Script
      id="schema-faq"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }),
      }}
    />
  );
}

/** BreadcrumbList schema */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <Script
      id="schema-breadcrumb"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.url.startsWith("http") ? item.url : `https://www.bupackeco.com${item.url}`,
          })),
        }),
      }}
    />
  );
}

/** Article schema for blog posts */
export function ArticleSchema({
  headline,
  description,
  datePublished,
  authorName = "BUpack Team",
  image,
  dateModified,
  url,
}: {
  headline: string;
  description: string;
  datePublished: string;
  authorName?: string;
  image?: string;
  dateModified?: string;
  url?: string;
}) {
  const pageUrl = url
    ? (url.startsWith("http") ? url : `https://www.bupackeco.com${url}`)
    : "https://www.bupackeco.com";
  return (
    <Script
      id="schema-article"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline,
          description,
          datePublished,
          ...(dateModified && { dateModified }),
          author: {
            "@type": "Organization",
            name: authorName,
            url: "https://www.bupackeco.com",
          },
          publisher: {
            "@type": "Organization",
            name: "BUpack",
            logo: {
              "@type": "ImageObject",
              url: "https://www.bupackeco.com/images/bupack-logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": pageUrl,
          },
          ...(image && {
            image: image.startsWith("http") ? image : `https://www.bupackeco.com${image}`,
          }),
        }),
      }}
    />
  );
}

/** ContactPage schema */
export function ContactPageSchema() {
  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "BUpack",
              url: "https://www.bupackeco.com",
              logo: "https://www.bupackeco.com/images/factory_workshop.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+86-150-6426-0757",
                contactType: "customer service",
                availableLanguage: ["English", "Chinese"],
                areaServed: ["North America", "Europe", "Asia"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 96, Tianfeng North Road",
                addressLocality: "Chengyang District",
                addressRegion: "Qingdao",
                addressCountry: "CN",
              },
              sameAs: [
                "https://www.linkedin.com/company/bupack",
                "https://www.instagram.com/bupack",
              ],
            },
          }),
        }}
      />
      <FAQSchema
        items={[
          {
            question: "What is the minimum order quantity for custom packaging at BUpack?",
            answer: "BUpack offers a low minimum order quantity of just 100 pieces, making it ideal for small and growing ecommerce brands.",
          },
          {
            question: "Are BUpack's packaging materials eco-friendly?",
            answer: "Yes, all BUpack packaging uses FSC-certified paper, soy-based inks, and plastic-free materials. We are committed to 100% sustainable packaging solutions.",
          },
          {
            question: "How long does production take at BUpack?",
            answer: "Production lead time is typically 15-20 business days after sample confirmation. Shipping to North America takes 7-12 days via DDP service.",
          },
          {
            question: "Does BUpack ship internationally?",
            answer: "Yes, BUpack ships to North America, Europe, and other global markets. We offer DDP (Delivered Duty Paid) shipping to simplify customs clearance.",
          },
        ]}
      />
    </>
  );
}

/** CollectionPage schema for products */
export function CollectionPageSchema({
  name,
  description,
  products,
}: {
  name: string;
  description: string;
  products: Array<{
    name: string;
    description: string;
    image: string;
    url: string;
  }>;
}) {
  return (
    <Script
      id="schema-collection"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name,
          description,
          url: "https://www.bupackeco.com/products",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: product.name,
                description: product.description,
                image: product.image.startsWith("http")
                  ? product.image
                  : `https://www.bupackeco.com${product.image}`,
                url: product.url.startsWith("http")
                  ? product.url
                  : `https://www.bupackeco.com${product.url}`,
              },
            })),
          },
        }),
      }}
    />
  );
}
