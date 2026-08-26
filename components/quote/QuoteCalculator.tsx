"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ============ Types ============ */

interface OptionItem {
  name: string;
  pct: number;
}
interface ProductOption {
  key: string;
  name: string;
  materials: OptionItem[];
  printings: OptionItem[];
}
interface OptionsPayload {
  products: ProductOption[];
  finishes: OptionItem[];
  qtyTiers: number[];
}
interface EstimateResult {
  productName: string;
  unitLow: number;
  unitHigh: number;
  totalLow: number;
  totalHigh: number;
  note: string;
}
interface User {
  id: string;
  email: string;
  name: string;
}
interface SavedQuote {
  id: string;
  productName: string;
  dims: string;
  unit: "in" | "mm";
  qty: number;
  material: string;
  printing: string;
  finishes: string[];
  unitLow: number;
  unitHigh: number;
  createdAt: string;
}

const PRODUCT_CARDS = [
  { key: "mailer", icon: "📦", title: "Corrugated Mailer Box", desc: "E-flute / B-flute. Built for e-commerce shipping, unboxing-ready.", from: "From $0.50/unit · MOQ 100" },
  { key: "carton", icon: "🛍️", title: "Folding Carton", desc: "SBS / FBB board. Retail shelves and lightweight products.", from: "From $0.30/unit · MOQ 500" },
  { key: "rigid", icon: "🎁", title: "Rigid Gift Box", desc: "2–3mm bookboard, magnetic closure. Luxury unboxing.", from: "From $1.50/unit · MOQ 300" },
  { key: "bag", icon: "👜", title: "Custom Paper Bag", desc: "Rope handles, kraft or coated. Retail and events.", from: "From $0.40/unit · MOQ 500" },
];

/* ============ Main component ============ */

