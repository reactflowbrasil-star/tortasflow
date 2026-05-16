// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // Disable Cloudflare Workers — build targets standard Node.js so the app
  // can run on any server (VPS, Docker, Vercel, Render, Railway, etc.)
  cloudflare: false,
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["pwa-icon.svg"],
        manifest: {
          name: "Tortas Flow",
          short_name: "Tortas Flow",
          description: "Especialista em Tortas de Feira",
          theme_color: "#6D0F1B",
          background_color: "#3B1F1F",
          display: "standalone",
          orientation: "portrait",
          start_url: "/",
          scope: "/",
          lang: "pt-BR",
          icons: [
            {
              src: "/pwa-icon.svg",
              sizes: "any",
              type: "image/svg+xml",
              purpose: "any maskable",
            },
          ],
        },
        workbox: {
          navigateFallback: "/",
          globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff2}"],
        },
      }),
    ],
  },
});
