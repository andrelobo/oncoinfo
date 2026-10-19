import { FactCard } from "../components/FactCard";
import { MethodWarning } from "../components/MethodWarning";
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

  const axisHasHistory = (slug: string) =>
    facts.some((fact) => fact.axis === slug);
  const axisHasProposal = (slug: string) =>
    proposals2026.some((proposal) => proposal.axis === slug);

  const relevantAxes = axes.filter(
    (axis) => axisHasHistory(axis.slug) || axisHasProposal(axis.slug),
  );

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Eleições 2026: propostas de campanha x histórico documentado
        </h1>
        <p className="max-w-3xl text-slate-700">
          Esta seção coloca, eixo por eixo, o que o material registra como ato
          de governo no SUS (2003–2022) ao lado do que as campanhas de 2026
          propõem. São coisas diferentes: um ato executado não equivale a uma
          promessa de campanha, e vice-versa.
        </p>
        <MethodWarning message="Proposta de campanha não é ato de governo. Os itens de 2026 são intenções declaradas em documento de campanha/análise, sem execução registrada. A comparação é descritiva e não indica causalidade nem endossa candidaturas." />
      </div>

      {relevantAxes.map((axis) => {
        const historyFacts = facts.filter((fact) => fact.axis === axis.slug);
        const axisProposals = proposals2026.filter(
          (proposal) => proposal.axis === axis.slug,
        );

        return (
          <section key={axis.slug} className="space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="text-lg font-semibold text-slate-900">
                {axis.label}
              </h2>
              <p className="text-sm text-slate-500">{axis.question}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Histórico documentado (2003–2022)
                </h3>
                {historyFacts.length > 0 ? (
                  <div className="grid gap-4">
                    {historyFacts.map((fact) => (
                      <FactCard key={fact.id} fact={fact} />
                    ))}
                  </div>
                ) : (
                  <p className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
                    Sem dado suficiente no material.
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-700">
                  Propostas de campanha 2026
                </h3>
                {axisProposals.length > 0 ? (
                  <div className="grid gap-4">
                    {axisProposals.map((proposal) => (
                      <ProposalCard key={proposal.id} proposal={proposal} />
                    ))}
                  </div>
                ) : (
                  <p className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-400">
                    Sem dado suficiente no material.
                  </p>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <p className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
        Fonte das propostas e das análises de especialistas:{" "}
        <span className="font-medium">
          Comparativo de Propostas para a Saúde e o SUS — Panorama Eleitoral de
          2026
        </span>{" "}
        (documento de análise). PDF em{" "}
        <code className="rounded bg-slate-100 px-1">/docs/comparativo_propostas_saude_2026.pdf</code>.
      </p>
    </div>
  );
}
