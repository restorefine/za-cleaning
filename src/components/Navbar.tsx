"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const SECTION_LINKS = [
  { label: "Services", id: "services" },
  { label: "Coverage", id: "coverage" },
  { label: "About", id: "about" },
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQ", id: "faq" },
  { label: "Testimonials", id: "testimonials" },
];

const PAGE_LINKS = [{ label: "Blog", href: "/blog" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function scrollToSection(id: string) {
    setOpen(false);
    if (pathname !== "/") {
      // Navigate to homepage first, then scroll after mount
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="ZA Cleaning" width={80} height={80} className="h-20 w-20" unoptimized />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-6">
          {SECTION_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button onClick={() => scrollToSection(id)} className="relative text-sm font-medium text-slate-700 transition-colors hover:text-accent after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
                {label}
              </button>
            </li>
          ))}
          {PAGE_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="relative text-sm font-medium text-slate-700 transition-colors hover:text-accent after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:07774845901" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-accent transition-colors">
            <Phone className="w-4 h-4 text-accent shrink-0" />
            07774 845901
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-md">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
          {SECTION_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => scrollToSection(id)} className="text-left text-slate-700 font-medium hover:text-accent transition-colors">
              {label}
            </button>
          ))}
          {PAGE_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} className="text-left text-slate-700 font-medium hover:text-accent transition-colors">
              {label}
            </Link>
          ))}
          <div className="flex gap-3">
            <a href="tel:07774845901" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-accent hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent" />
              Call Us
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
