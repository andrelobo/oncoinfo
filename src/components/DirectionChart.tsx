import { directionLabel } from "../lib/format";
import type { Direction, Fact, PeriodSlug } from "../lib/types";
import { periods } from "../content/periods";

const ORDER: Direction[] = [
  "expansao",
  "estruturante",
  "restricao",
  "indefinido",
];

const COLORS: Record<Direction, string> = {
  expansao: "var(--color-dir-expansao)",
  estruturante: "var(--color-dir-estruturante)",
  restricao: "var(--color-dir-restricao)",
  indefinido: "var(--color-dir-indefinido)",
};

type Counts = Record<Direction, number>;

function countByDirection(facts: Fact[]): Counts {
  const c: Counts = {
    expansao: 0,
    estruturante: 0,
    restricao: 0,
    indefinido: 0,
  };
  for (const f of facts) c[f.direction] += 1;
  return c;
}

function StackedBar({ counts, total }: { counts: Counts; total: number }) {
  if (total === 0) {
    return (
      <div className="h-4 w-full border border-rule bg-canvas" aria-hidden />
    );
  }
  return (
    <div className="flex h-4 w-full overflow-hidden border border-rule">
      {ORDER.map((dir) =>
        counts[dir] > 0 ? (
          <div
            key={dir}
            style={{
              width: `${(counts[dir] / total) * 100}%`,
              backgroundColor: COLORS[dir],
            }}
            title={`${directionLabel(dir)}: ${counts[dir]}`}
          />
        ) : null,
      )}
    </div>
  );
}

/**
 * Gráfico de barras empilhadas: registros por período, agrupados por direção.
 * Mede o que o material documenta, não o impacto real — por isso nunca é
 * apresentado como medida de resultado.
 */
export function DirectionChart({
  facts,
  onlyPeriod,
  className = "",
}: {
  facts: Fact[];
  onlyPeriod?: PeriodSlug;
  className?: string;
}) {
  const shownPeriods = onlyPeriod
    ? periods.filter((p) => p.slug === onlyPeriod)
    : periods;

  const rows = shownPeriods.map((p) => {
    const pf = facts.filter((f) => f.period === p.slug);
    return { period: p, counts: countByDirection(pf), total: pf.length };
  });

  const maxTotal = Math.max(1, ...rows.map((r) => r.total));
  const grandTotal = rows.reduce((s, r) => s + r.total, 0);

  if (grandTotal === 0) return null;

  return (
    <figure className={`doc-section ${className}`}>
      <figcaption className="label mb-3">
        O que o material registra, por período
      </figcaption>
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.period.slug}
            className="grid items-center gap-2 sm:grid-cols-[10rem_1fr_2.5rem]"
          >
            <span className="font-serif text-sm font-semibold text-ink">
              {row.period.short}
            </span>
            <div
              className="flex h-4"
              style={{ width: `${(row.total / maxTotal) * 100}%` }}
            >
              <StackedBar counts={row.counts} total={row.total} />
            </div>
            <span className="font-mono text-xs text-faint">{row.total}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {ORDER.map((dir) => (
          <span
            key={dir}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
          >
            <span
              className="inline-block h-2.5 w-2.5"
              style={{ backgroundColor: COLORS[dir] }}
            />
            {directionLabel(dir)}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-faint">
        A barra mostra quantos registros o material traz em cada período, por
        direção — não mede resultado nem impacto. Sem dado, a barra fica vazia.
      </p>
    </figure>
  );
}
