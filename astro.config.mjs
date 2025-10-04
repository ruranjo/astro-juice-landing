// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ruranjo.github.io',      // 👈 tu usuario de GitHub
  base: '/astro-juice-landing',           // 👈 nombre exacto de tu repo
  vite: {
    plugins: [tailwindcss()],
  },
});
