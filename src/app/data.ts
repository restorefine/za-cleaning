// ─────────────────────────────────────────────────────────────
// Home Page Data
// All text content for home page components lives here.
// SVG icons are defined inside each component and merged at render time.
// ─────────────────────────────────────────────────────────────

// ── Hero ──────────────────────────────────────────────────────
export const HERO_CONTENT = {
  badge: "100% Satisfaction Guaranteed",
  location: "Glasgow • Edinburgh • Stirling • Falkirk",
  headlineLine1: "ZA",
  headlineAccent: "Cleaning",
  headlineLine3: "Team",
  subtitle: "Central Scotland's trusted cleaning specialists — End of Tenancy Cleaning, Deep Cleans, After Builders & more. Fully insured, always professional.",
  ctaPrimary: { label: "Get a Free Quote", href: "/contact" },
  ctaPhone: { label: "07774 845901", href: "tel:07774845901" },
  ctaWhatsapp: { label: "WhatsApp Us", href: "https://wa.me/447774845901" },
};

export const HERO_FEATURES: { title: string; desc: string }[] = [
  {
    title: "Fully Insured",
    desc: "Deposit-back guarantee. Fully insured & certified on every job.",
  },
  {
    title: "Reliable Service",
    desc: "Punctual, professional teams you can count on, every visit.",
  },
  {
    title: "Same-Day Available",
    desc: "Last-minute or urgent clean? We accept same-day bookings subject to availability.",
  },
  {
    title: "Vetted Professionals",
    desc: "DBS-checked, fully trained staff — trusted in homes across Central Scotland.",
  },
];

// ── Services Section ──────────────────────────────────────────
export const SERVICES_HEADER = {
  eyebrow: "What We Offer",
  headline: "Our Core Services",
  cta: { label: "Get a Free Quote", href: "/contact" },
};

export const SERVICES: { title: string; desc: string; image: string; includes: string[] }[] = [
  {
    title: "After Builders",
    desc: "Removes renovation dust, plaster, paint marks, and debris — leaving your home spotless.",
    image: "/services/builders.png",
    includes: ["Dust & debris removal", "Paint & plaster marks", "All floors & surfaces", "Windows & frames"],
  },
  {
    title: "Carpet & Rug Cleaning",
    desc: "Hot water extraction for carpets and rugs to revive fibres and remove stains & odours.",
    image: "/services/carpet.png",
    includes: ["Hot water extraction", "Stain treatment", "Odour removal", "Quick dry results"],
  },
  {
    title: "Deep & Spring Cleaning",
    desc: "A full, detailed property refresh to brighten your home, clear clutter, and remove built-up dust for neglected spaces.",
    image: "/services/deep.png",
    includes: ["Top-to-bottom deep clean", "All surfaces & fixtures", "Windows & blinds", "Floors mopped & vacuumed"],
  },
  {
    title: "Oven & Appliances",
    desc: "Deep cleaning for ovens, extractors, fridges, freezers, dishwashers, and all kitchen appliances.",
    image: "/services/oven.png",
    includes: ["Oven interior degreasing", "Extractor fan clean", "Fridge & freezer", "Dishwasher & microwave"],
  },
  {
    title: "Pressure Washing",
    desc: "Jet-wash cleaning for patios, driveways, walls, decking, and all exterior hard surfaces.",
    image: "/services/pressure.png",
    includes: ["Patios & driveways", "Decking & pathways", "Walls & render", "All exterior surfaces"],
  },
  {
    title: "Tenancy Cleaning",
    desc: "Certified deep cleaning for moving in or out—securing full deposits and meeting agent-approved standards.",
    image: "/services/tenancy.png",
    includes: ["Full kitchen & oven clean", "Bathroom limescale removal", "Inside all cupboards", "Carpets & skirting boards"],
  },
];

// ── About Section ─────────────────────────────────────────────
export const ABOUT_CONTENT = {
  eyebrow: "About Cleaning",
  headlinePart1: "Our Cleaning",
  headlineAccent: "Agency",
  headlinePart2: "For Your City",
  description: "ZA Cleaning Team has been serving Central Scotland for over a decade — delivering professional, reliable cleaning you can count on. From end-of-tenancy to deep cleans, we handle it all so you don't have to.",
  whyTitle: "Why Choose Us",
  whyPoints: ["100% Satisfaction & Deposit-Back Guarantee", "Fully Insured, Vetted & Trained Professionals", "Equipment & Supplies Always Included", "Available 7 Days — Last-Minute Bookings Welcome"],
  phoneLabel: "Call Helpline",
  phone: "+44 7774 845901",
  cta: { label: "Book Service", href: "/contact" },
};

