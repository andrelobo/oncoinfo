import { Link } from "react-router-dom";
import { MethodWarning } from "../components/MethodWarning";
import { useSeo } from "../lib/seo";

export function About() {
  useSeo(
    "Sobre",
    "Propósito, limites e política de correções do site documental sobre oncologia no SUS.",
  );

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Sobre</h1>
        <p className="max-w-3xl text-slate-700">
          O “Oncologia no SUS” é um site informativo e documental que reúne, com
          fonte e data, registros sobre políticas de oncologia em diferentes
          períodos de governo federal no Brasil.
        </p>
        <MethodWarning message="Este site não é propaganda oficial de partido, não é laudo técnico e não substitui a leitura dos documentos originais." />
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">O que o site é</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
          <li>Um comparativo documental, eixo por eixo, por período de governo.</li>
          <li>Uma lista verificável de fontes datadas.</li>
          <li>Um material que declara abertamente onde falta dado.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">O que o site não é</h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
          <li>Não é peça de campanha nem propaganda de partido.</li>
          <li>Não é laudo técnico nem auditoria orçamentária.</li>
          <li>
            Não afirma que uma ação de governo causou determinado desfecho
            individual.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Correções e contato
        </h2>
        <p className="text-slate-700">
          Encontrou um erro ou tem uma fonte melhor? Envie o documento e a
          referência para o contato indicado ao final desta página. Correções
          são incorporadas com data e nota de revisão, mantendo o histórico da
          mudança.
        </p>
        <p className="text-sm text-slate-600">
          Leia também a{" "}
          <Link to="/metodologia" className="text-sky-700 hover:underline">
            metodologia
          </Link>{" "}
          e a lista completa de{" "}
          <Link to="/fontes" className="text-sky-700 hover:underline">
            fontes
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
