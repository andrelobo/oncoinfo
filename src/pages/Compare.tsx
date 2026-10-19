import { ComparisonTable } from "../components/ComparisonTable";
import { MethodWarning } from "../components/MethodWarning";
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
        lead="A tabela resume, eixo por eixo, o que o material documenta em cada período. Uma célula vazia significa ausência de fonte específica, não ausência de ação de governo."
      />
      <MethodWarning message="As colunas representam períodos distintos de governo. Não atribua automaticamente os feitos de um período a outro, e não leia a tabela como juízo de valor sobre governos." />
      <ComparisonTable periods={periods} axes={axes} facts={facts} />
    </div>
  );
}
