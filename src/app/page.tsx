import React from "react";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import Hero from "@/components/Hero";
import HeroRevex from "@/components/HeroRevex";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Services ── pt-24/28 clears the floating hero feature cards */}
      <div className="pt-24 sm:pt-28">
        <ServicesSection />
      </div>

      {/* ── About ── */}
      <AboutSection />

      {/* ── How It Works ── */}
      <HowItWorks />

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── Team ── */}
      <TeamSection />

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA Banner ── */}
      {/* <section className="bg-primary py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready for a Spotless Home?</h2>
          <p className="text-slate-300 mb-8">Book in under 2 minutes. Satisfaction guaranteed or we come back free.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-accent-light hover:shadow-lg">
            Get a Free Quote →
          </Link>
        </div>
      </section> */}
    </>
  );
}
