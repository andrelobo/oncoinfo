import type { TimelineEvent } from "../lib/types";

const events: TimelineEvent[] = [
  {
    year: 2005,
    date: "2005-12",
    label: "Política Nacional de Atenção Oncológica (PNAO)",
    period: "lula-2003-2010",
    sourceIds: ["portaria-2439-2005", "clipping-ms-2005-12"],
    description:
      "Portaria 2.439/2005 organiza o atendimento oncológico do SUS em redes estaduais e regionais.",
  },
  {
    year: 2006,
    date: "2006-03",
    label: "Credenciamento de novos hospitais (UNACONs/CACONs)",
    period: "lula-2003-2010",
    sourceIds: ["clipping-folha-2006-03"],
    description:
      "Novos hospitais são credenciados para reduzir filas no atendimento oncológico do país.",
  },
  {
    year: 2008,
    date: "2008-10",
    label: "Recorde de mamografias no SUS",
    period: "lula-2003-2010",
    sourceIds: ["clipping-globo-2008-10"],
    description:
      "Campanhas de mamografia ampliam o diagnóstico precoce com foco na interiorização.",
  },
  {
    year: 2012,
    date: "2012-01",
    label: "Plano de Expansão da Radioterapia",
    period: "dilma-2011-2016",
    sourceIds: ["lei-12732-2012", "clipping-folha-2013-05"],
    description:
      "Previsão de compra institucional de cerca de 80 novos aceleradores lineares.",
  },
  {
    year: 2012,
    date: "2012-09",
    label: "Criação do PRONON (Lei 12.715/2012)",
    period: "dilma-2011-2016",
    sourceIds: ["lei-12715-2012"],
    description:
      "Permite destinar parte do Imposto de Renda a projetos filantrópicos de combate ao câncer.",
  },
  {
    year: 2012,
    date: "2012-11",
    label: "Lei dos 60 Dias (Lei 12.732/2012)",
    period: "dilma-2011-2016",
    sourceIds: ["lei-12732-2012", "clipping-g1-2012-11"],
    description:
      "Garante o início do primeiro tratamento no SUS em até 60 dias após diagnóstico em laudo patológico.",
  },
  {
    year: 2014,
    date: "2014-03",
    label: "Vacina contra HPV no Calendário Nacional",
    period: "dilma-2011-2016",
    sourceIds: ["clipping-estadao-2014-03"],
    description:
      "Vacina quadrivalente contra o HPV para meninas de 9 a 13 anos nas escolas públicas.",
  },
  {
    year: 2021,
    date: "2021-07",
    label: "Veto ao PL 6.330/2019",
    period: "bolsonaro-2019-2022",
    sourceIds: ["pl-6330-2019", "clipping-senado-2021-07"],
    description:
      "Veto integral ao projeto que obrigava planos a cobrir antineoplásicos orais domiciliares em até 48h.",
  },
  {
    year: 2021,
    date: "2021-11",
    label: "Estatuto da Pessoa com Câncer com veto",
    period: "bolsonaro-2019-2022",
    sourceIds: ["lei-14238-2021", "clipping-senado-2021-11"],
    description:
      "Lei 14.238/2021 cria o estatuto, mas veta o artigo de garantia de acesso a medicamentos incorporados.",
  },
  {
    year: 2022,
    date: "2022-09",
    label: "Corte de 45% na proposta de orçamento de 2023",
    period: "bolsonaro-2019-2022",
    sourceIds: ["clipping-estadao-2022-09"],
    description:
      "Verba de prevenção e controle do câncer cai de R$ 175 milhões para R$ 97 milhões na proposta de 2023.",
  },
];

export const timeline = events.sort((a, b) => a.date.localeCompare(b.date));
