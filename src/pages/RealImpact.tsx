import { FactCard } from "../components/FactCard";
import { MethodWarning } from "../components/MethodWarning";
import { facts } from "../content/facts";
import { useSeo } from "../lib/seo";

export function RealImpact() {
  useSeo(
    "Impacto real",
    "O que os documentos permitem afirmar sobre desfechos e o que permanece sem dado suficiente no material coletado.",
  );

  const withLimitation = facts.filter((fact) => fact.limitation);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Impacto real: o que dá e o que não dá para afirmar
        </h1>
        <p className="max-w-3xl text-slate-700">
          Uma lei, portaria ou veto é um ato documentado. O efeito dele sobre a
          vida das pessoas depende de execução, orçamento, rede e tempo. Este
          site separa as duas coisas e não afirma relação de causa e efeito
          entre ações de governo e desfechos individuais.
        </p>
        <MethodWarning message="Atos normativos não equivalem, por si sós, a resultados na ponta. Sem dado de execução, tratamos o registro como descrição do ato, não como prova de desfecho." />
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">
          Princípios de leitura
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-700">
          <li>Não comparamos governos como “melhor” ou “pior”.</li>
          <li>Cada afirmação tem fonte e data no material coletado.</li>
          <li>
            Onde não há execução registrada, indicamos ausência de dado — não
            ausência de ação.
          </li>
          <li>
            Aumento de gasto ou de ato normativo não implica melhora de desfecho
            sem medida de resultado.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">
          Registros com limitação explícita
        </h2>
        <p className="text-sm text-slate-600">
          Estes registros trazem, no próprio material ou em nota editorial, uma
          ressalva de leitura.
        </p>
        <div className="grid gap-4">
          {withLimitation.map((fact) => (
            <FactCard key={fact.id} fact={fact} />
          ))}
        </div>
      </section>

      <section className="space-y-2 rounded-md border border-slate-200 bg-white px-4 py-3">
        <h2 className="text-base font-semibold text-slate-900">
          Sem dado suficiente no material
        </h2>
        <p className="text-sm text-slate-600">
          Desfechos populacionais como mortalidade, incidência e tempo real de
          espera não estão mensurados de forma comparável no material coletado.
          Por isso, não são apresentados números de impacto aqui.
        </p>
      </section>
    </div>
  );
}
