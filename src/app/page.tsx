import { Suspense } from "react";
import ServicesSection from "@/components/ServicesSection";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import GallerySection from "@/components/GallerySectionDynamic";
import CoverageSection from "@/components/CoverageSectionDynamic";
import HomepageCTAs from "@/components/HomepageCTAs";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Services ── */}
      <div id="services">
        <Suspense>
          <ServicesSection />
        </Suspense>
      </div>

      {/* ── Coverage ── */}
      <section id="coverage">
        <CoverageSection />
      </section>

      {/* ── About ── */}
      <section id="about">
        <AboutSection />
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
      {/* <section id="team">
        <TeamSection />
      </section> */}

      {/* ── Testimonials ── */}
      <section id="testimonials">
        <Testimonials />
      </section>

      <HomepageCTAs />
    </>
  );
}
