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
    <article className="surface surface-hover relative overflow-hidden p-4 sm:p-5">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 to-fuchsia-500"
      />
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-white ring-1 ring-inset ring-white/20">
          {candidate ? candidate.name : proposal.candidate}
        </span>
        <span className="inline-flex items-center rounded-full bg-violet-500/15 px-2.5 py-0.5 text-xs font-medium text-violet-200 ring-1 ring-inset ring-violet-400/30">
          Proposta de campanha
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold text-white">
        {proposal.title}
      </h3>

      <dl className="mt-3 space-y-3 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            O que o plano propõe
          </dt>
          <dd className="text-slate-300">{proposal.proposal}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            O que dizem os especialistas
          </dt>
          <dd className="text-slate-300">{proposal.expertView}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Como afeta sua vida
          </dt>
          <dd className="text-slate-300">{proposal.impact}</dd>
        </div>
      </dl>

      {proposal.limitation ? (
        <p className="mt-3 rounded-r-md border-l-2 border-amber-400 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
          <span className="font-semibold">Limitação: </span>
          {proposal.limitation}
        </p>
      ) : null}

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Fontes
        </p>
        <SourceList sourceIds={proposal.sourceIds} />
      </div>
    </article>
  );
}
