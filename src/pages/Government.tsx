import { Link, useParams } from "react-router-dom";
import { DirectionChart } from "../components/DirectionChart";
import { FactCard } from "../components/FactCard";
import { AxisIcon } from "../components/AxisIcon";
import { AxisIllustration } from "../components/Illustration";
import { PageHeader } from "../components/PageHeader";
import { ProposalCard } from "../components/ProposalCard";
import { axes } from "../content/axes";
import { facts } from "../content/facts";
import { periodBySlug, periods } from "../content/periods";
import { proposals2026 } from "../content/proposals2026";
import { formatRange } from "../lib/format";
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
  const periodAxes = new Set(periodFacts.map((fact) => fact.axis));
  const periodProposals = proposals2026.filter((proposal) =>
    periodAxes.has(proposal.axis),
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Período de governo"
        title={period.label}
        lead={`O que foi feito entre ${formatRange(period.start, period.end)}, por tema.`}
      />
      <DirectionChart facts={periodFacts} onlyPeriod={period.slug} />
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
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="flex items-center gap-2 font-serif text-lg font-semibold text-ink">
                      <AxisIcon axis={axis.slug} className="h-5 w-5 text-accent" />
                      {axis.label}
                    </h2>
                    <p className="text-sm text-muted">{axis.question}</p>
                  </div>
                  <AxisIllustration
                    slug={axis.slug}
                    className="h-16 w-20 shrink-0"
                  />
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

      <section className="doc-section">
        <h2 className="label mb-1">Propostas de campanha 2026</h2>
        <p className="mb-3 text-sm text-muted">
          Para os mesmos eixos deste período, o que os pré-candidatos propõem
          para 2026. São intenções declaradas em documento de campanha, não atos
          de governo — por isso ficam separadas dos registros históricos acima.
        </p>
        {periodProposals.length > 0 ? (
          <div className="grid gap-4">
            {periodProposals.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))}
          </div>
        ) : (
          <p className="border border-rule bg-canvas px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
            Sem dado suficiente no material.
          </p>
        )}
      </section>
    </div>
  );
}
