import type { Fact } from "../lib/types";
import { DirectionBadge } from "./DirectionBadge";
import { PeriodBadge } from "./PeriodBadge";
import { SourceList } from "./SourceList";

export function FactCard({ fact }: { fact: Fact }) {
  if (!fact.sourceIds || fact.sourceIds.length === 0) {
    throw new Error(
      `FactCard "${fact.id}" não pode ser renderizado sem fonte (sourceIds vazio).`,
    );
  }

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <PeriodBadge period={fact.period} />
        <DirectionBadge direction={fact.direction} />
      </div>
      <h3 className="mt-3 text-base font-semibold text-slate-900">
        {fact.headline}
      </h3>
      <p className="mt-2 text-sm text-slate-700">{fact.detail}</p>

      {fact.limitation ? (
        <p className="mt-3 border-l-2 border-amber-400 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          <span className="font-semibold">Limitação: </span>
          {fact.limitation}
        </p>
      ) : null}

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Fontes
        </p>
        <SourceList sourceIds={fact.sourceIds} />
      </div>
    </article>
  );
}
