import { PageHeader } from "../components/PageHeader";
import { periods } from "../content/periods";
import { states } from "../content/states";
import { useSeo } from "../lib/seo";

export function Transparency() {
  useSeo(
    "Transparência e método",
    "Avisos de método, neutralidade e limites de leitura do material reunidos em um só lugar.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Transparência"
        title="Transparência e método"
        lead="Os avisos de método, neutralidade e limites de leitura ficam reunidos aqui, separados do conteúdo, para não interromper a leitura das páginas."
      />

      <section className="doc-section">
        <h2 className="label mb-2">Neutralidade</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>Este site não é propaganda oficial de partido nem peça de campanha.</li>
          <li>Não endossa candidaturas e não indica voto.</li>
          <li>Não emite juízo de valor sobre governos ou gestões.</li>
          <li>
            Não afirma relação de causa e efeito entre ações de governo e
            desfechos individuais de pacientes.
          </li>
        </ul>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Propostas não são atos de governo</h2>
        <p className="text-muted">
          Propostas de campanha são intenções declaradas em documento de
          campanha/análise, sem execução registrada. Um ato de governo já
          praticado não equivale a uma promessa eleitoral, e uma promessa não
          equivale a resultado. Cenários descritos no site são os apontados
          pelas fontes citadas, não previsões garantidas.
        </p>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Limites de leitura dos registros</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>Toda afirmação tem uma ou mais fontes identificadas e datadas.</li>
          <li>Nenhum registro é exibido sem fonte.</li>
          <li>
            Onde não há execução ou indicador registrado, aparece “Sem dado
            suficiente no material” — o que não significa ausência de ação.
          </li>
          <li>Aumento de gasto ou de ato normativo não implica melhora de desfecho.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Avisos por período de governo</h2>
        <dl className="divide-y divide-rule border-y border-rule">
          {periods.map((period) => (
            <div key={period.slug} className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr]">
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
            <div key={state.slug} className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr]">
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
