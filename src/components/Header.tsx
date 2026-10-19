import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/comparar", label: "Comparar" },
  { to: "/linha-do-tempo", label: "Linha do tempo" },
  { to: "/impacto-real", label: "Impacto real" },
  { to: "/eleicoes-2026", label: "Eleições 2026" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/fontes", label: "Fontes" },
  { to: "/perguntas-frequentes", label: "Dúvidas" },
  { to: "/sobre", label: "Sobre" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <Link to="/" className="tap group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-white/20">
              <img
                src="/logo.png"
                alt="Logo Onco-Info"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-white">
                Onco-Info
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Informação salva vidas
              </span>
            </span>
          </Link>
          <p className="hidden text-xs text-slate-500 sm:block">
            Comparativo documental · 2003–2022
          </p>
        </div>
        <nav aria-label="Navegação principal" className="mt-2">
          <ul className="flex flex-wrap gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `tap rounded-full px-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-white/10 text-white ring-1 ring-inset ring-white/20"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
