export type PeriodSlug =
  | "lula-2003-2010"
  | "dilma-2011-2016"
  | "bolsonaro-2019-2022";

export type AxisSlug =
  | "prevencao-rastreamento"
  | "diagnostico-inicio-tratamento"
  | "medicamentos-incorporacao"
  | "orcamento-federal"
  | "radioterapia-estrutura"
  | "direitos-do-paciente"
  | "planos-de-saude";

export type SourceKind =
  | "lei"
  | "portaria"
  | "orcamento"
  | "clipping"
  | "programa";

export type Direction = "expansao" | "restricao" | "estruturante" | "indefinido";

export type Source = {
  id: string;
  kind: SourceKind;
  title: string;
  outlet?: string;
  date: string; // "AAAA-MM"
  url?: string;
  file?: string; // "/docs/..."
  note?: string;
};

export type Fact = {
  id: string;
  period: PeriodSlug;
  axis: AxisSlug;
  headline: string;
  detail: string;
  direction: Direction;
  sourceIds: string[]; // NUNCA vazio
  limitation?: string;
};

export type Period = {
  slug: PeriodSlug;
  label: string;
  short: string;
  start: number;
  end: number;
  warning: string;
};

export type Axis = {
  slug: AxisSlug;
  label: string;
  question: string;
};

export type TimelineEvent = {
  year: number;
  date: string;
  label: string;
  period: PeriodSlug;
  sourceIds: string[];
  description: string;
};
