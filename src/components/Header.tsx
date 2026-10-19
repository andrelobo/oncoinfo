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
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <Link to="/" className="tap-target text-lg font-bold text-slate-900">
            Oncologia no SUS
          </Link>
          <p className="text-xs text-slate-500">
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
                    `tap-target rounded-md px-3 text-sm font-medium ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100"
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
