# HextonHQ Web Template Documentation

This document outlines the original state and components of the Astro template used as the foundation for the HextonHQ website. The original working files have been backed up in the `template_archive/` directory.

## Tech Stack
- **Framework**: [Astro](https://astro.build/) (v5)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 via `@tailwindcss/vite`)
- **Icons**: (Add any specific icon libraries if discovered, e.g., lucide-react, heroicons)
- **SEO**: `@astrojs/sitemap`, `astro-seo-schema`

## Directory Structure (Archived)
The original template structure is preserved in `template_archive/`.

```text
web/
├── src/
│   ├── components/  # Reusable UI elements
│   │   └── ui/      # Specific UI blocks (Hero, Cards, etc.)
│   ├── layouts/     # Page layout wrappers (e.g., Layout.astro)
│   ├── pages/       # Route entry points (index.astro)
│   └── styles/      # Global CSS (global.css)
├── public/          # Static assets (images, fonts, favicon)
├── astro.config.mjs # Astro framework configuration
├── package.json     # Project dependencies and scripts
└── tsconfig.json    # TypeScript configuration
```

## Available UI Components (`src/components/ui/`)

These components are pre-built and styled with Tailwind CSS, ready to be used or modified for the final website design.

1. **`Hero.astro`**: Main call-to-action section, typically at the top of the homepage.
2. **`Header.astro`**: The top navigation bar.
3. **`Footer.astro`**: The site footer with links and copyright.
4. **`CTASection.astro`**: Call to Action block for prompting user engagement.
5. **`GlassCard.astro`**: A styled card component using a "glassmorphism" effect (translucency and blur).
6. **`GradientText.astro`**: Utility component for rendering text with a gradient fill.
7. **`PricingCard.astro`**: A card designed to display pricing tiers or plans.
8. **`SectionHeading.astro`**: Standardized heading for different sections of a page.
9. **`ServiceCard.astro`**: A card for highlighting specific services or features.
10. **`Timeline.astro`**: A component to display events or a process in a chronological timeline format.

## Getting Started (Development)

To run the development server from the `web/` directory:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

To build the project for production:
```bash
npm run build
```
