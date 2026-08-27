import type { Metadata } from "next";
import QuoteCalculator from "@/components/quote/QuoteCalculator";

export const metadata: Metadata = {
  title: "Packaging Cost Calculator — Instant Estimate, Free Account | BUpackEco",
  description:
    "Configure your custom packaging — mailer boxes, folding cartons, rigid gift boxes and paper bags — in inches or millimeters. Estimates are for budgeting purposes only and do not constitute a quotation or offer; for an official quote, contact our team. Free account required for instant price ranges.",
};

export default function QuotePage() {
  return <QuoteCalculator />;
}
