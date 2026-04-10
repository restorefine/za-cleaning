import Image from "next/image";
import Link from "next/link";

const WHY_POINTS = [
  "100% Satisfaction & Deposit-Back Guarantee",
  "Fully Insured, Vetted & Trained Professionals",
  "Equipment & Supplies Always Included",
  "Available 7 Days — Last-Minute Bookings Welcome",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: image collage ── */}
          <div className="relative flex gap-3 h-[480px]">

            {/* Left tall image */}
            <div className="relative w-[48%] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/tenancy.png"
                alt="End of tenancy cleaning"
                fill
                className="object-cover"
              />
            </div>

            {/* Right two stacked images */}
            <div className="flex flex-col gap-3 w-[48%]">
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/services/deep.png"
                  alt="Deep cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/services/carpet.png"
                  alt="Carpet cleaning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge in the overlap */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-primary border-4 border-white shadow-2xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>

            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-6 -left-6 w-28 h-28 pointer-events-none opacity-30"
              style={{
                backgroundImage: "radial-gradient(#0D3B66 1.2px, transparent 1.2px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* ── RIGHT: content ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">About Cleaning</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-5">
              Our Cleaning{" "}
              <span className="text-accent">Agency</span>
              <br />
              For Your City
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base leading-relaxed mb-7 max-w-md">
              ZA Cleaning Team has been serving Central Scotland for over a decade — delivering
              professional, reliable cleaning you can count on. From end-of-tenancy to deep cleans,
              we handle it all so you don&apos;t have to.
            </p>

            {/* Why Choose Us */}
            <p className="font-bold text-primary text-base mb-4">Why Choose Us</p>
            <ul className="flex flex-col gap-3 mb-8">
              {WHY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.8} className="w-3 h-3 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* Helpline + CTA row */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.68rem] text-slate-400 uppercase tracking-wide font-semibold">Call Helpline</p>
                  <p className="text-base font-extrabold text-primary leading-tight">+44 (0) 141 000 0000</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-xl"
              >
                Book Service
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
