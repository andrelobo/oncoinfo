import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-rule bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <img
              src="/logo.png"
              alt="Logo Onco-Info"
              className="h-12 w-12 rounded-sm border border-rule object-cover"
            />
            <div>
              <p className="font-serif text-base font-semibold text-ink">
                Onco-Info
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                Informação salva vidas
              </p>
            </div>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em]">
              <li>
                <Link className="tap text-muted hover:text-ink" to="/metodologia">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link className="tap text-muted hover:text-ink" to="/fontes">
                  Fontes
                </Link>
              </li>
              <li>
                <Link className="tap text-muted hover:text-ink" to="/sobre">
                  Sobre e correções
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-6 max-w-3xl border-t border-rule pt-4 text-sm text-muted">
          Site informativo e documental. Não é propaganda oficial de partido nem
          laudo técnico.
        </p>
        <p className="mt-2 font-mono text-[11px] text-faint">
          Conteúdo revisado em <time dateTime="2026-10">outubro de 2026</time>.
        </p>
      </div>
    </footer>
  );
}
