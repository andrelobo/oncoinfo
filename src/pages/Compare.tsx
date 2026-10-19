import { ComparisonTable } from "../components/ComparisonTable";
import { DirectionBadge } from "../components/DirectionBadge";
import { DirectionChart } from "../components/DirectionChart";
import { PageHeader } from "../components/PageHeader";
import { axes } from "../content/axes";
import { facts } from "../content/facts";
import { periods } from "../content/periods";
import { useSeo } from "../lib/seo";

export function Compare() {
  useSeo(
    "Comparar períodos",
    "Tabela comparativa dos eixos temáticos da atenção oncológica no SUS entre os períodos de 2003–2010, 2011–2016 e 2019–2022.",
  );

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Comparação"
        title="Comparar períodos por eixo"
        lead="O que o material documenta em cada período, eixo por eixo."
      />
      <DirectionChart facts={facts} />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border border-rule bg-canvas px-4 py-3">
        <span className="label">Legenda</span>
        <DirectionBadge direction="expansao" />
        <DirectionBadge direction="restricao" />
        <DirectionBadge direction="estruturante" />
        <DirectionBadge direction="indefinido" />
      </div>
      <ComparisonTable periods={periods} axes={axes} facts={facts} />
    </div>
  );
}
