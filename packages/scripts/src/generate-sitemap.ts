import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
// Utils
import { PATHS, SITE, escapeText, log } from "@/config";
import { getRoutes, type RouteEntry } from "@/routes";

function toUrlEntry(route: RouteEntry) {
  const lines = [`    <loc>${escapeText(SITE.url + route.path)}</loc>`];
  if (route.lastmod)
    lines.push(`    <lastmod>${route.lastmod.slice(0, 10)}</lastmod>`);
  lines.push(`    <changefreq>${route.changefreq}</changefreq>`);
  lines.push(`    <priority>${route.priority.toFixed(1)}</priority>`);
  return `  <url>\n${lines.join("\n")}\n  </url>`;
}

async function main() {
  const routes = await getRoutes();

  const sitemap = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...routes.map(toUrlEntry),
    `</urlset>`,
    ``,
  ].join("\n");

  const robots = [
    `User-agent: *`,
    `Allow: /`,
    ``,
    `Sitemap: ${SITE.url}/sitemap.xml`,
    ``,
  ].join("\n");

  await mkdir(PATHS.public, { recursive: true });
  await writeFile(resolve(PATHS.public, "sitemap.xml"), sitemap, "utf8");
  await writeFile(resolve(PATHS.public, "robots.txt"), robots, "utf8");

  log.info(`sitemap.xml dan robots.txt dibuat (${routes.length} rute).`);
}

main().catch((error) => {
  log.error(error);
  process.exitCode = 1;
});
