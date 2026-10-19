import { periodBySlug } from "../content/periods";
import type { PeriodSlug } from "../lib/types";

export function PeriodBadge({ period }: { period: PeriodSlug }) {
  const data = periodBySlug[period];
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-500/20">
      {data ? data.short : period}
    </span>
  );
}
