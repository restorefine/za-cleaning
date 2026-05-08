# Storyboard

**Format:** 1920×1080  
**Duration:** ~36 seconds, 7 beats  
**Audio:** Kokoro TTS voiceover + warm minimal underscore  
**VO direction:** Mid-register female voice, calm and warm — not corporate. Natural pacing. A beat of silence after "Guaranteed." and before "Five hundred happy clients."  
**Style basis:** DESIGN.md — light canvas (white/`#F8FAFC`), electric blue accent (`#2563EB`), navy headings (`#0D3B66`), Geist variable font

**Music direction:** Minimal warm acoustic-electronic underscore. A soft piano chord + sustained pad that starts quietly and builds gently through the booking sequence (Beat 4), peaks lightly at Beat 6 stats, and resolves cleanly under the CTA. Never louder than 25% of VO mix.

---

## Asset Audit

| Asset | Type | Assign to Beat | Role |
|-------|------|----------------|------|
| `capture/assets/hero.png` | Hero photo | Beat 1 | Full-bleed background, pristine living room interior |
| `capture/assets/logo.svg` | Logo | Beat 1, Beat 7 | Brand opener and closer |
| `capture/assets/kitchen-20deep-20clean.png` | Before/after photo | Beat 2 | Service card background |
| `capture/assets/oven-20restoration.png` | Before/after photo | Beat 2 | Service card background |
| `capture/assets/carpet-20revival.png` | Before/after photo | Beat 2 | Service card background |
| `capture/assets/end-20of-20tenancy.png` | Photo | Beat 5 | How It Works step visual |
| `capture/assets/driveway-20wash.png` | Photo | Beat 2 | Service card background |
| `capture/assets/og-image.png` | Hero photo | Beat 5, Beat 7 | Background texture layer |
| `capture/assets/svgs/lucide-sparkles.svg` | Icon | Beat 4 | Wizard service icon |
| `capture/assets/svgs/lucide-wrench.svg` | Icon | Beat 4, Beat 5 | Appliance / arrive equipped icon |
| `capture/assets/svgs/lucide-check.svg` | Icon | Beat 5, Beat 6 | Guarantee / checklist |
| `capture/assets/svgs/lucide-phone.svg` | Icon | Beat 7 | Phone CTA |

---

## Beat 1 — HERO REVEAL (0:00–3s)

**VO:** *"Your home, spotless. Guaranteed."*

**Concept:** We open already in motion — no black fade. A pristine living room photo fills the frame, its dark overlay parting like curtains to reveal the brand.

