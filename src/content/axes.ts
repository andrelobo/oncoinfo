import type { Axis } from "../lib/types";

export const axes: Axis[] = [
  {
    slug: "prevencao-rastreamento",
    label: "Prevenção e rastreamento",
    question: "O que a rede fez para pegar o câncer cedo?",
  },
  {
    slug: "diagnostico-inicio-tratamento",
    label: "Diagnóstico e início do tratamento",
    question: "Quanto tempo leva do primeiro sintoma até o tratamento começar?",
  },
  {
    slug: "medicamentos-incorporacao",
    label: "Medicamentos e incorporação",
    question: "Quais remédios contra o câncer o SUS passou a oferecer?",
  },
  {
    slug: "orcamento-federal",
    label: "Orçamento federal",
    question: "Quanto foi destinado e se o dinheiro chegou?",
  },
  {
    slug: "radioterapia-estrutura",
    label: "Radioterapia e estrutura",
    question: "Máquinas, leitos e estrutura para tratar quem precisa?",
  },
  {
    slug: "direitos-do-paciente",
    label: "Direitos do paciente",
    question: "O que a lei garante a quem está com câncer?",
  },
  {
    slug: "planos-de-saude",
    label: "Planos de saúde",
    question: "O que planos de saúde são obrigados a cobrir?",
  },
];

export const axisBySlug = Object.fromEntries(
  axes.map((axis) => [axis.slug, axis]),
) as Record<Axis["slug"], Axis>;
