import { PageHeader } from "../components/PageHeader";
import { periods } from "../content/periods";
import { states } from "../content/states";
import { useSeo } from "../lib/seo";
import type { SourceKind } from "../lib/types";

const sourceKinds: { kind: SourceKind; label: string; desc: string }[] = [
  { kind: "lei", label: "Lei", desc: "Atos normativos com número e data." },
  { kind: "portaria", label: "Portaria", desc: "Regras e fluxos definidos por órgãos." },
  { kind: "orcamento", label: "Orçamento", desc: "Peças e propostas orçamentárias." },
  { kind: "clipping", label: "Clipping", desc: "Notícias, como registro do que foi divulgado na época." },
  { kind: "programa", label: "Programa", desc: "Políticas e programas governamentais." },
  { kind: "analise", label: "Análise", desc: "Documentos que comparam propostas, sem registro de execução." },
];

export function Methodology() {
  useSeo(
    "Metodologia e transparência",
    "Como as fontes são selecionadas e citadas, as regras editoriais, os limites de leitura e os avisos de método.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Método"
        title="Metodologia e transparência"
        lead="Como montamos o comparativo, quais fontes usamos e o que não dá para afirmar."
      />

      <section className="doc-section">
        <h2 className="label mb-2">Recorte</h2>
        <p className="text-muted">
          Três períodos separados: primeiro governo Lula (2003–2010), governo
          Dilma (2011–2016) e governo Bolsonaro (2019–2022). A separação existe
          para não atribuir a um governo os atos de outro.
        </p>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Tipos de fonte</h2>
        <dl className="divide-y divide-rule border-y border-rule text-sm">
          {sourceKinds.map((item) => (
            <div
              key={item.kind}
              className="grid gap-1 py-2 sm:grid-cols-[10rem_1fr]"
            >
              <dt className="font-medium text-ink">{item.label}</dt>
              <dd className="text-muted">{item.desc}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Regras editoriais</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>Toda afirmação tem uma ou mais fontes identificadas e datadas.</li>
          <li>Nenhum registro é exibido sem fonte.</li>
          <li>
            Sem fonte específica, mostramos “Sem dado suficiente no material”.
          </li>
          <li>Não usamos linguagem acusatória nem juízo de valor sobre governos.</li>
          <li>Limitações de leitura são declaradas junto do registro.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Proposta não é ato de governo</h2>
        <p className="muted text-sm text-muted">
          Propostas de campanha são intenções, sem execução registrada. Um ato já
          praticado não equivale a uma promessa, e uma promessa não equivale a
          resultado. Cenários descritos no site são os apontados pelas fontes.
        </p>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Avisos por período</h2>
        <dl className="divide-y divide-rule border-y border-rule">
          {periods.map((period) => (
            <div
              key={period.slug}
              className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr]"
            >
              <dt className="font-serif text-sm font-semibold text-ink">
                {period.label}
              </dt>
              <dd className="text-sm text-muted">{period.warning}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Avisos por recorte estadual</h2>
        <dl className="divide-y divide-rule border-y border-rule">
          {states.map((state) => (
            <div
              key={state.slug}
              className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr]"
            >
              <dt className="font-serif text-sm font-semibold text-ink">
                {state.state} · {state.institution}
              </dt>
              <dd className="text-sm text-muted">{state.warning}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