// ── FAQ Section ───────────────────────────────────────────────
export const FAQ_HEADER = {
  eyebrow: "Asked Questions",
  headlinePart1: "General Frequently",
  headlineAccent: "Asked",
  headlinePart2: "Questions",
};

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is included in an End of Tenancy Cleaning?",
    a: "Our end of tenancy clean covers every room top to bottom — kitchen appliances, oven, fridge, bathrooms, limescale removal, skirting boards, inside cupboards, carpets, and more. We follow a comprehensive checklist accepted by letting agents and landlords across Central Scotland.",
  },
  {
    q: "How long does a deep clean typically take?",
    a: "A standard deep clean for a 2-bedroom property usually takes 4–6 hours. Larger properties or those requiring extra attention may take longer. We always stay until every item on the checklist is completed.",
  },
  {
    q: "Are your cleaning teams fully insured?",
    a: "Yes — all our teams are fully insured and vetted. We carry comprehensive public liability insurance on every job, so you can have complete peace of mind when we're in your home.",
  },
  {
    q: "Do you offer last-minute or same-day bookings?",
    a: "Absolutely. We understand that sometimes you need a clean at short notice. We accept last-minute bookings subject to availability — contact us directly for urgent requests and we'll do our best to accommodate you.",
  },
  {
    q: "Do you supply all cleaning equipment and products?",
    a: "Yes, all equipment and professional-grade cleaning supplies are included in our price. You don't need to provide anything — our teams arrive fully equipped and ready to work.",
  },
];

// ── How It Works ──────────────────────────────────────────────
export const HOW_IT_WORKS_HEADER = {
  eyebrow: "Our Process",
  headline: "How Does It Work?",
  subtitle: "Three simple steps to a spotless home — guaranteed.",
  cta: { label: "Book Your Service →", href: "/contact" },
};

export const STEPS: { num: number; side: "left" | "right"; title: string; desc: string }[] = [
  {
    num: 1,
    side: "right",
    title: "Book the Cleaning",
    desc: "Use our fast quote form or give us a call – booking takes less than 2 minutes.",
  },
  {
    num: 2,
    side: "left",
    title: "We Arrive Equipped",
    desc: "Our professional cleaners come fully equipped with powerful tools and cleaning products.",
  },
  {
    num: 3,
    side: "right",
    title: "Enjoy Spotless Space",
    desc: "Relax and enjoy a perfectly cleaned home with our satisfaction guarantee.",
  },
];

// ── Team Section ──────────────────────────────────────────────
export const TEAM_HEADER = {
  eyebrow: "Meet Our Team",
  headlinePart1: "We Have an",
  headlineAccent: "Expert",
  headlinePart2: "Team",
};

export const TEAM: { name: string; role: string; image: string }[] = [
  {
    name: "Alexandra Dario",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Office Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Tony Rahman",
    role: "Team Supervisor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rivan Islam",
    role: "Senior Specialist",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "Cleaning Specialist",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "James Robertson",
    role: "Operations Lead",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

// ── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS_HEADER = {
  eyebrow: "Testimonial",
  headlinePart1: "Our Clients Are",
  headlineAccent: "Saying",
  headlinePart2: "About Us",
};

export const TESTIMONIALS: { name: string; role: string; initials: string; quote: string }[] = [
  {
    name: "Sarah Mitchell",
    role: "Tenant, Glasgow",
    initials: "SM",
    quote: "Absolutely outstanding service. They arrived on time, worked through every detail on the checklist, and left my flat in pristine condition. Got my full deposit back without any dispute — couldn't be happier.",
  },
  {
    name: "James Robertson",
    role: "Landlord, Edinburgh",
    initials: "JR",
    quote: "I use ZA Cleaning Team for all my rental properties between tenancies. Consistently excellent results, always professional and on time. My go-to cleaning company without question.",
  },
  {
    name: "Priya Sharma",
    role: "Letting Agent, Stirling",
    initials: "PS",
    quote: "Our preferred cleaning partner for all managed properties. The after-builders clean they delivered was remarkable — the property looked completely brand new. Highly recommended.",
  },
  {
    name: "David Thomson",
    role: "Homeowner, Falkirk",
    initials: "DT",
    quote: "Booked a deep clean with only 48 hours notice and they delivered flawlessly. Professional, thorough, and incredibly efficient. Will absolutely be booking again.",
  },
];

export const STATS: { value: string; label: string }[] = [
  { value: "500+", label: "Happy Clients" },
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "Deposit Success" },
  { value: "50mi", label: "Coverage Radius" },
];

