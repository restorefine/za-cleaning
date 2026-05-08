# Design System

## Overview

ZA Cleaning Team is a professional service brand built on trust signals and clarity. The layout is section-stack: full-bleed hero with dark overlay, alternating white/off-white content sections, and a deep navy closing CTA band. The color strategy is sharply binary — electric blue (#2563EB) drives all action elements against a white/slate-grey content surface, with deep navy (#0D3B66) anchoring authority headings. Typography is modern grotesque (Geist variable), used at high weights (700–800) for headings with generous spacing. The overall feel is corporate-clean with accessible service-industry warmth.

## Colors

- **Accent / CTA Blue**: `#2563EB` — all primary buttons, progress bars, icon fills, active states
- **Accent Light**: `#3B82F6` — hover states, light glow, subtle fills
- **Accent Pale**: `#93C5FD` — decorative borders, bubble rings, low-opacity overlays
- **Primary Navy**: `#0D3B66` — main section headings, footer background
- **Primary Dark**: `#072645` — deepest navy, used for text-on-light
- **Body Slate**: `#314158` — descriptive paragraph text
- **Muted Slate**: `#64748B` — subtitles, secondary labels
- **Surface White**: `#FFFFFF` — primary content background
- **Surface Soft**: `#F8FAFC` — alternating section background (How It Works, hero bubbles)
- **Border Quiet**: `#E2E8F0` — card borders, form input borders
- **Success Green**: `#00C951` — WhatsApp CTA, guarantee badges

## Typography

- **Primary**: Geist (variable 100–900). All headings and body. Extrabold (800) for hero/section h2, Bold (700) for h3/cards, SemiBold (600) for UI labels, Regular (400) for body.
- **Heading Scale**: H1 64px/800, H2 48px/800, H3 36px/700, Card title 18px/700
- **Label style**: All-caps, wide letter-spacing (0.1–0.2em), 11–12px, Accent Blue — used as eyebrow tags above section headings

## Elevation

The site uses a minimal elevation system. Cards sit on `#FFFFFF` with `2px solid #E2E8F0` borders and `border-radius: 1rem` (16px). Hover lifts cards with `translateY(-2px)` and border color shifts to `#2563EB`. No heavy box-shadows — depth comes from color contrast. The hero uses a layered dark-gradient overlay on the background photo for text legibility. CTA buttons use a `shadow-lg shadow-accent/35` blue glow on hover. Form inputs use a blue ring-4 focus glow.

## Components

- **Hero Overlay Banner**: Full-viewport hero with deep slate gradient (from-slate-900/92), centered white text, animated rising bubble particles with translucent borders
- **Floating Navbar**: Fixed top bar, `bg-white/95 backdrop-blur`, logo left, nav center, phone + CTA pill right
- **Service Flip Cards**: Dark-overlay image cards, category badge top-left, title + 4-item checklist, "View Details" arrow link
- **Stats Row**: 4-column stats bar with icon + large number + label, blue background section
- **Step Progress Wizard**: White card with blue progress bar, question + icon, 2–3 column grid of rounded-2xl option buttons, active state fills full blue
- **3-Step Timeline**: SVG path line connecting 3 icon cards with a tracking dot, scroll-animated activation
- **Testimonial Scroll**: Dark blue background section, quote cards with avatar initials, star ratings
- **Before/After Gallery Slider**: Drag handle divider between two images
- **Navy CTA Band**: `bg-[#0D3B66]` with large white heading, two pill buttons (blue filled + outlined)
- **Footer Grid**: 4-column logo/services/links/contact layout on white

## Do's and Don'ts

### Do's
- Use `#2563EB` as the sole accent — don't introduce competing warm tones
- Animate text with `fadeUp` (opacity 0→1, translateY 20px→0) at 0.55s ease
- Use `border-radius: 1rem` (16px) on all cards, `rounded-full` on buttons and badges
- Use exact Geist font via Google Fonts CDN for consistency

### Don'ts
- Do not use dark/black backgrounds — all sections are white or `#F8FAFC`
- Do not use decorative gradients on text — keep headings solid `#0D3B66` or `#FFFFFF`
- Do not use stock photography aesthetics — the brand uses real interior photography
- Do not use animation speeds under 200ms — motion is smooth, not snappy
