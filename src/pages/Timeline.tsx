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

      <ol className="relative space-y-8 border-l border-white/10 pl-6">
        {timeline.map((event) => (
          <li key={`${event.date}-${event.label}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-brand-blue-light to-brand-green ring-4 ring-ink-950"
            />
            <div className="flex flex-wrap items-center gap-2">
              <time
                dateTime={event.date}
                className="font-display text-lg font-bold text-white"
              >
                {formatMonthYear(event.date)}
              </time>
              <PeriodBadge period={event.period} />
            </div>
            <h2 className="mt-1 font-display text-base font-semibold text-slate-100">
              {event.label}
            </h2>
            <p className="mt-1 text-sm text-slate-300">{event.description}</p>
            <div className="mt-3">
              <SourceList sourceIds={event.sourceIds} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
