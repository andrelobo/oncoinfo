import { directionLabel } from "../lib/format";
import type { Direction } from "../lib/types";

const styles: Record<Direction, string> = {
  expansao: "bg-emerald-100 text-emerald-900 ring-emerald-600/20",
  restricao: "bg-rose-100 text-rose-900 ring-rose-600/20",
  estruturante: "bg-sky-100 text-sky-900 ring-sky-600/20",
  indefinido: "bg-slate-100 text-slate-700 ring-slate-500/20",
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
