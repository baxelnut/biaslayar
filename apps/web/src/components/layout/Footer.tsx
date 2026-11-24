import { Link } from "react-router-dom";
// Style
import "./Footer.css";
// Components
import { Container } from "@biaslayar/components";
import type { NavLinkItem } from "./Header";

type FooterProps = {
  siteName: string;
  role: string;
  tagline: string;
  navItems: ReadonlyArray<NavLinkItem>;
  legalItems: ReadonlyArray<NavLinkItem>;
};

export function Footer({
  siteName,
  role,
  tagline,
  navItems,
  legalItems,
}: FooterProps) {
  return (
    <footer className="site-footer on-dark">
      <Container>
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__name">{siteName}</p>
            <p className="site-footer__text">
              {role}. {tagline}
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <p className="kicker site-footer__title">Halaman</p>
            <ul className="site-footer__list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Tautan legal">
            <p className="kicker site-footer__title">Informasi</p>
            <ul className="site-footer__list">
              {legalItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {siteName}. Seluruh hak
            dilindungi.
          </p>
          <p>Situs informasi resmi jabatan publik.</p>
        </div>
      </Container>
    </footer>
  );
}
