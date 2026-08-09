import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the full Terms and Conditions for ZA Cleaning Team's services including booking policies, cancellations, refunds, damage liability, and satisfaction guarantee for cleaning services across Glasgow, Edinburgh, Stirling and Falkirk.",
  alternates: {
    canonical: "/terms-and-condition",
  },
  openGraph: {
    title: "Terms & Conditions | ZA Cleaning Team Glasgow",
    description:
      "Full Terms and Conditions for ZA Cleaning Team. Covering service terms, pricing, cancellations, refunds and liability for professional cleaning services in Glasgow & Central Scotland.",
    url: "/terms-and-condition",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
