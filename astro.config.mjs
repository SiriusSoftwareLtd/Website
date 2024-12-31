// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://sirius.menu",
  integrations: [partytown(), sitemap({ changefreq: 'weekly',
    priority: 0.7}), tailwind()],
});