import { Link } from "react-router-dom";
// Style
import "./NotFoundPage.css";
// Components
import { PageHeader, Section, buttonClass, Seo } from "@biaslayar/components";

export function NotFoundPage() {
  return (
    <>
      <Seo title="Halaman tidak ditemukan" noindex />
      <PageHeader
        eyebrow="Kesalahan 404"
        title="Halaman tidak ditemukan"
        description="Alamat yang Anda tuju tidak tersedia atau sudah dipindahkan."
      />
      <Section>
        <Link to="/" className={buttonClass()}>
          Kembali ke Beranda
        </Link>
      </Section>
    </>
  );
}
