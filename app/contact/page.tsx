"use client";
import { useState } from "react";
import type { Metadata } from "next";

// Note: metadata can't be exported from client components.
// For production, move metadata to a separate server component wrapper.

const BRAND_STAGES = ["Just Starting (< 500 units)", "Growing (500–5,000 units)", "Scaling (5,000+ units)"];
const PRODUCTS = [
  "eCommerce Mailer Box",
  "Paper Bags",
  "Subscription / Gift Box",
  "Kraft Eco Mailers",
  "Not sure — need recommendation",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    stage: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a2e18] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            Free · No Commitment
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Sample Kit</h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Tell us about your brand and we&apos;ll ship you a curated set of samples — so you can feel the quality before you order.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f9fdf8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Left - Benefits */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-xl font-bold text-gray-900">What happens next?</h2>
            {[
              {
                step: "1",
                title: "You submit the form",
                desc: "Takes 2 minutes. Tell us your brand stage, product type, and use case.",
              },
              {
                step: "2",
                title: "We review within 24h",
                desc: "A packaging specialist reviews your request and selects the most relevant samples.",
              },
              {
                step: "3",
                title: "Free samples shipped",
                desc: "We ship your sample kit to any US or Canadian address. Zero cost, zero obligation.",
              },
              {
                step: "4",
                title: "Quote + consultation",
                desc: "We follow up with a custom quote and offer to hop on a call if helpful.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}

              <div className="bg-green-50 border border-green-100 rounded-xl p-5 mt-4">
              <p className="text-green-800 font-semibold text-sm mb-1">📧 Prefer email?</p>
                <a href="mailto:hello@qingdaobaina.com" className="text-green-700 text-sm hover:underline">
                  hello@qingdaobaina.com
              </a>
              <p className="text-green-600 text-xs mt-1">Or WhatsApp us directly ↓</p>
              <a
                href="https://wa.me/8615064260757"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <p className="text-green-600 text-xs mt-2">We respond Mon–Sat, within 12h (China time)</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-5">🌿</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Received!</h3>
                <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                  Thanks <strong>{form.name}</strong>! We&apos;ll review your brand details and get back to <strong>{form.email}</strong> within 24 hours with your sample kit details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand / Company *</label>
                    <input
                      required
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your Brand Name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                  <input
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="jane@yourbrand.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brand Website</label>
                  <input
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    type="url"
                    placeholder="https://yourbrand.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand Stage *</label>
                    <select
                      required
                      name="stage"
                      value={form.stage}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                    >
                      <option value="">Select stage...</option>
                      {BRAND_STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Type *</label>
                    <select
                      required
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                    >
                      <option value="">Select product...</option>
                      {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Order Quantity</label>
                  <select
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                  >
                    <option value="">Select quantity...</option>
                    <option value="100-300">100 – 300 units</option>
                    <option value="300-1000">300 – 1,000 units</option>
                    <option value="1000-5000">1,000 – 5,000 units</option>
                    <option value="5000+">5,000+ units</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your brand & packaging needs
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="e.g. We're a sustainable skincare brand selling on Shopify. We need a 100-unit run of mailer boxes with a natural kraft look for our subscription service..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 transition-colors text-base"
                >
                  Request Free Sample Kit →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  No credit card · No commitment · Responds within 24h
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
