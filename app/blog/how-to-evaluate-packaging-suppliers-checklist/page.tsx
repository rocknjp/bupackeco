import Link from "next/link";
import type { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "How to Evaluate Custom Packaging Suppliers: 15-Point Checklist | BUpack",
  description:
    "A practical 15-point checklist for DTC brands to evaluate custom packaging suppliers. Quality, capacity, sampling, compliance, and cost transparency — with real data.",
  alternates: {
    canonical:
      "https://www.bupackeco.com/blog/how-to-evaluate-packaging-suppliers-checklist/",
  },
  openGraph: {
    title:
      "How to Evaluate Custom Packaging Suppliers: 15-Point Checklist | BUpack",
    description:
      "A practical 15-point checklist for DTC brands to evaluate custom packaging suppliers across quality, capacity, sampling, compliance, and cost transparency.",
    url: "https://www.bupackeco.com/blog/how-to-evaluate-packaging-suppliers-checklist",
    type: "article",
  },
};

const checklist = [
  {
    dimension: "Quality System",
    points: [
      {
        item: "ISO 9001 Certification",
        why: "ISO 9001 is the baseline proof that a supplier runs a documented, externally audited quality management system — not just a sales promise. Without it, every other quality claim is unverifiable.",
        verify:
          "Request the certificate number and issuing body (TUV, SGS, BSI). Validate it on the certifier's official website. Never accept a scan without a traceable license code.",
      },
      {
        item: "Multi-Stage QC Process (IQC / IPQC / FQC)",
        why: "Defects caught at incoming inspection cost up to 10x less than defects caught at final pack-out. A real supplier runs three inspection stages with documented sampling plans.",
        verify:
          "Ask for the QC flowchart and the AQL sampling plan per stage. Request at least one recent production run's inspection report — not a pass/fail summary, but the actual recorded defects.",
      },
      {
        item: "Defect Rate & AQL Standard",
        why: "AQL 2.5 (General Inspection Level II) is the industry default. Suppliers quoting '99% pass rate' without a stated AQL are marketing quality, not measuring it.",
        verify:
          "Ask which AQL level applies to critical, major, and minor defects. Request the last 3 months of AQL reports and the corrective-action log for any failures.",
      },
    ],
  },
  {
    dimension: "Production Capacity",
    points: [
      {
        item: "Verified Daily / Monthly Capacity",
        why: "Stated capacity on a website is often theoretical maximum. What you need is sustained output after maintenance, changeovers, and scrap — the number that actually ships.",
        verify:
          "Request the last 6 months of production logs by SKU. Cross-check against equipment hour meters or utility bills when volumes are mission-critical.",
      },
      {
        item: "Lead Time Stability",
        why: "A 25-day average that swings from 15 to 40 days will destroy your forecast. Stability matters more than the headline number on the quote.",
        verify:
          "Ask for 12 months of on-time delivery rate and lead-time variance. Anything below 90% OTD is a structural red flag, not a one-off issue.",
      },
      {
        item: "Peak-Season Scalability",
        why: "Q4 volume can be 3x the rest of the year. A supplier that cannot flex 30–50% without extending lead times will cost you the holiday season.",
        verify:
          "Ask which months they hit peak and what percentage above baseline they actually shipped. Require references from clients with similar seasonality to yours.",
      },
    ],
  },
  {
    dimension: "Sampling Speed",
    points: [
      {
        item: "Sample Turnaround Time",
        why: "Every week of sampling delay pushes your launch by a week. Industry standard is 5–7 days; serious suppliers can deliver same-day digital samples and 48-hour physical samples.",
        verify:
          "Time-stamp a real sample request and track actual delivery. If a supplier cannot hit their own sample SLA, expect worse for bulk production.",
      },
      {
        item: "Digital + Physical Sample Capability",
        why: "Digital samples (dieline, 3D render) let you iterate fast; physical samples validate structure, finish, and material. You need both — and in-house structural sampling cuts 3–5 days off the cycle.",
        verify:
          "Ask whether structural samples are produced in-house or outsourced. In-house capability is a strong signal of engineering depth, not just sales polish.",
      },
      {
        item: "Sample Cost & IP Policy",
        why: "Free samples often mean the cost is hidden in bulk pricing. More importantly: who owns the tooling, dieline, and artwork after sampling?",
        verify:
          "Get a written sample quotation with itemized costs. Confirm tooling ownership in writing — your dieline and artwork must remain your IP, transferable on demand.",
      },
    ],
  },
  {
    dimension: "Compliance",
    points: [
      {
        item: "FSC Certification (Paper & Wood Fiber)",
        why: "FSC chain-of-custody is now table stakes for DTC brands selling into the EU, UK, and increasingly the US. Without it, your packaging cannot carry the claim — and you risk greenwashing exposure.",
        verify:
          "Request the FSC license code (e.g., FSC-C123456). Verify on info.fsc.org. Confirm the certificate scope covers the specific material and product category you are buying.",
      },
      {
        item: "Sedex / SMETA Social Compliance Audit",
        why: "Modern retailers and platforms require SMETA or equivalent social audits. A supplier without one is a liability for your brand's ESG story and a blocker for enterprise retail expansion.",
        verify:
          "Request the latest SMETA 4-pillar report and the Corrective Action Plan. Verify active membership on the Sedex portal — expired audits are common.",
      },
      {
        item: "Material Safety & Regulatory Compliance",
        why: "Food-contact, cosmetic, and children's products have specific regulatory thresholds (FDA 21 CFR, EU 1935/2004, REACH SVHC). Generic 'compliant' claims without test reports are not enough.",
        verify:
          "Request test reports from accredited labs (SGS, Intertek, TUV) for the exact regulation. Reports must list your material spec and be less than 12 months old.",
      },
    ],
  },
  {
    dimension: "Cost Transparency",
    points: [
      {
        item: "Itemized Pricing Breakdown",
        why: "A single unit price hides where margin lives. You need material, print, finishing, labor, tooling, and freight as separate line items to negotiate intelligently.",
        verify:
          "Request an itemized quote. If a supplier refuses to break out material vs. conversion cost, they are protecting margin you will pay for on every future reorder.",
      },
      {
        item: "MOQ & Volume Tier Clarity",
        why: "MOQ gates your ability to launch and test. Hidden MOQ creep — tooling minimums, color minimums, finish minimums — is a common bait-and-switch tactic.",
        verify:
          "Ask for the full MOQ matrix: per SKU, per color, per finish. Get volume pricing in three tiers: launch, scaling, and steady-state.",
      },
      {
        item: "Tooling & Plate Fee Ownership",
        why: "Many suppliers bundle tooling into unit cost — meaning you keep paying for the die long after it is amortized. You should own your tooling outright.",
        verify:
          "Get tooling quoted as a separate one-time fee with an ownership clause. Confirm in writing that the die can be transferred if you switch suppliers.",
      },
    ],
  },
];

