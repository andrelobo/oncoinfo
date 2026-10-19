import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-600">
        <p className="font-medium text-slate-800">
          Site informativo e documental. Não é propaganda oficial de partido nem
          laudo técnico.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Conteúdo revisado em <time dateTime="2026-10">outubro de 2026</time>.
        </p>
        <nav aria-label="Rodapé" className="mt-4">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <Link className="tap-target text-sky-700 hover:underline" to="/metodologia">
                Metodologia
              </Link>
            </li>
            <li>
              <Link className="tap-target text-sky-700 hover:underline" to="/fontes">
                Fontes
              </Link>
            </li>
            <li>
              <Link className="tap-target text-sky-700 hover:underline" to="/sobre">
                Sobre e correções
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
