import { periodBySlug } from "../content/periods";
import type { PeriodSlug } from "../lib/types";

export function PeriodBadge({ period }: { period: PeriodSlug }) {
  const data = periodBySlug[period];
  return (
    <span className="inline-flex items-center border border-rule bg-canvas px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
      {data ? data.short : period}
    </span>
  );
}
