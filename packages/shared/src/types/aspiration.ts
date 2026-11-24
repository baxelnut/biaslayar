export const ASPIRATION_STATUSES = [
  "diterima",
  "diteruskan",
  "ditindaklanjuti",
  "selesai",
] as const;

export type AspirationStatus = (typeof ASPIRATION_STATUSES)[number];

export const ASPIRATION_STATUS_LABEL: Record<AspirationStatus, string> = {
  diterima: "Diterima",
  diteruskan: "Diteruskan",
  ditindaklanjuti: "Ditindaklanjuti",
  selesai: "Selesai",
};
