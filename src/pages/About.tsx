import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { useSeo } from "../lib/seo";

export function About() {
  useSeo(
    "Sobre",
    "Propósito, limites e política de correções do site documental sobre oncologia no SUS.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Institucional"
        title="Sobre"
        lead="O “Onco-Info” é um site informativo e documental que reúne, com fonte e data, registros sobre políticas de oncologia em diferentes períodos de governo federal no Brasil."
      />

      <section className="doc-section">
        <h2 className="label mb-2">O que o site é</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>Um comparativo documental, eixo por eixo, por período de governo.</li>
          <li>Uma lista verificável de fontes datadas.</li>
          <li>Um material que declara abertamente onde falta dado.</li>
        </ul>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">O que o site não é</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>Não é peça de campanha nem propaganda de partido.</li>
          <li>Não é laudo técnico nem auditoria orçamentária.</li>
          <li>
            Não afirma que uma ação de governo causou determinado desfecho
            individual.
          </li>
        </ul>
      </section>

      <section className="doc-section">
        <h2 className="label mb-2">Correções e contato</h2>
        <p className="text-muted">
          Encontrou um erro ou tem uma fonte melhor? Envie o documento e a
          referência para o contato indicado ao final desta página. Correções
          são incorporadas com data e nota de revisão, mantendo o histórico da
          mudança.
        </p>
        <p className="mt-3 text-sm text-muted">
          Leia também a{" "}
          <Link to="/metodologia" className="doclink">
            metodologia
          </Link>{" "}
          e a lista completa de{" "}
          <Link to="/fontes" className="doclink">
            fontes
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
