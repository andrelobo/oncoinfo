import { PageHeader } from "../components/PageHeader";
import { sources } from "../content/sources";
import { formatMonthYear, sourceKindLabel } from "../lib/format";
import { useSeo } from "../lib/seo";

export function Sources() {
  useSeo(
    "Fontes",
    "Lista completa das fontes usadas no comparativo: leis, portarias, orçamento, clippings, programas e análises, com data e documento.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Referências"
        title="Fontes"
        lead="Todas as fontes citadas no site, com tipo, data e o documento correspondente. Os PDFs devem ser colocados em public/docs/ para que os links funcionem."
      />

      <ul className="space-y-3">
        {sources.map((source) => (
          <li key={source.id} className="surface surface-hover p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs font-medium text-slate-200 ring-1 ring-inset ring-white/15">
                {sourceKindLabel(source.kind)}
              </span>
              <time dateTime={source.date} className="text-xs text-slate-400">
                {formatMonthYear(source.date)}
              </time>
            </div>
            <h2 className="mt-2 font-display text-base font-semibold text-white">
              {source.title}
            </h2>
            <p className="text-sm text-slate-400">
              {source.outlet ? `${source.outlet} · ` : ""}
              <span className="text-slate-500">#{source.id}</span>
            </p>
            {source.note ? (
              <p className="mt-1 text-xs text-amber-200/90">{source.note}</p>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-x-4">
              {source.file ? (
                <a
                  href={source.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap text-sm font-medium text-brand-green-light hover:underline"
                >
                  Abrir documento (PDF) ↗
                </a>
              ) : null}
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap text-sm font-medium text-brand-green-light hover:underline"
                >
                  Abrir fonte ↗
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
