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

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Oncologia no SUS: o que os documentos registram
        </h1>
        <p className="max-w-3xl text-slate-700">
          Este site compara, com base em documentos oficiais e clippings, o que
          foi feito na atenção oncológica do SUS em três períodos de governo
          federal. Cada afirmação tem fonte e data. Células sem dado aparecem
          como <span className="text-slate-400">“Sem dado suficiente no material”</span>.
        </p>
        <MethodWarning message="Este comparativo cobre apenas os períodos de 2003–2010 (primeiro governo Lula), 2011–2016 (governo Dilma) e 2019–2022 (governo Bolsonaro). Não há dados de 2023–2026." />
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {periods.map((period) => (
          <Link
            key={period.slug}
            to={`/governo/${period.slug}`}
            className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-sm"
          >
            <PeriodBadge period={period.slug} />
            <h2 className="mt-3 text-base font-semibold text-slate-900">
              {period.label}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {facts.filter((fact) => fact.period === period.slug).length}{" "}
              registro(s) documentado(s).
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-sky-700">
              Ver período →
            </span>
          </Link>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Comparar por eixo
        </h2>
        <p className="max-w-3xl text-slate-700">
          Escolha um eixo temático para ver, lado a lado, o que o material
          registra em cada período.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {axes.map((axis) => (
            <li key={axis.slug}>
              <Link
                to={`/comparar/${axis.slug}`}
                className="tap-target block rounded-md border border-slate-200 bg-white px-4 py-3 hover:border-slate-300"
              >
                <span className="block font-medium text-slate-800">
                  {axis.label}
                </span>
                <span className="block text-sm text-slate-500">
                  {axis.question}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/comparar"
          className="tap-target inline-flex rounded-md bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-700"
        >
          Ver tabela completa
        </Link>
      </section>

      <section className="space-y-3 rounded-lg border border-violet-200 bg-violet-50 p-4">
        <h2 className="text-lg font-semibold text-violet-900">
          Eleições 2026: propostas x histórico
        </h2>
        <p className="max-w-3xl text-sm text-violet-900">
          Compare, eixo por eixo, o que o material registra como ato de governo
          (2003–2022) com o que as campanhas de 2026 propõem. São coisas
          diferentes: promessa de campanha não é ato executado.
        </p>
        <Link
          to="/eleicoes-2026"
          className="tap-target inline-flex rounded-md bg-violet-900 px-4 text-sm font-medium text-white hover:bg-violet-700"
        >
          Ver comparativo 2026
        </Link>
      </section>
    </div>
  );
}
