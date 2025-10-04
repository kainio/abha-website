// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [],
    base: '/', // Ensure correct base path for assets
    output: 'static', // Static site generation
});
