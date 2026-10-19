import { PageHeader } from "../components/PageHeader";
import { faq } from "../content/faq";
import { useSeo } from "../lib/seo";

export function Faq() {
  useSeo(
    "Perguntas frequentes",
    "Respostas objetivas sobre o recorte do site, a Lei dos 60 Dias, os vetos de 2021 e o corte no orçamento de 2023.",
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Dúvidas"
        title="Perguntas frequentes"
        lead="Dúvidas comuns sobre o recorte, as fontes e a leitura do comparativo."
      />

      <div className="divide-y divide-rule border-y border-rule">
        {faq.map((item, index) => (
          <details key={item.question} className="group py-3" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-baseline gap-3">
              <span className="section-no shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-base font-semibold text-ink group-open:text-ink">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className="ml-auto font-mono text-sm text-faint transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2 pl-8 text-sm text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
