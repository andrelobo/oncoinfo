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
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-900 ring-1 ring-inset ring-violet-600/20">
          {candidate ? candidate.name : proposal.candidate}
        </span>
        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/20">
          Proposta de campanha
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold text-slate-900">
        {proposal.title}
      </h3>

      <dl className="mt-3 space-y-2 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            O que o plano propõe
          </dt>
          <dd className="text-slate-700">{proposal.proposal}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            O que dizem os especialistas
          </dt>
          <dd className="text-slate-700">{proposal.expertView}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Como afeta sua vida
          </dt>
          <dd className="text-slate-700">{proposal.impact}</dd>
        </div>
      </dl>

      {proposal.limitation ? (
        <p className="mt-3 border-l-2 border-amber-400 bg-amber-50 px-3 py-2 text-xs text-amber-900">
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
