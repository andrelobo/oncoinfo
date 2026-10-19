import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-ink-950/60">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="gradient-rule mb-6" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-white/20">
              <img
                src="/logo.png"
                alt="Logo Onco-Info"
                className="h-full w-full object-cover"
              />
            </span>
            <div>
              <p className="font-display text-base font-bold text-white">
                Onco-Info
              </p>
              <p className="text-xs text-slate-400">Informação salva vidas</p>
            </div>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              <li>
                <Link className="tap text-slate-300 hover:text-brand-green-light" to="/metodologia">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link className="tap text-slate-300 hover:text-brand-green-light" to="/fontes">
                  Fontes
                </Link>
              </li>
              <li>
                <Link className="tap text-slate-300 hover:text-brand-green-light" to="/sobre">
                  Sobre e correções
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-6 max-w-3xl text-sm text-slate-400">
          Site informativo e documental. Não é propaganda oficial de partido nem
          laudo técnico.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Conteúdo revisado em <time dateTime="2026-10">outubro de 2026</time>.
        </p>
      </div>
    </footer>
  );
}
