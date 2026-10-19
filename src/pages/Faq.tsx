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

      <div className="surface divide-y divide-white/10 overflow-hidden">
        {faq.map((item) => (
          <details key={item.question} className="group p-4">
            <summary className="tap cursor-pointer list-none font-semibold text-slate-100 marker:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-brand-green-light transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 text-sm text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