export default function QuoteCalculator() {
  const [options, setOptions] = useState<OptionsPayload | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  // config
  const [product, setProduct] = useState("mailer");
  const [unit, setUnit] = useState<"in" | "mm">("in");
  const [dims, setDims] = useState({ l: 12, w: 9, h: 3 });
  const [qty, setQty] = useState(1000);
  const [material, setMaterial] = useState("");
  const [printing, setPrinting] = useState("");
  const [finishes, setFinishes] = useState<string[]>([]);

  // estimate
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [estimating, setEstimating] = useState(false);

  // quotes drawer
  const [quotes, setQuotes] = useState<SavedQuote[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // auth modal
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signup" | "signin">("signup");
  const [authError, setAuthError] = useState("");
  const [authBusy, setAuthBusy] = useState(false);
  const [authForm, setAuthForm] = useState({ name: "", email: "", company: "", password: "" });

  // other-packaging RFQ
  const [rfq, setRfq] = useState({
    packagingType: "", use: "", l: "", w: "", h: "", rfqUnit: "inches",
    quantity: "", material: "", printing: "", artworkStatus: "Artwork ready (will share files)",
    targetPrice: "", timeline: "1 – 2 months", message: "",
    name: "", email: "", company: "", website: "", phone: "",
  });
  const [rfqFinishes, setRfqFinishes] = useState<string[]>([]);
  const [rfqBusy, setRfqBusy] = useState(false);
  const [rfqResult, setRfqResult] = useState<{ id: string; emailSent: boolean } | null>(null);

  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 3000);
  }, []);

  const isOther = product === "other";
  const currentProduct = options?.products.find((p) => p.key === product);

  /* ---- Load options & session ---- */
  useEffect(() => {
    fetch("/api/estimate/")
      .then((r) => r.json())
      .then((data: OptionsPayload) => {
        setOptions(data);
        const first = data.products.find((p) => p.key === "mailer");
        if (first) {
          setMaterial(first.materials[0].name);
          setPrinting(first.printings[0].name);
        }
      })
      .catch(() => showToast("Failed to load options, please refresh"));
    fetch("/api/auth/me/")
      .then((r) => r.json())
      .then((d) => setUser(d.user || null))
      .catch(() => {})
      .finally(() => setAuthChecked(true));
  }, [showToast]);

  /* ---- Load quotes when user changes ---- */
  const loadQuotes = useCallback(() => {
    if (!user) return setQuotes([]);
    fetch("/api/quotes/")
      .then((r) => (r.ok ? r.json() : { quotes: [] }))
      .then((d) => setQuotes(d.quotes || []))
      .catch(() => {});
  }, [user]);

  useEffect(() => {
    loadQuotes();
  }, [loadQuotes]);

  /* ---- Debounced server-side estimate (login-gated) ---- */
  useEffect(() => {
    if (!user || isOther || !material || !printing) {
      setEstimate(null);
      return;
    }
    setEstimating(true);
    const t = setTimeout(() => {
      fetch("/api/estimate/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product, unit, dims, qty, material, printing, finishes,
          dimsLabel: `${dims.l}×${dims.w}×${dims.h}`,
        }),
      })
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => setEstimate(d))
        .catch(() => setEstimate(null))
        .finally(() => setEstimating(false));
    }, 350);
    return () => clearTimeout(t);
  }, [user, isOther, product, unit, dims, qty, material, printing, finishes]);

  /* ---- Handlers ---- */

  function pickProduct(key: string) {
    setProduct(key);
    if (key === "other") return;
    const p = options?.products.find((x) => x.key === key);
    if (p) {
      setMaterial(p.materials[0].name);
      setPrinting(p.printings[0].name);
    }
    setFinishes([]);
  }

  function toggleUnit(next: "in" | "mm") {
    if (next === unit) return;
    const f = next === "mm" ? 25.4 : 1 / 25.4;
    setDims({
      l: Math.round(dims.l * f * 10) / 10,
      w: Math.round(dims.w * f * 10) / 10,
      h: Math.round(dims.h * f * 10) / 10,
    });
    setUnit(next);
  }

  function toggleFinish(name: string) {
    setFinishes((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  }

  function openAuth(mode: "signup" | "signin") {
    setAuthMode(mode);
    setAuthError("");
    setAuthOpen(true);
  }

  async function submitAuth(e: React.FormEvent) {
    e.preventDefault();
    setAuthBusy(true);
    setAuthError("");
    try {
      const url = authMode === "signup" ? "/api/auth/register/" : "/api/auth/login/";
      const body =
        authMode === "signup"
          ? authForm
          : { email: authForm.email, password: authForm.password };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setUser(data.user);
      setAuthOpen(false);
      showToast(
        authMode === "signup"
          ? `Welcome ${data.user.name.split(" ")[0]}! Price unlocked 🎉`
          : "Signed in — price unlocked"
      );
    } catch (err) {
      setAuthError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setAuthBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/auth/logout/", { method: "POST" });
    setUser(null);
    setQuotes([]);
    showToast("Signed out — price locked again");
  }

  async function saveQuote() {
    const res = await fetch("/api/quotes/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product, unit, dims, qty, material, printing, finishes,
        dimsLabel: `${dims.l}×${dims.w}×${dims.h}`,
      }),
    });
    if (res.ok) {
      const d = await res.json();
      showToast(`Quote ${d.quote.id} saved to your account`);
      loadQuotes();
      setDrawerOpen(true);
    } else {
      showToast("Failed to save quote");
    }
  }

  async function deleteQuote(id: string) {
    const res = await fetch(`/api/quotes/?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setQuotes((prev) => prev.filter((q) => q.id !== id));
      showToast("Quote deleted");
    }
  }

  async function submitRfq(e: React.FormEvent) {
    e.preventDefault();
    setRfqBusy(true);
    try {
      const res = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "other-packaging",
          name: rfq.name,
          email: rfq.email,
          company: rfq.company,
          website: rfq.website,
          phone: rfq.phone,
          packagingType: rfq.packagingType,
          use: rfq.use,
          dims: `${rfq.l || "?"}×${rfq.w || "?"}×${rfq.h || "?"} ${rfq.rfqUnit}`,
          quantity: rfq.quantity,
          material: rfq.material,
          printing: rfq.printing,
          finishes: rfqFinishes,
          artworkStatus: rfq.artworkStatus,
          targetPrice: rfq.targetPrice,
          timeline: rfq.timeline,
          message: rfq.message,
          accountEmail: user?.email,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setRfqResult({ id: data.id, emailSent: data.emailSent });
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setRfqBusy(false);
    }
  }

  const money = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: n < 10 ? 2 : 0 });

  /* ============ Render ============ */

  return (
    <div className="bg-white min-h-screen">
      {/* Flow banner */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-2 text-xs sm:text-sm overflow-x-auto">
          {[
            { n: 1, label: "Configure your box", active: true },
            { n: 2, label: "Create free account", active: !user },
            { n: 3, label: "Unlock instant price", active: !!user },
            { n: 4, label: "Save quote & order samples", active: !!user && quotes.length > 0 },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center gap-2 shrink-0">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  s.active ? "bg-green-700 text-white" : "bg-white border border-gray-200 text-gray-400"
                }`}
              >
                {s.n}
              </span>
              <span className={s.active ? "text-green-700 font-semibold" : "text-gray-400"}>{s.label}</span>
              {i < 3 && <span className="text-gray-300 ml-1">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <span className="inline-block text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">
          Instant Estimate
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          How much will your custom packaging cost?
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Configure your box below.{" "}
          <strong className="text-green-700">Create a free account to unlock your instant price range</strong>{" "}
          — quotes are saved to your account so you can compare and revisit anytime.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
        {/* ============ LEFT ============ */}
        <div>
          {/* Step 1: product */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-full bg-green-700 text-white text-sm font-bold flex items-center justify-center">1</span>
              <h2 className="text-lg font-bold text-gray-900">Choose your packaging type</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {PRODUCT_CARDS.map((c) => (
                <button
                  key={c.key}
                  onClick={() => pickProduct(c.key)}
                  className={`relative text-left rounded-xl border-2 p-4 transition-all ${
                    product === c.key
                      ? "border-green-700 bg-green-50"
                      : "border-gray-200 bg-white hover:border-green-500"
                  }`}
                >
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                  <div className="text-xs text-green-700 font-semibold mt-2">{c.from}</div>
                  {product === c.key && (
                    <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center">✓</span>
                  )}
                </button>
              ))}
              <button
                onClick={() => pickProduct("other")}
                className={`sm:col-span-2 rounded-xl border-2 border-dashed p-4 text-left transition-all ${
                  product === "other"
                    ? "border-green-700 bg-green-50 border-solid"
                    : "border-gray-300 bg-gray-50 hover:bg-green-50 hover:border-green-500"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📝</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      Other / Custom Packaging — Get a Manual Quote
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Tubes, cylinders, sleeves, hang tags, labels, pouches, inserts, displays… Can&apos;t find
                      your type above? Describe it in a short form and our engineers will email you a custom
                      quote within 24 hours. <strong className="text-green-700">No account required.</strong>
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </section>

          {/* Standard config steps (hidden in "other" mode) */}
          {!isOther && (
            <>
              {/* Step 2: dims */}
              <section className="mb-10">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="w-7 h-7 rounded-full bg-green-700 text-white text-sm font-bold flex items-center justify-center">2</span>
                  <h2 className="text-lg font-bold text-gray-900">Dimensions</h2>
                  <div className="ml-auto flex items-center gap-3">
                    <span className="text-xs text-gray-500 hidden sm:inline">Inside dimensions</span>
                    <div className="flex rounded-lg border-2 border-gray-200 overflow-hidden">
                      {(["in", "mm"] as const).map((u) => (
                        <button
                          key={u}
                          onClick={() => toggleUnit(u)}
                          className={`px-3.5 py-1 text-xs font-bold transition-colors ${
                            unit === u ? "bg-green-700 text-white" : "bg-white text-gray-500 hover:bg-gray-50"
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {(["l", "w", "h"] as const).map((k) => (
                    <div key={k}>
                      <label className="block text-[11px] font-semibold text-gray-500 uppercase mb-1.5">
                        {k === "l" ? "Length" : k === "w" ? "Width" : "Height"}
                      </label>
                      <div className="flex rounded-lg border-2 border-gray-200 overflow-hidden focus-within:border-green-600">
                        <input
                          type="number"
                          value={dims[k]}
                          min={unit === "in" ? 2 : 50}
                          max={unit === "in" ? 30 : 760}
                          step={unit === "in" ? 0.5 : 5}
                          onChange={(e) => setDims({ ...dims, [k]: Number(e.target.value) || 0 })}
                          className="w-full px-3 py-2.5 text-base font-bold text-gray-900 outline-none"
                        />
                        <span className="px-3 text-xs text-gray-500 bg-gray-50 flex items-center">{unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Doubling size does <strong className="text-green-700">not</strong> double price — cost scales
                  sub-linearly with surface area.
                </p>
              </section>

              {/* Step 3: qty */}
              <section className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-green-700 text-white text-sm font-bold flex items-center justify-center">3</span>
                  <h2 className="text-lg font-bold text-gray-900">Quantity</h2>
                  <span className="ml-auto text-xs text-gray-500">Higher volume = lower unit price</span>
                </div>
                <div className="rounded-xl border-2 border-gray-200 p-5">
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={0}
                      max={(options?.qtyTiers.length ?? 8) - 1}
                      value={Math.max(0, (options?.qtyTiers ?? []).indexOf(qty))}
                      onChange={(e) => {
                        const tiers = options?.qtyTiers ?? [];
                        const v = tiers[Number(e.target.value)];
                        if (v) setQty(v);
                      }}
                      className="flex-1 accent-green-700"
                    />
                    <div className="min-w-[90px] text-right text-2xl font-extrabold text-green-700">
                      {qty.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {(options?.qtyTiers ?? []).map((t) => (
                      <button
                        key={t}
                        onClick={() => setQty(t)}
                        className={`text-xs px-3 py-1.5 rounded-full border font-semibold transition-colors ${
                          qty === t
                            ? "bg-green-50 border-green-700 text-green-700"
                            : "bg-white border-gray-200 text-gray-600 hover:border-green-500"
                        }`}
                      >
                        {t.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              {/* Step 4/5/6: material, printing, finishing */}
              {currentProduct && (
                <>
                  {[
                    { n: 4, title: "Material", items: currentProduct.materials, value: material, set: setMaterial },
                    { n: 5, title: "Printing", items: currentProduct.printings, value: printing, set: setPrinting },
                  ].map((s) => (
                    <section key={s.n} className="mb-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-7 h-7 rounded-full bg-green-700 text-white text-sm font-bold flex items-center justify-center">{s.n}</span>
                        <h2 className="text-lg font-bold text-gray-900">{s.title}</h2>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {s.items.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => s.set(item.name)}
                            className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                              s.value === item.name
                                ? "border-green-700 bg-green-50 text-green-700"
                                : "border-gray-200 bg-white text-gray-700 hover:border-green-500"
                            }`}
                          >
                            {item.name}
                            <span className="text-[11px] font-normal text-gray-400">
                              {item.pct > 0 ? `+${item.pct}%` : item.pct < 0 ? `${item.pct}%` : ""}
                            </span>
                          </button>
                        ))}
                      </div>
                    </section>
                  ))}
                  <section className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-7 h-7 rounded-full bg-green-700 text-white text-sm font-bold flex items-center justify-center">6</span>
                      <h2 className="text-lg font-bold text-gray-900">
                        Finishing <span className="text-xs font-normal text-gray-500">· optional, multi-select</span>
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {(options?.finishes ?? []).map((item) => (
                        <button
                          key={item.name}
                          onClick={() => toggleFinish(item.name)}
                          className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                            finishes.includes(item.name)
                              ? "border-green-700 bg-green-50 text-green-700"
                              : "border-gray-200 bg-white text-gray-700 hover:border-green-500"
                          }`}
                        >
                          {item.name}
                          <span className="text-[11px] font-normal text-gray-400">+{item.pct}%</span>
                        </button>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </>
          )}

          {/* ============ OTHER PACKAGING RFQ FORM ============ */}
          {isOther && (
            <div className="rounded-2xl border-2 border-gray-200 p-6 sm:p-8">
              {rfqResult ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Request received!</h3>
                  <p className="text-gray-500 text-sm max-w-md mx-auto">
                    Our packaging engineers are reviewing your project. You&apos;ll receive a custom quote by
                    email within 24 hours.
                  </p>
                  <div className="inline-block bg-green-50 text-green-700 font-extrabold px-4 py-1.5 rounded-full my-4">
                    {rfqResult.id}
                  </div>
                  <p className="text-xs text-gray-400 mb-4">
                    {rfqResult.emailSent
                      ? "Inquiry delivered to hello@qingdaobaina.com and the admin dashboard."
                      : "Inquiry saved to the admin dashboard. Urgent? Email hello@qingdaobaina.com and mention your RFQ number."}
                  </p>
                  <button
                    onClick={() => {
                      setRfqResult(null);
                      setProduct("mailer");
                    }}
                    className="text-green-700 font-bold text-sm hover:underline"
                  >
                    ← Configure another estimate
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1">Tell us about your packaging 📝</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Fill in what you know — engineers reply with a custom quote from{" "}
                    <strong className="text-green-700">hello@qingdaobaina.com</strong> within 24 hours.
                  </p>
                  <form onSubmit={submitRfq} className="space-y-7">
                    {/* 1 type */}
                    <fieldset>
                      <legend className="text-xs font-extrabold text-green-700 uppercase tracking-wider mb-3">
                        1 · What type of packaging do you need? *
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <select
                          required
                          value={rfq.packagingType}
                          onChange={(e) => setRfq({ ...rfq, packagingType: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        >
                          <option value="">— Select type —</option>
                          {["Tube / Cylinder box", "Rigid setup box", "Sleeve / band", "Hang tag / swing tag", "Label / sticker", "Pouch / flexible packaging", "Inserts / dividers / trays", "Display / POP stand", "Envelope / mailer flat", "Something else (describe below)"].map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                        <select
                          value={rfq.use}
                          onChange={(e) => setRfq({ ...rfq, use: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        >
                          <option value="">— Where will it be used? —</option>
                          {["E-commerce shipping", "Retail shelf", "Gift / premium", "Subscription box", "Event / launch"].map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </fieldset>

                    {/* 2 specs */}
                    <fieldset>
                      <legend className="text-xs font-extrabold text-green-700 uppercase tracking-wider mb-3">
                        2 · Specifications
                      </legend>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {(["l", "w", "h"] as const).map((k) => (
                          <div key={k}>
                            <label className="block text-xs font-semibold text-gray-500 mb-1">
                              {k === "l" ? "Length" : k === "w" ? "Width / ⌀" : "Height / Depth"}
                            </label>
                            <input
                              type="number"
                              min={0}
                              placeholder="e.g. 12"
                              value={rfq[k]}
                              onChange={(e) => setRfq({ ...rfq, [k]: e.target.value })}
                              className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                            />
                          </div>
                        ))}
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">Unit</label>
                          <select
                            value={rfq.rfqUnit}
                            onChange={(e) => setRfq({ ...rfq, rfqUnit: e.target.value })}
                            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                          >
                            <option>inches</option>
                            <option>mm</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">Quantity *</label>
                          <select
                            required
                            value={rfq.quantity}
                            onChange={(e) => setRfq({ ...rfq, quantity: e.target.value })}
                            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                          >
                            <option value="">— Select —</option>
                            {["100 – 500", "500 – 1,000", "1,000 – 5,000", "5,000 – 10,000", "10,000 – 50,000", "50,000+"].map((t) => (
                              <option key={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1">Material</label>
                          <select
                            value={rfq.material}
                            onChange={(e) => setRfq({ ...rfq, material: e.target.value })}
                            className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                          >
                            <option value="">Not sure — please advise</option>
                            {["Kraft board", "SBS / FBB white board", "Corrugated (E/B flute)", "Rigid bookboard", "Textured / specialty paper", "Other (describe below)"].map((t) => (
                              <option key={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </fieldset>

                    {/* 3 printing */}
                    <fieldset>
                      <legend className="text-xs font-extrabold text-green-700 uppercase tracking-wider mb-3">
                        3 · Printing & finishing
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-3 mb-3">
                        <select
                          value={rfq.printing}
                          onChange={(e) => setRfq({ ...rfq, printing: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        >
                          <option value="">Printing — not sure</option>
                          {["1 color", "Full color (CMYK)", "CMYK + Pantone", "Inside + outside print", "No printing (blank)"].map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                        <select
                          value={rfq.artworkStatus}
                          onChange={(e) => setRfq({ ...rfq, artworkStatus: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        >
                          {["Artwork ready (will share files)", "In progress", "Need design help", "Just exploring pricing"].map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["Foil stamping", "Spot UV", "Emboss / deboss", "Soft-touch", "Lamination", "Window / PET film", "Not sure yet"].map((f) => (
                          <button
                            type="button"
                            key={f}
                            onClick={() =>
                              setRfqFinishes((prev) =>
                                prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
                              )
                            }
                            className={`px-3.5 py-1.5 rounded-full border-2 text-xs font-semibold transition-colors ${
                              rfqFinishes.includes(f)
                                ? "border-green-700 bg-green-50 text-green-700"
                                : "border-gray-200 bg-white text-gray-600 hover:border-green-500"
                            }`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    {/* 4 details */}
                    <fieldset>
                      <legend className="text-xs font-extrabold text-green-700 uppercase tracking-wider mb-3">
                        4 · Project details
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Target unit price (optional), e.g. $0.80 – $1.20"
                          value={rfq.targetPrice}
                          onChange={(e) => setRfq({ ...rfq, targetPrice: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        />
                        <select
                          value={rfq.timeline}
                          onChange={(e) => setRfq({ ...rfq, timeline: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        >
                          {["ASAP / urgent", "1 – 2 months", "3+ months", "Just planning"].map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                        <textarea
                          required
                          placeholder="Describe your packaging, references or links…"
                          value={rfq.message}
                          onChange={(e) => setRfq({ ...rfq, message: e.target.value })}
                          className="sm:col-span-2 w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none min-h-[80px]"
                        />
                      </div>
                    </fieldset>

                    {/* 5 contact */}
                    <fieldset>
                      <legend className="text-xs font-extrabold text-green-700 uppercase tracking-wider mb-3">
                        5 · Where should we send your quote? *
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input
                          required
                          type="text"
                          placeholder="Your name *"
                          value={rfq.name}
                          onChange={(e) => setRfq({ ...rfq, name: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        />
                        <input
                          required
                          type="email"
                          placeholder="Work email *"
                          value={rfq.email}
                          onChange={(e) => setRfq({ ...rfq, email: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Company"
                          value={rfq.company}
                          onChange={(e) => setRfq({ ...rfq, company: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Website / Instagram (optional)"
                          value={rfq.website}
                          onChange={(e) => setRfq({ ...rfq, website: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        />
                        <input
                          type="text"
                          placeholder="WhatsApp / phone (optional)"
                          value={rfq.phone}
                          onChange={(e) => setRfq({ ...rfq, phone: e.target.value })}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                        />
                      </div>
                    </fieldset>

                    <button
                      type="submit"
                      disabled={rfqBusy}
                      className="w-full py-4 bg-green-700 text-white font-bold rounded-xl hover:bg-green-600 transition-colors disabled:opacity-60"
                    >
                      {rfqBusy ? "Submitting…" : "Submit & Get Custom Quote in 24h →"}
                    </button>
                    <p className="text-xs text-center text-gray-500">
                      Goes straight to our engineers —{" "}
                      <strong className="text-green-700">hello@qingdaobaina.com</strong> · Free sample kit · No
                      spam, ever
                    </p>
                  </form>
                </>
              )}
            </div>
          )}
        </div>

        {/* ============ RIGHT: price panel ============ */}
        <aside className="lg:sticky lg:top-24">
          <div className="rounded-2xl border-2 border-gray-200 overflow-hidden bg-white">
            <div className="bg-gradient-to-br from-green-800 to-green-600 text-white p-5">
              <h3 className="font-bold">
                {isOther ? "Custom Quote in 24h" : "Your Instant Estimate"}
              </h3>
              <p className="text-xs text-green-100 mt-0.5">
                {isOther
                  ? "Manual engineering & pricing by our team"
                  : user
                    ? `Updates live · signed in as ${user.email}`
                    : "Create a free account to unlock"}
              </p>
            </div>

            {isOther ? (
              <div className="p-6 text-center">
                <div className="text-4xl mb-3">🛠️</div>
                <h4 className="font-extrabold text-lg text-gray-900 mb-2">Custom Quote Mode</h4>
                <p className="text-sm text-gray-500 mb-4">
                  Your packaging gets engineered and priced manually by our team — no instant estimate for
                  custom structures.
                </p>
                <ul className="text-left text-sm text-gray-700 bg-gray-50 rounded-xl p-4 space-y-1.5 mb-4">
                  <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-700 before:font-bold">
                    Fill the short form on the left (2 minutes)
                  </li>
                  <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-700 before:font-bold">
                    Engineer reviews specs & similar projects
                  </li>
                  <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-700 before:font-bold">
                    Custom quote emailed within 24 hours
                  </li>
                  <li className="pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-700 before:font-bold">
                    Free physical sample before you commit
                  </li>
                </ul>
              </div>
            ) : (
              <div className="p-6 relative">
                {/* Lock overlay */}
                {authChecked && !user && (
                  <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-center px-6">
                    <div className="text-3xl mb-2">🔒</div>
                    <h4 className="font-extrabold text-gray-900 mb-1">Price locked</h4>
                    <p className="text-xs text-gray-500 mb-4 max-w-[220px]">
                      Create a free account to unlock your instant price range and save this quote.
                    </p>
                    <button
                      onClick={() => openAuth("signup")}
                      className="bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-green-600 shadow-lg shadow-green-700/30"
                    >
                      Create Free Account
                    </button>
                    <p className="text-xs text-gray-500 mt-3">
                      Already registered?{" "}
                      <button onClick={() => openAuth("signin")} className="text-green-700 font-bold underline">
                        Sign in
                      </button>
                    </p>
                  </div>
                )}

                {/* Blurred / real price */}
                <div className="text-center pb-5 border-b border-gray-100">
                  <div
                    className={`text-4xl font-extrabold text-green-700 leading-tight ${
                      user ? "" : "blur-[7px] select-none"
                    }`}
                  >
                    {user && estimate
                      ? `${money(estimate.unitLow)}–${money(estimate.unitHigh)}`
                      : "$X.XX–$X.XX"}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    per unit · {currentProduct?.name ?? "Mailer Box"}
                  </div>
                  <div className="flex justify-between text-sm mt-3.5 bg-gray-50 rounded-lg px-3.5 py-2.5">
                    <span>Estimated total</span>
                    <b className={user ? "" : "blur-[5px] select-none"}>
                      {user && estimate
                        ? `${money(estimate.totalLow)}–${money(estimate.totalHigh)}`
                        : "$XXX–$XXX"}
                    </b>
                  </div>
                </div>

                {/* Config summary */}
                <div className="py-4">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Configuration
                  </h4>
                  <dl className="text-sm space-y-1">
                    {[
                      ["Quantity", `${qty.toLocaleString()} units`],
                      ["Size", `${dims.l} × ${dims.w} × ${dims.h} ${unit}`],
                      ["Material", material || "—"],
                      ["Printing", printing || "—"],
                      ["Finishing", finishes.length ? finishes.join(", ") : "None"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4">
                        <dt className="text-gray-500">{k}</dt>
                        <dd className="font-semibold text-gray-900 text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed bg-gray-50 rounded-lg p-3">
                  {estimate?.note ??
                    "Estimate based on factory-direct pricing for standard structures. All prices EXW Qingdao; DDP shipping available."}
                </p>

                {user && (
                  <div className="mt-4 space-y-2.5">
                    <button
                      onClick={saveQuote}
                      disabled={!estimate}
                      className="w-full py-3.5 bg-green-700 text-white font-bold rounded-xl hover:bg-green-600 transition-colors disabled:opacity-50"
                    >
                      💾 Save Quote to My Account
                    </button>
                    <a
                      href="/contact/"
                      className="block text-center w-full py-3.5 border-2 border-green-700 text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors"
                    >
                      Get Exact Quote in 24h →
                    </a>
                  </div>
                )}
                <p className="text-center text-xs text-gray-400 mt-3">
                  Free sample kit · No commitment · Cancel anytime
                  {estimating && user ? " · updating…" : ""}
                </p>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* ============ AUTH MODAL ============ */}
      {authOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setAuthOpen(false)}
        >
          <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
            <button
              onClick={() => setAuthOpen(false)}
              className="absolute top-3.5 right-4 text-2xl text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
            <div className="flex border-b-2 border-gray-100 mb-6">
              {(["signup", "signin"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setAuthMode(m);
                    setAuthError("");
                  }}
                  className={`flex-1 pb-2.5 -mb-[2px] text-sm font-bold border-b-[3px] transition-colors ${
                    authMode === m
                      ? "text-green-700 border-green-700"
                      : "text-gray-400 border-transparent hover:text-gray-600"
                  }`}
                >
                  {m === "signup" ? "Create Account" : "Sign In"}
                </button>
              ))}
            </div>

            {authMode === "signup" ? (
              <>
                <h2 className="text-xl font-extrabold text-gray-900 mb-1">Unlock your price 🎉</h2>
                <p className="text-xs text-gray-500 mb-5">
                  Free account · takes 30 seconds · your configuration is already saved
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-extrabold text-gray-900 mb-1">Welcome back</h2>
                <p className="text-xs text-gray-500 mb-5">
                  Sign in to view your saved quotes and unlock pricing
                </p>
              </>
            )}

            <form onSubmit={submitAuth} className="space-y-3.5">
              {authMode === "signup" && (
                <>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    value={authForm.name}
                    onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                    className="w-full px-3.5 py-3 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    value={authForm.company}
                    onChange={(e) => setAuthForm({ ...authForm, company: e.target.value })}
                    className="w-full px-3.5 py-3 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
                  />
                </>
              )}
              <input
                required
                type="email"
                placeholder="Work email"
                value={authForm.email}
                onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                className="w-full px-3.5 py-3 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
              />
              <input
                required
                type="password"
                minLength={6}
                placeholder="Password (6+ characters)"
                value={authForm.password}
                onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                className="w-full px-3.5 py-3 border-2 border-gray-200 rounded-lg text-sm focus:border-green-600 outline-none"
              />
              {authError && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{authError}</p>
              )}
              <button
                type="submit"
                disabled={authBusy}
                className="w-full py-3.5 bg-green-700 text-white font-bold rounded-xl hover:bg-green-600 transition-colors disabled:opacity-60"
              >
                {authBusy
                  ? "Please wait…"
                  : authMode === "signup"
                    ? "Create Account & Unlock Price"
                    : "Sign In"}
              </button>
            </form>

            {authMode === "signup" && (
              <div className="mt-5 bg-green-50 rounded-xl p-4">
                <h5 className="text-[11px] font-extrabold text-green-700 uppercase tracking-wider mb-2">
                  What you get
                </h5>
                <ul className="text-xs text-gray-700 space-y-1">
                  {[
                    "Instant price ranges, unlimited configurations",
                    "Save & compare quotes in your account",
                    "Free physical sample kit",
                    "Priority response from packaging engineers",
                  ].map((li) => (
                    <li key={li} className="pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-green-700 before:font-bold">
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============ QUOTES DRAWER ============ */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] max-w-[92vw] bg-white z-[110] shadow-2xl transition-transform duration-300 flex flex-col ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-extrabold text-gray-900">📁 My Saved Quotes</h3>
          <button onClick={() => setDrawerOpen(false)} className="text-xl text-gray-400 hover:text-gray-600">
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {quotes.length === 0 ? (
            <p className="text-center text-sm text-gray-400 py-16">
              No saved quotes yet.
              <br />
              <br />
              Configure a box and hit <strong className="text-green-700">Save Quote</strong>.
            </p>
          ) : (
            quotes.map((q) => (
              <div key={q.id} className="border-2 border-gray-200 rounded-xl p-4 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full">
                    {q.id}
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {new Date(q.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {q.productName} · {q.dims} {q.unit}
                  <br />
                  {q.qty.toLocaleString()} pcs · {q.material}
                  <br />
                  {q.printing}
                  {q.finishes.length ? ` · ${q.finishes.join(", ")}` : ""}
                </p>
                <p className="text-sm font-extrabold text-green-700 mt-1.5">
                  ${q.unitLow.toFixed(2)}–${q.unitHigh.toFixed(2)} /unit
                </p>
                <div className="flex gap-2 mt-2.5">
                  <button
                    onClick={() => deleteQuote(q.id)}
                    className="flex-1 py-2 text-xs font-bold border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-gray-100 text-xs text-gray-500">
          Quotes stay in your account for 90 days. Need changes?{" "}
          <a href="/contact/" className="font-bold text-green-700">
            Contact your engineer →
          </a>
        </div>
      </div>

      {/* ============ FLOATING ACCOUNT BAR ============ */}
      <div className="fixed bottom-6 right-6 z-[90] flex items-center gap-2.5">
        {user ? (
          <>
            {quotes.length > 0 && (
              <button
                onClick={() => setDrawerOpen(true)}
                className="bg-white border-2 border-gray-200 shadow-lg rounded-full px-4 py-2.5 text-sm font-semibold text-gray-700 hover:border-green-500"
              >
                📁 Quotes ({quotes.length})
              </button>
            )}
            <button
              onClick={logout}
              className="bg-green-50 border-2 border-green-200 shadow-lg rounded-full px-4 py-2.5 text-sm font-bold text-green-700 hover:border-green-500"
            >
              {user.name.split(" ")[0]} · Sign out
            </button>
          </>
        ) : (
          <button
            onClick={() => openAuth("signin")}
            className="bg-white border-2 border-gray-200 shadow-lg rounded-full px-4 py-2.5 text-sm font-semibold text-gray-700 hover:border-green-500"
          >
            Sign in
          </button>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[120] bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-2xl">
          {toast}
        </div>
      )}
    </div>
  );
}
