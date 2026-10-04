import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const staticRoutes = [
  "legal/privacy",
  "legal/terms",
  "legal/cookies",
  "legal/legal-notice",
  "legal/accessibility",
  "customer-protection",
  "guides/property-management-bengaluru",
  "nri-property-management-bengaluru",
  "areas/bellandur",
  "areas/hsr-layout",
  "areas/whitefield",
  "areas/koramangala",
];

function staticSpaRoutes() {
  return {
    name: "static-spa-routes",
    closeBundle() {
      for (const route of staticRoutes) {
        const routeDir = join("dist", route);
        mkdirSync(routeDir, { recursive: true });
        cpSync(join("dist", "index.html"), join(routeDir, "index.html"));
      }
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), TanStackRouterVite(), react(), staticSpaRoutes()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
  preview: {
    allowedHosts: true,
  },
});
