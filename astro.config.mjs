// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://ruranjo.github.io/astro-juice-landing/", // 👈 muy importante
  vite: {
    plugins: [tailwindcss()]
  }
});