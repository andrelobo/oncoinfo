import { directionLabel } from "../lib/format";
import type { Direction } from "../lib/types";

const styles: Record<Direction, string> = {
  expansao: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  restricao: "bg-rose-500/15 text-rose-300 ring-rose-400/30",
  estruturante: "bg-sky-500/15 text-sky-300 ring-sky-400/30",
  indefinido: "bg-slate-500/15 text-slate-300 ring-slate-400/30",
};

export function DirectionBadge({ direction }: { direction: Direction }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${styles[direction]}`}
    >
      {directionLabel(direction)}
    </span>
  );
}
