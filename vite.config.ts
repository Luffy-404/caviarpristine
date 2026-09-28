import { nitro } from "nitro/vite";
import { fileURLToPath } from "node:url";
import vinext from "vinext";
import { defineConfig } from "vite";

// Vercel is served through Nitro's Build Output API adapter. Do not combine
// this with a Cloudflare/Workers plugin: that creates a different artifact.
export default defineConfig(({ command }) => ({
  plugins: [vinext(), ...(command === "build" ? [nitro()] : [])],
  resolve: {
    // Vite's CSS import pass needs an explicit file target for Tailwind v4
    // when it runs alongside the Vinext RSC environments.
    alias: {
      tailwindcss: fileURLToPath(
        new URL("./node_modules/tailwindcss/index.css", import.meta.url),
      ),
    },
  },
}));
