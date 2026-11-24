import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..", "..", "..");
const web = resolve(root, "apps", "web");

export const PATHS = {
  root,
  web,
  public: resolve(web, "public"),
  dist: resolve(web, "dist"),
};

function loadEnv(file: string) {
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, raw] = match;
    const value = raw.replace(/^(['"])(.*)\1$/, "$2");
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnv(resolve(web, ".env"));
loadEnv(resolve(root, ".env"));

export const SITE = {
  name: "Bias Layar, S.H.",
  url: (process.env.VITE_SITE_URL ?? "https://biaslayar.com").replace(
    /\/$/,
    "",
  ),
  locale: "id_ID",
  image: "/og-default.jpg",
  title: "Bias Layar, S.H. | Anggota DPR RI dan MPR RI Kalimantan Tengah",
  description:
    "Situs resmi Bias Layar, S.H., Anggota DPR RI dan MPR RI dari Kalimantan Tengah: profil, kegiatan, dan kanal aspirasi masyarakat.",
};

export const SUPABASE = {
  url: process.env.VITE_SUPABASE_URL,
  anonKey: process.env.VITE_SUPABASE_ANON_KEY,
};

export function escapeText(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const log = {
  // oxlint-disable-next-line no-console
  info: (message: string) => console.log(message),
  // oxlint-disable-next-line no-console
  warn: (message: string) => console.warn(`[peringatan] ${message}`),
  // oxlint-disable-next-line no-console
  error: (message: unknown) => console.error(message),
};
