import Image from "next/image";
import { FAQ_HEADER, FAQS } from "@/app/data";

export default function FAQSection() {
  return (
    <section className="bg-bg-soft py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── LEFT: image collage ── */}
          <div className="relative h-115">

            <div className="absolute top-0 left-0 w-[75%] h-[52%] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/services/pressure.png" alt="Professional cleaning" fill className="object-cover" />
            </div>

            <div className="absolute bottom-0 right-0 w-[58%] h-[68%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/services/deep.png" alt="Cleaning professional" fill className="object-cover" />
            </div>

            {/* Floating badge */}
            <div className="absolute top-[44%] left-[38%] z-10 w-16 h-16 rounded-full bg-primary border-4 border-white shadow-2xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>

            {/* Dot grid decoration */}
            <div
              className="absolute -top-6 -right-6 w-28 h-28 pointer-events-none opacity-25"
              style={{
                backgroundImage: "radial-gradient(#0D3B66 1.2px, transparent 1.2px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* ── RIGHT: FAQ content ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{FAQ_HEADER.eyebrow}</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight tracking-tight mb-10">
              {FAQ_HEADER.headlinePart1}{" "}
              <span className="text-accent">{FAQ_HEADER.headlineAccent}</span>
              <br />
              {FAQ_HEADER.headlinePart2}
            </h2>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-slate-200 bg-white hover:bg-accent hover:border-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <span className="text-sm font-bold text-primary group-hover:text-white transition-colors duration-300 leading-snug">
                      {i + 1}. {faq.q}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-slate-200 bg-slate-50 group-hover:border-white/30 group-hover:bg-white/15 flex items-center justify-center transition-colors duration-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12" className="origin-center scale-y-100 group-hover:scale-y-0 transition-transform duration-200" />
                      </svg>
                    </span>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-400 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/75">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
