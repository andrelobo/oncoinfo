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
        lead="Um site que reúne, com fonte e data, o que foi feito no tratamento do câncer pelo SUS em diferentes governos."
      />

      <section className="doc-section">
        <h2 className="label mb-2">O que você encontra</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted">
          <li>Comparação por período de governo e por tema.</li>
          <li>Fontes datadas e verificáveis.</li>
          <li>Onde falta dado, isso é dito com clareza.</li>
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
