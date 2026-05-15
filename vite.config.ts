import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to "./" for GitHub Pages subdirectory deployments.
  // Change to "/" if deploying to a root domain (Netlify, Vercel, custom domain).
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
