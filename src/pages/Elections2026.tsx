import { Link } from "react-router-dom";
import { FactCard } from "../components/FactCard";
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

      {relevantAxes.map((axis) => {
        const historyFacts = facts.filter((fact) => fact.axis === axis.slug);
        const axisProposals = proposals2026.filter(
          (proposal) => proposal.axis === axis.slug,
        );

        return (
          <section key={axis.slug} className="doc-section">
            <div className="mb-4 border-b border-rule pb-2">
              <h2 className="font-serif text-xl font-semibold text-ink">
                {axis.label}
              </h2>
              <p className="text-sm text-muted">{axis.question}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <h3 className="label">Histórico documentado · 2003–2022</h3>
                {historyFacts.length > 0 ? (
                  <div className="grid gap-4">
                    {historyFacts.map((fact) => (
                      <FactCard key={fact.id} fact={fact} />
                    ))}
                  </div>
                ) : (
                  <p className="border border-rule bg-canvas px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
                    Sem dado suficiente no material.
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="label text-violet-700">
                  Propostas de campanha · 2026
                </h3>
                {axisProposals.length > 0 ? (
                  <div className="grid gap-4">
                    {axisProposals.map((proposal) => (
                      <ProposalCard key={proposal.id} proposal={proposal} />
                    ))}
                  </div>
                ) : (
                  <p className="border border-rule bg-canvas px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
                    Sem dado suficiente no material.
                  </p>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <p className="border border-rule bg-canvas px-4 py-3 text-sm text-muted">
        Fonte das propostas e das análises de especialistas:{" "}
        <span className="font-medium text-ink">
          Comparativo de Propostas para a Saúde e o SUS — Panorama Eleitoral de
          2026
        </span>{" "}
        (documento de análise). PDF em{" "}
        <code className="font-mono text-[11px]">
          /docs/comparativo_propostas_saude_2026.pdf
        </code>
        .
      </p>

      <p className="text-sm text-muted">
        Quer ver só o que as propostas de Flávio Bolsonaro podem mudar?{" "}
        <Link to="/flavio-2026" className="doclink">
          Se Flávio for eleito
        </Link>
        .
      </p>
    </div>
  );
}
