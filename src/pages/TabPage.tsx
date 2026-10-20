import { useParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { tabs, tabBySlug } from "../content/tabs";
import { useSeo } from "../lib/seo";

export function TabPage() {
  const { slug = "" } = useParams();
  const tab = tabBySlug[slug];

  useSeo(tab ? tab.title : "Página não encontrada", tab?.subtitle);

  if (!tab) {
    return (
      <div className="space-y-4">
        <PageHeader title="Página não encontrada" />
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          {tabs.map((t) => (
            <li key={t.slug}>
              <a href={`/${t.slug}`} className="doclink">
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (tab.pending) {
    return (
      <div className="space-y-4">
        <PageHeader eyebrow={tab.label} title={tab.title} />
        <p className="border border-rule bg-canvas px-4 py-3 text-sm text-muted">
          Conteúdo em preparação.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader eyebrow={tab.label} title={tab.title} lead={tab.subtitle} />

      {tab.intro ? (
        <p className="prose-lead text-muted">{tab.intro}</p>
      ) : null}

      {tab.sections.map((section) => (
        <section key={section.heading} className="doc-section">
          <h2 className="mb-3 font-serif text-lg font-semibold text-ink">
            {section.heading}
          </h2>
          {section.paragraphs?.map((p) => (
            <p key={p} className="mb-3 text-sm leading-relaxed text-muted">
              {p}
            </p>
          ))}
          {section.compareRows ? (
            <div className="overflow-hidden rounded-lg border border-rule">
              <div className="hidden grid-cols-[8.5rem_1fr_1fr] border-b border-rule bg-canvas sm:grid">
                <div className="px-4 py-2.5" />
                {section.compareColumns?.map((col) => (
                  <div
                    key={col}
                    className="border-l border-rule px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-blue"
                  >
                    {col}
                  </div>
                ))}
              </div>
              {section.compareRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 sm:grid-cols-[8.5rem_1fr_1fr] ${
                    i % 2 === 1 ? "bg-canvas/50" : "bg-white"
                  } ${i > 0 ? "border-t border-rule" : ""}`}
                >
                  <div className="border-b border-rule/60 px-4 pt-3 font-serif text-sm font-bold text-ink sm:border-b-0 sm:py-3">
                    {row.label}
                  </div>
                  {[
                    [section.compareColumns?.[0], row.left],
                    [section.compareColumns?.[1], row.right],
                  ].map(([col, text], j) => (
                    <div
                      key={j}
                      className="border-b border-rule/60 px-4 py-3 text-sm leading-relaxed text-muted last:border-b-0 sm:border-b-0 sm:border-l"
                    >
                      <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-blue sm:hidden">
                        {col}
                      </span>
                      {text}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : null}
          {section.bullets ? (
            <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-muted">
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {tab.clips && tab.clips.length > 0 ? (
        <section className="doc-section">
          <h2 className="mb-3 font-serif text-lg font-semibold text-ink">
            Clipping de imprensa (recortes da época)
          </h2>
          <div className="space-y-4">
            {tab.clips.map((clip) => (
              <article
                key={clip.title}
                className="overflow-hidden rounded-lg border border-rule bg-paper shadow-sm"
              >
                <div className="h-1 bg-brand-blue" />
                <div className="px-4 py-3">
                  <p className="label mb-1">{clip.source}</p>
                  <h3 className="font-serif text-base font-semibold text-ink">
                    “{clip.title}”
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {clip.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {tab.footnote ? (
        <p className="border-t border-rule pt-4 text-xs text-faint">
          {tab.footnote}
        </p>
      ) : null}

      {tab.pdf ? (
        <p>
          <a
            href={tab.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
          >
            Abrir o documento original (PDF)
          </a>
        </p>
      ) : null}
    </div>
  );
}
