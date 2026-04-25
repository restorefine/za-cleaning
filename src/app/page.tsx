import React from "react";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import CoverageSection from "@/components/CoverageSection";
import Hero from "@/components/Hero";
import HeroRevex from "@/components/HeroRevex";
import AboutSection from "@/components/AboutSection";
import ChecklistProtocol from "@/components/ChecklistProtocol";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Services ── pt-24/28 clears the floating hero feature cards */}
      <div id="services" className="pt-24 sm:pt-28">
        <ServicesSection />
      </div>

      {/* ── Coverage ── */}
      <section id="coverage">
        <CoverageSection />
      </section>

      {/* ── About ── */}
      <section id="about">
        <AboutSection />
      </section>

      {/* ── Room-by-Room Protocol ── */}
      <section id="protocol">
        <ChecklistProtocol />
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* ── Gallery ── */}
      <section id="gallery">
        <GallerySection />
      </section>

      {/* ── Team ── */}
      <section id="team">
        <TeamSection />
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-primary py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-accent-lighter text-xs font-bold uppercase tracking-widest mb-3">Ready to Book?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Get a Spotless Home — Guaranteed
          </h2>
          <p className="text-slate-300 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Book in under 2 minutes. Satisfaction guaranteed or we come back free. Serving Glasgow, Edinburgh, Stirling & Falkirk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white shadow-lg shadow-accent/40 transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl">
              Get a Free Quote
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
            <a href="tel:07774845901" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              Call 07774 845901
            </a>
          </div>
        </div>
      </section>

      {/* ── WhatsApp floating button (desktop) ── */}
      <a
        href="https://wa.me/447774845901"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden lg:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 items-center justify-center shadow-lg shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all duration-200"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
