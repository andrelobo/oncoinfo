import { MethodWarning } from "../components/MethodWarning";
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
        eyebrow="Como fazemos"
        title="Metodologia"
        lead="Este site é documental e comparativo. Ele descreve o que documentos oficiais e clippings registram sobre oncologia no SUS em três períodos de governo federal."
      />

      <MethodWarning message="O site não é propaganda partidária, não é laudo técnico e não afirma causalidade entre ações de governo e desfechos individuais." />

      <section className="space-y-2">
        <h2 className="font-display text-xl font-bold text-white">
          Recorte de períodos
        </h2>
        <p className="text-slate-300">
          Trabalhamos com três recortes separados: primeiro governo Lula
          (2003–2010), governo Dilma (2011–2016) e governo Bolsonaro
          (2019–2022). A separação existe para não atribuir a um governo os atos
          de outro.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-bold text-white">
          Tipos de fonte
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
          <li>
            <span className="font-medium text-slate-100">Lei</span> e{" "}
            <span className="font-medium text-slate-100">Portaria</span>: atos
            normativos com número e data.
          </li>
          <li>
            <span className="font-medium text-slate-100">Orçamento</span>: peças
            e propostas orçamentárias.
          </li>
          <li>
            <span className="font-medium text-slate-100">Clipping</span>:
            notícias de veículos e órgãos, usadas como registro do que foi
            divulgado na época.
          </li>
          <li>
            <span className="font-medium text-slate-100">Programa</span>:
            políticas e programas governamentais.
          </li>
          <li>
            <span className="font-medium text-slate-100">Análise</span>:
            documentos de análise que comparam propostas, sem registro de
            execução.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-bold text-white">
          Regras editoriais
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
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

      <section className="space-y-2">
        <h2 className="font-display text-xl font-bold text-white">
          Como ler uma estimativa
        </h2>
        <p className="text-slate-300">
          Quando o material cita números de uma proposta — por exemplo, um
          orçamento previsto — tratamos como proposta, não como gasto executado.
          Sempre que houver essa diferença, ela é apontada na limitação do
          registro.
        </p>
      </section>
    </div>
  );
}
