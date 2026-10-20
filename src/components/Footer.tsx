import { Link } from "react-router-dom";
import { tabs } from "../content/tabs";

export function Footer() {
  return (
    <footer className="border-t-2 border-brand-blue bg-paper">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <img
              src="/logo.png"
              alt="Onco-Info"
              className="h-12 w-auto shrink-0 object-contain"
            />
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em]">
              {tabs.map((tab) => (
                <li key={tab.slug}>
                  <Link
                    className="tap text-muted hover:text-ink"
                    to={`/${tab.slug}`}
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 rounded-lg border border-rule bg-canvas px-4 py-3">
          <p className="label mb-1">Iniciativa independente</p>
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            Este site é uma iniciativa independente e voluntária. Não pertence à
            campanha de Lula, ao Partido dos Trabalhadores nem à coligação, e
            não tem vínculo com nenhum deles.
          </p>
        </div>

        <p className="mt-6 max-w-3xl border-t border-rule pt-4 text-sm text-muted">
          Site informativo e documental. O conteúdo de cada aba reproduz o
          material original, com link para o documento em PDF.
        </p>
      </div>
    </footer>
  );
}
