import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/lol-companion/",
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@store': '/src/store',
    },
  },
});
