import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const staticPages = [
  {
    path: "/",
    title: "EasyFind | Rent, Manage & Care for Property in East Bengaluru",
    description:
      "Find a home in East Bengaluru, or let us rent out, manage and care for your property, in India or abroad. Start on WhatsApp.",
    type: "website",
  },
  {
    path: "/guides/property-management-bengaluru",
    title: "Property Management in Bengaluru: A Practical Owner's Guide | EasyFind",
    description:
      "What property owners actually need from a property-support provider: agreed work, access, repairs, handover, proof, and clear updates when you are away.",
    type: "article",
  },
  {
    path: "/customer-protection",
    title: "Customer Protection: How Fees & Payments Work | EasyFind",
    description:
      "What EasyFind does, what we do not guarantee, how fees and payments are confirmed in writing, and how to raise a concern.",
    type: "website",
  },
  {
    path: "/nri-property-management-bengaluru",
    title: "NRI Property Management in Bengaluru | EasyFind",
    description:
      "On-the-ground property support for NRI owners in East Bengaluru: tenant coordination, inspections, repairs and handover, with photo updates.",
    type: "website",
  },
  {
    path: "/areas/bellandur",
    title: "Renting & Property Management in Bellandur, Bengaluru | EasyFind",
    description:
      "Looking to rent, buy or manage a property in Bellandur? EasyFind helps renters and owners with visits, tenants, repairs and handover.",
    type: "website",
  },
  {
    path: "/areas/hsr-layout",
    title: "Renting & Property Management in HSR Layout, Bengaluru | EasyFind",
    description:
      "Looking to rent, buy or manage a property in HSR Layout? EasyFind helps renters and owners with visits, tenants, repairs and handover.",
    type: "website",
  },
  {
    path: "/areas/whitefield",
    title: "Renting & Property Management in Whitefield, Bengaluru | EasyFind",
    description:
      "Looking to rent, buy or manage a property in Whitefield? EasyFind helps renters and owners with visits, tenants, repairs and handover.",
    type: "website",
  },
  {
    path: "/areas/koramangala",
    title: "Renting & Property Management in Koramangala, Bengaluru | EasyFind",
    description:
      "Looking to rent, buy or manage a property in Koramangala? EasyFind helps renters and owners with visits, tenants, repairs and handover.",
    type: "website",
  },
  {
    path: "/legal/privacy",
    title: "Privacy Policy | EasyFind Property Solutions",
    description: "How EasyFind Property Solutions handles information shared through this website.",
    type: "website",
  },
  {
    path: "/legal/terms",
    title: "Terms of Use | EasyFind Property Solutions",
    description: "The terms that apply when you use the EasyFind website.",
    type: "website",
  },
  {
    path: "/legal/cookies",
    title: "Cookies and Similar Technologies | EasyFind Property Solutions",
    description: "A plain-language explanation of website storage and third-party services.",
    type: "website",
  },
  {
    path: "/legal/legal-notice",
    title: "Legal Notice | EasyFind Property Solutions",
    description: "Important information about EasyFind Property Solutions and this website.",
    type: "website",
  },
  {
    path: "/legal/accessibility",
    title: "Accessibility | EasyFind Property Solutions",
    description: "Our approach to making the website usable across common devices and needs.",
    type: "website",
  },
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function pageHead(page: (typeof staticPages)[number]) {
  const base = "https://www.easyfindprops.com";
  const url = `${base}${page.path === "/" ? "/" : page.path}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  return `<meta name="description" content="${description}"><link rel="canonical" href="${url}"><meta property="og:site_name" content="EasyFind Property Solutions"><meta property="og:locale" content="en_IN"><meta property="og:type" content="${page.type}"><meta property="og:url" content="${url}"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:image" content="${base}/og-image.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${title}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${base}/og-image.jpg">`;
}

function renderStaticHead(html: string, page: (typeof staticPages)[number]) {
  const withoutRouteTags = html
    .replace(/<title>.*?<\/title>/s, "")
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<meta property="og:[^>]*>/g, "")
    .replace(/<meta name="twitter:[^>]*>/g, "");
  return withoutRouteTags.replace(
    "</head>",
    `<title>${escapeHtml(page.title)}</title>${pageHead(page)}</head>`,
  );
}

function staticSpaRoutes() {
  return {
    name: "static-spa-routes",
    closeBundle() {
      const baseHtml = readFileSync(join("dist", "index.html"), "utf8");
      for (const page of staticPages) {
        const routeDir = join("dist", page.path.slice(1));
        mkdirSync(routeDir, { recursive: true });
        writeFileSync(join(routeDir, "index.html"), renderStaticHead(baseHtml, page));
      }
      writeFileSync(
        join("dist", "robots.txt"),
        "User-agent: *\nAllow: /\nSitemap: https://www.easyfindprops.com/sitemap.xml\n",
      );
      writeFileSync(
        join("dist", "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticPages.map((page) => `<url><loc>https://www.easyfindprops.com${page.path}</loc></url>`).join("")}</urlset>`,
      );
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
