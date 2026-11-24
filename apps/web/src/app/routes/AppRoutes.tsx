import { Route, Routes } from "react-router-dom";
// Routes
import { LocaleLayout } from "./LocaleLayout";
// Style
import "./AppRoutes.css";
// Components
import { PageStub } from "@/components";
import { NotFoundPage } from "@/pages/404/NotFoundPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<LocaleLayout />}>
        <Route index element={<PageStub title="Beranda" />} />
        <Route path="profil" element={<PageStub title="Profil" />} />
        <Route
          path="kegiatan"
          element={<PageStub title="Kegiatan dan Berita" />}
        />
        <Route
          path="kegiatan/:slug"
          element={<PageStub title="Detail Kegiatan" />}
        />
        <Route
          path="aspirasi"
          element={<PageStub title="Sampaikan Aspirasi" />}
        />
        <Route path="kontak" element={<PageStub title="Kontak" />} />
        <Route
          path="kebijakan-privasi"
          element={<PageStub title="Kebijakan Privasi" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