// ── Room-by-Room Protocol (Homepage) ─────────────────────────
export const PROTOCOL_HEADER = {
  eyebrow: "Our Process",
  headlinePart1: "The Room-by-Room",
  headlineAccent: "Protocol",
  subtitle: "Our exhaustive 80-point checklist ensures no corner is overlooked — every visit, every time.",
};

export const PROTOCOL_SECTIONS: { id: string; title: string; items: string[] }[] = [
  {
    id: "kitchen",
    title: "The Kitchen",
    items: ["Cabinet exterior and interior detailing", "Countertop sanitization and polishing", "Degrease hob and extractor fan", "Dishwasher and microwave deep clean", "Floor sweep and deep mop", "Oven interior and glass degreasing", "Sink descaling and polish", "Skirting board wiping"],
  },
  {
    id: "bathrooms",
    title: "The Bathrooms",
    items: ["Bath deep scrub and rinse", "Extractor fan dust removal", "Floor sanitization and mop", "Glass and mirror streak-free polish", "Limescale removal from all fixtures", "Shower head and hose descaling", "Tile grout detailing and disinfection", "Toilet base and surround sanitization"],
  },
  {
    id: "living",
    title: "The Living Spaces",
    items: ["Cobweb removal from ceilings", "Dusting of all ornaments and ledges", "Hard floor sweeping and polishing", "HEPA-Filtration vacuuming of all surfaces", "Light switches and socket wiping", "Skirting board and door frame wiping", "Upholstery grooming and light stain care"],
  },
];

// ── Gallery ───────────────────────────────────────────────────
export const GALLERY_HEADER = {
  eyebrow: "Our Work",
  headlinePart1: "Before &",
  headlineAccent: "After",
  headlinePart2: "Gallery",
  subtitle: "Real results from real jobs — drag the handle to reveal the transformation.",
};

export const GALLERY_ITEMS: { id: string; room: string; tag: string; before: string; after: string }[] = [
  {
    id: "kitchen",
    room: "Kitchen Deep Clean",
    tag: "Deep Clean",
    before: "/before/Kitchen Deep Clean.png",
    after: "/after/Kitchen Deep Clean.png",
  },
  {
    id: "tenancy",
    room: "End of Tenancy Cleaning",
    tag: "Tenancy Clean",
    before: "/before/End of Tenancy.png",
    after: "/after/End of Tenancy.png",
  },
  {
    id: "oven",
    room: "Oven Restoration",
    tag: "Appliance Clean",
    before: "/before/Oven Restoration.png",
    after: "/after/Oven Restoration.png",
  },
  {
    id: "carpet",
    room: "Carpet Revival",
    tag: "Carpet Clean",
    before: "/before/Carpet Revival.png",
    after: "/after/Carpet Revival.png",
  },
  {
    id: "driveway",
    room: "Driveway Wash",
    tag: "Pressure Wash",
    before: "/before/Driveway Wash.png",
    after: "/after/Driveway Wash.png",
  },
];

// ── Footer ────────────────────────────────────────────────────
export const FOOTER_CONTENT = {
  brandName: "ZA Cleaning",
  tagline: "We work with a passion of taking challenges and delivering spotless results in the cleaning sector.",
  workingHours: "Mon – Sun: 08:30 AM – 08:00 PM",
  workingDays: "Seven Days a Week",
  phone: "07774 845901",
  email: "info@zacleaningteam.com",
  addressLine1: "20-23 Woodside Pl,",
  addressLine2: "Glasgow G3 7QL, UK",
};

export const FOOTER_SERVICES: { label: string; href: string }[] = [
  { label: "After Builders Cleaning", href: "/contact" },
  { label: "Carpet & Upholstery", href: "/contact" },
  { label: "Deep Cleaning", href: "/contact" },
  { label: "End of Tenancy Cleaning", href: "/contact" },
  { label: "Office & Commercial", href: "/contact" },
  { label: "Regular Maintenance", href: "/contact" },
];

export const FOOTER_QUICK_LINKS: { label: string; href?: string; section?: string }[] = [
  { label: "About Us", section: "about" },
  { label: "Coverage Areas", section: "coverage" },
  { label: "How It Works", section: "how-it-works" },
  { label: "Testimonials", section: "testimonials" },
  { label: "FAQ", section: "faq" },
  { label: "Contact Us", href: "/contact" },
];

export const FOOTER_NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Checklist", href: "/checklist" },
  { label: "Coverage Area", href: "/coverage" },
  { label: "Contact Us", href: "/contact" },
];
