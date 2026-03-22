# HextonHQ Website - PRD

## Original Problem Statement
Import and upgrade an Astro 5 + Tailwind CSS v4 project (HextonHQ website) focusing on Section 4 "Our Architecture" to create a highly interactive, glassmorphic cards slider with:
- 8 service cards with hooks, titles, and descriptions
- Glassmorphic design - frosted glass effect
- 3D depth effect - center card prominent, side cards visible but "behind"
- Navigation via swipe, arrows, and autoplay
- Parallax/animations to capture attention

## Architecture
- **Framework**: Astro 5 (Island Architecture for fast loads)
- **Styling**: Tailwind CSS v4 (native CSS features, @container queries)
- **Build Output**: Static site generation
- **Design System**: GenAI × Plasma hybrid aesthetic
  - Colors: Deep dark backgrounds (#050510), violet-to-rose gradients (#A855F7 → #FB7185)
  - Typography: Space Grotesk (headlines), Inter (body)
  - Effects: Glassmorphism, grain texture, parallax orbs

## User Personas
1. **CTOs/Technical Founders** - Looking for AI architecture solutions
2. **Marketing Leaders** - Seeking growth automation systems
3. **Small Business Owners** - Wanting enterprise-grade tools without lock-in
4. **Individual Builders** - Learning AI-native workflows

## Core Requirements (Static)
- [x] Dark mode glassmorphic design
- [x] Interactive 8-card service carousel
- [x] 3D perspective depth effect
- [x] Multiple navigation methods (arrows, dots, swipe, autoplay)
- [x] Parallax background animations
- [x] Mobile responsive
- [x] Brand-aligned typography and colors

## What's Been Implemented

### January 2026 - V3 Complete Upgrade
- **Section 2: Interactive Showcase** - Complete
  - `InteractiveShowcase.astro` component with:
    - 3 glassmorphic metric cards (4 Hours → 2 Seconds, +125% Conversion, Zero Lock-in)
    - Gradient text animation for metrics
    - Scroll-triggered reveal animations
    - Background glow effects
    - Interactive hover states with card-glow

- **Section 4: Capabilities Carousel** - Complete
  - `CapabilitiesCarousel.astro` component with:
    - 8 glassmorphic service cards with 3D depth effect
    - Arrow navigation, pagination dots, progress bar
    - 4-second autoplay (pauses on hover)
    - Touch/swipe/keyboard navigation
    - Parallax background orbs

- **Section 5: Tech Stack Matrix** - Complete
  - `TechStackMatrix.astro` component with:
    - 4 category columns (Automation, AI/LLMs, Data/Hosting, Frontend)
    - 14 tools listed with glowing dot indicators
    - Category icons and hover effects
    - Scroll-triggered animations

- **Section 8: FAQ Accordion** - Complete
  - `FAQAccordion.astro` component with:
    - 3 FAQs with expand/collapse accordion behavior
    - AEO-optimized JSON-LD FAQPage schema injection
    - Smooth slide-down animations
    - "Let's Talk" CTA button

- Updated `ServiceCard.astro` with SVG icon support
- Fixed Vite allowedHosts for preview deployment

## Backlog

### P0 (Critical)
- None remaining

### P1 (High Priority)
- Light/dark mode toggle enhancement
- Mobile responsiveness polish
- Performance optimization (image lazy loading)

### P2 (Medium Priority)
- Card click-to-expand details view
- Service page deep links from carousel cards
- Add more FAQ questions

## Next Tasks
1. Polish mobile responsive layouts
2. Add loading states and skeleton screens
3. Implement contact form functionality
4. Add blog post functionality

## Testing Status
- Frontend Testing: 95% pass rate (13/14 features)
- All V3 sections verified working
- JSON-LD schema correctly injected
- Glassmorphic styling applied across 31+ elements
