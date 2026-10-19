import { Link } from "react-router-dom";
import { AxisIcon } from "../components/AxisIcon";
import { axes } from "../content/axes";
import { facts } from "../content/facts";
import { periods } from "../content/periods";
import { useSeo } from "../lib/seo";

const sections = [
  { to: "/comparar", no: "01", label: "Comparar períodos", desc: "Tabela eixo por eixo" },
  { to: "/linha-do-tempo", no: "02", label: "Linha do tempo", desc: "Marcos de 2005 a 2022" },
  { to: "/impacto-real", no: "03", label: "Impacto real", desc: "O que dá e não dá para afirmar" },
  { to: "/eleicoes-2026", no: "04", label: "Eleições 2026", desc: "Propostas x histórico" },
  { to: "/flavio-2026", no: "05", label: "Se Flávio for eleito", desc: "O que pode mudar no SUS" },
  { to: "/estados", no: "06", label: "Estados", desc: "Recortes estaduais" },
  { to: "/fontes", no: "07", label: "Fontes", desc: "Lista de referências" },
  { to: "/metodologia", no: "08", label: "Metodologia", desc: "Como lemos os dados" },
];

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
      </section>

      <section className="doc-section">
        <h2 className="label mb-3">Sumário</h2>
        <ol className="divide-y divide-rule border-y border-rule">
          {sections.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex items-baseline gap-4 py-3 no-underline"
              >
                <span className="section-no w-6 shrink-0">{item.no}</span>
                <span className="font-serif text-base font-semibold text-ink group-hover:text-link">
                  {item.label}
                </span>
                <span className="ml-auto text-right text-xs text-muted">
                  {item.desc}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="doc-section">
        <h2 className="label mb-3">Por período de governo</h2>
        <div className="divide-y divide-rule border-y border-rule">
          {periods.map((period) => (
            <Link
              key={period.slug}
              to={`/governo/${period.slug}`}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3 no-underline"
            >
              <span className="font-serif text-base font-semibold text-ink">
                {period.label}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
                {facts.filter((fact) => fact.period === period.slug).length}{" "}
                registro(s)
              </span>
              <span className="doclink ml-auto font-mono text-[11px] uppercase tracking-[0.08em]">
                Ver →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="doc-section">
        <h2 className="label mb-3">Comparar por eixo</h2>
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
          para 2026. Promessa não é ato de governo.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/eleicoes-2026" className="btn-primary">
            Comparar propostas 2026
          </Link>
          <Link to="/flavio-2026" className="btn-ghost">
            Se Flávio for eleito
          </Link>
        </div>
      </section>
    </div>
  );
}
