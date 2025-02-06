// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://humanverified.org',
  integrations: [sitemap()],
});