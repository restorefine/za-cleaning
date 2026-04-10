import Link from 'next/link';

const SERVICES = [
  {
    title: 'End of Tenancy',
    desc: 'Full property clean to agent-approved standards. Deposit-back guaranteed.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Deep Cleaning',
    desc: 'Complete top-to-bottom clean for any property. Every surface sanitised.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: 'After Builders',
    desc: 'Removes dust, plaster, and debris post-renovation. Property left spotless.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Oven & Appliances',
    desc: 'All kitchen appliances thoroughly deep-cleaned inside and out.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5M9 3.75v5.25m6-5.25v5.25M8.25 15.75h7.5" />
      </svg>
    ),
  },
  {
    title: 'Carpet & Rugs',
    desc: 'Hot water extraction to remove deep stains, odours, and allergens.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5.25v13.5M15 5.25v13.5M5.25 9h13.5M5.25 15h13.5" />
      </svg>
    ),
  },
  {
    title: 'Pressure Washing',
    desc: 'Jet-wash for patios, driveways, decking, and all exterior hard surfaces.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

const CHECKLIST_ROOMS = [
  {
    room: 'Kitchen',
    items: [
      'Clean inside and outside of all cupboards and drawers',
      'Deep clean oven, hob, grill, and extractor fan',
      'Degrease and descale sink and taps',
      'Clean fridge and freezer inside and out',
      'Wipe down all worktops and splashbacks',
      'Clean dishwasher, washing machine, and other appliances',
      'Mop and degrease floor',
    ],
  },
  {
    room: 'Bathrooms',
    items: [
      'Descale and sanitise toilet, basin, and bath or shower',
      'Remove limescale from taps, showerhead, and tiles',
      'Clean mirrors, cabinets, and shelving',
      'Scrub grout lines and seal edges',
      'Wipe skirting boards and door frames',
      'Clean extractor fan and light fittings',
      'Mop and disinfect floor',
    ],
  },
  {
    room: 'Bedrooms',
    items: [
      'Dust and wipe all surfaces, furniture, and fittings',
      'Clean inside wardrobes and drawers',
      'Wipe light switches, plug sockets, and door handles',
      'Clean mirrors and glass surfaces',
      'Vacuum carpets or mop hard floors',
      'Clean skirting boards and window sills',
      'Remove cobwebs from corners and ceilings',
    ],
  },
  {
    room: 'Living Areas',
    items: [
      'Dust all surfaces, shelves, and ornaments',
      'Vacuum sofas and under cushions',
      'Clean TV unit and electronic surfaces',
      'Wipe skirting boards and window ledges',
      'Clean light fittings and switches',
      'Vacuum or mop all floor surfaces',
      'Remove cobwebs from ceilings and corners',
    ],
  },
  {
    room: 'Hallways & Stairs',
    items: [
      'Vacuum stairs treads and risers thoroughly',
      'Wipe banisters and handrails',
      'Clean light fittings and switches',
      'Wipe all skirting boards and door frames',
      'Clean front door inside and letterbox',
      'Mop hard floor surfaces',
    ],
  },
  {
    room: 'Windows & Doors',
    items: [
      'Clean all internal window frames and sills',
      'Wipe glass panels on internal doors',
      'Clean all door handles, hinges, and frames',
      'Remove any marks from walls and paintwork',
    ],
  },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function Checklist() {
  return (
    <div className="bg-white">

      {/* ── Page hero ── */}
      <section className="relative bg-primary overflow-hidden py-20">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(#fff 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }}
        />
        {/* Accent circle */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.75 rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Our Standards</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Cleaning <span className="text-accent">Checklist</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            We work with you to confirm a detailed checklist before every clean. Our job is not finished until every item is complete and you are 100% satisfied.
          </p>
        </div>
      </section>

      {/* ── Guarantee banner ── */}
      <section className="bg-bg-soft py-14">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Our Promise</span>
            </div>
            <h2 className="text-3xl font-extrabold text-primary mb-3">Our Satisfaction Guarantee</h2>
            <p className="text-slate-500 leading-relaxed">
              At ZA Cleaning Team, we take great pride in our professional cleaning services. Our detailed checklist ensures every area of your property is thoroughly covered. Whether you need a full whole-property clean or a one-off clean for specific areas, our teams will not leave until every item on your checklist is properly cleaned and sanitised to the highest standard.
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-4 shrink-0">
            {[
              { value: '100%', label: 'Satisfaction Rate' },
              { value: '12+', label: 'Local Teams' },
              { value: '7', label: 'Days a Week' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center bg-white rounded-2xl border border-slate-200 px-8 py-5 shadow-sm flex-1 lg:flex-none">
                <p className="text-3xl font-extrabold text-primary leading-none">{value}</p>
                <p className="text-xs text-slate-400 font-medium mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services covered ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">What We Cover</span>
            </div>
            <h2 className="text-4xl font-extrabold text-primary leading-tight">
              Services <span className="text-accent">Included</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="group flex gap-4 items-start bg-white rounded-2xl border border-slate-100 p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-base mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Room-by-room checklist ── */}
      <section className="py-20 bg-bg-soft">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.75 rounded-full bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Room by Room</span>
            </div>
            <h2 className="text-4xl font-extrabold text-primary leading-tight">
              Detailed Checklist <span className="text-accent">Breakdown</span>
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl">
              Every area of your property is covered. Here is what our cleaners complete in each room as standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHECKLIST_ROOMS.map(({ room, items }) => (
              <div key={room} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                {/* Room header with accent left border */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 border-l-4 border-l-accent">
                  <h3 className="font-extrabold text-primary text-base">{room}</h3>
                  <span className="ml-auto text-xs font-bold text-accent bg-accent/8 border border-accent/20 rounded-full px-2.5 py-0.5">
                    {items.length}
                  </span>
                </div>
                <ul className="flex flex-col gap-3 p-6">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <CheckIcon />
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-primary py-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: 'radial-gradient(#fff 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }}
        />
        <div className="relative mx-auto max-w-2xl px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.75 rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Get Started</span>
            <span className="w-8 h-0.75 rounded-full bg-accent" />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to Book Your <span className="text-accent">Clean?</span>
          </h2>
          <p className="text-white/60 mb-8 text-base leading-relaxed">
            We confirm a detailed checklist with you before every clean. Book in under 2 minutes — satisfaction guaranteed or we come back free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/coverage"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
            >
              Check Coverage Area
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
