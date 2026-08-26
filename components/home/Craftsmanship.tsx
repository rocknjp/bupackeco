"use client";

import { useState } from "react";

const TABS = ["Printing", "Materials", "Structures"] as const;
type Tab = (typeof TABS)[number];

const PRINTING = [
  { icon: "✨", name: "Foil Stamping", desc: "Metallic or matte foil pressed into the board — logos that catch light and feel premium to touch." },
  { icon: "🔆", name: "Spot UV", desc: "High-gloss coating on selected areas, creating contrast against matte lamination." },
  { icon: "⬆️", name: "Emboss / Deboss", desc: "Raised or recessed relief for tactile brand marks — felt before it's seen." },
  { icon: "🧤", name: "Soft-Touch Lamination", desc: "Velvet-like matte film, the signature finish of luxury skincare packaging." },
  { icon: "💧", name: "Gloss / Matte Lamination", desc: "Full-surface protection with sheen (gloss) or anti-glare elegance (matte)." },
  { icon: "🎨", name: "Offset + Screen Print", desc: "CMYK offset for photographic detail, screen print for vivid Pantone solids." },
];

const MATERIALS = [
  { name: "SBS C1S", swatch: "bg-white", desc: "Clay-coated white board — the retail shelf standard for folding cartons." },
  { name: "FBB", swatch: "bg-yellow-50", desc: "Folding boxboard, stiff and bright with a food-safe reputation." },
  { name: "Kraft", swatch: "bg-amber-200", desc: "Uncoated natural fiber — honest, eco-positioned, print-friendly." },
  { name: "E-Flute", swatch: "bg-orange-100", desc: "1.5mm corrugated — mailer boxes that survive the shipping journey." },
  { name: "B-Flute", swatch: "bg-orange-200", desc: "3mm corrugated — heavier products, extra stacking strength." },
  { name: "Rigid Board", swatch: "bg-stone-300", desc: "2–3mm bookboard wrapped in paper — the luxury gift box backbone." },
  { name: "Coated Art", swatch: "bg-slate-100", desc: "Art paper with smooth coating for photo-quality print results." },
  { name: "Specialty", swatch: "bg-gradient-to-br from-amber-100 to-rose-100", desc: "Linen, metallized, textured, seed paper — ask us what's possible." },
];

const STRUCTURES = [
  { icon: "🧲", name: "Magnetic Closure", desc: "Rigid box with hidden magnets — the satisfying 'thunk' of premium." },
  { icon: "🗄️", name: "Drawer Box", desc: "Slide-out drawer with ribbon pull, ideal for gift sets." },
  { icon: "🪟", name: "Window Box", desc: "PET or bio-film window that shows the product on shelf." },
  { icon: "📖", name: "Lid & Base / Shoulder Neck", desc: "Two-piece rigid construction with a visible inner shoulder." },
  { icon: "📦", name: "Mailer / Roll-End Tuck", desc: "Auto-lock e-commerce boxes, no tape needed, unboxing-ready." },
  { icon: "🎀", name: "Sleeve & Band", desc: "Printed wrap over plain inner box — premium look at lower cost." },
];

const INSERTS = ["EVA foam", "Velvet lining", "Molded pulp", "Corrugated", "Folding carton", "Silk fabric", "Thermoformed", "Custom foam"];

export default function Craftsmanship() {
  const [tab, setTab] = useState<Tab>("Printing");

  return (
    <section className="py-20 px-4 bg-[#f9fdf8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">
            Customization & Craft
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Every technique your brand story needs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            One factory, full toolbox — printing, materials and structural engineering under one roof.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                tab === t
                  ? "bg-green-700 text-white shadow-md shadow-green-700/25"
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-green-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        {tab === "Printing" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINTING.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-6 border border-green-100 hover:shadow-md hover:border-green-200 transition-all"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Materials" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MATERIALS.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-5 border border-green-100 hover:shadow-md hover:border-green-200 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl border border-gray-200 mb-4 ${m.swatch}`}
                  aria-hidden
                />
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{m.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Structures" && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
              {STRUCTURES.map((s) => (
                <div
                  key={s.name}
                  className="bg-white rounded-2xl p-6 border border-green-100 hover:shadow-md hover:border-green-200 transition-all"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-6 border border-green-100">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Interior inserts — keep everything in place
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {INSERTS.map((i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-semibold"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        <p className="text-center text-sm text-gray-500 mt-8">
          Need a technique not listed here?{" "}
          <a href="/quote/" className="text-green-700 font-bold hover:underline">
            Describe it in the quote calculator →
          </a>
        </p>
      </div>
    </section>
  );
}
