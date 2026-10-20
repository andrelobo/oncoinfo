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
                className="border-l-2 border-brand-blue bg-canvas px-4 py-3"
              >
                <p className="label mb-1">{clip.source}</p>
                <h3 className="font-serif text-base font-semibold text-ink">
                  “{clip.title}”
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {clip.text}
                </p>
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
        <p className="text-sm">
          <a
            href={tab.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="doclink"
          >
            Abrir o documento original (PDF)
          </a>
        </p>
      ) : null}
    </div>
  );
}
