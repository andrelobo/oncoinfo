import { PageHeader } from "../components/PageHeader";
import { PeriodBadge } from "../components/PeriodBadge";
import { SourceList } from "../components/SourceList";
import { timeline } from "../content/timeline";
import { formatMonthYear } from "../lib/format";
import { useSeo } from "../lib/seo";

export function Timeline() {
  useSeo(
    "Linha do tempo",
    "Linha do tempo documental dos principais atos e registros sobre oncologia no SUS entre 2003 e 2022.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Cronologia"
        title="Linha do tempo documental"
        lead="Marcos registrados no material coletado, em ordem cronológica. Cada evento traz a data ao lado, para evitar leitura de continuidade entre governos."
      />

      <ol className="space-y-6 border-l border-rule pl-6">
        {timeline.map((event) => (
          <li key={`${event.date}-${event.label}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[27px] top-2 h-2 w-2 bg-accent"
            />
            <div className="flex flex-wrap items-center gap-2">
              <time
                dateTime={event.date}
                className="font-mono text-sm font-medium text-ink"
              >
                {formatMonthYear(event.date)}
              </time>
              <PeriodBadge period={event.period} />
            </div>
            <h2 className="mt-1 font-serif text-base font-semibold text-ink">
              {event.label}
            </h2>
            <p className="mt-1 text-sm text-muted">{event.description}</p>
            <div className="mt-3">
              <SourceList sourceIds={event.sourceIds} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
