import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { SourceList } from "../components/SourceList";
import { proposals2026 } from "../content/proposals2026";
import { useSeo } from "../lib/seo";

const campaign = proposals2026.filter(
  (proposal) => proposal.candidate === "flavio-bolsonaro",
);

export function Flavio2026() {
  useSeo(
    "Se Flávio Bolsonaro for eleito",
    "Em linguagem simples, o que as propostas de campanha de Flávio Bolsonaro para a saúde indicam que pode acontecer com o SUS e com o tratamento do câncer.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Cenário eleitoral 2026"
        title="Se Flávio Bolsonaro for eleito"
        lead="O que as propostas de campanha para a saúde indicam que pode mudar no SUS e no tratamento do câncer. Cada cenário abaixo é o apontado pela análise citada — não uma previsão garantida."
      />

      <section className="doc p-5">
        <h2 className="font-serif text-lg font-semibold text-ink">
          Em uma frase
        </h2>
        <p className="mt-2 text-muted">
          As propostas apontam para um SUS mais apoiado em estruturas privadas,
          com corte amplo de gastos e sem previsão de novos hospitais públicos
          de câncer. Segundo a análise citada, o risco é perder verba estrutural
          básica e limitar a expansão da rede pública de tratamento oncológico.
        </p>
      </section>

      <div className="space-y-8">
        {campaign.map((proposal, index) => (
          <section key={proposal.id} className="doc-section">
            <div className="flex items-baseline gap-3">
              <span className="section-no">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-xl font-semibold text-ink">
                {proposal.title}
              </h2>
            </div>

            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="label mb-1">O que ele propõe</dt>
                <dd className="text-muted">{proposal.proposal}</dd>
              </div>
              <div className="border-l-2 border-rule-strong pl-4">
                <dt className="label mb-1">O que pode acontecer</dt>
                <dd className="text-ink">{proposal.impact}</dd>
              </div>
              <div>
                <dt className="label mb-1">O que diz a análise citada</dt>
                <dd className="text-muted">{proposal.expertView}</dd>
              </div>
            </dl>

            {proposal.limitation ? (
              <p className="mt-3 border-l-2 border-amber-600/60 bg-canvas px-3 py-2 text-xs text-amber-900">
                Atenção: {proposal.limitation}
              </p>
            ) : null}

            <div className="mt-3">
              <SourceList sourceIds={proposal.sourceIds} />
            </div>
          </section>
        ))}
      </div>

      <section className="doc p-5">
        <h2 className="font-serif text-lg font-semibold text-ink">
          O que isso significa para quem trata câncer
        </h2>
        <p className="mt-2 text-sm text-muted">
          Em resumo, o material aponta pouco movimento para ampliar a rede
          pública de oncologia e muita ênfase em usar a estrutura privada e
          agilizar exames. Para o paciente, o ganho possível está no acesso mais
          rápido a consultas e exames; o risco apontado está na dependência do
          setor privado e no corte de verbas que sustentam o SUS.
        </p>
      </section>

      <p className="border border-rule bg-canvas px-4 py-3 text-sm text-muted">
        Como tratamos propostas, cenários e limites de leitura:{" "}
        <Link to="/transparencia" className="doclink">
          Transparência e método
        </Link>
        . Compare com as propostas dos dois candidatos em{" "}
        <Link to="/eleicoes-2026" className="doclink">
          Eleições 2026
        </Link>
        .
      </p>
    </div>
  );
}
