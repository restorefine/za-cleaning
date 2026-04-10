"use client";

import { useState } from 'react';

const SERVICES = [
  'End of Tenancy Cleaning',
  'One-Off Deep Cleaning',
  'After Builders Cleaning',
  'Oven & Appliances',
  'Carpet & Rug Cleaning',
  'Pressure Washing',
  'Other',
];

const INFO = [
  {
    label: 'Call Us',
    value: '0141 XXX XXXX',
    sub: 'Mon – Sun, 08:30 – 20:00',
    href: 'tel:01410000000',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'Email Us',
    value: 'info@zacleaningteam.com',
    sub: 'We reply within a few hours',
    href: 'mailto:info@zacleaningteam.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Our Office',
    value: '20-23 Woodside Pl, Glasgow G3 7QL',
    sub: 'United Kingdom',
    href: 'https://maps.google.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Working Hours',
    value: 'Mon – Sun: 08:30 – 20:00',
    sub: 'Seven days a week',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-bg-soft min-h-screen">

      {/* ── Page hero ── */}
      <section className="relative bg-primary overflow-hidden py-20">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(#fff 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }}
        />
        {/* Accent corner shape */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.75 rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Get In Touch</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            Ready to book or just have a question? Our team is available seven days a week and typically responds within a few hours.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start">

            {/* ── Left: contact info panel ── */}
            <div className="rounded-3xl bg-primary overflow-hidden shadow-xl shadow-primary/20 sticky top-28">

              {/* Panel header */}
              <div className="px-8 pt-10 pb-8 border-b border-white/10">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">ZA Cleaning Team</p>
                <h2 className="text-2xl font-extrabold text-white leading-tight">
                  We are here to help.
                </h2>
                <p className="text-white/50 text-sm mt-2 leading-relaxed">
                  Reach out by phone, email, or use the form — we will get back to you quickly.
                </p>
              </div>

              {/* Info items */}
              <div className="px-8 py-8 flex flex-col gap-6">
                {INFO.map(({ label, value, sub, href, icon }) => {
                  const content = (
                    <div className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-200">
                        {icon}
                      </div>
                      <div>
                        <p className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest mb-0.5">{label}</p>
                        <p className="text-white font-semibold text-sm leading-snug">{value}</p>
                        <p className="text-white/40 text-xs mt-0.5">{sub}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>

              {/* Services available list */}
              <div className="px-8 pb-10 border-t border-white/10 pt-8">
                <p className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest mb-4">Services We Offer</p>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.filter(s => s !== 'Other').map((s) => (
                    <span key={s} className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[0.7rem] font-medium text-white/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary mb-2">Request Sent</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                    Thank you for reaching out. A member of our team will be in touch within a few hours to confirm your booking.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border-2 border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-600 hover:border-primary hover:text-primary transition"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-extrabold text-primary">Request a Free Quote</h2>
                    <p className="text-slate-400 text-sm mt-1">Fill in the form below and we will be in touch shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    {/* Name + Phone row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-name" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Full Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-slate-400"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-phone" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Phone Number</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="07xxx xxxxxx"
                          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-slate-400"
                      />
                    </div>

                    {/* Service + area row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-service" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Service Required</label>
                        <select
                          id="contact-service"
                          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 appearance-none cursor-pointer"
                        >
                          {SERVICES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-area" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Your Area / Town</label>
                        <input
                          id="contact-area"
                          type="text"
                          placeholder="e.g. Paisley, Falkirk"
                          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-message" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Message</label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Tell us about your property, preferred date, or any special requirements..."
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none resize-none transition focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-slate-400"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-primary py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 active:translate-y-0 flex items-center justify-center gap-2 mt-1"
                    >
                      Send Request
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    <p className="text-center text-slate-400 text-xs">
                      We typically respond within a few hours. No spam, ever.
                    </p>

                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
