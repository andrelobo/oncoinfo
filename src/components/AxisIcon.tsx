import {
  Pill,
  Radiation,
  Scale,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { AxisSlug } from "../lib/types";

const icons: Record<AxisSlug, LucideIcon> = {
  "prevencao-rastreamento": ScanSearch,
  "diagnostico-inicio-tratamento": Stethoscope,
  "medicamentos-incorporacao": Pill,
  "orcamento-federal": Wallet,
  "radioterapia-estrutura": Radiation,
  "direitos-do-paciente": Scale,
  "planos-de-saude": ShieldPlus,
};

export function AxisIcon({
  axis,
  className = "h-5 w-5",
}: {
  axis: AxisSlug;
  className?: string;
}) {
  const Icon = icons[axis];
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
