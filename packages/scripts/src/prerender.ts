import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
// Utils
import { PATHS, SITE, escapeText, log } from "@/config";
import { getRoutes, type RouteEntry } from "@/routes";

const SAFE_SEGMENT = /^[a-z0-9-]+$/i;

function buildHtml(shell: string, route: RouteEntry) {
  const title = route.title ? `${route.title} | ${SITE.name}` : SITE.title;
  const description = route.description ?? SITE.description;
  const url = SITE.url + route.path;
  const image = SITE.url + SITE.image;

  const head = [
    `<link rel="canonical" href="${escapeText(url)}" />`,
    `<meta property="og:site_name" content="${escapeText(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:type" content="${route.type ?? "website"}" />`,
    `<meta property="og:title" content="${escapeText(title)}" />`,
    `<meta property="og:description" content="${escapeText(description)}" />`,
    `<meta property="og:url" content="${escapeText(url)}" />`,
    `<meta property="og:image" content="${escapeText(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join("\n    ");

  return shell
    .replace(
      /<title>[\s\S]*?<\/title>/,
      () => `<title>${escapeText(title)}</title>`,
    )
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      () => `<meta name="description" content="${escapeText(description)}" />`,
    )
    .replace("</head>", () => `    ${head}\n  </head>`);
}

function outputFile(route: RouteEntry) {
  if (route.path === "/") return resolve(PATHS.dist, "index.html");
  const segments = route.path.split("/").filter(Boolean);
  if (!segments.every((segment) => SAFE_SEGMENT.test(segment))) return null;
  return resolve(PATHS.dist, ...segments, "index.html");
}

async function main() {
  const shellPath = resolve(PATHS.dist, "index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      "apps/web/dist/index.html tidak ditemukan. Jalankan vite build lebih dulu.",
    );
  }

  const shell = await readFile(shellPath, "utf8");
  const routes = await getRoutes();
  let written = 0;

  for (const route of routes) {
    const file = outputFile(route);
    if (!file) {
      log.warn(`Rute dilewati karena slug tidak aman: ${route.path}`);
      continue;
    }
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, buildHtml(shell, route), "utf8");
    written += 1;
  }

  log.info(`Prerender selesai (${written} halaman).`);
}

main().catch((error) => {
  log.error(error);
  process.exitCode = 1;
});