const comparisonRows = [
  {
    dimension: "Quality",
    red: "No AQL stated, no QC reports",
    avg: "ISO 9001, AQL 2.5",
    bupack: "ISO 9001 + 3-stage QC + AQL 2.5 reports on every run",
  },
  {
    dimension: "Capacity",
    red: "'As needed' or unverifiable",
    avg: "10–20K units/day",
    bupack: "50,000 units/day verified, peak-scalable",
  },
  {
    dimension: "Sampling",
    red: "7–14 days, outsourced",
    avg: "5–7 days physical",
    bupack: "Same-day digital, 48-hour structural, in-house",
  },
  {
    dimension: "Compliance",
    red: "'Eco-friendly' verbal claim",
    avg: "ISO 9001 only",
    bupack: "ISO 9001 + FSC + Sedex, audited annually",
  },
  {
    dimension: "Cost",
    red: "Single line unit price",
    avg: "Itemized but no tooling ownership",
    bupack: "Fully itemized + tooling ownership clause",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="How to Evaluate Custom Packaging Suppliers: 15-Point Checklist for DTC Brands"
        description="A practical 15-point checklist for DTC brands to evaluate custom packaging suppliers across quality, capacity, sampling, compliance, and cost transparency — with real BUpack data."
        datePublished="2025-06-24"
        authorName="BUpack Team"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.bupackeco.com/" },
          { name: "Blog", url: "https://www.bupackeco.com/blog" },
          {
            name: "How to Evaluate Custom Packaging Suppliers",
            url: "https://www.bupackeco.com/blog/how-to-evaluate-packaging-suppliers-checklist",
          },
        ]}
      />

      <article className="mx-auto max-w-3xl px-6 py-12 text-gray-800">
        {/* Hero */}
        <header className="bg-[#0a2e18] text-white rounded-2xl p-8 mb-10">
          <p className="text-sm uppercase tracking-widest text-green-200 mb-3">
            Sourcing Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            How to Evaluate Custom Packaging Suppliers: A 15-Point Checklist for
            DTC Brands
          </h1>
          <p className="text-green-100 text-base md:text-lg leading-relaxed">
            A practical framework to cut through sales pitches and verify what
            actually matters — across quality, capacity, sampling, compliance,
            and cost transparency.
          </p>
        </header>

        {/* Intro */}
        <section className="mb-10 leading-relaxed">
          <p>
            For DTC brands, packaging is more than protection — it is the first
            physical touchpoint with your customer. But choosing the wrong
            supplier can mean delayed launches, inconsistent quality, or
            compliance failures that ripple through your entire operation.
          </p>
          <p className="mt-4">
            After auditing dozens of packaging manufacturers, we distilled the
            evaluation process into <strong>15 critical checkpoints</strong>{" "}
            across <strong>5 dimensions</strong>. Whether you are sourcing your
            first custom box or scaling to millions of units, this checklist
            helps you separate verifiable capability from marketing copy.
          </p>
        </section>

        {/* Checklist by dimension */}
        {checklist.map((dim, dimIdx) => (
          <section key={dim.dimension} className="mb-12">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              {dimIdx + 1}. {dim.dimension}
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              {dim.points.length} checkpoints
            </p>

            <ol className="space-y-8 list-none counter-reset-[point]">
              {dim.points.map((p, idx) => {
                const globalNum = dimIdx * 3 + idx + 1;
                return (
                  <li key={p.item} className="border-t border-gray-100 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <span className="text-green-700">{globalNum}.</span>{" "}
                      {p.item}
                    </h3>
                    <p className="mb-2">
                      <span className="font-semibold text-gray-900">
                        Why it matters:{" "}
                      </span>
                      {p.why}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">
                        How to verify:{" "}
                      </span>
                      {p.verify}
                    </p>
                  </li>
                );
              })}
            </ol>

            <blockquote className="mt-8 border-l-4 border-green-600 bg-green-50 p-4 rounded-r-md">
              <p className="text-sm text-gray-800">
                <strong>Key Insight — </strong>
                {dimIdx === 0 &&
                  "Quality systems are not certifications on a wall — they are documented processes you can audit on the factory floor. If a supplier cannot produce a report within 24 hours, the system does not exist."}
                {dimIdx === 1 &&
                  "Capacity is not what is printed on the quote — it is the verified output you can sustain during your peak weeks. A supplier quoting 50,000 units/day should be able to show you the production logs."}
                {dimIdx === 2 &&
                  "Sampling speed is the leading indicator of bulk lead time. If a supplier cannot produce a structural sample in 48 hours, they will not produce 50,000 units in 25 days."}
                {dimIdx === 3 &&
                  "Compliance is binary — either the certificate covers your material and market, or it does not. Vague 'we are compliant' answers are the same as no answer at all."}
                {dimIdx === 4 &&
                  "Transparent pricing is a signal of supplier confidence. If the quote is a single line, the supplier is afraid you will see where the value actually sits."}
              </p>
            </blockquote>
          </section>
        ))}

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Comparison: What "Good" Looks Like
          </h2>
          <p className="mb-6">
            Use this benchmark to pressure-test any supplier — including BUpack.
            The point is not to take our word for it; the point is to apply the
            same checklist to every vendor you evaluate.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-green-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">
                    Dimension
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">
                    Red Flag
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">
                    Industry Average
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-green-800 border-b border-gray-200">
                    BUpack Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.dimension} className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {row.dimension}
                    </td>
                    <td className="px-4 py-3 text-red-700">{row.red}</td>
                    <td className="px-4 py-3 text-gray-600">{row.avg}</td>
                    <td className="px-4 py-3 text-green-800 font-medium">
                      {row.bupack}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How BUpack maps to the checklist */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            How BUpack Maps to This Checklist
          </h2>
          <p className="mb-4">
            We did not write this checklist to look good — we wrote it because
            it is the same framework we apply to ourselves. Here is the verifiable
            data behind each dimension:
          </p>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <strong>Quality:</strong> ISO 9001 certified, with three-stage QC
              (IQC / IPQC / FQC) and AQL 2.5 reports delivered per production
              run.
            </li>
            <li>
              <strong>Capacity:</strong> 50,000 units/day sustained output,
              scalable for peak-season demand without lead-time extension.
            </li>
            <li>
              <strong>Sampling:</strong> Same-day digital samples and 48-hour
              structural samples produced in-house — no outsourcing, no waiting
              on a third party.
            </li>
            <li>
              <strong>Compliance:</strong> FSC chain-of-custody and Sedex member,
              with SMETA audits renewed annually and lab test reports available
              on request.
            </li>
            <li>
              <strong>Cost:</strong> Fully itemized quotes with separate tooling
              fees and an ownership clause — you own your dieline and tooling.
            </li>
          </ul>
        </section>

        {/* Closing CTA */}
        <section className="bg-green-800 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Evaluate BUpack Against This Checklist
          </h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Run us through the same 15 points you would any supplier. Request
            the certificates, the production logs, the sample SLA — we will
            answer in writing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/guide/ecommerce-packaging-sourcing"
              className="inline-block bg-white text-green-800 font-semibold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              Read the E-Commerce Packaging Sourcing Guide
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-green-300 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Contact BUpack
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
