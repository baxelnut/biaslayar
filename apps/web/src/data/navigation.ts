export const NAV_ITEMS = [
  { label: "Beranda", to: "/" },
  { label: "Profil", to: "/profil" },
  { label: "Kegiatan", to: "/kegiatan" },
  { label: "Aspirasi", to: "/aspirasi" },
  { label: "Kontak", to: "/kontak" },
] as const;

export const NAV_CTA = {
  label: "Sampaikan Aspirasi",
  to: "/aspirasi",
} as const;

export const FOOTER_LEGAL = [
  { label: "Kebijakan Privasi", to: "/kebijakan-privasi" },
] as const;
