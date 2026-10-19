import { Link } from "react-router-dom";
import { AxisIcon } from "../components/AxisIcon";
import { axes } from "../content/axes";
import { periods } from "../content/periods";
import { useSeo } from "../lib/seo";

export function Home() {
  useSeo(
    "Início",
    "Comparativo documental das políticas de oncologia no SUS nos governos Lula (2003–2010), Dilma (2011–2016) e Bolsonaro (2019–2022), com fontes e datas.",
  );

  return (
    <div className="space-y-12">
      <section>
        <p className="label mb-3">Relatório documental · Oncologia no SUS</p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          O que os documentos registram sobre o câncer no SUS
        </h1>
        <p className="prose-lead mt-4">
          O que o SUS fez no tratamento do câncer em três governos. Só fatos com
          fonte e data — e, quando falta dado, dizemos isso.
        </p>
        <Link to="/comparar" className="btn-primary mt-6">
          Começar a comparar
        </Link>
      </section>

      <section className="doc-section">
        <h2 className="label mb-3">Compare por período</h2>
        <div className="divide-y divide-rule border-y border-rule">
          {periods.map((period) => (
            <Link
              key={period.slug}
              to={`/governo/${period.slug}`}
              className="flex items-baseline justify-between gap-4 py-3 no-underline"
            >
              <span className="font-serif text-base font-semibold text-ink">
                {period.label}
              </span>
              <span className="doclink font-mono text-[11px] uppercase tracking-[0.08em]">
                Ver →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="label mb-3">Ou por tema</h2>
        <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {axes.map((axis) => (
            <li key={axis.slug} className="bg-paper">
              <Link
                to={`/comparar/${axis.slug}`}
                className="block p-4 no-underline"
              >
                <span className="flex items-center gap-2 font-serif text-sm font-semibold text-ink">
                  <AxisIcon axis={axis.slug} className="h-4 w-4 text-accent" />
                  {axis.label}
                </span>
                <span className="mt-1 block text-xs text-muted">
                  {axis.question}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-violet-300 border-l-4 border-l-violet-500 bg-violet-50/50 p-5">
        <h2 className="font-serif text-lg font-semibold text-ink">
          Eleições 2026: propostas x histórico
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          O que já foi feito (2003–2022) ao lado do que as campanhas prometem
          para 2026.
        </p>
        <Link to="/eleicoes-2026" className="btn-primary mt-4">
          Ver propostas 2026
        </Link>
      </section>
    </div>
  );
}
