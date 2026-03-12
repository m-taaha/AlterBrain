import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Override Vite 8's default Lightning CSS minifier to avoid
    // conflicts with Tailwind v4's internal CSS processing.
    cssMinify: "esbuild",
  },
});
