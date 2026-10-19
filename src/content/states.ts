import type { StateCase, StateSlug } from "../lib/types";

export const states: StateCase[] = [
  {
    slug: "amazonas",
    state: "Amazonas",
    institution: "CECON · FCECON",
    headline:
      "FCECON e o SUS: as três ondas de avanço de um serviço oncológico no Amazonas",
    context:
      "O SUS foi criado pela Constituição de 1988 e regulamentado por leis federais em 1990. Tomando a regulamentação prática como referência, o sistema completa 36 anos de funcionamento regular em 2026 (e 38 anos desde a Assembleia Constituinte). O recorte abaixo acompanha como o nascimento e a consolidação do SUS se refletem na trajetória da Fundação Centro de Controle de Oncologia do Amazonas (FCECON), antigo CECON, criado em 1974. O material organiza essa história em três grandes ondas.",
    summary:
      "A FCECON ganhou porte e especialização nos anos 1990, com a transformação em Fundação após o nascimento do SUS; ganhou rapidez no diagnóstico em 2013, com a digitalização do parque de imagens; e, em 2025–2026, entrou na fase de modernização e expansão física, com foco na saúde da mulher e no fim das filas de agendamento. Não é um comparativo entre gestões: é a trajetória registrada de um serviço.",
    warning:
      "Recorte estadual. Os registros descrevem etapas históricas e entregas informadas no material cedido, com atribuição factual de períodos e gestões. Não há juízo de valor sobre governos, não há afirmação de causalidade sobre desfechos de pacientes e não há dado de execução orçamentária auditado neste material.",
    eras: [
      {
        id: "fcecon-am-1990s",
        period: "Anos 1990",
        title: "Pós-criação do SUS e transformação em Fundação",
        detail:
          "Até o fim dos anos 1980, o CECON (criado em 1974) era um centro hospitalar pequeno e com dificuldade de verba. A partir de 1989–1990, logo após o nascimento do SUS, a unidade foi transformada oficialmente em Fundação Pública. Com verbas federais carimbadas, expandiu o espaço físico e passou a oferecer tratamentos de alta complexidade — grandes cirurgias e tratamentos pesados contra o câncer — de forma organizada e gratuita.",
        sourceIds: ["fcecon-am-2026"],
        limitation:
          "Etapa descrita de forma panorâmica no material; sem número de leitos, produção assistencial ou data exata no recorte coletado. Contexto de gestão atribuído ao período de Vivaldo Frota.",
      },
      {
        id: "fcecon-am-2013",
        period: "2013",
        title: "Virada tecnológica e digital",
        detail:
          "Em 2013, o hospital passou por uma modernização discreta, mas de grande efeito para os pacientes: a digitalização do parque de imagens. Antes, os exames eram revelados em chapas físicas e demoravam a ficar prontos; com a digitalização, passaram a ser vistos no computador. Segundo o material, isso reduziu o tempo de espera pelo diagnóstico e evitou exames repetidos e radiação desnecessária.",
        sourceIds: ["fcecon-am-2026"],
        limitation:
          "O ganho é descrito qualitativamente. Sem mediana de tempo de diagnóstico, número de exames ou indicador de repetição no material. Contexto de gestão atribuído ao período de Omar Aziz.",
      },
      {
        id: "fcecon-am-2025-2026",
        period: "2025–2026",
        title: "Grande modernização e expansão física",
        detail:
          "Fase considerada pelos especialistas citados como um dos maiores momentos de melhoria física e de atendimento da história da fundação, sob a liderança do governo estadual e com investimentos do Ministério da Saúde. Inclui a inauguração do CEPCOLU (2025), Centro de Prevenção ao Câncer de Colo de Útero, voltado à doença que mais afeta mulheres no Amazonas; a revitalização e o fim das filas de agendamento (2026); a reforma completa do ambulatório, da quimioterapia e da recepção, com aumento de capacidade e dobro de guichês; a modernização da UTI para padrão comparável ao de hospitais privados; a automação de processos, para que o paciente saia da primeira consulta com os retornos agendados; e a instalação de novos aceleradores lineares (radioterapia).",
        sourceIds: ["fcecon-am-2026"],
        limitation:
          "Entregas informadas no material, atribuídas ao governo estadual do período e a investimentos federais recentes. Sem número de pacientes atendidos, sem valor executado por rubrica, sem laudo de vistoria e sem métrica do tempo de fila antes/depois.",
      },
    ],
  },
];

export const stateBySlug = Object.fromEntries(
  states.map((state) => [state.slug, state]),
) as Record<StateSlug, StateCase>;
