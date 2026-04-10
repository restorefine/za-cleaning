"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-20 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary">
          ZA <span className="font-normal text-accent">Cleaning Team</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {[
            { label: 'Home', href: '/' },
            { label: 'Checklist', href: '/checklist' },
            { label: 'Coverage', href: '/coverage' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative text-sm font-medium text-slate-700 transition-colors hover:text-accent after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-md"
        >
          Book Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'Home', href: '/' },
            { label: 'Checklist', href: '/checklist' },
            { label: 'Coverage', href: '/coverage' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="text-slate-700 font-medium hover:text-accent">
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
