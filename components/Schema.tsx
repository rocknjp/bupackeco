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
            url: baseUrl,
            logo: `${baseUrl}/images/factory_workshop.jpg`,
            description:
              "FSC-certified custom paper boxes and bags for DTC and eCommerce brands. Low MOQ, eco-friendly, ships to North America.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "CN",
            },
            sameAs: [
              "https://www.linkedin.com/company/bupack",
              "https://www.instagram.com/bupack",
            ],
            knowsAbout: [
              "Custom Packaging",
              "Eco-Friendly Boxes",
              "Paper Bags",
              "DTC Packaging",
              "Sustainable Packaging",
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

/** Page-specific Product schema */
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
  offers?: { price: string; priceCurrency?: string; url?: string };
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
              ...(offers.url && { url: offers.url }),
              availability: "https://schema.org/InStock",
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
}: {
  headline: string;
  description: string;
  datePublished: string;
  authorName?: string;
  image?: string;
}) {
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
          author: {
            "@type": "Organization",
            name: authorName,
          },
          publisher: {
            "@type": "Organization",
            name: "BUpack",
            logo: {
              "@type": "ImageObject",
              url: "https://www.bupackeco.com/images/factory_workshop.jpg",
            },
          },
          ...(image && {
            image: image.startsWith("http") ? image : `https://www.bupackeco.com${image}`,
          }),
        }),
      }}
    />
  );
}
