"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Products
            </Link>
            <Link href="/eco" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Sustainability
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Blog
            </Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Case Studies
            </Link>
            <Link href="/moq-guide" className="text-gray-600 hover:text-green-700 font-medium transition-colors text-sm">
              Low MOQ Guide
            </Link>
            <Link
              href="/contact"
              className="bg-green-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm"
            >
              Get Free Samples →
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
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-gray-700 hover:text-green-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-green-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link href="/eco" className="text-gray-700 hover:text-green-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Sustainability</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium py-2" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-green-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Case Studies</Link>
              <Link href="/moq-guide" className="text-gray-700 hover:text-green-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Low MOQ Guide</Link>
              <Link href="/contact" className="bg-green-700 text-white px-5 py-2 rounded-lg font-medium text-center" onClick={() => setMenuOpen(false)}>Get Free Samples →</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
