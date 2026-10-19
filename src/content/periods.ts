import type { Period } from "../lib/types";

export const periods: Period[] = [
  {
    slug: "lula-2003-2010",
    label: "Governo Lula (2003–2010)",
    short: "Lula 2003–2010",
    start: 2003,
    end: 2010,
    warning:
      "Esta página trata apenas do primeiro governo Lula. Não inclui o período de 2023 a 2026.",
  },
  {
    slug: "dilma-2011-2016",
    label: "Governo Dilma (2011–2016)",
    short: "Dilma 2011–2016",
    start: 2011,
    end: 2016,
    warning:
      "Período separado de propósito, para não atribuir estes feitos ao governo Lula.",
  },
  {
    slug: "bolsonaro-2019-2022",
    label: "Governo Bolsonaro (2019–2022)",
    short: "Bolsonaro 2019–2022",
    start: 2019,
    end: 2022,
    warning:
      "Foco em decisões orçamentárias, vetos e atos normativos documentados no material coletado.",
    continuityNote:
      "Nos temas aqui, o material só registra continuidade de políticas anteriores e decisões negativas. Não há, neste material, ação nova deste governo a destacar.",
  },
];

export const periodBySlug = Object.fromEntries(
  periods.map((period) => [period.slug, period]),
) as Record<Period["slug"], Period>;
