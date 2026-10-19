export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Por que o site separa Lula 2003–2010 e Dilma 2011–2016?",
    answer:
      "Porque são períodos de governo diferentes e a maior parte dos documentos sobre Lei dos 60 Dias, PRONON, vacina HPV e radioterapia é do governo Dilma. Atribuir esses feitos ao Lula seria impreciso.",
  },
  {
    question: "Por que não há dados do Lula 2023–2026?",
    answer:
      "O material coletado cobre apenas o primeiro governo Lula. Para incluir o período atual seria necessário novo levantamento com critérios comparáveis.",
  },
  {
    question: "O que é a Lei dos 60 Dias?",
    answer:
      "Lei 12.732/2012, que garante iniciar o primeiro tratamento no SUS em até 60 dias após diagnóstico em laudo patológico. É um direito legal; o cumprimento depende da rede.",
  },
  {
    question: "O que foi o veto ao PL 6.330/2019?",
    answer:
      "O projeto obrigava planos a cobrir tratamento antineoplásico oral domiciliar em até 48h. Foi vetado integralmente em julho de 2021. O Executivo alegou impacto financeiro e prazo inviável para a ANS.",
  },
  {
    question: "O que foi o corte de 45% no orçamento de 2023?",
    answer:
      "Na proposta de 2023, a verba para prevenção e controle do câncer caiu de R$ 175 milhões para R$ 97 milhões. Entidades como a Abrale apontaram risco para equipamentos, insumos e reformas.",
  },
  {
    question: "O que significa 'sem dado suficiente no material'?",
    answer:
      "Significa que o material não contém fonte específica sobre aquele eixo para aquele período. O site não preenche lacunas com opinião.",
  },
  {
    question: "Como corrigir uma informação?",
    answer:
      "Envie a fonte para o contato indicado na página Sobre. Correções são incorporadas com data e nota.",
  },
];
