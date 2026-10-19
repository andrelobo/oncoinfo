import { FactCard } from "../components/FactCard";
import { MethodWarning } from "../components/MethodWarning";
import { PageHeader } from "../components/PageHeader";
import { facts } from "../content/facts";
import { useSeo } from "../lib/seo";

export function RealImpact() {
  useSeo(
    "Impacto real",
    "O que os documentos permitem afirmar sobre desfechos e o que permanece sem dado suficiente no material coletado.",
  );

  const withLimitation = facts.filter((fact) => fact.limitation);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Leitura crítica"
        title="Impacto real: o que dá e o que não dá para afirmar"
        lead="Uma lei, portaria ou veto é um ato documentado. O efeito dele sobre a vida das pessoas depende de execução, orçamento, rede e tempo. Separamos as duas coisas e não afirmamos relação de causa e efeito entre ações de governo e desfechos individuais."
      />
      <MethodWarning message="Atos normativos não equivalem, por si sós, a resultados na ponta. Sem dado de execução, tratamos o registro como descrição do ato, não como prova de desfecho." />

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-white">
          Princípios de leitura
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
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
        <h2 className="font-display text-xl font-bold text-white">
          Registros com limitação explícita
        </h2>
        <p className="text-sm text-slate-400">
          Estes registros trazem, no próprio material ou em nota editorial, uma
          ressalva de leitura.
        </p>
        <div className="grid gap-4">
          {withLimitation.map((fact) => (
            <FactCard key={fact.id} fact={fact} />
          ))}
        </div>
      </section>

      <section className="surface space-y-2 p-5">
        <h2 className="font-display text-lg font-bold text-white">
          Sem dado suficiente no material
        </h2>
        <p className="text-sm text-slate-300">
          Desfechos populacionais como mortalidade, incidência e tempo real de
          espera não estão mensurados de forma comparável no material coletado.
          Por isso, não são apresentados números de impacto aqui.
        </p>
      </section>
    </div>
  );
}
