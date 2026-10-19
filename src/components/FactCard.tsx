import type { Direction, Fact } from "../lib/types";
import { DirectionBadge } from "./DirectionBadge";
import { PeriodBadge } from "./PeriodBadge";
import { SourceList } from "./SourceList";

const accent: Record<Direction, string> = {
  expansao: "from-emerald-400 to-emerald-600",
  restricao: "from-rose-400 to-rose-600",
  estruturante: "from-sky-400 to-sky-600",
  indefinido: "from-slate-400 to-slate-600",
};

export function FactCard({ fact }: { fact: Fact }) {
  if (!fact.sourceIds || fact.sourceIds.length === 0) {
    throw new Error(
      `FactCard "${fact.id}" não pode ser renderizado sem fonte (sourceIds vazio).`,
    );
  }

  return (
    <article className="surface surface-hover relative overflow-hidden p-4 sm:p-5">
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent[fact.direction]}`}
      />
      <div className="flex flex-wrap items-center gap-2">
        <PeriodBadge period={fact.period} />
        <DirectionBadge direction={fact.direction} />
      </div>
      <h3 className="mt-3 text-base font-semibold text-white">
        {fact.headline}
      </h3>
      <p className="mt-2 text-sm text-slate-300">{fact.detail}</p>

      {fact.limitation ? (
        <p className="mt-3 rounded-r-md border-l-2 border-amber-400 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
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
