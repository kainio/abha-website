// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://kainio.github.io',
    base: '/abha-website', // e.g., '/abha-website'
    integrations: [],
    output: 'static', // Static site generation
});
