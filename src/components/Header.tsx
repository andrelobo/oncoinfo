import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/comparar", label: "Comparar" },
  { to: "/linha-do-tempo", label: "Linha do tempo" },
  { to: "/impacto-real", label: "Impacto real" },
  { to: "/eleicoes-2026", label: "Eleições 2026" },
  { to: "/flavio-2026", label: "Se Flávio for eleito" },
  { to: "/estados", label: "Estados" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/fontes", label: "Fontes" },
  { to: "/perguntas-frequentes", label: "Dúvidas" },
  { to: "/sobre", label: "Sobre" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <Link to="/" className="tap flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo Onco-Info"
              className="h-[96px] w-[96px] rounded-sm border border-rule object-cover"
            />
            <span className="leading-tight">
              <span className="block font-serif text-lg font-semibold tracking-tight text-ink">
                Onco-Info
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                Informação salva vidas
              </span>
            </span>
          </Link>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.1em] text-faint sm:block">
            Comparativo documental · 2003–2022
          </p>
        </div>
        <nav
          aria-label="Navegação principal"
          className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1"
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
