import { Link, useParams } from "react-router-dom";
import { FactCard } from "../components/FactCard";
import { MethodWarning } from "../components/MethodWarning";
import { axes } from "../content/axes";
import { facts } from "../content/facts";
import { periodBySlug, periods } from "../content/periods";
import { formatMonthYear, formatRange } from "../lib/format";
import { useSeo } from "../lib/seo";
import type { PeriodSlug } from "../lib/types";

export function Government() {
  const { slug = "" } = useParams();
  const period: (typeof periodBySlug)[PeriodSlug] | undefined =
    periodBySlug[slug as PeriodSlug];

  useSeo(
    period ? period.label : "Governo não encontrado",
    period
      ? `Registros documentados sobre oncologia no SUS durante o ${period.label}.`
      : undefined,
  );

  if (!period) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">
          Período não encontrado
        </h1>
        <p className="text-slate-700">Escolha um dos períodos disponíveis:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
          {periods.map((item) => (
            <li key={item.slug}>
              <Link to={`/governo/${item.slug}`} className="text-sky-700 hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const periodFacts = facts.filter((fact) => fact.period === period.slug);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {period.label}
        </h1>
        <p className="text-slate-600">
          Período de {formatRange(period.start, period.end)}. Abaixo estão os
          registros documentados no material coletado, organizados por eixo.
        </p>
        <MethodWarning message={period.warning} />
      </div>

      {periodFacts.length === 0 ? (
        <p className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
          Sem dado suficiente no material.
        </p>
      ) : (
        <div className="space-y-8">
          {axes
            .filter((axis) =>
              periodFacts.some((fact) => fact.axis === axis.slug),
            )
            .map((axis) => (
              <section key={axis.slug} className="space-y-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {axis.label}
                  </h2>
                  <p className="text-sm text-slate-500">{axis.question}</p>
                </div>
                <div className="grid gap-4">
                  {periodFacts
                    .filter((fact) => fact.axis === axis.slug)
                    .map((fact) => (
                      <FactCard key={fact.id} fact={fact} />
                    ))}
                </div>
              </section>
            ))}
        </div>
      )}

      <p className="text-xs text-slate-500">
        Última referência de data no material: 2022-09 (
        {formatMonthYear("2022-09")}).
      </p>
    </div>
  );
}
