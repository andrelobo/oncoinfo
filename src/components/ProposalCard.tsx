import { candidateBySlug } from "../content/proposals2026";
import type { Proposal } from "../lib/types";
import { SourceList } from "./SourceList";

export function ProposalCard({ proposal }: { proposal: Proposal }) {
  if (!proposal.sourceIds || proposal.sourceIds.length === 0) {
    throw new Error(
      `ProposalCard "${proposal.id}" não pode ser renderizado sem fonte (sourceIds vazio).`,
    );
  }

  const candidate = candidateBySlug[proposal.candidate];

  return (
    <article className="border border-rule border-l-2 border-l-violet-500 bg-paper p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center border border-rule-strong bg-canvas px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink">
          {candidate ? candidate.name : proposal.candidate}
        </span>
        <span className="inline-flex items-center border border-violet-300 bg-violet-50 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-violet-700">
          Proposta de campanha
        </span>
      </div>

      <h3 className="mt-3 font-serif text-base font-semibold text-ink">
        {proposal.title}
      </h3>

      <dl className="mt-3 space-y-3 text-sm">
        <div>
          <dt className="label">O que o plano propõe</dt>
          <dd className="mt-1 text-muted">{proposal.proposal}</dd>
        </div>
        <div>
          <dt className="label">O que dizem os especialistas</dt>
          <dd className="mt-1 text-muted">{proposal.expertView}</dd>
        </div>
        <div>
          <dt className="label">Como afeta sua vida</dt>
          <dd className="mt-1 text-muted">{proposal.impact}</dd>
        </div>
      </dl>

      {proposal.limitation ? (
        <p className="mt-3 border-l-2 border-amber-500 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          <span className="font-semibold">Limitação: </span>
          {proposal.limitation}
        </p>
      ) : null}

      <div className="mt-4 border-t border-rule pt-3">
        <p className="label mb-2">Fontes</p>
        <SourceList sourceIds={proposal.sourceIds} />
      </div>
    </article>
  );
}
