import { Link } from "react-router-dom";
import { MethodWarning } from "../components/MethodWarning";
import { PeriodBadge } from "../components/PeriodBadge";
import { axes } from "../content/axes";
import { facts } from "../content/facts";
import { periods } from "../content/periods";
import { useSeo } from "../lib/seo";

export function Home() {
  useSeo(
    "Início",
    "Comparativo documental das políticas de oncologia no SUS nos governos Lula (2003–2010), Dilma (2011–2016) e Bolsonaro (2019–2022), com fontes e datas.",
  );

  const totalFacts = facts.length;

  return (
    <div className="space-y-12">
      <section className="relative space-y-6 pt-4">
        <p className="eyebrow">Oncologia no SUS · comparativo documental</p>
        <h1 className="max-w-3xl font-display text-4xl font-black leading-[1.05] text-white sm:text-6xl">
          O que os documentos <span className="gradient-text">registram</span>{" "}
          sobre o câncer no SUS
        </h1>
        <p className="lede">
          Comparamos, com base em documentos oficiais e clippings, o que foi
          feito na atenção oncológica do SUS em três períodos de governo
          federal. Cada afirmação tem fonte e data. Onde não há dado, escrevemos
          exatamente isso.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link to="/comparar" className="btn-primary">
            Comparar períodos
          </Link>
          <Link to="/eleicoes-2026" className="btn-ghost">
            Propostas 2026 →
          </Link>
        </div>

        <dl className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
          <div>
            <dd className="font-display text-3xl font-bold text-white">
              {periods.length}
            </dd>
            <dt className="text-xs uppercase tracking-wide text-slate-400">
              períodos
            </dt>
          </div>
          <div>
            <dd className="font-display text-3xl font-bold text-white">
              {axes.length}
            </dd>
            <dt className="text-xs uppercase tracking-wide text-slate-400">
              eixos temáticos
            </dt>
          </div>
          <div>
            <dd className="font-display text-3xl font-bold text-white">
              {totalFacts}
            </dd>
            <dt className="text-xs uppercase tracking-wide text-slate-400">
              registros com fonte
            </dt>
          </div>
          <div>
            <dd className="font-display text-3xl font-bold text-white">2003–22</dd>
            <dt className="text-xs uppercase tracking-wide text-slate-400">
              recorte histórico
            </dt>
          </div>
        </dl>

        <MethodWarning message="Este comparativo cobre apenas os períodos de 2003–2010 (primeiro governo Lula), 2011–2016 (governo Dilma) e 2019–2022 (governo Bolsonaro). Não há dados de 2023–2026 aqui." />
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-bold text-white">
          Por período de governo
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {periods.map((period) => (
            <Link
              key={period.slug}
              to={`/governo/${period.slug}`}
              className="surface surface-hover group p-5"
            >
              <PeriodBadge period={period.slug} />
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {period.label}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {facts.filter((fact) => fact.period === period.slug).length}{" "}
                registro(s) documentado(s).
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-green-light">
                Ver período →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-bold text-white">
          Comparar por eixo
        </h2>
        <p className="text-slate-300">
          Escolha um eixo temático para ver, lado a lado, o que o material
          registra em cada período.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {axes.map((axis) => (
            <li key={axis.slug}>
              <Link
                to={`/comparar/${axis.slug}`}
                className="surface surface-hover tap block px-4 py-3"
              >
                <span className="block font-medium text-slate-100">
                  {axis.label}
                </span>
                <span className="block text-sm text-slate-400">
                  {axis.question}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/comparar" className="btn-primary">
          Ver tabela completa
        </Link>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/15 via-transparent to-fuchsia-500/10 p-6">
        <h2 className="font-display text-2xl font-bold text-white">
          Eleições 2026: propostas x histórico
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">
          Compare, eixo por eixo, o que o material registra como ato de governo
          (2003–2022) com o que as campanhas de 2026 propõem. São coisas
          diferentes: promessa de campanha não é ato executado.
        </p>
        <Link to="/eleicoes-2026" className="btn-primary mt-4">
          Ver comparativo 2026
        </Link>
      </section>
    </div>
  );
}
