import { sourceById } from "../content/sources";
import { formatMonthYear, sourceKindLabel } from "../lib/format";

export function SourceList({ sourceIds }: { sourceIds: string[] }) {
  const items = sourceIds
    .map((id) => sourceById[id])
    .filter((source) => source !== undefined);

  if (items.length === 0) {
    return (
      <p className="text-xs text-slate-400">
        Sem dado suficiente no material.
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {items.map((source) => (
        <li
          key={source.id}
          className="flex flex-col gap-0.5 border-l-2 border-slate-200 pl-3 text-sm"
        >
          <span className="font-medium text-slate-700">{source.title}</span>
          <span className="text-xs text-slate-500">
            {sourceKindLabel(source.kind)}
            {source.outlet ? ` · ${source.outlet}` : ""} ·{" "}
            {formatMonthYear(source.date)}
            {source.note ? ` · ${source.note}` : ""}
          </span>
          {source.file ? (
            <a
              href={source.file}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target w-fit text-xs font-medium text-sky-700 hover:text-sky-900 hover:underline"
            >
              Abrir documento (PDF)
            </a>
          ) : null}
          {source.url ? (
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target w-fit text-xs font-medium text-sky-700 hover:text-sky-900 hover:underline"
            >
              Abrir fonte
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
