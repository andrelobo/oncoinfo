import { directionLabel } from "../lib/format";
import type { Direction } from "../lib/types";

const styles: Record<Direction, string> = {
  expansao: "border-dir-expansao/30 bg-dir-expansao/5 text-dir-expansao",
  restricao: "border-dir-restricao/30 bg-dir-restricao/5 text-dir-restricao",
  estruturante:
    "border-dir-estruturante/30 bg-dir-estruturante/5 text-dir-estruturante",
  indefinido: "border-dir-indefinido/30 bg-dir-indefinido/5 text-dir-indefinido",
};

export function DirectionBadge({ direction }: { direction: Direction }) {
  return (
    <span
      className={`inline-flex items-center border px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] ${styles[direction]}`}
    >
      {directionLabel(direction)}
    </span>
  );
}
