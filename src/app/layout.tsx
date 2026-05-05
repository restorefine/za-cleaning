import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.zacleaningteam.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ZA Cleaning Team | End of Tenancy & Deep Cleaning Glasgow",
    template: "%s | ZA Cleaning Team Glasgow",
  },
  description:
    "ZA Cleaning Team — Central Scotland's trusted cleaning specialists. End of Tenancy Cleaning, Deep Cleans, After Builders & Carpet Cleaning in Glasgow, Edinburgh, Stirling & Falkirk. Fully insured. 100% deposit-back guarantee. Free quote today.",
  keywords: [
    "end of tenancy cleaning Glasgow",
    "deep cleaning Glasgow",
    "after builders clean Glasgow",
    "carpet cleaning Glasgow",
    "cleaning services Central Scotland",
    "professional cleaners Glasgow",
    "end of tenancy cleaning Edinburgh",
    "cleaning company Stirling",
    "cleaning services Falkirk",
    "ZA Cleaning Team",
    "fully insured cleaners Scotland",
    "deposit back guarantee cleaning",
  ],
  authors: [{ name: "ZA Cleaning Team" }],
  creator: "ZA Cleaning Team",
  publisher: "ZA Cleaning Team",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ZA Cleaning Team | End of Tenancy & Deep Cleaning Glasgow",
    description:
      "Fully insured cleaning specialists in Glasgow & Central Scotland. End of Tenancy, Deep Cleans, After Builders, Carpet Cleaning. 100% deposit-back guarantee. Get a free quote.",
    url: BASE_URL,
    siteName: "ZA Cleaning Team",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "ZA Cleaning Team — Professional Cleaning Services in Glasgow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZA Cleaning Team | End of Tenancy & Deep Cleaning Glasgow",
    description:
      "Fully insured cleaning specialists in Glasgow & Central Scotland. Free quotes, same-day bookings available.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "GB-SCT",
    "geo.placename": "Glasgow",
    "geo.position": "55.8642;-4.2518",
    ICBM: "55.8642, -4.2518",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL,
  name: "ZA Cleaning Team",
  image: `${BASE_URL}/images/hero.png`,
  logo: `${BASE_URL}/logo.svg`,
  description:
    "Professional End of Tenancy Cleaning, Deep Cleaning, After Builders & Carpet Cleaning across Glasgow, Edinburgh, Stirling and Falkirk. Fully insured. 100% deposit-back guarantee.",
  url: BASE_URL,
  telephone: "+447774845901",
  email: "info@zacleaningteam.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20-23 Woodside Pl",
    addressLocality: "Glasgow",
    postalCode: "G3 7QL",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.8642,
    longitude: -4.2518,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:30",
    closes: "20:00",
  },
  areaServed: [
    { "@type": "City", name: "Glasgow" },
    { "@type": "City", name: "Edinburgh" },
    { "@type": "City", name: "Stirling" },
    { "@type": "City", name: "Falkirk" },
  ],
  priceRange: "££",
  hasMap: "https://maps.app.goo.gl/CS72kcTgfpyqXoyq9",
  sameAs: ["https://maps.app.goo.gl/CS72kcTgfpyqXoyq9"],
  serviceType: [
    "End of Tenancy Cleaning",
    "Deep Cleaning",
    "After Builders Cleaning",
    "Carpet Cleaning",
    "Pressure Washing",
    "Oven Cleaning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main className="layout-content pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
