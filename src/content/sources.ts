import type { Source } from "../lib/types";

export const sources: Source[] = [
  {
    id: "portaria-2439-2005",
    kind: "portaria",
    title: "Portaria 2.439/2005 — Política Nacional de Atenção Oncológica (PNAO)",
    date: "2005-12",
    file: "/docs/balanco-lula.pdf",
  },
  {
    id: "lei-12732-2012",
    kind: "lei",
    title: "Lei 12.732/2012 — Lei dos 60 Dias",
    date: "2012-11",
    file: "/docs/balanco-dilma.pdf",
  },
  {
    id: "lei-12715-2012",
    kind: "lei",
    title: "Lei 12.715/2012 — Criação do PRONON",
    date: "2012-09",
    file: "/docs/balanco-dilma.pdf",
  },
  {
    id: "lei-14238-2021",
    kind: "lei",
    title: "Lei 14.238/2021 — Estatuto da Pessoa com Câncer",
    date: "2021-11",
    file: "/docs/relatorio-bolsonaro.pdf",
  },
  {
    id: "pl-6330-2019",
    kind: "lei",
    title: "PL 6.330/2019 — Antineoplásicos orais domiciliares (vetado)",
    date: "2021-07",
    file: "/docs/relatorio-bolsonaro.pdf",
    note: "Vetado integralmente em julho de 2021.",
  },
  {
    id: "clipping-ms-2005-12",
    kind: "clipping",
    title:
      "Governo Federal institui política inédita para unificar tratamento de câncer no SUS",
    outlet: "Ministério da Saúde",
    date: "2005-12",
    file: "/docs/balanco-lula.pdf",
  },
  {
    id: "clipping-folha-2006-03",
    kind: "clipping",
    title:
      "SUS credencia novos hospitais contra o câncer para reduzir filas no país",
    outlet: "Folha de S.Paulo",
    date: "2006-03",
    file: "/docs/balanco-lula.pdf",
  },
  {
    id: "clipping-globo-2008-10",
    kind: "clipping",
    title:
      "Campanhas de mamografia batem recorde de atendimento no SUS com foco no diagnóstico precoce",
    outlet: "O Globo",
    date: "2008-10",
    file: "/docs/balanco-lula.pdf",
  },
  {
    id: "clipping-g1-2012-11",
    kind: "clipping",
    title:
      "Sancionada lei que exige início de tratamento de câncer no SUS em até 60 dias",
    outlet: "G1",
    date: "2012-11",
    file: "/docs/balanco-dilma.pdf",
  },
  {
    id: "clipping-folha-2013-05",
    kind: "clipping",
    title:
      "Governo Federal anuncia compra em massa de equipamentos para expandir radioterapia",
    outlet: "Folha de S.Paulo",
    date: "2013-05",
    file: "/docs/balanco-dilma.pdf",
  },
  {
    id: "clipping-estadao-2014-03",
    kind: "clipping",
    title:
      "SUS inicia vacinação contra o HPV em escolas públicas para prevenir câncer de colo",
    outlet: "Estadão",
    date: "2014-03",
    file: "/docs/balanco-dilma.pdf",
  },
  {
    id: "clipping-estadao-2022-09",
    kind: "clipping",
    title:
      "Governo Bolsonaro corta verba contra o câncer para bancar orçamento secreto em 2023",
    outlet: "Estadão / Época Negócios",
    date: "2022-09",
    file: "/docs/relatorio-bolsonaro.pdf",
  },
  {
    id: "clipping-senado-2021-07",
    kind: "clipping",
    title: "Bolsonaro veta projeto que facilitaria tratamento oral contra câncer",
    outlet: "Agência Senado / G1",
    date: "2021-07",
    file: "/docs/relatorio-bolsonaro.pdf",
  },
  {
    id: "clipping-senado-2021-11",
    kind: "clipping",
    title:
      "Estatuto da Pessoa com Câncer é sancionado com veto a garantia de acesso a remédio mais eficaz",
    outlet: "Agência Senado",
    date: "2021-11",
    file: "/docs/relatorio-bolsonaro.pdf",
  },
  {
    id: "comparativo-2026-saude",
    kind: "analise",
    title:
      "Comparativo de Propostas para a Saúde e o SUS — Panorama Eleitoral de 2026",
    outlet: "Documento de análise eleitoral",
    date: "2026-10",
    file: "/docs/comparativo_propostas_saude_2026.pdf",
    note: "Documento de campanha/análise. Descreve propostas e análises de especialistas; não registra atos de governo executados.",
  },
];

export const sourceById = Object.fromEntries(
  sources.map((source) => [source.id, source]),
) as Record<string, Source>;
