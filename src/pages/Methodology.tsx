import { PageHeader } from "../components/PageHeader";
import { useSeo } from "../lib/seo";

export function Methodology() {
  useSeo(
    "Metodologia",
    "Como o material foi selecionado, como as fontes são citadas e por que os períodos de governo são tratados de forma separada.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Método"
        title="Metodologia"
        lead="Este site é documental e comparativo. Ele descreve o que documentos oficiais e clippings registram sobre oncologia no SUS em três períodos de governo federal."
      />


      <section className="doc-section">
        <h2 className="label mb-2">1 · Recorte de períodos</h2>
        <p className="text-muted">
          Trabalhamos com três recortes separados: primeiro governo Lula
          (2003–2010), governo Dilma (2011–2016) e governo Bolsonaro
          (2019–2022). A separação existe para não atribuir a um governo os atos
          de outro.
        </p>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">2 · Tipos de fonte</h2>
        <dl className="divide-y divide-rule border-y border-rule text-sm">
          <div className="grid gap-1 py-2 sm:grid-cols-[10rem_1fr]">
            <dt className="font-medium text-ink">Lei / Portaria</dt>
            <dd className="text-muted">Atos normativos com número e data.</dd>
          </div>
          <div className="grid gap-1 py-2 sm:grid-cols-[10rem_1fr]">
            <dt className="font-medium text-ink">Orçamento</dt>
            <dd className="text-muted">Peças e propostas orçamentárias.</dd>
          </div>
          <div className="grid gap-1 py-2 sm:grid-cols-[10rem_1fr]">
            <dt className="font-medium text-ink">Clipping</dt>
            <dd className="text-muted">
              Notícias de veículos e órgãos, como registro do que foi divulgado
              na época.
            </dd>
          </div>
          <div className="grid gap-1 py-2 sm:grid-cols-[10rem_1fr]">
            <dt className="font-medium text-ink">Programa</dt>
            <dd className="text-muted">
              Políticas e programas governamentais.
            </dd>
          </div>
          <div className="grid gap-1 py-2 sm:grid-cols-[10rem_1fr]">
            <dt className="font-medium text-ink">Análise</dt>
            <dd className="text-muted">
              Documentos de análise que comparam propostas, sem registro de
              execução.
            </dd>
          </div>
        </dl>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">3 · Regras editoriais</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>Toda afirmação tem uma ou mais fontes identificadas e datadas.</li>
          <li>Nenhum registro é exibido sem fonte.</li>
          <li>
            Célula ou seção sem fonte específica aparece como “Sem dado
            suficiente no material”.
          </li>
          <li>
            Não usamos linguagem acusatória nem juízo de valor sobre governos.
          </li>
          <li>Limitações de leitura são declaradas junto do registro.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">4 · Como ler uma estimativa</h2>
        <p className="text-muted">
          Quando o material cita números de uma proposta — por exemplo, um
          orçamento previsto — tratamos como proposta, não como gasto executado.
          Sempre que houver essa diferença, ela é apontada na limitação do
          registro.
        </p>
      </section>
    </div>
  );
}
