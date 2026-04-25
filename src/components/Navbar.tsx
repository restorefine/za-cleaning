"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SECTION_LINKS = [
  { label: "Services", id: "services" },
  { label: "Coverage", id: "coverage" },
  { label: "About", id: "about" },
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQ", id: "faq" },
  { label: "Team", id: "team" },
  { label: "Testimonials", id: "testimonials" },
];

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
    <nav className="sticky top-0 z-50 h-20 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="ZA Cleaning" className="h-20 w-20" />
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
        </ul>

        {/* Desktop: phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:07774845901" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-accent transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent shrink-0">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            07774 845901
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-md">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
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
          <div className="flex gap-3">
            <a href="tel:07774845901" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-accent hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
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
