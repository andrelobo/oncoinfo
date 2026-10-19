import { ComparisonTable } from "../components/ComparisonTable";
import { MethodWarning } from "../components/MethodWarning";
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
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Comparar períodos por eixo
        </h1>
        <p className="max-w-3xl text-slate-700">
          A tabela resume, eixo por eixo, o que o material documenta em cada
          período. Uma célula vazia significa ausência de fonte específica, não
          ausência de ação de governo.
        </p>
        <MethodWarning message="As colunas representam períodos distintos de governo. Não atribua automaticamente os feitos de um período a outro, e não leia a tabela como juízo de valor sobre governos." />
      </div>

      <ComparisonTable periods={periods} axes={axes} facts={facts} />
    </div>
  );
}
