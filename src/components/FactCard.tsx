import type { Direction, Fact } from "../lib/types";
import { DirectionBadge } from "./DirectionBadge";
import { PeriodBadge } from "./PeriodBadge";
import { SourceList } from "./SourceList";

const accent: Record<Direction, string> = {
  expansao: "border-l-dir-expansao",
  restricao: "border-l-dir-restricao",
  estruturante: "border-l-dir-estruturante",
  indefinido: "border-l-dir-indefinido",
};

export function FactCard({ fact }: { fact: Fact }) {
  if (!fact.sourceIds || fact.sourceIds.length === 0) {
    throw new Error(
      `FactCard "${fact.id}" não pode ser renderizado sem fonte (sourceIds vazio).`,
    );
  }

  return (
    <article
      className={`border border-rule border-l-2 bg-paper p-4 ${accent[fact.direction]}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <PeriodBadge period={fact.period} />
        <DirectionBadge direction={fact.direction} />
      </div>
      <h3 className="mt-3 font-serif text-base font-semibold text-ink">
        {fact.headline}
      </h3>
      <p className="mt-2 text-sm text-muted">{fact.detail}</p>

      {fact.limitation ? (
        <p className="mt-3 border-l-2 border-amber-500 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          <span className="font-semibold">Limitação: </span>
          {fact.limitation}
        </p>
      ) : null}

      <div className="mt-4 border-t border-rule pt-3">
        <p className="label mb-2">Fontes</p>
        <SourceList sourceIds={fact.sourceIds} />
      </div>
    </article>
  );
}
