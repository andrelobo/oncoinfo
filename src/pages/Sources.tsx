import { sources } from "../content/sources";
import { formatMonthYear, sourceKindLabel } from "../lib/format";
import { useSeo } from "../lib/seo";

export function Sources() {
  useSeo(
    "Fontes",
    "Lista completa das fontes usadas no comparativo: leis, portarias, orçamento, clippings e programas, com data e documento.",
  );

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Fontes</h1>
        <p className="max-w-3xl text-slate-700">
          Todas as fontes citadas no site, com tipo, data e o documento
          correspondente. Os PDFs devem ser colocados em{" "}
          <code className="rounded bg-slate-100 px-1 text-sm">public/docs/</code>{" "}
          para que os links funcionem.
        </p>
      </div>

      <ul className="space-y-3">
        {sources.map((source) => (
          <li
            key={source.id}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-500/20">
                {sourceKindLabel(source.kind)}
              </span>
              <time
                dateTime={source.date}
                className="text-xs text-slate-500"
              >
                {formatMonthYear(source.date)}
              </time>
            </div>
            <h2 className="mt-2 text-base font-semibold text-slate-900">
              {source.title}
            </h2>
            <p className="text-sm text-slate-600">
              {source.outlet ? `${source.outlet} · ` : ""}
              <span className="text-slate-400">#{source.id}</span>
            </p>
            {source.note ? (
              <p className="mt-1 text-xs text-amber-800">{source.note}</p>
            ) : null}
            <div className="mt-2 flex flex-wrap gap-x-4">
              {source.file ? (
                <a
                  href={source.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target text-sm font-medium text-sky-700 hover:underline"
                >
                  Abrir documento (PDF)
                </a>
              ) : null}
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target text-sm font-medium text-sky-700 hover:underline"
                >
                  Abrir fonte
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
