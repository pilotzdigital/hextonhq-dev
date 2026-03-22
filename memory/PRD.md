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

### January 2026
- **Section 4 Capabilities Carousel** - Complete
  - Built new `CapabilitiesCarousel.astro` component with:
    - 8 glassmorphic service cards
    - 3D perspective transforms for depth effect
    - CSS scroll-snapping base with JavaScript enhancement
    - Arrow navigation (prev/next buttons)
    - Pagination dots with active state
    - Progress bar showing carousel position
    - 4-second autoplay (pauses on hover/interaction)
    - Touch/swipe support for mobile
    - Mouse drag support for desktop
    - Keyboard navigation (left/right arrows)
    - Parallax background orbs with scroll/mouse tracking
    - Floating particle animations
  - Updated `ServiceCard.astro` with SVG icon support
  - Integrated carousel into `index.astro` homepage

## Backlog

### P0 (Critical)
- None remaining for Section 4

### P1 (High Priority)
- Section 2: Interactive Showcase (social proof carousel)
- Section 5: Tech Stack Matrix
- Section 8: FAQ Accordion with JSON-LD schema

### P2 (Medium Priority)
- Light/dark mode toggle enhancement
- Card click-to-expand details view
- Service page deep links from carousel cards

## Next Tasks
1. Implement Section 2 "Our Output" with metrics cards carousel
2. Add TechStackMatrix component for Section 5
3. Build FAQAccordion with AEO-optimized JSON-LD schema
4. Consider adding micro-interactions (card hover effects enhancement)

## Testing Status
- Frontend Testing: 90% pass rate
- All core carousel features verified working
- Autoplay, navigation, transitions all functional
