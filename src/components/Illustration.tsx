import type { JSX } from "react";

const BLUE = "#0059b6";
const GREEN = "#03955b";
const BLUE_TINT = "#e8f0fb";
const GREEN_TINT = "#e6f4ee";

type Props = { slug: string; className?: string };

function Wrap({
  children,
  className,
  viewBox = "0 0 128 104",
}: {
  children: JSX.Element;
  className?: string;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

const scenes: Record<string, JSX.Element> = {
  "prevencao-rastreamento": (
    <g>
      <rect x="10" y="14" width="74" height="80" rx="6" fill={BLUE_TINT} />
      <rect x="18" y="8" width="74" height="80" rx="6" fill="#fff" stroke={BLUE} strokeWidth="2.5" />
      <path d="M30 28h34M30 40h34M30 52h20" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="84" cy="62" r="20" fill={GREEN_TINT} stroke={GREEN} strokeWidth="3" />
      <path d="M74 62l7 7 13-15" stroke={GREEN} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M98 78l12 12" stroke={GREEN} strokeWidth="5" strokeLinecap="round" />
    </g>
  ),
  "diagnostico-inicio-tratamento": (
    <g>
      <rect x="8" y="20" width="112" height="64" rx="8" fill={BLUE_TINT} />
      <circle cx="40" cy="52" r="20" fill="#fff" stroke={BLUE} strokeWidth="3" />
      <path d="M40 40v12l8 6" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M64 52h34" stroke={GREEN} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M88 42l12 10-12 10" stroke={GREEN} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  "medicamentos-incorporacao": (
    <g>
      <rect x="12" y="30" width="52" height="26" rx="13" transform="rotate(-30 38 43)" fill={BLUE} />
      <rect x="12" y="30" width="26" height="26" rx="13" transform="rotate(-30 38 43)" fill={BLUE_TINT} />
      <rect x="66" y="46" width="46" height="46" rx="8" fill="#fff" stroke={GREEN} strokeWidth="3" />
      <path d="M89 56v26M76 69h26" stroke={GREEN} strokeWidth="4" strokeLinecap="round" />
      <circle cx="30" cy="82" r="7" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
    </g>
  ),
  "orcamento-federal": (
    <g>
      <rect x="10" y="26" width="108" height="58" rx="8" fill="#fff" stroke={BLUE} strokeWidth="3" />
      <path d="M10 44h108" stroke={BLUE} strokeWidth="3" />
      <circle cx="34" cy="66" r="10" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
      <circle cx="56" cy="66" r="10" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
      <path d="M80 70l12-12 12 12" stroke={GREEN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M92 58v16" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  "radioterapia-estrutura": (
    <g>
      <rect x="14" y="74" width="100" height="10" rx="4" fill={BLUE} />
      <path d="M30 74V52h26v22" fill={BLUE_TINT} stroke={BLUE} strokeWidth="3" strokeLinejoin="round" />
      <rect x="56" y="30" width="34" height="30" rx="6" fill="#fff" stroke={BLUE} strokeWidth="3" />
      <path d="M90 40c8 4 8 16 0 20" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      <path d="M100 32c14 6 14 30 0 36" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      <circle cx="73" cy="45" r="5" fill={GREEN} />
    </g>
  ),
  "direitos-do-paciente": (
    <g>
      <path d="M64 8l38 12v30c0 24-16 38-38 46-22-8-38-22-38-46V20z" fill={GREEN_TINT} stroke={GREEN} strokeWidth="3" strokeLinejoin="round" />
      <path d="M64 34v28M50 48h28" stroke={BLUE} strokeWidth="4.5" strokeLinecap="round" />
    </g>
  ),
  "planos-de-saude": (
    <g>
      <rect x="12" y="26" width="104" height="66" rx="10" fill="#fff" stroke={BLUE} strokeWidth="3" />
      <rect x="22" y="38" width="22" height="16" rx="3" fill={GREEN_TINT} stroke={GREEN} strokeWidth="2.5" />
      <path d="M22 66h56M22 78h34" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
      <path d="M92 44v24M80 56h24" stroke={GREEN} strokeWidth="4.5" strokeLinecap="round" />
    </g>
  ),
};

export function AxisIllustration({ slug, className }: Props) {
  const scene = scenes[slug];
  if (!scene) return null;
  return (
    <Wrap className={className}>
      <>{scene}</>
    </Wrap>
  );
}

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <Wrap className={className} viewBox="0 0 240 160">
      <g>
        <rect x="24" y="18" width="150" height="120" rx="10" fill={BLUE_TINT} />
        <rect x="16" y="12" width="150" height="120" rx="10" fill="#fff" stroke={BLUE} strokeWidth="3" />
        <path d="M40 44h84M40 60h60" stroke={BLUE} strokeWidth="3.5" strokeLinecap="round" />
        <path
          d="M40 108l26-24 22 16 30-38"
          stroke={GREEN}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="118" cy="62" r="6" fill={GREEN} />
        <circle cx="186" cy="104" r="26" fill={GREEN_TINT} stroke={GREEN} strokeWidth="3.5" />
        <path d="M172 104l10 10 18-20" stroke={GREEN} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrap>
  );
}
