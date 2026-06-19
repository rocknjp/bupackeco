import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
                  <path d="M3 6a1 1 0 011-1h4a1 1 0 010 2H5.414l6.293 6.293a1 1 0 01-1.414 1.414L4 8.414V10a1 1 0 01-2 0V6z"/>
                  <path d="M14 4a1 1 0 00-1 1v5.586l-1.293-1.293a1 1 0 00-1.414 1.414L13.586 14H12a1 1 0 000 2h4a1 1 0 001-1v-4a1 1 0 00-2 0v1.586l-3.293-3.293A1 1 0 0013 8V5a1 1 0 00-1-1z"/>
                </svg>
              </span>
              <span className="text-xl font-bold text-white">BU<span className="text-green-500">pack</span></span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Qingdao Bejan Giant New Packaging — 17 years of expertise in custom paper packaging. FSC & ISO 9001 certified, owned factory in Qingdao, serving global brands since 2014.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span className="inline-flex items-center gap-1.5 bg-green-900/40 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                FSC Certified
              </span>
              <span className="inline-flex items-center gap-1.5 bg-green-900/40 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                Carbon Neutral Shipping
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Products</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products#ecommerce-boxes" className="hover:text-white transition-colors">eCommerce Boxes</Link></li>
              <li><Link href="/products#paper-bags" className="hover:text-white transition-colors">Paper Bags</Link></li>
              <li><Link href="/products#subscription-boxes" className="hover:text-white transition-colors">Subscription Boxes</Link></li>
              <li><Link href="/products#gift-packaging" className="hover:text-white transition-colors">Gift Packaging</Link></li>
              <li><Link href="/products/rigid-gift-boxes" className="hover:text-white transition-colors">Rigid Gift Boxes</Link></li>
              <li><Link href="/products/folding-cartons" className="hover:text-white transition-colors">Folding Cartons</Link></li>
              <li><Link href="/products#mailer-boxes" className="hover:text-white transition-colors">Mailer Boxes</Link></li>
              <li><Link href="/products/custom-mailer-boxes" className="hover:text-white transition-colors">Custom Mailer Boxes</Link></li>
              <li><Link href="/products/custom-paper-bags" className="hover:text-white transition-colors">Custom Paper Bags</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/moq-guide" className="hover:text-white transition-colors">Low MOQ Guide</Link></li>
              <li><Link href="/services/design-support" className="hover:text-white transition-colors">Free Design Support</Link></li>
              <li><Link href="/services/sampling-prototyping" className="hover:text-white transition-colors">Sampling & Prototyping</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/guide" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link href="/packaging-101" className="hover:text-white transition-colors">Packaging 101</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* By Brand Stage */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">By Brand Stage</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products?stage=startup" className="hover:text-white transition-colors">Startups (100+ MOQ)</Link></li>
              <li><Link href="/products?stage=growth" className="hover:text-white transition-colors">Growth Brands</Link></li>
              <li><Link href="/products?stage=scale" className="hover:text-white transition-colors">Scaling Brands</Link></li>
              <li><Link href="/eco" className="hover:text-white transition-colors">Sustainability Guide</Link></li>
              <li><Link href="/fsc-certified-packaging" className="hover:text-white transition-colors">FSC Certified Packaging</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@qingdaobaina.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@qingdaobaina.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 011 .948l.553 3.319a1 1 0 01-.363.989L8.92 9.146a11.003 11.003 0 005.666 5.666l1.89-1.89a1 1 0 01 .989-.363l3.319.553A1 1 0 0122 18.72V22a2 2 0 01-2 2h-1C9.715 23.3 1.105 14.69 1 4V3a2 2 0 012-2z" />
                </svg>
                <span><strong className="text-white">Phone / WhatsApp:</strong> +86 15064260757</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>No. 96, Tianfeng North Road<br/>Chengyang, Qingdao, China</span>
              </li>
              <li className="mt-4">
                <Link href="/contact" className="inline-block bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Request Free Samples
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} BUpack Packaging Co., Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
