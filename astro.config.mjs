import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://humanverified.org',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm] // Enables better Markdown support (tables, strikethrough, etc.)
  }
});
