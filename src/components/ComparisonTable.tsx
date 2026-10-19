import { useState } from "react";
import type { Axis, Fact, Period } from "../lib/types";
import { DirectionBadge } from "./DirectionBadge";

const EMPTY = "Sem dado suficiente no material.";
const ALL = "__all__";

function factsFor(facts: Fact[], period: Period, axis: Axis): Fact[] {
  return facts.filter(
    (fact) => fact.period === period.slug && fact.axis === axis.slug,
  );
}

function CellContent({ items }: { items: Fact[] }) {
  if (items.length === 0) {
    return <p className="text-sm text-slate-400">{EMPTY}</p>;
  }
  return (
    <ul className="space-y-3">
      {items.map((fact) => (
        <li key={fact.id} className="space-y-1">
          <DirectionBadge direction={fact.direction} />
          <p className="text-sm font-medium text-ink">{fact.headline}</p>
        </li>
      ))}
    </ul>
  );
}

function AxisPanel({
  axis,
  index,
  periods,
  facts,
  defaultOpen,
}: {
  axis: Axis;
  index: number;
  periods: Period[];
  facts: Fact[];
  defaultOpen: boolean;
}) {
  return (
    <details className="group border border-rule bg-paper" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-baseline gap-3 p-4">
        <span className="section-no shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-serif text-base font-semibold text-ink">
          {axis.label}
        </span>
        <span
          aria-hidden="true"
          className="ml-auto font-mono text-sm text-faint transition group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="px-4 pb-3 text-xs text-muted">{axis.question}</p>
      <div className="space-y-3 px-4 pb-4">
        {periods.map((period) => (
          <div key={period.slug} className="border border-rule bg-canvas p-3">
            <p className="label mb-2">{period.short}</p>
            <CellContent items={factsFor(facts, period, axis)} />
          </div>
        ))}
      </div>
    </details>
  );
}

export function ComparisonTable({
  periods,
  axes,
  facts,
}: {
  periods: Period[];
  axes: Axis[];
  facts: Fact[];
}) {
  const [active, setActive] = useState<string>(ALL);

  return (
    <div>
      {/* Tabela (telas >= 768px) */}
      <div className="hidden overflow-hidden border border-rule md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-canvas">
              <th className="w-48 border-b border-rule p-3 align-bottom">
                <span className="label">Eixo</span>
              </th>
              {periods.map((period) => (
                <th
                  key={period.slug}
                  className="border-b border-l border-rule p-3 align-bottom font-serif text-sm font-semibold text-ink"
                >
                  {period.short}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {axes.map((axis) => (
              <tr key={axis.slug} className="align-top">
                <th
                  scope="row"
                  className="border-b border-rule p-3 text-left text-sm font-semibold text-ink"
                >
                  <span className="block font-serif">{axis.label}</span>
                  <span className="mt-1 block text-xs font-normal text-muted">
                    {axis.question}
                  </span>
                </th>
                {periods.map((period) => (
                  <td
                    key={period.slug}
                    className="border-b border-l border-rule p-3"
                  >
                    <CellContent items={factsFor(facts, period, axis)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chips + acordeão (telas < 768px) */}
      <div className="md:hidden">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
          Toque num eixo para comparar
        </p>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3">
          <button
            type="button"
            onClick={() => setActive(ALL)}
            className={`tap shrink-0 border px-3 py-1.5 text-xs font-medium transition ${
              active === ALL
                ? "border-ink bg-ink text-paper"
                : "border-rule-strong bg-paper text-ink"
            }`}
          >
            Todos
          </button>
          {axes.map((axis) => (
            <button
              key={axis.slug}
              type="button"
              onClick={() => setActive(axis.slug)}
              className={`tap shrink-0 border px-3 py-1.5 text-xs font-medium transition ${
                active === axis.slug
                  ? "border-ink bg-ink text-paper"
                  : "border-rule-strong bg-paper text-ink"
              }`}
            >
              {axis.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {axes
            .map((axis, index) => ({ axis, index }))
            .filter(({ axis }) => active === ALL || active === axis.slug)
            .map(({ axis, index }) => (
              <AxisPanel
                key={`${axis.slug}-${active}`}
                axis={axis}
                index={index}
                periods={periods}
                facts={facts}
                defaultOpen={active === axis.slug}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
