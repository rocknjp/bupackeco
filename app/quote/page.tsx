import type { Metadata } from "next";
import QuoteCalculator from "@/components/quote/QuoteCalculator";

export const metadata: Metadata = {
  title: "Packaging Cost Calculator — Instant Estimate, Free Account | BUpackEco",
  description:
    "Configure your custom packaging — mailer boxes, folding cartons, rigid gift boxes and paper bags — in inches or millimeters. Create a free account to unlock your instant price range, save quotes, or request a custom manual quote within 24 hours.",
};

export default function QuotePage() {
  return <QuoteCalculator />;
}
