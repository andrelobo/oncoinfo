import { sourceById } from "../content/sources";
import { formatMonthYear, sourceKindLabel } from "../lib/format";

export function SourceList({ sourceIds }: { sourceIds: string[] }) {
  const items = sourceIds
    .map((id) => sourceById[id])
    .filter((source) => source !== undefined);

  if (items.length === 0) {
    return (
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
        Sem dado suficiente no material.
      </p>
    );
  }

  return (
    <ol className="space-y-2">
      {items.map((source, index) => (
        <li key={source.id} className="flex gap-3 text-sm">
          <span className="mt-0.5 font-mono text-[11px] text-faint">
            [{index + 1}]
          </span>
          <div className="min-w-0">
            <p className="text-ink">{source.title}</p>
            <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-faint">
              {sourceKindLabel(source.kind)}
              {source.outlet ? ` · ${source.outlet}` : ""} ·{" "}
              {formatMonthYear(source.date)}
              {source.note ? ` · ${source.note}` : ""}
            </p>
            {source.file ? (
              <a
                href={source.file}
                target="_blank"
                rel="noopener noreferrer"
                className="doclink mt-0.5 inline-block font-mono text-[11px] uppercase tracking-[0.06em] no-underline hover:underline"
              >
                Abrir documento (PDF) ↗
              </a>
            ) : null}
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="doclink mt-0.5 inline-block font-mono text-[11px] uppercase tracking-[0.06em] no-underline hover:underline"
              >
                Abrir fonte ↗
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
