import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BUpack",
  description: "BUpack privacy policy. How we collect, use, and protect your personal information when you visit bupackeco.com or request a packaging quote.",
  alternates: {
    canonical: "https://www.bupackeco.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | BUpack",
    description: "BUpack privacy policy. How we collect, use, and protect your personal information.",
    url: "https://www.bupackeco.com/privacy",
    siteName: "BUpack",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.bupackeco.com/images/bupack-og-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | BUpack",
    description: "BUpack privacy policy. How we collect, use, and protect your personal information.",
    images: ["https://www.bupackeco.com/images/bupack-og-hero.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-green-200">Last updated: June 13, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
          <h2>1. Information We Collect</h2>
          <p>When you visit our website or contact us for a packaging quote, we may collect the following information:</p>
          <ul>
            <li><strong>Contact Information</strong>: Name, email address, phone number, and company name.</li>
            <li><strong>Project Details</strong>: Packaging specifications, order quantities, and design requirements.</li>
            <li><strong>Website Usage Data</strong>: Pages visited, time spent, browser type, and IP address collected via cookies and analytics tools.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide packaging quotes</li>
            <li>Process and fulfill your orders</li>
            <li>Improve our website and services</li>
            <li>Send relevant updates about our products (with your consent)</li>
            <li>Comply with legal requirements</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share information with:</p>
          <ul>
            <li>Shipping carriers (to deliver your orders)</li>
            <li>Payment processors (to process transactions)</li>
            <li>Legal authorities (when required by law)</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>Our website uses cookies to improve your browsing experience. These include:</p>
          <ul>
            <li><strong>Essential cookies</strong>: Required for website functionality</li>
            <li><strong>Analytics cookies</strong>: Help us understand how visitors use our site (e.g., Google Analytics)</li>
          </ul>
          <p>You can disable cookies in your browser settings, but some features may not work properly.</p>

          <h2>5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, and access controls. However, no method of internet transmission is 100% secure.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>

          <h2>7. Third-Party Links</h2>
          <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites.</p>

          <h2>8. International Data Transfers</h2>
          <p>As a China-based manufacturer serving international clients, your data may be transferred to and processed in China. By using our services, you consent to this transfer.</p>

          <h2>9. Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us:</p>
          <ul>
            <li>Email: <a href="mailto:hello@qingdaobaina.com" className="text-green-700 hover:underline">hello@qingdaobaina.com</a></li>
            <li>Address: No. 268, Haier Road, Laoshan District, Qingdao, Shandong, China 266100</li>
          </ul>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
        </div>
      </section>

      {/* Back */}
      <section className="py-8 px-4 bg-gray-50 text-center">
        <Link href="/" className="text-green-700 hover:underline font-medium">← Back to Home</Link>
      </section>
    </div>
  );
}
