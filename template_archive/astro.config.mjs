import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import skills from 'astro-skills';

export default defineConfig({
  site: 'https://hextonhq.com',
  output: 'static',

  integrations: [
    sitemap(),
    mdx(),
    skills(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
