import { Link, useParams } from "react-router-dom";
import { FactCard } from "../components/FactCard";
import { MethodWarning } from "../components/MethodWarning";
import { axisBySlug, axes } from "../content/axes";
import { facts } from "../content/facts";
import { periods } from "../content/periods";
import { useSeo } from "../lib/seo";
import type { AxisSlug } from "../lib/types";

export function CompareAxis() {
  const { axis = "" } = useParams();
  const axisData: (typeof axisBySlug)[AxisSlug] | undefined =
    axisBySlug[axis as AxisSlug];

  useSeo(
    axisData ? `Eixo: ${axisData.label}` : "Eixo não encontrado",
    axisData
      ? `Comparação por eixo temático ${axisData.label} entre os períodos de 2003–2010, 2011–2016 e 2019–2022.`
      : undefined,
  );

  if (!axisData) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Eixo não encontrado</h1>
        <p className="text-slate-700">
          O eixo informado não existe. Confira a lista na página{" "}
          <Link to="/comparar" className="text-sky-700 hover:underline">
            comparar
          </Link>
          .
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
          {axes.map((item) => (
            <li key={item.slug}>
              <Link to={`/comparar/${item.slug}`} className="text-sky-700 hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {axisData.label}
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">{axisData.question}</p>
        <MethodWarning message="Os registros abaixo vêm de documentos e clippings do material coletado. Sem fonte específica significa apenas “sem dado suficiente no material”." />
      </div>

      <div className="space-y-8">
        {periods.map((period) => {
          const periodFacts = facts.filter(
            (fact) => fact.period === period.slug && fact.axis === axisData.slug,
          );
          return (
            <section key={period.slug} className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">
                {period.label}
              </h2>
              {periodFacts.length > 0 ? (
                <div className="grid gap-4">
                  {periodFacts.map((fact) => (
                    <FactCard key={fact.id} fact={fact} />
                  ))}
                </div>
              ) : (
                <p className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
                  Sem dado suficiente no material.
                </p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
