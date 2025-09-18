import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Vercel deployment, usually base: "/" is correct
  // Only use "./" if you plan to serve from subpaths
  base: "/",
});

