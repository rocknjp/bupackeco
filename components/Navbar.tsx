"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const industries = [
  { name: "Beauty & Skincare", slug: "beauty-skincare" },
  { name: "Fragrance & Candles", slug: "fragrance-candles" },
  { name: "Corporate Gifts & Subscriptions", slug: "corporate-gifts-subscription" },
  { name: "Stationery & Designer Toys", slug: "stationery-toys" },
  { name: "Jewelry & Accessories", slug: "jewelry-accessories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <span className="w-7 h-7 bg-green-700 rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
                <path d="M3 6a1 1 0 011-1h4a1 1 0 010 2H5.414l6.293 6.293a1 1 0 01-1.414 1.414L4 8.414V10a1 1 0 01-2 0V6z"/>
                <path d="M14 4a1 1 0 00-1 1v5.586l-1.293-1.293a1 1 0 00-1.414 1.414L13.586 14H12a1 1 0 000 2h4a1 1 0 001-1v-4a1 1 0 00-2 0v1.586l-3.293-3.293A1 1 0 0013 8V5a1 1 0 00-1-1z"/>
              </svg>
            </span>
            <span className="text-xl font-bold text-gray-900">BU<span className="text-green-700">pack</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Products
            </Link>

            {/* Industries Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-green-700 font-medium transition-colors text-sm"
              >
                Industries
                <svg className={`w-3.5 h-3.5 transition-transform ${industriesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      {ind.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/industries"
                      className="block px-4 py-2.5 text-sm text-green-700 font-medium hover:bg-green-50 transition-colors"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      View All Industries →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/factory" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Our Factory
            </Link>
            <Link href="/eco" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Sustainability
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Blog
            </Link>
            <Link href="/guide" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Guides
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              FAQ
            </Link>
            <Link
              href="/quote/"
              className="bg-green-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm"
            >
              Instant Quote Calculator →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3">
            <nav className="flex flex-col gap-1">
              <Link href="/" className="text-gray-700 hover:text-green-700 font-medium py-2 px-2 rounded-lg hover:bg-green-50" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-green-700 font-medium py-2 px-2 rounded-lg hover:bg-green-50" onClick={() => setMenuOpen(false)}>Products</Link>

              {/* Mobile Industries Section */}
              <div className="px-2 py-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Industries</p>
                <div className="pl-3 flex flex-col gap-0.5">
                  {industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="text-gray-700 hover:text-green-700 text-sm py-1.5 hover:bg-green-50 px-2 rounded-lg"
                      onClick={() => setMenuOpen(false)}
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/factory" className="text-gray-700 hover:text-green-700 font-medium py-2 px-2 rounded-lg hover:bg-green-50" onClick={() => setMenuOpen(false)}>Our Factory</Link>
              <Link href="/eco" className="text-gray-700 hover:text-green-700 font-medium py-2 px-2 rounded-lg hover:bg-green-50" onClick={() => setMenuOpen(false)}>Sustainability</Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-700 font-medium py-2 px-2 rounded-lg hover:bg-green-50" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/guide" className="text-gray-700 hover:text-green-700 font-medium py-2 px-2 rounded-lg hover:bg-green-50" onClick={() => setMenuOpen(false)}>Guides</Link>
              <Link href="/faq" className="text-gray-700 hover:text-green-700 font-medium py-2 px-2 rounded-lg hover:bg-green-50" onClick={() => setMenuOpen(false)}>FAQ</Link>
              <Link href="/case-studies/" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Case Studies
            </Link>
            <Link href="/quote/" className="bg-green-700 text-white px-5 py-2 rounded-lg font-medium text-center mt-1" onClick={() => setMenuOpen(false)}>Instant Quote Calculator →</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
