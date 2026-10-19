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
  | "programa"
  | "analise";

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

export type CandidateSlug = "flavio-bolsonaro" | "lula";
export type Candidate = {
  slug: CandidateSlug;
  name: string;
  role: string;
};

/**
 * Proposta de campanha eleitoral. NÃO é ato de governo: é intenção declarada
 * em documento de campanha, sem execução registrada.
 */
export type Proposal = {
  id: string;
  candidate: CandidateSlug;
  axis: AxisSlug;
  title: string;
  proposal: string;
  expertView: string;
  impact: string;
  sourceIds: string[];
  limitation?: string;
};

export type StateSlug = "amazonas";

/**
 * Etapa histórica de um recorte estadual (unidade de saúde / serviço oncológico).
 * Cada etapa precisa de fonte; a ausência de dado é declarada em `limitation`.
 */
export type StateEra = {
  id: string;
  period: string; // "Anos 1990" — texto livre, pois o recorte estadual não usa os períodos federais
  title: string;
  detail: string;
  sourceIds: string[]; // NUNCA vazio
  limitation?: string;
};

export type StateCase = {
  slug: StateSlug;
  state: string; // "Amazonas"
  institution: string; // "CECON · FCECON"
  headline: string;
  context?: string; // enquadramento histórico geral do recorte
  summary: string;
  warning: string;
  eras: StateEra[];
};
