import { FactCard } from "../components/FactCard";
import { MethodWarning } from "../components/MethodWarning";
import { PageHeader } from "../components/PageHeader";
import { ProposalCard } from "../components/ProposalCard";
import { axes } from "../content/axes";
import { facts } from "../content/facts";
import { proposals2026 } from "../content/proposals2026";
import { useSeo } from "../lib/seo";

export function Elections2026() {
  useSeo(
    "Eleições 2026 — propostas e histórico",
    "Comparação, eixo por eixo, entre o histórico documentado no SUS (2003–2022) e as propostas de campanha de 2026, com aviso de método.",
  );

  const relevantAxes = axes.filter(
    (axis) =>
      facts.some((fact) => fact.axis === axis.slug) ||
      proposals2026.some((proposal) => proposal.axis === axis.slug),
  );

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Eleições 2026"
        title="Propostas de campanha x histórico documentado"
        lead="Esta seção coloca, eixo por eixo, o que o material registra como ato de governo no SUS (2003–2022) ao lado do que as campanhas de 2026 propõem. São coisas diferentes: um ato executado não equivale a uma promessa de campanha, e vice-versa."
      />
      <MethodWarning message="Proposta de campanha não é ato de governo. Os itens de 2026 são intenções declaradas em documento de campanha/análise, sem execução registrada. A comparação é descritiva e não indica causalidade nem endossa candidaturas." />

      {relevantAxes.map((axis) => {
        const historyFacts = facts.filter((fact) => fact.axis === axis.slug);
        const axisProposals = proposals2026.filter(
          (proposal) => proposal.axis === axis.slug,
        );

        return (
          <section key={axis.slug} className="space-y-4">
            <div className="border-b border-white/10 pb-2">
              <h2 className="font-display text-xl font-bold text-white">
                {axis.label}
              </h2>
              <p className="text-sm text-slate-400">{axis.question}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Histórico documentado (2003–2022)
                </h3>
                {historyFacts.length > 0 ? (
                  <div className="grid gap-4">
                    {historyFacts.map((fact) => (
                      <FactCard key={fact.id} fact={fact} />
                    ))}
                  </div>
                ) : (
                  <p className="surface px-4 py-3 text-sm text-slate-400">
                    Sem dado suficiente no material.
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                  Propostas de campanha 2026
                </h3>
                {axisProposals.length > 0 ? (
                  <div className="grid gap-4">
                    {axisProposals.map((proposal) => (
                      <ProposalCard key={proposal.id} proposal={proposal} />
                    ))}
                  </div>
                ) : (
                  <p className="surface px-4 py-3 text-sm text-slate-400">
                    Sem dado suficiente no material.
                  </p>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <p className="surface px-4 py-3 text-sm text-slate-300">
        Fonte das propostas e das análises de especialistas:{" "}
        <span className="font-medium text-slate-100">
          Comparativo de Propostas para a Saúde e o SUS — Panorama Eleitoral de
          2026
        </span>{" "}
        (documento de análise). PDF em{" "}
        <code className="rounded bg-white/10 px-1">
          /docs/comparativo_propostas_saude_2026.pdf
        </code>
        .
      </p>
    </div>
  );
}
