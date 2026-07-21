import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BUpack",
  description: "BUpack terms of service. Conditions for using bupackeco.com and ordering custom packaging from BUpack Eco Packaging Co., Ltd.",
  alternates: {
    canonical: "https://www.bupackeco.com/terms/",
  },
  openGraph: {
    title: "Terms of Service | BUpack",
    description: "BUpack terms of service. Conditions for using our website and ordering custom packaging.",
    url: "https://www.bupackeco.com/terms",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | BUpack",
    description: "BUpack terms of service. Conditions for using our website and ordering custom packaging.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-green-200">Last updated: June 13, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using bupackeco.com (&quot;the Website&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Website or services.</p>

          <h2>2. Services</h2>
          <p>BUpack Eco Packaging Co., Ltd. (&quot;BUpack&quot;) provides custom paper packaging manufacturing services, including but not limited to custom printed boxes, paper bags, and related packaging solutions. All services are subject to the terms outlined herein.</p>

          <h2>3. Orders and Pricing</h2>
          <ul>
            <li>All quotes are valid for 30 days from the date of issuance.</li>
            <li>Minimum order quantities (MOQ) apply as stated on product pages or quotes.</li>
            <li>Prices are in USD unless otherwise specified and do not include shipping, taxes, or customs duties.</li>
            <li>BUpack reserves the right to adjust pricing due to material cost fluctuations.</li>
          </ul>

          <h2>4. Samples</h2>
          <p>We offer sampling services before full production. Sample costs and timelines are provided at the time of request. Sample fees may be credited toward production orders.</p>

          <h2>5. Production and Delivery</h2>
          <ul>
            <li>Production timelines are estimates and may vary based on order complexity and volume.</li>
            <li>Shipping timelines depend on the selected carrier and destination.</li>
            <li>BUpack is not responsible for delays caused by carriers, customs, or force majeure events.</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <ul>
            <li>All content on bupackeco.com, including text, images, and designs, is the property of BUpack or its licensors.</li>
            <li>Customers retain ownership of their own logos and artwork provided to BUpack for production.</li>
            <li>BUpack may display completed work in our portfolio unless otherwise agreed in writing.</li>
          </ul>

          <h2>7. Warranty and Returns</h2>
          <ul>
            <li>We warrant that products will conform to approved samples and specifications.</li>
            <li>Claims for defective products must be submitted within 7 days of receipt with photographic evidence.</li>
            <li>Custom-manufactured products cannot be returned for reasons of style or buyer&apos;s remorse.</li>
          </ul>

          <h2>8. Limitation of Liability</h2>
          <p>BUpack&apos;s total liability for any claim shall not exceed the amount paid by the customer for the specific order in question. We are not liable for indirect, incidental, or consequential damages.</p>

          <h2>9. Governing Law</h2>
          <p>These terms are governed by the laws of the People&apos;s Republic of China. Any disputes shall be resolved through negotiation first, and if unresolved, submitted to the jurisdiction of courts in Qingdao, Shandong, China.</p>

          <h2>10. Modifications</h2>
          <p>BUpack reserves the right to modify these Terms of Service at any time. Continued use of the Website after modifications constitutes acceptance of the updated terms.</p>

          <h2>11. Contact</h2>
          <p>For questions about these terms, please contact us:</p>
          <ul>
            <li>Email: <a href="mailto:hello@qingdaobaina.com" className="text-green-700 hover:underline">hello@qingdaobaina.com</a></li>
            <li>Address: No. 268, Haier Road, Laoshan District, Qingdao, Shandong, China 266100</li>
          </ul>
        </div>
      </section>

      {/* Back */}
      <section className="py-8 px-4 bg-gray-50 text-center">
        <Link href="/" className="text-green-700 hover:underline font-medium">← Back to Home</Link>
      </section>
    </div>
  );
}
