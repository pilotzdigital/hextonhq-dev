# HextonHQ Website - PRD

## Original Problem Statement
Complete V3 upgrade of HextonHQ website (Astro 5 + Tailwind CSS v4) based on the Astro_Development_Handoff_v3.md document. Key requirements:
- Section 2: 6 case study cards with metrics
- Section 3: Brand Story with "light switch" effect (gold → violet/rose transition)
- Section 4: 8-card glassmorphic carousel with swipe/arrows/autoplay
- Section 5: Dual-row infinite marquee with 100+ tools
- Section 7: Sticky scroll values section
- Section 8: FAQ accordion with JSON-LD AEO schema
- Section 9: Asymmetric founder note with gold accents
- All sections: Glassmorphic design, parallax effects, animations

## Architecture
- **Framework**: Astro 5 (Island Architecture for fast loads)
- **Styling**: Tailwind CSS v4 (native CSS features, @container queries)
- **Build Output**: Static site generation
- **Design System**: GenAI × Plasma hybrid aesthetic
  - Primary Colors: Deep dark (#050510), violet (#A855F7), rose (#FB7185), gold (#FFB800)
  - Typography: Space Grotesk (headlines), Inter (body)
  - Effects: Glassmorphism, grain texture, parallax orbs, infinite marquees

## User Personas
1. **CTOs/Technical Founders** - Looking for AI architecture solutions
2. **Marketing Leaders** - Seeking growth automation systems
3. **Small Business Owners** - Wanting enterprise-grade tools without lock-in
4. **Individual Builders** - Learning AI-native workflows

## What's Been Implemented (V3 Complete)

### January 2026 - Full V3 Upgrade

**Section 2: Interactive Showcase** ✅
- `InteractiveShowcase.astro` with 6 glassmorphic case study cards
- Metrics: "4 Hours → 2 Seconds", "$24,000/yr → $600/yr", "#1 Cited Source", etc.
- Scroll-triggered reveal animations

**Section 3: Brand Story** ✅
- `BrandStory.astro` with "light switch" effect
- Gold glow transitions to violet/rose when "AI is that moment" comes into view
- Gold accent text highlighting key moments

**Section 4: Capabilities Carousel** ✅
- `CapabilitiesCarousel.astro` with 8 service cards
- 3D perspective depth effect
- Navigation: arrows, pagination dots, autoplay, swipe/drag, keyboard
- Parallax background orbs

**Section 5: Tech Stack Marquee** ✅
- `TechStackMatrix.astro` with dual-row infinite scroll
- 180+ tools across AI/Automation and Infrastructure categories
- Pause on hover, viewport-aware animation

**Section 7: Values Section** ✅
- `ValuesSection.astro` with sticky scroll pattern
- Left column stays fixed while right column scrolls through 5 values
- "The System Rules" headline with gold accent

**Section 8: FAQ Accordion** ✅
- `FAQAccordion.astro` with 3 expandable questions
- AEO-optimized JSON-LD FAQPage schema injection
- Smooth accordion animations

**Section 9: Founder Note** ✅
- `FounderNote.astro` with asymmetric editorial layout
- Gold ambient lighting and accent elements
- Pull quote: "I built HextonHQ for the builder in between"

**Section 10: CTA** ✅
- Updated copy: "Ready to stop talking about AI, and start installing it?"
- "Initialize the Build" CTA button

## Testing Status
- Frontend Testing: 100% pass rate (24/24 features)
- All interactive animations working
- JSON-LD schema verified
- Glassmorphic styling on 210+ elements
- Responsive design verified

## Backlog

### P0 (Critical)
- None remaining

### P1 (High Priority)
- Contact form functionality
- Services page detail layouts
- Blog post functionality

### P2 (Medium Priority)
- Light/dark mode toggle enhancement
- Performance optimization (image lazy loading)
- Additional FAQ questions

## Next Tasks
1. Build out /services page with individual service details
2. Implement /contact page with form submission
3. Create /blog listing and post templates
4. Add loading states and skeleton screens
