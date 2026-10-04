import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import express from "express";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "..", "dist");
const app = express();
const host = "https://www.easyfindprops.com";
const pages: Record<string, { title: string; description: string; type?: string }> = {
  "/": {
    title: "EasyFind | Rent, Manage & Care for Property in East Bengaluru",
    description:
      "Find a home in East Bengaluru, or let us rent out, manage and care for your property, in India or abroad. Start on WhatsApp.",
  },
  "/guides/property-management-bengaluru": {
    title: "Property Management in Bengaluru: A Practical Owner's Guide | EasyFind",
    description:
      "What property owners actually need from a property-support provider: agreed work, access, repairs, handover, proof, and clear updates when you are away.",
    type: "article",
  },
  "/customer-protection": {
    title: "Customer Protection: How Fees & Payments Work | EasyFind",
    description:
      "What EasyFind does, what we do not guarantee, how fees and payments are confirmed in writing, and how to raise a concern.",
  },
  "/nri-property-management-bengaluru": {
    title: "NRI Property Management in Bengaluru | EasyFind",
    description:
      "On-the-ground property support for NRI owners in East Bengaluru: tenant coordination, inspections, repairs and handover, with photo updates.",
  },
};
const legal: Record<string, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Use",
  cookies: "Cookies and Similar Technologies",
  "legal-notice": "Legal Notice",
  accessibility: "Accessibility",
};
function meta(pathname: string) {
  pathname = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (pages[pathname]) return pages[pathname];
  if (pathname.startsWith("/areas/")) {
    const a = pathname.split("/").pop()?.replaceAll("-", " ");
    return {
      title: `Renting & Property Management in ${a?.replace(/\b\w/g, (c) => c.toUpperCase())}, Bengaluru | EasyFind`,
      description: `Looking to rent, buy or manage a property in ${a}? EasyFind helps renters and owners with visits, tenants, repairs and handover.`,
    };
  }
  if (pathname.startsWith("/legal/")) {
    const k = pathname.split("/").pop() || "privacy";
    return {
      title: `${legal[k] || "Legal Information"} | EasyFind Property Solutions`,
      description: `${legal[k] || "Legal information"} for EasyFind Property Solutions.`,
    };
  }
  return pages["/"];
}
function renderHead(html: string, pathname: string) {
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const m = meta(normalizedPath);
  const url = host + (normalizedPath === "/" ? "/" : normalizedPath);
  const tags = `<meta name="description" content="${m.description.replaceAll('"', "&quot;")}"><link rel="canonical" href="${url}"><meta property="og:site_name" content="EasyFind Property Solutions"><meta property="og:locale" content="en_IN"><meta property="og:type" content="${m.type || "website"}"><meta property="og:url" content="${url}"><meta property="og:title" content="${m.title.replaceAll('"', "&quot;")}"><meta property="og:description" content="${m.description.replaceAll('"', "&quot;")}"><meta property="og:image" content="${host}/og-image.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${m.title.replaceAll('"', "&quot;")}"><meta name="twitter:description" content="${m.description.replaceAll('"', "&quot;")}"><meta name="twitter:image" content="${host}/og-image.jpg">`;
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${m.title}</title>`)
    .replace(/<link rel="canonical"[^>]*>/, "")
    .replace("</head>", `${tags}</head>`);
}
app.get("/robots.txt", (_req, res) =>
  res.type("text/plain").send(`User-agent: *\nAllow: /\nSitemap: ${host}/sitemap.xml\n`),
);
app.get("/sitemap.xml", (_req, res) => {
  const paths = [
    "/",
    "/guides/property-management-bengaluru",
    "/customer-protection",
    "/nri-property-management-bengaluru",
    "/areas/bellandur",
    "/areas/hsr-layout",
    "/areas/whitefield",
    "/areas/koramangala",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
    "/legal/legal-notice",
    "/legal/accessibility",
  ];
  res
    .type("application/xml")
    .send(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${host}${p}</loc></url>`).join("")}</urlset>`,
    );
});
app.use(express.static(distPath, { index: false }));
app.use(async (req, res, next) => {
  try {
    const html = await readFile(path.join(distPath, "index.html"), "utf8");
    res.type("html").send(renderHead(html, req.path));
  } catch (e) {
    next(e);
  }
});
const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => console.log(`EasyFind website listening on port ${port}`));
