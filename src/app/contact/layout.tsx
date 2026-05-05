import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Cleaning Quote",
  description:
    "Request a free quote from ZA Cleaning Team. End of Tenancy, Deep Cleaning, After Builders, Carpet Cleaning & more across Glasgow, Edinburgh, Stirling and Falkirk. Fully insured. Fast response.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Get a Free Cleaning Quote | ZA Cleaning Team Glasgow",
    description:
      "Tell us about your property and we'll put together the perfect cleaning plan. Serving Glasgow, Edinburgh, Stirling & Falkirk. 100% deposit-back guarantee.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
