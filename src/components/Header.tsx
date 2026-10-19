import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/comparar", label: "Comparar" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/fontes", label: "Fontes" },
  { to: "/perguntas-frequentes", label: "Dúvidas" },
  { to: "/sobre", label: "Sobre" },
];

export function Header() {
  const location = useLocation();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 py-2 md:py-3">
        <div className="flex items-center justify-between gap-x-4">
          <Link to="/" className="tap flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo Onco-Info"
              className="h-12 w-12 shrink-0 object-contain lg:h-[88px] lg:w-[88px]"
            />
            <span className="leading-tight">
              <span className="block font-serif text-base font-semibold tracking-tight text-ink sm:text-lg">
                Onco-Info
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                Informação salva vidas
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.1em] text-faint xl:block">
              Comparativo documental · 2003–2022
            </p>
            <button
              type="button"
              onClick={() => setOpenPath(open ? null : location.pathname)}
              aria-expanded={open}
              aria-controls="main-menu"
              className="tap flex items-center gap-2 border border-rule-strong bg-paper px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink transition hover:border-ink lg:hidden"
            >
              <span aria-hidden="true">{open ? "✕" : "☰"}</span>
              {open ? "Fechar" : "Menu"}
            </button>
          </div>
        </div>

        {/* Menu hambúrguer (mobile/tablet) */}
        {open ? (
          <nav
            id="main-menu"
            aria-label="Navegação principal"
            className="mt-3 border-t border-rule pt-2 lg:hidden"
          >
            <ul className="divide-y divide-rule">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpenPath(null)}
                    className={({ isActive }) =>
                      `block py-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] transition ${
                        isActive ? "text-ink" : "text-muted hover:text-ink"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {/* Navegação inline (desktop) */}
        <nav
          aria-label="Navegação principal"
          className="mt-2 hidden flex-wrap items-center gap-x-4 lg:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `tap border-b-2 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] transition ${
                  isActive
                    ? "border-ink text-ink"
                    : "border-transparent text-muted hover:border-rule-strong hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
