import {
  ArrowDownRight,
  ArrowUpRight,
  CircleHelp,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { directionLabel } from "../lib/format";
import type { Direction } from "../lib/types";

const styles: Record<Direction, string> = {
  expansao: "border-dir-expansao/30 bg-dir-expansao/5 text-dir-expansao",
  restricao: "border-dir-restricao/30 bg-dir-restricao/5 text-dir-restricao",
  estruturante:
    "border-dir-estruturante/30 bg-dir-estruturante/5 text-dir-estruturante",
  indefinido: "border-dir-indefinido/30 bg-dir-indefinido/5 text-dir-indefinido",
};

const icons: Record<Direction, LucideIcon> = {
  expansao: ArrowUpRight,
  restricao: ArrowDownRight,
  estruturante: Wrench,
  indefinido: CircleHelp,
};

export function DirectionBadge({ direction }: { direction: Direction }) {
  const Icon = icons[direction];
  return (
    <span
      className={`inline-flex items-center gap-1 border px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] ${styles[direction]}`}
    >
      <Icon className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
      {directionLabel(direction)}
    </span>
  );
}
