import type { Fact } from "../lib/types";

export const facts: Fact[] = [
  {
    id: "lula-pnao-2005",
    period: "lula-2003-2010",
    axis: "direitos-do-paciente",
    direction: "estruturante",
    headline: "Política Nacional de Atenção Oncológica (PNAO), 2005",
    detail:
      "A Portaria 2.439/2005 organizou o atendimento oncológico do SUS em redes estaduais e regionais, integrando prevenção, diagnóstico e alta complexidade.",
    sourceIds: ["portaria-2439-2005", "clipping-ms-2005-12"],
  },
  {
    id: "lula-cacon-unacon",
    period: "lula-2003-2010",
    axis: "radioterapia-estrutura",
    direction: "estruturante",
    headline: "Regulamentação e credenciamento de CACONs e UNACONs",
    detail:
      "Hospitais públicos foram credenciados como Centros (CACON) e Unidades (UNACON) de Assistência de Alta Complexidade em Oncologia, com repasses federais vinculados à oferta integrada de cirurgia, quimioterapia e radioterapia.",
    sourceIds: ["portaria-2439-2005", "clipping-folha-2006-03"],
  },
  {
    id: "lula-viva-mulher",
    period: "lula-2003-2010",
    axis: "prevencao-rastreamento",
    direction: "expansao",
    headline: "Expansão do Programa Viva Mulher",
    detail:
      "Fortalecimento do rastreamento de câncer de colo de útero e de mama sob coordenação do INCA, com ampliação de Papanicolau e mamografias e foco em interiorização.",
    sourceIds: ["portaria-2439-2005", "clipping-globo-2008-10"],
  },
  {
    id: "lula-pdp-bases",
    period: "lula-2003-2010",
    axis: "medicamentos-incorporacao",
    direction: "estruturante",
    headline: "Bases das Parcerias para o Desenvolvimento Produtivo (PDPs)",
    detail:
      "Primeiros acordos de transferência tecnológica entre laboratórios públicos e indústria farmacêutica global, com objetivo de nacionalizar a produção de medicamentos oncológicos e biológicos.",
    sourceIds: ["portaria-2439-2005"],
    limitation:
      "O material descreve a formulação das bases das PDPs; não há dados de execução orçamentária comparáveis.",
  },
  {
    id: "lula-apac-reajuste",
    period: "lula-2003-2010",
    axis: "medicamentos-incorporacao",
    direction: "expansao",
    headline: "Reajuste das APACs de Quimioterapia",
    detail:
      "Revisão dos tetos de reembolso das Autorizações de Procedimentos de Alta Complexidade (APAC) na tabela do SUS, viabilizando financeiramente que hospitais filantrópicos e universitários adotassem esquemas terapêuticos combinados.",
    sourceIds: ["portaria-2439-2005"],
  },
  {
    id: "dilma-lei-60-dias",
    period: "dilma-2011-2016",
    axis: "diagnostico-inicio-tratamento",
    direction: "estruturante",
    headline: "Lei 12.732/2012 — Lei dos 60 Dias",
    detail:
      "Estabeleceu o direito legal de o paciente com neoplasia maligna iniciar o primeiro tratamento (cirurgia, quimioterapia ou radioterapia) no SUS em até 60 dias após diagnóstico em laudo patológico.",
    sourceIds: ["lei-12732-2012", "clipping-g1-2012-11"],
    limitation:
      "Direito legal não garante, por si só, o cumprimento do prazo na ponta.",
  },
  {
    id: "dilma-plano-radioterapia",
    period: "dilma-2011-2016",
    axis: "radioterapia-estrutura",
    direction: "expansao",
    headline: "Plano de Expansão da Radioterapia (2012)",
    detail:
      "Previu a compra institucional de cerca de 80 novos aceleradores lineares para abrir serviços inéditos e ampliar existentes em hospitais públicos e filantrópicos, com foco em descentralização.",
    sourceIds: ["lei-12732-2012", "clipping-folha-2013-05"],
  },
  {
    id: "dilma-pronon",
    period: "dilma-2011-2016",
    axis: "medicamentos-incorporacao",
    direction: "estruturante",
    headline: "Criação do PRONON (Lei 12.715/2012)",
    detail:
      "O Programa Nacional de Apoio à Atenção Oncológica passou a permitir que empresas e pessoas físicas destinassem parte do Imposto de Renda a projetos filantrópicos de combate ao câncer.",
    sourceIds: ["lei-12715-2012"],
  },
  {
    id: "dilma-hpv-2014",
    period: "dilma-2011-2016",
    axis: "prevencao-rastreamento",
    direction: "expansao",
    headline: "Vacina contra HPV incluída no Calendário Nacional em 2014",
    detail:
      "Vacina quadrivalente contra o Papilomavírus Humano para meninas de 9 a 13 anos, principal estratégia preventiva de longo prazo contra o câncer de colo de útero.",
    sourceIds: ["lei-12732-2012", "clipping-estadao-2014-03"],
  },
  {
    id: "dilma-trastuzumabe",
    period: "dilma-2011-2016",
    axis: "medicamentos-incorporacao",
    direction: "expansao",
    headline: "Incorporação do Trastuzumabe (2012)",
    detail:
      "O Ministério da Saúde incluiu o medicamento biológico na rede pública para o tratamento do câncer de mama inicial e localmente avançado (HER2 positivo).",
    sourceIds: ["lei-12732-2012"],
  },
  {
    id: "bolsonaro-corte-45",
    period: "bolsonaro-2019-2022",
    axis: "orcamento-federal",
    direction: "restricao",
    headline:
      "Corte de 45% na proposta de orçamento de 2023 para prevenção e controle do câncer",
    detail:
      "A verba caiu de R$ 175 milhões para R$ 97 milhões no projeto de orçamento de 2023. O remanejamento visava abrir espaço para emendas de relator. Entidades como a Abrale apontaram risco para compra de equipamentos, insumos e reformas.",
    sourceIds: ["clipping-estadao-2022-09"],
    limitation: "Refere-se à proposta orçamentária de 2023, não a gasto executado.",
  },
  {
    id: "bolsonaro-veto-pl6330",
    period: "bolsonaro-2019-2022",
    axis: "planos-de-saude",
    direction: "restricao",
    headline:
      "Veto integral ao PL 6.330/2019, que exigia cobertura de antineoplásicos orais em até 48h",
    detail:
      "O texto obrigava planos de saúde a custear tratamento antineoplásico de uso domiciliar e oral em até 48 horas após prescrição. O Executivo alegou risco à sustentabilidade do setor e prazo inviável para análise da ANS.",
    sourceIds: ["pl-6330-2019", "clipping-senado-2021-07"],
  },
  {
    id: "bolsonaro-veto-estatuto",
    period: "bolsonaro-2019-2022",
    axis: "direitos-do-paciente",
    direction: "restricao",
    headline:
      "Estatuto da Pessoa com Câncer sancionado com veto ao artigo de acesso a medicamentos incorporados",
    detail:
      "A Lei 14.238/2021 criou o estatuto protetivo, mas o artigo que obrigava o Estado a garantir acesso universal a medicamentos modernos já incorporados ao SUS foi vetado. A justificativa foi conflito com os processos de avaliação de tecnologia em saúde.",
    sourceIds: ["lei-14238-2021", "clipping-senado-2021-11"],
  },
];

export const factById = Object.fromEntries(
  facts.map((fact) => [fact.id, fact]),
) as Record<string, Fact>;

export function factsByPeriodAndAxis(
  period: Fact["period"],
  axis: Fact["axis"],
): Fact[] {
  return facts.filter((fact) => fact.period === period && fact.axis === axis);
}
