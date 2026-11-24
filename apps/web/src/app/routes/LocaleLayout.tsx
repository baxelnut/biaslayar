import { Outlet, useLocation } from "react-router-dom";
// Contexts & Hooks
import { useToasts } from "@biaslayar/hooks";
import { useMobileMenu, useScrollToTop } from "@/hooks";
// Components
import { ToastViewport } from "@biaslayar/components";
import { Footer, Header } from "@/components";
// Utils
import { FOOTER_LEGAL, NAV_CTA, NAV_ITEMS } from "@/data/navigation";
import { SITE } from "@biaslayar/data";

export function LocaleLayout() {
  const { pathname } = useLocation();
  const menu = useMobileMenu(pathname);
  const { toasts, dismiss } = useToasts();
  useScrollToTop(pathname);

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Lewati ke konten utama
      </a>
      <Header
        siteName={SITE.fullName}
        role={SITE.role}
        items={NAV_ITEMS}
        cta={NAV_CTA}
        menuOpen={menu.open}
        onToggleMenu={menu.toggle}
        onCloseMenu={menu.close}
      />
      <main id="main" className="page" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer
        siteName={SITE.fullName}
        role={SITE.role}
        tagline={SITE.tagline}
        navItems={NAV_ITEMS}
        legalItems={FOOTER_LEGAL}
      />
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
