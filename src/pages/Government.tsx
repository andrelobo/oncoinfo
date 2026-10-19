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
        <p className="text-muted">Escolha um dos períodos disponíveis:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          {periods.map((item) => (
            <li key={item.slug}>
              <Link to={`/governo/${item.slug}`} className="doclink">
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
    <div className="space-y-8">
      <PageHeader
        eyebrow="Período de governo"
        title={period.label}
        lead={`Período de ${formatRange(period.start, period.end)}. Abaixo estão os registros documentados no material coletado, organizados por eixo.`}
      />
      <MethodWarning message={period.warning} />

      {periodFacts.length === 0 ? (
        <p className="border border-rule bg-canvas px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
          Sem dado suficiente no material.
        </p>
      ) : (
        <div className="space-y-8">
          {axes
            .filter((axis) =>
              periodFacts.some((fact) => fact.axis === axis.slug),
            )
            .map((axis) => (
              <section key={axis.slug} className="doc-section">
                <div className="mb-3">
                  <h2 className="font-serif text-lg font-semibold text-ink">
                    {axis.label}
                  </h2>
                  <p className="text-sm text-muted">{axis.question}</p>
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

      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
        Última referência de data no material: 2022-09 (
        {formatMonthYear("2022-09")}).
      </p>
    </div>
  );
}