**Visual layers (8+ elements):**
- **BG layer:** `hero.png` — full-bleed, slow Ken Burns zoom 1.0→1.06 over 36s (entire video). Cool dark gradient overlay `rgba(13,59,102,0.55)` fades in from 0 over 0.6s.
- **Particle layer:** 8 rising translucent bubbles (matching site Hero.tsx), white borders, drifting upward — animated with Canvas 2D procedural art on a separate canvas
- **Logo:** `logo.svg` — top-center, slides down from y:-60 to y:0, opacity 0→1, 0.5s, power2.out, at t=0.2s
- **Main headline:** "Your home," — huge 96px Geist 800, white, fades up from y:30 at t=0.4s; then "spotless." appears 0.2s later; "Guaranteed." fades in with accent blue (#2563EB) color + a subtle 2x scale pulse at t=1.2s
- **Location badge:** Pill badge "Glasgow · Edinburgh · Stirling · Falkirk" — small, white border, white text, appears at t=1.8s with fade+scale-in from 0.8→1
- **SVG path draw:** A horizontal accent line (60px wide, 2px, #93C5FD) draws itself left-to-right under "Guaranteed." starting at t=1.4s
- **Bottom-left micro-label:** "CENTRAL SCOTLAND'S TRUSTED CLEANERS" — all-caps, 18px, #93C5FD, wide tracking 0.2em, fades in at t=2.0s
- **Decorative corner element:** Bottom-right: "100% Deposit-Back" badge with a ✓ icon, white border-radius pill, small — appears at t=2.2s

**Transition OUT:** Smooth upward wipe — the hero image panel slides up (y: 0 → -1080, 0.5s power2.in), revealing the next beat's white surface below.

**SFX:** Ambient pad already playing. Soft low-frequency resonance as the gradient overlay appears. A single clean chime on "Guaranteed."

---

## Beat 2 — BRAND & SERVICES (3s–8s)

**VO:** *"ZA Cleaning Team serves Glasgow, Edinburgh, Stirling, and Falkirk — fully insured, always professional."*

**Concept:** Clean white surface. Four service photo cards drift in from the right, staggered — the brand's range at a glance.

**Visual layers:**
- **Background:** `#F8FAFC` with a large ghost text "SERVICES" at 260px, `#E2E8F0`, 10% opacity — anchored bottom-right, slowly drifting right (+20px) over 5s
- **Section eyebrow:** "WHAT WE OFFER" — all-caps, 20px, `#2563EB`, letter-spacing 0.2em, fades in from left at t=0
- **Section heading:** "Our Core Services" — 72px Geist 800, `#0D3B66`, fades up from y:24 at t=0.2s
- **4 Service cards (CSS 3D transforms):** Cards fly in from right (x:+400 → 0) staggered 0.12s apart, slight 3D rotateY(-8→0deg) on entry. Cards: navy overlay photo + service name. Uses `perspective: 800px`.
  - Card 1 (t=0.4s): `kitchen-20deep-20clean.png` — "Deep Cleaning"
  - Card 2 (t=0.52s): `oven-20restoration.png` — "Oven & Appliances"
  - Card 3 (t=0.64s): `carpet-20revival.png` — "Carpet & Rugs"
  - Card 4 (t=0.76s): `end-20of-20tenancy.png` — "End of Tenancy"
- **Trust strip:** Bottom: 4 pill badges — "Fully Insured", "7-Day Service", "DBS Checked", "Deposit Guarantee" — appear left to right staggered, white bg, blue border, blue text
- **Decorative vertical rule:** 2px solid `#2563EB` left of the heading, 80px tall, draws down at t=0
- **Ghost globe:** SVG circle outline, 500px diameter, `#93C5FD` at 12% opacity, centered behind cards, slow rotation

**Transition OUT:** Hard whip-left — x:0→-400, blur 0→20px, 0.25s power3.in. Next beat snaps in from right.

---

## Beat 3 — QUOTE HOOK (8s–12s)

**VO:** *"Getting a quote takes less than two minutes."*

**Concept:** White cinematic card. A progress bar races across the screen. Big timer drops in. This is the promise.

**Visual layers:**
- **Background:** Pure `#FFFFFF` with subtle radial glow `#EFF6FF` from center — 70% width, soft
- **Large ghost number:** "2" — 600px, `#EFF6FF`, centered, fades in at 0.1s — decorative scale anchor
- **Main text:** "Getting a quote" — 56px Geist 700, `#0D3B66`, fades up from y:20 at t=0. "takes less than" — 44px, `#64748B`, appears 0.25s later. **"2 MINUTES"** — 110px Geist 800, `#2563EB`, scale-pops in from 0.85→1.0 with a 1.05 overshoot, at t=0.5s.
- **Progress bar:** Full-width horizontal bar at bottom-third, 8px tall, `#E2E8F0` track, `#2563EB` fill — animates from 0→100% width over 2.5s with ease-out. Small "●" dot rides the leading edge.
- **Typing text:** Below the bar: a monospace type-on effect showing "End of Tenancy → 2 Bed → 2 Bath → Confirm Date" with cursor blinking — letters appear one by one. Uses CSS typing technique with per-step delays.
- **Step count labels:** "Step 1 of 14", "Step 3 of 14" etc. appear and dissolve in the top-right corner in sequence — 24px, `#94A3B8`, monospace
- **CTA preview:** A blurred/frosted "Get a Free Quote →" button floats at the bottom — half-visible, building anticipation for Beat 4
- **Decorative SVG:** `lucide-sparkles.svg` — 80px, `#2563EB`, 20% opacity, top-right, slow spin

**Transition OUT:** The progress bar snaps to 100%, a ✓ checkmark animates in over 0.3s, then entire scene zooms forward (scale 1→1.15, opacity 1→0, 0.4s power2.in) while Beat 4 fades in underneath.

---

## Beat 4 — WIZARD WALKTHROUGH (12s–21s)

**VO:** *"Pick your service. Tell us about your property. Choose a date."*

**Concept:** The InquiryWizard UI is recreated in video as an animated mockup. We watch a user move through 3 steps in real-time — each question appears, an option highlights, then we advance.

**Visual layers:**
- **Background:** `#F8FAFC` — soft. Faint diagonal dot-grid pattern, `#E2E8F0`, 15% opacity — gives structure to the white surface
- **Left panel (40% width):** Decorative side — large stacked text "BOOK YOUR SERVICE" vertically rotated 90°, `#2563EB`, 15% opacity. Below it: `lucide-sparkles.svg` and `lucide-wrench.svg` floating, gentle drift animations (sin-wave y ±8px, 3s loops).
- **Right panel (60% width):** The wizard card — white, rounded-2xl (24px radius), blue progress bar at top. 3 wizard steps animated sequentially:

  **Step 1 (t=0 to t=3s):** 
  - Eyebrow "Step 1 of 14" fades in
  - Question: "What service do you require?" — 36px Geist 700, `#0D3B66`, fades up
  - 6 option cards appear staggered in a 3×2 grid (rounded-2xl, border `#E2E8F0`)
  - "End of Tenancy Cleaning" card highlights (border becomes `#2563EB`, bg fills with blue, text turns white) at t=1.8s — checkmark appears
  - Progress bar advances from 0→7%

  **Step 2 (t=3s to t=6s):**
  - Slide animation (x:-30→0, opacity 0→1, 0.26s)
  - "Step 2 of 14" updates
  - Question: "What size is the property?" — same animation
  - Options: Studio, 1 Bed, 2 Bed, 3 Bed — "2 Bed Flat / House" highlights at t=4.8s
  - Progress bar: 7%→14%

  **Step 3 (t=6s to t=9s):**
  - Slide transition
  - "Step 14 of 14" — "When would you like this done?"
  - Date picker appears (calendar icon + input)
  - A date fills in with typing animation: "15 July 2026"
  - "Confirm Date →" button glows blue and scales 1.0→1.02, pulse
  - Progress bar: 93%→100%, bar turns solid blue, ✓ badge appears

- **Floating step indicators:** 3 small numbered circles (①②③) float in the left panel, lighting up one at a time as each step plays

**Transition OUT:** The wizard card scales up (1.0→1.08), blurs (0→15px), and fades out. A "Quote Sent! ✓" confirmation toast slides up from the bottom.

---

## Beat 5 — PROCESS & GUARANTEE (21s–28s)

**VO:** *"We arrive fully equipped. You relax, and enjoy a perfectly clean space — with our one hundred percent deposit-back guarantee."*

**Concept:** The 3-step "How It Works" timeline, brought to life with SVG path drawing and sequential icon reveals. Warm and reassuring.

**Visual layers:**
- **Background:** `#FFFFFF` with `og-image.png` ghost at 8% opacity, desaturated, full-bleed — a hint of the pristine result waiting
- **Heading:** "How Does It Work?" — 72px Geist 800, `#0D3B66`, centered, fades up at t=0
- **SVG connector path:** A horizontal SVG line (stroke `#CBD5E1`, strokeWidth 4) draws itself left-to-right over 1.5s (strokeDashoffset technique). A glowing `#2563EB` dot travels the path after the line is drawn.
- **3 Step cards (3-column grid):**
  - Step 1 (t=0.8s): Icon card — CalendarDays icon (`#2563EB` on `#EFF6FF` square), number badge "1", title "Book the Cleaning", description "Use our fast quote form or give us a call — under 2 minutes." — fades up from y:24
  - Step 2 (t=1.4s): Wrench icon (`lucide-wrench.svg`), "We Arrive Equipped", "Fully trained team, all supplies included." — fades up
  - Step 3 (t=2.0s): CheckCircle icon, "Enjoy Spotless Space", "Guaranteed satisfaction — or we come back free." — fades up with a brief green glow pulse on the icon
- **Guarantee badge:** Bottom-center — large pill badge "100% Deposit-Back Guarantee ✓", white border, `#0D3B66` bg, white text — scales in from 0.8→1.0 at t=3.5s with a bounce (elastic.out ease)
- **Decorative:** End of tenancy photo (`end-20of-20tenancy.png`) — soft vignette top-right corner, 25% opacity, `border-radius: 1rem`, slow drift right +10px

**Transition OUT:** Vertical split — frame divides down the center, left half slides left, right half slides right, opening like a curtain. Beat 6 is revealed behind it.

---

## Beat 6 — SOCIAL PROOF (28s–32s)

**VO:** *"Five hundred happy clients. Twelve years of experience."*

**Concept:** Dark navy section — contrast shift from white. 4 stat counters animate up. A testimonial quote card appears. Trust hits hard.

**Visual layers:**
- **Background:** `#0D3B66` solid — dramatic shift. Radial glow `#1A548E` at 60% width from center
- **Ghost text:** "TRUSTED" — 300px, `#1A548E`, top-left, 25% opacity, drifting left +15px slow
- **Stat grid (2×2):**
  - "500+" clients — counter animates 0→500 using per-frame integer update (Canvas 2D proxy counter), then "+" snaps in. Label "HAPPY CLIENTS" all-caps white/70%. t=0.2s
  - "12+" — same technique. Label "YEARS EXPERIENCE". t=0.4s
  - "100%" — counter 0→100, "%" snaps. Label "DEPOSIT SUCCESS". t=0.6s
  - "50mi" — counter 0→50, "mi" snaps. Label "COVERAGE RADIUS". t=0.8s
- **Each counter:** 96px Geist 800 white. Scale pop on final value (1.0→1.05→1.0, 0.3s elastic)
- **Star strip:** 5 filled gold stars SVG, centered between stats, appear at t=1.2s left-to-right stagger
- **Testimonial card:** White card, bottom-third, quote in quotation marks, attributed "Sarah Mitchell — Tenant, Glasgow" — slides up from y:+60, 0.4s power2.out at t=1.6s. Clipped with `border-radius: 1rem`, blue left-border 4px
- **Decorative:** `lucide-check.svg` icons scattered in the background, white, 8% opacity, various sizes and rotations — static decorative layer

**Transition OUT:** White flash (rgba(255,255,255,0→1→0), 0.4s) — a camera flash wipe to the final beat.

---

## Beat 7 — CTA CLOSE (32s–36s)

**VO:** *"Book your free quote today at ZA Cleaning Team dot com."*

**Concept:** Return to the hero aesthetic — dark navy band. The logo assembles. The URL types itself out. The CTA button pulses. We end on the brand.

**Visual layers:**
- **Background:** `#0D3B66` — full-bleed. Faint `og-image.png` behind at 6% opacity. Same rising bubble particles from Beat 1, but sparser and slower — visual bookend
- **Logo:** `logo.svg` — assembles from scattered pieces (using CSS 3D translate-in from random positions, converging to center), 120px, at t=0.3s
- **Headline:** "Your Home, Spotless." — 88px Geist 800, white, word-by-word fade-up stagger, 0.12s between words, t=0.5s. "We Guarantee It." below in 64px `#93C5FD`
- **URL:** Typing effect — "www.zacleaningteam.com" types out in Geist Mono, 32px, white/80%, cursor blinks — from t=1.5s at 0.06s per character
- **CTA button:** "Get a Free Quote →" — large rounded pill, `#2563EB` bg, white text, 72px wide × 24px tall (scaled for video) — enters from scale 0.9→1.0 at t=2.0s, then gentle pulse scale 1.0→1.03→1.0 every 1.5s
- **Phone number:** "07774 845901" — appears at t=2.4s, `lucide-phone.svg` icon preceding it, white/70%
- **Closing accent line:** SVG path draws from center outward (both directions), `#2563EB`, 3px, 200px total, under the URL, at t=3.0s
- **Decorative:** 4 trust micro-badges (Insured · Vetted · Guaranteed · Same-Day) — horizontal strip, pill shaped, white/10% bg, white/60% text, at bottom of frame, appear staggered

**Transition OUT:** Freeze frame. Slow zoom 1.0→1.03 over 1s. Final frame held for 0.5s.

---

## Production Architecture

```
videos/za-promo/
├── index.html                    ← root: VO + underscore + beat orchestration
├── DESIGN.md                     ← brand reference
├── SCRIPT.md                     ← narration text
├── STORYBOARD.md                 ← THIS FILE
├── narration.wav                 ← TTS audio (Step 5)
├── transcript.json               ← word-level timestamps (Step 5)
├── capture/                      ← captured website data
│   ├── screenshots/
│   ├── assets/
│   │   ├── svgs/
│   │   └── fonts/
│   └── extracted/
└── compositions/
    ├── beat-1-hero.html
    ├── beat-2-services.html
    ├── beat-3-quote-hook.html
    ├── beat-4-wizard.html
    ├── beat-5-process.html
    ├── beat-6-stats.html
    ├── beat-7-cta.html
    └── captions.html
```
