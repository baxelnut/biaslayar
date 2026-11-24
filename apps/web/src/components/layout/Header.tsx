import { Link, NavLink } from "react-router-dom";
// Style
import "./Header.css";
// Components
import { Container, buttonClass } from "@biaslayar/components";
// Utils
import { cx } from "@biaslayar/lib";

export type NavLinkItem = { label: string; to: string };

type HeaderProps = {
  siteName: string;
  role: string;
  items: ReadonlyArray<NavLinkItem>;
  cta: NavLinkItem;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

const linkClass =
  (base: string) =>
  ({ isActive }: { isActive: boolean }) =>
    cx(base, isActive && "is-active");

export function Header({
  siteName,
  role,
  items,
  cta,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: HeaderProps) {
  return (
    <>
      <header className="site-header">
        <Container className="site-header__inner">
          <Link to="/" className="site-header__brand" onClick={onCloseMenu}>
            <span className="site-header__name">{siteName}</span>
            <span className="site-header__role">{role}</span>
          </Link>

          <nav className="site-nav" aria-label="Navigasi utama">
            <ul className="site-nav__list">
              {items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={linkClass("site-nav__link")}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to={cta.to}
            className={buttonClass({
              size: "sm",
              className: "site-header__cta",
            })}
          >
            {cta.label}
          </Link>

          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            onClick={onToggleMenu}
          >
            <span className="burger" aria-hidden="true" />
          </button>
        </Container>
      </header>

      {menuOpen && (
        <div
          className="overlay site-header__scrim"
          onClick={onCloseMenu}
          aria-hidden="true"
        />
      )}

      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        <nav aria-label="Navigasi seluler">
          <ul className="mobile-menu__list">
            {items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={linkClass("mobile-menu__link")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to={cta.to}
          className={buttonClass({
            block: true,
            className: "mobile-menu__cta",
          })}
        >
          {cta.label}
        </Link>
      </div>
    </>
  );
}
