import type { Axis, Fact, Period } from "../lib/types";
import { DirectionBadge } from "./DirectionBadge";

const EMPTY = "Sem dado suficiente no material.";

function factsFor(facts: Fact[], period: Period, axis: Axis): Fact[] {
  return facts.filter((fact) => fact.period === period.slug && fact.axis === axis.slug);
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
          <p className="text-sm font-medium text-slate-800">{fact.headline}</p>
        </li>
      ))}
    </ul>
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
  return (
    <div>
      {/* Tabela (telas >= 768px) */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="w-48 border-b border-slate-200 p-3 align-bottom text-xs font-semibold uppercase tracking-wide text-slate-500">
                Eixo
              </th>
              {periods.map((period) => (
                <th
                  key={period.slug}
                  className="border-b border-slate-200 p-3 align-bottom text-sm font-semibold text-slate-800"
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
                  className="border-b border-slate-200 p-3 text-sm font-semibold text-slate-800"
                >
                  <span className="block">{axis.label}</span>
                  <span className="mt-1 block text-xs font-normal text-slate-500">
                    {axis.question}
                  </span>
                </th>
                {periods.map((period) => (
                  <td
                    key={period.slug}
                    className="border-b border-slate-200 p-3"
                  >
                    <CellContent items={factsFor(facts, period, axis)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards empilhados (telas < 768px) */}
      <div className="space-y-4 md:hidden">
        {axes.map((axis) => (
          <section
            key={axis.slug}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {axis.label}
            </h3>
            <p className="mb-3 text-xs text-slate-500">{axis.question}</p>
            <div className="space-y-3">
              {periods.map((period) => (
                <div
                  key={period.slug}
                  className="rounded-md border border-slate-100 bg-slate-50 p-3"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {period.short}
                  </p>
                  <CellContent items={factsFor(facts, period, axis)} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
