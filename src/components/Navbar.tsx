"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SECTION_LINKS = [
  { label: "Services",     id: "services" },
  { label: "Coverage",     id: "coverage" },
  { label: "About",        id: "about" },
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQ",          id: "faq" },
  { label: "Team",         id: "team" },
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
          <img src="/logo.svg" alt="ZA Cleaning" className="h-12 w-12" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-6">
          {SECTION_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="relative text-sm font-medium text-slate-700 transition-colors hover:text-accent after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-md">
          Book Now
        </Link>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
          {SECTION_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-left text-slate-700 font-medium hover:text-accent transition-colors"
            >
              {label}
            </button>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-light transition-colors">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
