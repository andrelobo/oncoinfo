import { Link, useParams } from "react-router-dom";
import { FactCard } from "../components/FactCard";
import { MethodWarning } from "../components/MethodWarning";
import { PageHeader } from "../components/PageHeader";
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
        <PageHeader title="Período não encontrado" />
        <p className="text-slate-300">Escolha um dos períodos disponíveis:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
          {periods.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/governo/${item.slug}`}
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

  const periodFacts = facts.filter((fact) => fact.period === period.slug);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Período de governo"
        title={period.label}
        lead={`Período de ${formatRange(period.start, period.end)}. Abaixo estão os registros documentados no material coletado, organizados por eixo.`}
      />
      <MethodWarning message={period.warning} />

      {periodFacts.length === 0 ? (
        <p className="surface px-4 py-3 text-sm text-slate-400">
          Sem dado suficiente no material.
        </p>
      ) : (
        <div className="space-y-10">
          {axes
            .filter((axis) =>
              periodFacts.some((fact) => fact.axis === axis.slug),
            )
            .map((axis) => (
              <section key={axis.slug} className="space-y-3">
                <div>
                  <h2 className="font-display text-lg font-semibold text-white">
                    {axis.label}
                  </h2>
                  <p className="text-sm text-slate-400">{axis.question}</p>
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
