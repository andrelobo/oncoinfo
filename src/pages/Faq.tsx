import { faq } from "../content/faq";
import { useSeo } from "../lib/seo";

export function Faq() {
  useSeo(
    "Perguntas frequentes",
    "Respostas objetivas sobre o recorte do site, a Lei dos 60 Dias, os vetos de 2021 e o corte no orçamento de 2023.",
  );

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Perguntas frequentes
        </h1>
        <p className="max-w-3xl text-slate-700">
          Dúvidas comuns sobre o recorte, as fontes e a leitura do comparativo.
        </p>
      </div>

      <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
        {faq.map((item) => (
          <details key={item.question} className="group p-4">
            <summary className="tap-target cursor-pointer list-none font-semibold text-slate-900 marker:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-slate-400 transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
