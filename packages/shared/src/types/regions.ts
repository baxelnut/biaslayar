export const KALTENG_REGENCIES = [
  "Kotawaringin Barat",
  "Kotawaringin Timur",
  "Kapuas",
  "Barito Selatan",
  "Barito Utara",
  "Sukamara",
  "Lamandau",
  "Seruyan",
  "Katingan",
  "Pulang Pisau",
  "Gunung Mas",
  "Barito Timur",
  "Murung Raya",
  "Kota Palangka Raya",
] as const;

export type KaltengRegency = (typeof KALTENG_REGENCIES)[number];
