import { mkdirSync, writeFileSync } from "node:fs";
import { resolveSiteUrl } from "./resolve-site-url.mjs";

const siteUrl = resolveSiteUrl(process.env);
const pages = [
  "",
  "/projetos/motiva-orion",
  "/projetos/climatemind-ai",
  "/projetos/bot-nba",
  "/projetos/aetheros",
];

mkdirSync("public", { recursive: true });

writeFileSync(
  "public/robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  "utf8",
);

const urls = pages
  .map((path) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n  </url>`)
  .join("\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  "utf8",
);
