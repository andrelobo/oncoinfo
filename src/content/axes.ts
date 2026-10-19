import type { Axis } from "../lib/types";

export const axes: Axis[] = [
  {
    slug: "prevencao-rastreamento",
    label: "Prevenção e rastreamento",
    question: "O que foi feito para detectar o câncer antes?",
  },
  {
    slug: "diagnostico-inicio-tratamento",
    label: "Diagnóstico e início do tratamento",
    question: "Quais prazos e fluxos foram definidos?",
  },
  {
    slug: "medicamentos-incorporacao",
    label: "Medicamentos e incorporação",
    question: "Quais remédios entraram e como foram financiados?",
  },
  {
    slug: "orcamento-federal",
    label: "Orçamento federal",
    question: "Quanto dinheiro foi destinado e como foi alocado?",
  },
  {
    slug: "radioterapia-estrutura",
    label: "Radioterapia e estrutura",
    question: "O que foi feito em equipamentos e rede física?",
  },
  {
    slug: "direitos-do-paciente",
    label: "Direitos do paciente",
    question: "Quais direitos foram criados ou alterados?",
  },
  {
    slug: "planos-de-saude",
    label: "Planos de saúde",
    question: "O que mudou na cobertura da saúde suplementar?",
  },
];

export const axisBySlug = Object.fromEntries(
  axes.map((axis) => [axis.slug, axis]),
) as Record<Axis["slug"], Axis>;
