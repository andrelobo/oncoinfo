const MONTHS_PT = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

/**
 * Converte "AAAA-MM" em "novembro de 2012".
 * Aceita também "AAAA" e "AAAA-MM-DD".
 */
export function formatMonthYear(date: string): string {
  const [year, month] = date.split("-");
  if (!month) return year;
  const monthIndex = Number(month) - 1;
  const monthName = MONTHS_PT[monthIndex] ?? month;
  return `${monthName} de ${year}`;
}

/**
 * Retorna apenas o ano como número, útil para a linha do tempo.
 */
export function parseYear(date: string): number {
  return Number(date.split("-")[0]);
}

/**
 * Formata um intervalo de anos: "2003–2010".
 */
export function formatRange(start: number, end: number): string {
  return `${start}–${end}`;
}

export function directionLabel(direction: string): string {
  switch (direction) {
    case "expansao":
      return "Expansão";
    case "restricao":
      return "Restrição";
    case "estruturante":
      return "Estruturante";
    default:
      return "Indefinido";
  }
}

export function sourceKindLabel(kind: string): string {
  switch (kind) {
    case "lei":
      return "Lei";
    case "portaria":
      return "Portaria";
    case "orcamento":
      return "Orçamento";
    case "clipping":
      return "Clipping";
    case "programa":
      return "Programa";
    default:
      return kind;
  }
}
