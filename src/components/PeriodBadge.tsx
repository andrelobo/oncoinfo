import { periodBySlug } from "../content/periods";
import type { PeriodSlug } from "../lib/types";

export function PeriodBadge({ period }: { period: PeriodSlug }) {
  const data = periodBySlug[period];
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-xs font-medium text-slate-200">
      {data ? data.short : period}
    </span>
  );
}
