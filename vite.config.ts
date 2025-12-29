import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',  // root for custom domain; use '/repo-name/' for GitHub repo URL testing
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // only React plugin for production build
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
