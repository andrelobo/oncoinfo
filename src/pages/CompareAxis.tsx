import { Link, useParams } from "react-router-dom";
import { FactCard } from "../components/FactCard";
import { MethodWarning } from "../components/MethodWarning";
import { PageHeader } from "../components/PageHeader";
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
        <PageHeader title="Eixo não encontrado" />
        <p className="text-slate-300">
          O eixo informado não existe. Confira a lista na página{" "}
          <Link to="/comparar" className="text-brand-green-light hover:underline">
            comparar
          </Link>
          .
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
          {axes.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/comparar/${item.slug}`}
                className="text-brand-green-light hover:underline"
              >
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
      <PageHeader
        eyebrow="Comparação por eixo"
        title={axisData.label}
        lead={axisData.question}
      />
      <MethodWarning message="Os registros abaixo vêm de documentos e clippings do material coletado. Sem fonte específica significa apenas “sem dado suficiente no material”." />

      <div className="space-y-8">
        {periods.map((period) => {
          const periodFacts = facts.filter(
            (fact) => fact.period === period.slug && fact.axis === axisData.slug,
          );
          return (
            <section key={period.slug} className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-white">
                {period.label}
              </h2>
              {periodFacts.length > 0 ? (
                <div className="grid gap-4">
                  {periodFacts.map((fact) => (
                    <FactCard key={fact.id} fact={fact} />
                  ))}
                </div>
              ) : (
                <p className="surface px-4 py-3 text-sm text-slate-400">
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
