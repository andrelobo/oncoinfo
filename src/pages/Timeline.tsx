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
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Linha do tempo documental
        </h1>
        <p className="max-w-3xl text-slate-700">
          Marcos registrados no material coletado, em ordem cronológica. Cada
          evento traz a data ao lado, para evitar leitura de continuidade entre
          governos.
        </p>
      </div>

      <ol className="relative space-y-6 border-l border-slate-200 pl-6">
        {timeline.map((event) => (
          <li key={`${event.date}-${event.label}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-slate-400"
            />
            <div className="flex flex-wrap items-center gap-2">
              <time
                dateTime={event.date}
                className="text-sm font-semibold text-slate-900"
              >
                {formatMonthYear(event.date)}
              </time>
              <PeriodBadge period={event.period} />
            </div>
            <h2 className="mt-1 text-base font-semibold text-slate-800">
              {event.label}
            </h2>
            <p className="mt-1 text-sm text-slate-700">{event.description}</p>
            <div className="mt-2">
              <SourceList sourceIds={event.sourceIds} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
