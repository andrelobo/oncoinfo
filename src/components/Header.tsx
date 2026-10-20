import { Link, NavLink } from "react-router-dom";
import { tabs } from "../content/tabs";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 py-2 md:py-1.5 lg:py-3">
        <Link to="/onco-norte" className="tap block">
          <img
            src="/logo.png"
            alt="Onco-Info — Informação salva vidas"
            className="mx-auto h-14 w-auto object-contain sm:h-16 md:h-9 lg:h-14"
          />
        </Link>
      </div>

      <nav
        aria-label="Navegação principal"
        className="border-t border-rule"
      >
        <ul className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-1.5 md:py-1 lg:py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <li key={tab.slug} className="shrink-0">
              <NavLink
                to={`/${tab.slug}`}
                className={({ isActive }) =>
                  `tap inline-flex items-center whitespace-nowrap rounded-full border px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] transition ${
                    isActive
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-rule-strong bg-paper text-muted hover:border-brand-blue hover:text-brand-blue"
                  }`
                }
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
