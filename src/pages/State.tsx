import { Link, useParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { SourceList } from "../components/SourceList";
import { stateBySlug, states } from "../content/states";
import { useSeo } from "../lib/seo";
import type { StateSlug } from "../lib/types";

export function State() {
  const { slug = "" } = useParams();
  const state = stateBySlug[slug as StateSlug];

  useSeo(
    state ? `${state.state} — ${state.institution}` : "Estado não encontrado",
    state
      ? `Recorte estadual sobre ${state.institution} (${state.state}): histórico, avanços e limites do material coletado.`
      : undefined,
  );

  if (!state) {
    return (
      <div className="space-y-4">
        <PageHeader title="Estado não encontrado" />
        <p className="text-muted">
          Recortes disponíveis:{" "}
          {states.map((item, index) => (
            <span key={item.slug}>
              {index > 0 ? ", " : ""}
              <Link to={`/estados/${item.slug}`} className="doclink">
                {item.state}
              </Link>
            </span>
          ))}
          .
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow={`Recorte estadual · ${state.state}`}
        title={state.headline}
        lead={state.summary}
        meta={state.institution}
      />

      {state.context ? (
        <section className="doc-section">
          <h2 className="label mb-2">Contexto</h2>
          <p className="text-muted">{state.context}</p>
        </section>
      ) : null}

      <section className="space-y-6">
        <h2 className="label">As três grandes ondas</h2>
        <ol className="space-y-6 border-l border-rule pl-6">
          {state.eras.map((era, index) => (
            <li key={era.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[27px] top-1.5 h-2 w-2 bg-accent"
              />
              <div className="flex items-baseline gap-3">
                <span className="section-no">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                    {era.period}
                  </p>
                  <h3 className="font-serif text-base font-semibold text-ink">
                    {era.title}
                  </h3>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted">{era.detail}</p>
              {era.limitation ? (
                <p className="mt-2 border-l-2 border-amber-600/60 bg-canvas px-3 py-2 text-xs text-amber-900">
                  Limitação: {era.limitation}
                </p>
              ) : null}
              <div className="mt-3">
                <SourceList sourceIds={era.sourceIds} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <p className="border border-rule bg-canvas px-4 py-3 text-sm text-muted">
        <Link to="/estados" className="doclink">
          ← Todos os recortes estaduais
        </Link>
      </p>
    </div>
  );
}
