import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [ViteImageOptimizer({
    png: {
      quality: 80,
    },
    jpeg: {
      quality: 80,
    },
    webp: {
      lossless: false,
      quality: 80,
    },
  }), cloudflare()],
  build: {
    minify: "terser",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});