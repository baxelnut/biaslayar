// Utils
import { SUPABASE, log } from "@/config";

export type RouteEntry = {
  path: string;
  title?: string;
  description?: string;
  type?: "website" | "article";
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  lastmod?: string;
};

export const STATIC_ROUTES: ReadonlyArray<RouteEntry> = [
  { path: "/", changefreq: "weekly", priority: 1 },
  {
    path: "/profil",
    title: "Profil",
    description:
      "Profil, latar belakang karier, dan peran Bias Layar, S.H. di DPR RI dan MPR RI.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/kegiatan",
    title: "Kegiatan dan Berita",
    description:
      "Kegiatan, berita, galeri, dan siaran pers Bias Layar, S.H. bersama masyarakat Kalimantan Tengah.",
    changefreq: "daily",
    priority: 0.9,
  },
  {
    path: "/aspirasi",
    title: "Sampaikan Aspirasi",
    description:
      "Sampaikan aspirasi Anda melalui kanal resmi. Setiap aspirasi dicatat dan ditindaklanjuti oleh staf.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/kontak",
    title: "Kontak",
    description: "Alamat kantor dan kontak media resmi Bias Layar, S.H.",
    changefreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/kebijakan-privasi",
    title: "Kebijakan Privasi",
    description:
      "Kebijakan privasi dan pelindungan data pribadi pada situs resmi Bias Layar, S.H.",
    changefreq: "yearly",
    priority: 0.3,
  },
];

type NewsRow = {
  slug: string;
  title: string;
  summary: string | null;
  updated_at: string;
};

async function fetchNewsRoutes(): Promise<RouteEntry[]> {
  const { url, anonKey } = SUPABASE;
  if (!url || !anonKey) {
    log.warn(
      "VITE_SUPABASE_URL atau VITE_SUPABASE_ANON_KEY kosong, rute berita dilewati.",
    );
    return [];
  }

  const query =
    "select=slug,title,summary,updated_at&status=eq.published&order=updated_at.desc&limit=1000";

  try {
    const response = await fetch(`${url}/rest/v1/news?${query}`, {
      headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
    });
    if (!response.ok) {
      log.warn(
        `Gagal mengambil berita (${response.status}), rute berita dilewati.`,
      );
      return [];
    }

    const rows = (await response.json()) as NewsRow[];
    return rows.map((row) => ({
      path: `/kegiatan/${row.slug}`,
      title: row.title,
      description: row.summary ?? undefined,
      type: "article",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: row.updated_at,
    }));
  } catch (error) {
    log.warn(
      `Gagal menghubungi Supabase: ${error instanceof Error ? error.message : String(error)}`,
    );
    return [];
  }
}

export async function getRoutes(): Promise<RouteEntry[]> {
  return [...STATIC_ROUTES, ...(await fetchNewsRoutes())];
}
