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

export const metadata: Metadata = {
  title: "ZA Cleaning Team | Professional Cleaning in Glasgow & Central Scotland",
  description: "Professional End of Tenancy, Deep Cleaning, After Builders & Carpet Cleaning across Glasgow, Edinburgh, Stirling and Falkirk. Fully insured, 100% deposit-back guarantee. Get a free quote today.",
  keywords: "cleaning services Glasgow, end of tenancy cleaning Glasgow, deep cleaning Edinburgh, after builders clean Central Scotland, carpet cleaning Glasgow, professional cleaners Scotland",
  openGraph: {
    title: "ZA Cleaning Team | Professional Cleaning in Glasgow & Central Scotland",
    description: "Fully insured cleaning specialists serving Glasgow, Edinburgh, Stirling & Falkirk. End of Tenancy, Deep Cleans, After Builders & more.",
    type: "website",
    locale: "en_GB",
  },
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
