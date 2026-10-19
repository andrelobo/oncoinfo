import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { states } from "../content/states";
import { useSeo } from "../lib/seo";

export function States() {
  useSeo(
    "Recortes estaduais",
    "Área dedicada a serviços oncológicos estaduais. O Amazonas (CECON/FCECON) é o primeiro recorte; outros estados entram conforme material com fonte.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Recortes estaduais"
        title="Estados"
        lead="Além da camada federal por período de governo, acompanhamos serviços oncológicos estaduais, com fonte e data. Cada estado é um recorte próprio: lê-se a trajetória de um serviço, não um comparativo entre gestões."
      />

      <div className="divide-y divide-rule border-y border-rule">
        {states.map((state) => (
          <Link
            key={state.slug}
            to={`/estados/${state.slug}`}
            className="group flex items-baseline justify-between gap-4 py-4"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="label">{state.state}</span>
                <span className="font-mono text-[11px] text-faint">
                  {state.institution}
                </span>
              </div>
              <h2 className="mt-1 font-serif text-base font-semibold text-ink group-hover:text-accent">
                {state.headline}
              </h2>
            </div>
            <span className="shrink-0 font-mono text-xs text-faint transition group-hover:translate-x-1 group-hover:text-accent">
              →
            </span>
          </Link>
        ))}
      </div>

      <p className="border border-rule bg-canvas px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
        Outros estados entrarão conforme houver material com fonte.
      </p>
    </div>
  );
}
