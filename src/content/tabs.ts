/**
 * Conteúdo fiel dos documentos (PDFs) enviados, um por aba.
 * O texto é reproduzido como está no material original — sem reescrita.
 */

export type DocSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type DocClip = {
  source: string;
  title: string;
  text: string;
};

export type TabContent = {
  slug: string;
  label: string;
  title: string;
  subtitle?: string;
  pdf: string;
  intro?: string;
  sections: DocSection[];
  clips?: DocClip[];
  /** Notas/observações finais do documento */
  footnote?: string;
  /** Marcador de conteúdo pendente */
  pending?: boolean;
};

export const tabs: TabContent[] = [
  {
    slug: "onco-norte",
    label: "Onco Norte",
    title: "Governo Federal — Oncologia — Amazonas",
    subtitle:
      "Acompanhamento das Políticas Públicas e Financiamento da Prevenção e Tratamento do Câncer",
    pdf: "/docs/governo_federal_oncologia_amazonas (2).pdf",
    intro:
      "Tabela comparativa de diretrizes oncológicas na Região Norte, entre a gestão Jair Bolsonaro (2019–2022) e a gestão Luiz Inácio Lula da Silva (2023–presente).",
    sections: [
      {
        heading: "Tabela Comparativa de Diretrizes Oncológicas na Região Norte",
        paragraphs: [
          "Amazonas (AM) — Gestão Jair Bolsonaro (2019–2022): Envio de verbas em bloco para o teto MAC estadual; metas digitais do Previne Brasil punindo municípios por falhas de conectividade no rastreio. Gestão Luiz Inácio Lula da Silva (2023–presente): Aporte no Super Centro de Diagnóstico da FCecon; fomento ao CEPCOLU (2025); auxílio-permanência de viagem e investimentos nas UBS Fluviais.",
          "Pará (PA) — Bolsonaro: Financiamento descentralizado via emendas para manutenção de leitos de quimioterapia ambulatorial na capital. Lula: Financiamento e implantação da primeira estrutura de cirurgia robótica oncológica 100% SUS da Amazônia.",
          "Rondônia (RO) — Bolsonaro: Repasses financeiros federais ordinários da União para os hospitais filantrópicos de tratamento do câncer. Lula: Integração do polo oncológico à Rede de Telecirurgia Robótica nacional do SUS para conexões de alta complexidade.",
          "Acre (AC) — Bolsonaro: Manutenção do modelo tradicional de Tratamento Fora de Domicílio (TFD) com custeio via repasse ministerial regular. Lula: Atualização do teto de repasses oncológicos para o fornecimento de 23 novos medicamentos quimioterápicos de alto custo.",
          "Amapá (AP) — Bolsonaro: Envio de repasses do Fundo Nacional de Saúde para a contratação terceirizada de serviços de oncologia clínica temporários. Lula: Instalação e atualização tecnológica de maquinários públicos de radioterapia por meio de investimentos do Novo PAC Saúde.",
          "Tocantins (TO) — Bolsonaro: Monitoramento de indicadores de rastreio de câncer por meio do preenchimento de prontuários eletrônicos municipais. Lula: Ampliação do orçamento para serviços especializados integrados ao SUS, descentralizando o tratamento para o interior.",
          "Roraima (RR) — Bolsonaro: Execução do orçamento de oncologia sob demanda das secretarias locais, focado na quimioterapia ambulatorial. Lula: Repasses vinculados à nova política de Atenção Primária, focada nas barreiras de acesso geográfico e busca ativa.",
        ],
      },
      {
        heading: "Gestão Jair Bolsonaro (2019–2022)",
        bullets: [
          "O Último Corte Orçamentário da Gestão (Setembro de 2022): Durante a elaboração da proposta orçamentária para 2023, o governo federal realizou um corte linear de 45% nos recursos destinados à Rede de Atenção à Pessoa com Doenças Crônicas - Oncologia. A verba nacional despencou de R$ 175 milhões para R$ 97 milhões. O remanejamento teve como objetivo acomodar as emendas de relator (RP9), conhecidas como Orçamento Secreto, retirando verbas federais que financiariam a compra de novos aparelhos de radioterapia e reformas em hospitais especializados em estados dependentes, como o Amazonas.",
          "Impacto Negativo do Programa Previne Brasil no Amazonas: O financiamento do rastreamento do câncer do colo do útero (exame Papanicolau) nas Unidades Básicas de Saúde (UBS) passou a exigir o cumprimento estrito de metas digitais. No interior do Amazonas, a escassez crônica de internet estável impossibilitava o envio regular desses dados ao sistema e-SUS de Brasília. Com isso, os municípios realizavam os exames preventivos na prática, mas eram punidos pelo Ministério da Saúde com cortes automáticos de repasses financeiros por falhas no sistema digital, desestruturando os caixas da saúde do interior.",
          "Veto à Quimioterapia Oral Domiciliar (2021): Ocorreu o veto integral ao Projeto de Lei 6.330/2019, que obrigaria os planos de saúde a cobrirem tratamentos de quimioterapia oral domiciliar. A decisão afetou diretamente pacientes com câncer de saúde suplementar no Amazonas, que precisavam enfrentar deslocamentos físicos até hospitais e clínicas unicamente para receber medicações que poderiam ser administradas em casa.",
          "Infraestrutura e Obras Físicas: O período foi caracterizado pela ausência de construção, ampliação ou inauguração de centros oncológicos de governança federal direta em território amazonense. A execução ficou centralizada nos repasses em bloco para que o estado gerenciasse a manutenção da Fundação Centro de Controle de Oncologia do Amazonas (FCecon).",
        ],
      },
      {
        heading: "Gestão Luiz Inácio Lula da Silva (2023–presente)",
        bullets: [
          "Diagnóstico Fluviométrico e Acesso pelas Vias Fluviais: O governo federal reestruturou o financiamento para as Unidades Básicas de Saúde Fluviais (UBSF) e barcos-hospitais. Foram injetados recursos específicos para equipar essas embarcações com salas estruturadas para coleta de exames citopatológicos e biópsias iniciais. Além disso, o investimento federal passou a custear a logística reversa para o transporte seguro e rápido de amostras biológicas pelos rios até os laboratórios de análise em Manaus, reduzindo o tempo de espera do diagnóstico para populações ribeirinhas isoladas.",
          "O Programa de Auxílio para Radioterapia (Outubro de 2025): O Ministério da Saúde instituiu um auxílio-permanência com diárias de R$ 150 para transporte e R$ 150 para alimentação voltado a pacientes oncológicos do SUS. No Amazonas, a medida mitigou o abandono de terapias por parte de moradores de calhas de rios distantes que viajavam a Manaus e desistiam do tratamento por falta de condições financeiras para sobreviver na capital.",
          "Incentivo e Integração do CEPCOLU (Março de 2025): Inaugurado pelo governo estadual para conter os severos índices locais de câncer de colo de útero, o Centro Avançado de Prevenção ao Câncer do Colo do Útero (CEPCOLU) passou a receber suporte técnico complementar do Ministério da Saúde e investimentos federais integrados à rede da FCecon para ampliar a capacidade regional de exames de alta precisão.",
          "A Expansão do Orçamento e Nova Tabela SUS (Maio de 2026): O governo federal injetou R$ 2,2 bilhões na oncologia nacional, incluindo 23 novos medicamentos de alto custo de forma gratuita para 18 tipos de tumor. O Amazonas foi beneficiado com o reabastecimento regular de lotes farmacêuticos específicos para o tratamento de tumores estomacais e intestinais, recorrentes na Região Norte.",
          "Extinção do Previne Brasil e Parcerias na FCecon: O modelo de punição por metas digitais foi revogado, substituído por critérios que ponderam o isolamento geográfico e as barreiras territoriais da Amazônia. Em paralelo, o governo federal direcionou recursos estruturais ao Super Centro de Diagnóstico da FCecon para acelerar os laudos de biópsias e discute a criação de uma ala oncológica especializada no Hospital Delphina Aziz.",
        ],
      },
    ],
  },
  {
    slug: "onco-am",
    label: "Onco Am",
    title: "SUS e principais impactos na FCECON",
    subtitle:
      "As três grandes ondas históricas da Fundação Cecon (FCECON)",
    pdf: "/docs/sus_e_principais_impactos_na_fcecon.pdf",
    intro:
      "O Sistema Único de Saúde (SUS) foi criado oficialmente pela Constituição de 1988, mas regulamentado por leis federais em 1990. Tomando como base o ano de sua regulamentação prática, o SUS completa 36 anos de funcionamento regular no país em 2026 (e 38 anos desde a Assembleia Constituinte). A partir do nascimento e consolidação do SUS, a história da saúde pública mudou, impulsionando os momentos de maior avanço e melhoria na Fundação Cecon (FCECON), que aconteceram em três grandes ondas históricas.",
    sections: [
      {
        heading: "1. A Era Pós-Criação do SUS e a Transformação em Fundação (Anos 1990)",
        paragraphs: [
          "Até o final dos anos 1980, o CECON (criado originalmente em 1974) era um centro hospitalar pequeno com muita dificuldade para conseguir verba. O grande salto estrutural aconteceu a partir de 1989/1990 (no governo de Vivaldo Frota), logo após o nascimento do SUS, quando a unidade foi transformada oficialmente em Fundação Pública.",
          "O impacto: Com a criação do SUS e o recebimento de verbas federais carimbadas, a FCECON conseguiu expandir seu espaço físico e, pela primeira vez, passou a oferecer tratamentos de alta complexidade (grandes cirurgias e tratamentos pesados contra o câncer) de forma organizada e gratuita.",
        ],
      },
      {
        heading: "2. A Virada Tecnológica e Digital (2013)",
        paragraphs: [
          "Em 2013 (no governo de Omar Aziz), o hospital passou por uma modernização silenciosa, mas que mudou a vida dos pacientes: o início da digitalização do parque de imagens.",
          "O impacto: Antes, os exames de imagem demoravam muito para serem revelados em chapas físicas. Com a digitalização, os médicos passaram a ver os exames no computador em tempo real. Isso reduziu o tempo de espera pelo diagnóstico do câncer e evitou que os pacientes ficassem repetindo exames e tomando radiação desnecessária.",
        ],
      },
      {
        heading: "3. A Grande Modernização e Expansão Física (2025–2026)",
        paragraphs: [
          "O período mais recente (sob a liderança do governo estadual e investimentos do Ministério da Saúde) é considerado pelos especialistas um dos maiores momentos de melhoria física e atendimento da história da fundação.",
        ],
        bullets: [
          "Inauguração do CEPCOLU (2025): Foi criado o Centro de Prevenção ao Câncer de Colo de Útero, um avanço essencial para combater a doença que historicamente mais castiga as mulheres no Amazonas.",
          "Revitalização e Fim das Filas de Agendamento (2026): Em julho de 2026 (no governo de Wilson Lima), foi entregue a reforma completa do ambulatório, da quimioterapia e da recepção. A capacidade de atendimento aumentou, o número de guichês dobrou e a UTI foi modernizada para um padrão comparável ao de hospitais privados. Além disso, o hospital automatizou processos para que o paciente saia da primeira consulta já com os retornos agendados.",
          "Novos Equipamentos de Radioterapia: Como parte dos investimentos federais recentes e do plano estadual, novos aceleradores lineares (máquinas de radioterapia modernas) foram instalados para agilizar o tratamento.",
        ],
      },
    ],
    footnote:
      "Resumo: o CECON ganhou tamanho e especialização nos anos 1990; ganhou rapidez no diagnóstico em 2013; e ganhou humanização, estrutura moderna e foco na saúde da mulher agora, em 2025/2026.",
  },
  {
    slug: "lula-1",
    label: "Lula I",
    title: "Balanço Histórico: Oncologia no SUS (Governo Lula 2003–2010)",
    subtitle:
      "Relatório de Diretrizes Estruturais e Consolidação de Rede Pública de Alta Complexidade",
    pdf: "/docs/balanco_oncologia_lula_historico.pdf",
    sections: [
      {
        heading: "1. Listagem de feitos e estruturação da rede nacional",
        bullets: [
          "Política Nacional de Atenção Oncológica (PNAO - 2005): Instituída pela Portaria nº 2.439/2005, marcou a primeira política de Estado unificada para o câncer no Brasil. Organizou o atendimento do SUS em redes estaduais e regionais, integrando ações que vão desde a prevenção na atenção básica até os procedimentos de altíssima complexidade.",
          "Estruturação dos CACONs e UNACONs: Regulamentou e credenciou hospitais públicos em Centros (CACON) e Unidades (UNACON) de Assistência de Alta Complexidade em Oncologia. A medida organizou repasses financeiros federais diretos e vinculados para instituições que oferecessem tratamento cirúrgico, quimioterápico e radioterápico de forma integrada.",
          "Expansão do Programa Viva Mulher: Fortalecimento do rastreamento nacional do câncer de colo de útero e de mama sob coordenação técnica do INCA. O programa ampliou significativamente o acesso a exames preventivos (Papanicolau) e mamografias, priorizando a interiorização do diagnóstico de lesões precursoras.",
          "Bases das Parcerias para o Desenvolvimento Produtivo (PDPs): Formulação dos primeiros acordos de transferência tecnológica entre laboratórios públicos nacionais e indústrias farmacêuticas globais. O objetivo foi pavimentar a fabricação nacional de medicamentos oncológicos e biológicos, reduzindo custos de importação.",
          "Reajuste das APACs de Quimioterapia: Revisão e reajuste nos tetos de reembolso das Autorizações de Procedimentos de Alta Complexidade (APAC) na tabela do SUS. Isso viabilizou financeiramente que hospitais filantrópicos e universitários adotassem esquemas terapêuticos modernos combinados.",
        ],
      },
    ],
    clips: [
      {
        source: "Ministério da Saúde — Dezembro de 2005",
        title:
          "Governo Federal institui política inédita para unificar tratamento de câncer no SUS",
        text: "O Ministério da Saúde assina a portaria que cria a Política Nacional de Atenção Oncológica. O objetivo é criar redes regionalizadas em todos os estados, garantindo que o paciente do interior tenha acesso rápido a exames e cirurgias sem precisar se deslocar para os grandes centros de forma desordenada.",
      },
      {
        source: "Folha de S.Paulo — Março de 2006",
        title:
          "SUS credencia novos hospitais contra o câncer para reduzir filas no país",
        text: "Com as novas regras federais, o Ministério da Saúde expande o número de Unidades de Assistência de Alta Complexidade em Oncologia (UNACONs). A medida descentraliza o atendimento de quimioterapia e radioterapia, fortalecendo hospitais regionais de médio e grande porte.",
      },
      {
        source: "O Globo — Outubro de 2008",
        title:
          "Campanhas de mamografia batem recorde de atendimento no SUS com foco no diagnóstico precoce",
        text: "Dados do Ministério da Saúde apontam expansão na realização de exames preventivos para mulheres na faixa prioritária. Parcerias estruturam unidades móveis para levar exames de colo de útero e de mama a municípios e comunidades isoladas.",
      },
    ],
  },
  {
    slug: "dilma",
    label: "Dilma",
    title: "Balanço Institucional: Oncologia no SUS (Governo Dilma 2011–2016)",
    pdf: "/docs/balanco_oncologia_governo_dilma.pdf",
    sections: [
      {
        heading: "1. Listagem de feitos e marcos regulatórios",
        bullets: [
          "Sancionamento da Lei dos 60 Dias (Lei 12.732/2012): Estabeleceu o direito legal de o paciente com neoplasia maligna iniciar o primeiro tratamento (cirurgia, quimioterapia ou radioterapia) no SUS em no máximo 60 dias após o diagnóstico firmado em laudo patológico.",
          "Plano de Expansão da Radioterapia (2012): Criado para reduzir filas crônicas e descentralizar o atendimento, prevendo a compra institucional de cerca de 80 novos aceleradores lineares para abrir serviços inéditos e ampliar os existentes em hospitais públicos e filantrópicos.",
          "Criação do PRONON (Lei 12.715/2012): O Programa Nacional de Apoio à Atenção Oncológica passou a permitir que empresas e pessoas físicas destinassem uma porcentagem do seu Imposto de Renda diretamente para projetos filantrópicos de combate ao câncer, estimulando a pesquisa e tratamento.",
          "Introdução da Vacina contra o HPV (2014): Inclusão da vacina quadrivalente contra o Papilomavírus Humano no Calendário Nacional de Vacinação para meninas de 9 a 13 anos, consolidando a maior estratégia preventiva em massa de longo prazo contra o câncer de colo de útero.",
          "Incorporação do Trastuzumabe (2012): O Ministério da Saúde incluiu o medicamento biológico na rede pública para o tratamento do câncer de mama inicial e localmente avançado (HER2 positivo), representando um grande ganho de sobrevida.",
        ],
      },
    ],
    clips: [
      {
        source: "Portal G1 — Novembro de 2012",
        title:
          "Sancionada lei que exige início de tratamento de câncer no SUS em até 60 dias",
        text: "A presidente Dilma Rousseff sancionou a lei que fixa o prazo máximo para que os pacientes com câncer comecem a se tratar na rede pública após o diagnóstico. A medida busca combater o avanço da doença na fila de espera e força estados e municípios a reorganizar o fluxo de atendimento.",
      },
      {
        source: "Folha de S.Paulo — Maio de 2013",
        title:
          "Governo Federal anuncia compra em massa de equipamentos para expandir radioterapia",
        text: "Ministério da Saúde detalha o plano de expansão para instalar aceleradores lineares no interior do país. O objetivo é reduzir o deslocamento de pacientes que precisam viajar centenas de quilômetros para capitais para conseguir sessões de radiação.",
      },
      {
        source: "Estadão — Março de 2014",
        title:
          "SUS inicia vacinação contra o HPV em escolas públicas para prevenir câncer de colo",
        text: "Campanha nacional de vacinação começa a imunizar milhões de meninas em todo o Brasil. Ministério da Saúde destaca que a imunização é a ferramenta mais eficaz para erradicar a principal causa de tumores uterinos nas próximas décadas.",
      },
    ],
  },
  {
    slug: "bolsonaro",
    label: "Bolsonaro",
    title: "Relatório Técnico: Ações e Decisões na Oncologia",
    subtitle:
      "Gestão: Governo Jair Bolsonaro | Tema: Políticas e Orçamento para o Tratamento do Câncer",
    pdf: "/docs/relatorio_oncologia_governo_bolsonaro.pdf",
    sections: [
      {
        heading: "1. O que foi feito no governo Bolsonaro",
        paragraphs: [
          "Corte de verbas para o câncer (Orçamento 2023): Em setembro de 2022, o governo reduziu em 45% os recursos destinados a ações de prevenção e controle do câncer no projeto de orçamento de 2023. A verba caiu de R$ 175 milhões para R$ 97 milhões. O remanejamento de recursos visava abrir espaço fiscal para as emendas de relator (comumente chamadas de 'orçamento secreto'). Entidades médicas e sociais, como a Abrale, apontaram riscos diretos na compra de equipamentos, insumos e reformas de hospitais.",
          "Veto ao Projeto de Lei dos medicamentos orais (2021): Em julho de 2021, foi vetado integralmente o Projeto de Lei 6.330/2019. O texto determinava a obrigatoriedade de planos de saúde cobrirem despesas com tratamentos antineoplásicos de uso domiciliar e oral em até 48 horas após prescrição. O Executivo justificou que a medida comprometeria a sustentabilidade financeira do mercado de saúde suplementar e que o prazo imposto inviabilizaria análises técnicas adequadas da ANS.",
          "Sanção e vetos no Estatuto da Pessoa com Câncer (2021): Em novembro de 2021, o governo sancionou a Lei 14.238 que criou o estatuto protetivo. No entanto, houve veto ao artigo considerado principal por especialistas, que obrigava o Estado a garantir o acesso universal a medicamentos mais modernos e efetivos já incorporados pelo SUS. A justificativa governamental se baseou no argumento de que a regra entraria em conflito com os processos estabelecidos de avaliação de tecnologias em saúde.",
        ],
      },
    ],
    clips: [
      {
        source: "Estadão / Época Negócios — Setembro de 2022",
        title:
          "Governo Bolsonaro corta verba contra o câncer para bancar orçamento secreto em 2023",
        text: "As verbas destinadas aos programas de prevenção e controle do câncer foram reduzidas linearmente para acomodar bilhões reservados às emendas parlamentares do relator. O corte limitou investimentos estruturais em hospitais especializados da Rede de Atenção à Pessoa com Doenças Crônicas - Oncologia.",
      },
      {
        source: "Agência Senado / G1 — Julho de 2021",
        title:
          "Bolsonaro veta projeto que facilitaria tratamento oral contra câncer",
        text: "O Executivo barrou integralmente o PL 6330/2019, que tornava obrigatório o custeio de quimioterapia domiciliar via oral por planos privados. A justificativa oficial apontou risco de impacto financeiro nos contratos e consequente repasse de custos aos segurados.",
      },
      {
        source: "Agência Senado — Novembro de 2021",
        title:
          "Estatuto da Pessoa com Câncer é sancionado com veto a garantia de acesso a remédio mais eficaz",
        text: "Apesar da criação da lei de proteção ao paciente oncológico, o artigo que obrigava o fornecimento célere de novas tecnologias e terapias modernas incorporadas pelo SUS foi excluído sob a alegação de incompatibilidade orçamentária e técnico-regulatória.",
      },
    ],
  },
  {
    slug: "lula-2",
    label: "Lula II",
    title: "Governo Lula II (2023–presente)",
    subtitle: "Conteúdo em preparação",
    pdf: "",
    pending: true,
    sections: [],
  },
  {
    slug: "propostas-2026",
    label: "Propostas 2026",
    title: "Comparativo de Propostas para a Saúde e o SUS",
    subtitle:
      "Panorama Eleitoral de 2026 · Visão Geral Acessível Baseada em Fatos e Análises Técnicas",
    pdf: "/docs/comparativo_propostas_saude_2026.pdf",
    sections: [
      {
        heading: "Flávio Bolsonaro — 'SUS Padrão Einstein'",
        paragraphs: [
          "O que o plano propõe: Levar o modelo de gestão do hospital privado de luxo para o SUS. Pagar clínicas particulares que tenham salas e equipamentos vazios para fazer as consultas e cirurgias de quem está esperando na fila do SUS.",
          "O que dizem os especialistas e como afeta a sua vida: A proposta tenta agilizar o atendimento de curto prazo usando estruturas que já existem. Porém, especialistas da ABRASCO alertam que usar o dinheiro público no setor privado drena recursos que deveriam reformar os hospitais do próprio SUS. Se a parceria acabar no futuro, a população corre o risco de ficar desamparada porque a rede pública não foi fortalecida. Além disso, seu plano não prevê construir novos hospitais públicos para tratamento de câncer, focando apenas em exames rápidos.",
        ],
      },
      {
        heading: "Flávio Bolsonaro — Corte de R$ 250 bilhões ('Tesouraço')",
        paragraphs: [
          "O que o plano propõe: Diminuir o tamanho da máquina pública e cortar despesas do governo para equilibrar as contas do país.",
          "O que dizem os especialistas e como afeta a sua vida: Economistas alertam que é impossível cortar um valor tão alto sem mexer nos serviços sociais. A campanha estuda mudar as leis que garantem repasses obrigatórios mínimos para a saúde pública. Se os pisos constitucionais forem retirados, o SUS corre o risco real de perder verba estrutural básica, afetando o atendimento geral.",
        ],
      },
      {
        heading: "Flávio Bolsonaro — Prontuário Único por CPF",
        paragraphs: [
          "O que o plano propõe: Unificar o histórico médico de cada cidadão para que postos e hospitais públicos ou privados vejam seus exames antigos usando apenas o CPF.",
          "O que dizem os especialistas e como afeta a sua vida: Facilitaria o atendimento e evitaria exames repetidos. Contudo, especialistas em saúde digital esclarecem que essa proposta é redundante: o SUS já tem essa tecnologia em andamento através do ConecteSUS, tornando a medida uma continuação do que já é feito, e não uma inovação criada do zero.",
        ],
      },
      {
        heading: "Lula — Mais Médicos",
        paragraphs: [
          "O que o plano propõe: Continuar expandindo o programa de contratação de médicos para atuar nos postos de saúde da família.",
          "O que dizem os especialistas e como afeta a sua vida: Estudos da OPAS e da OMS provam que o programa melhorou o atendimento básico, levando médicos fixos a locais isolados e periferias, reduzindo internações de emergência por pressão alta ou diabetes. Mas auditorias revelam que ele cria um 'efeito funil': o médico descobre a doença no posto, mas o paciente fica travado nas grandes filas para conseguir um cirurgião ou especialista.",
        ],
      },
      {
        heading: "Lula — 'Agora Tem Especialistas'",
        paragraphs: [
          "O que o plano propõe: Programa recente criado para contratar médicos especialistas, abrir postos em turnos noturnos e fazer mutirões de cirurgias.",
          "O que dizem os especialistas e como afeta a sua vida: É a aposta atual para tentar diminuir as enormes filas de espera que o Mais Médicos não resolve. Por ser um programa muito recente, os resultados ainda estão aparecendo aos poucos nas regiões. Especialistas explicam que o fim definitivo das filas nacionais vai depender de o governo garantir verbas firmes e regulares nos próximos anos.",
        ],
      },
      {
        heading: "Lula — Radioterapia e Câncer em 30 Dias",
        paragraphs: [
          "O que o plano propõe: Promete que o paciente começará a tratar o câncer em até um mês, usando o Novo PAC da Saúde e novas tecnologias para acelerar o diagnóstico.",
          "O que dizem os especialistas e como afeta a sua vida: O investimento em tratamento do câncer é real. O governo investiu mais de R$ 160 milhões e entregou novos aparelhos modernos de radioterapia pelo país, alcançando o marco de ter ao menos um centro de radioterapia em cada estado brasileiro. Isso evita que pacientes de estados menores viajem milhares de quilômetros para se tratar. No entanto, médicos alertam que a promessa de tratar em 30 dias é difícil de cumprir em todo o país, pois o deficit histórico de leitos cirúrgicos e aparelhos ainda demanda anos de investimentos pesados.",
        ],
      },
    ],
    footnote:
      "This is for informational purposes only. For medical advice or diagnosis, consult a professional. AI responses may include mistakes.",
  },
];

export const tabBySlug = Object.fromEntries(
  tabs.map((t) => [t.slug, t]),
) as Record<string, TabContent>;
