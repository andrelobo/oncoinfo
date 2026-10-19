import type { Candidate, Proposal } from "../lib/types";

export const candidates: Candidate[] = [
  { slug: "flavio-bolsonaro", name: "Flávio Bolsonaro", role: "pré-candidato" },
  { slug: "lula", name: "Lula", role: "pré-candidato" },
];

export const candidateBySlug = Object.fromEntries(
  candidates.map((candidate) => [candidate.slug, candidate]),
) as Record<Candidate["slug"], Candidate>;

/**
 * Propostas declaradas em documento de campanha/análise de 2026.
 * São intenções de campanha, não atos de governo. As análises de
 * especialistas são as citadas no próprio material.
 */
export const proposals2026: Proposal[] = [
  {
    id: "flavio-sus-padrao-einstein",
    candidate: "flavio-bolsonaro",
    axis: "orcamento-federal",
    title: "“SUS Padrão Einstein”",
    proposal:
      "Adotar modelo de gestão do setor privado no SUS e pagar clínicas particulares com salas e equipamentos ociosos para realizar consultas e cirurgias de quem espera na fila do SUS.",
    expertView:
      "Análise citada no material (ABRASCO): usar dinheiro público no setor privado pode drenar recursos que reformariam os hospitais do próprio SUS, e a rede pública não é fortalecida no processo.",
    impact:
      "Tentativa de agilizar o atendimento de curto prazo com estrutura já existente; o material aponta risco de a população ficar dependente da parceria sem rede pública reforçada.",
    sourceIds: ["comparativo-2026-saude"],
    limitation: "Proposta de campanha; não há execução registrada no material.",
  },
  {
    id: "flavio-tesouraco-250",
    candidate: "flavio-bolsonaro",
    axis: "orcamento-federal",
    title: "Corte de R$ 250 bilhões (“Tesouraço”)",
    proposal:
      "Reduzir o tamanho da máquina pública e cortar despesas para equilibrar as contas do país.",
    expertView:
      "Análise citada no material: economistas avaliam como difícil cortar esse montante sem afetar serviços sociais; a campanha estuda rever leis de repasses mínimos obrigatórios para a saúde.",
    impact:
      "Se os pisos constitucionais de saúde forem retirados, o material aponta risco de perda de verba estrutural básica do SUS.",
    sourceIds: ["comparativo-2026-saude"],
    limitation: "Proposta de campanha; valores e efeitos dependem de aprovação e execução.",
  },
  {
    id: "flavio-prontuario-cpf",
    candidate: "flavio-bolsonaro",
    axis: "diagnostico-inicio-tratamento",
    title: "Prontuário único por CPF",
    proposal:
      "Unificar o histórico médico do cidadão para que postos e hospitais públicos ou privados vejam exames anteriores usando apenas o CPF.",
    expertView:
      "Análise citada no material (saúde digital): a medida é continuação do ConecteSUS, que já está em andamento, e não uma inovação criada do zero.",
    impact:
      "Facilitaria o atendimento e evitaria exames repetidos, segundo o material.",
    sourceIds: ["comparativo-2026-saude"],
    limitation: "Proposta de campanha; parte dela já existe no SUS (ConecteSUS).",
  },
  {
    id: "flavio-sem-hospitais-cancer",
    candidate: "flavio-bolsonaro",
    axis: "radioterapia-estrutura",
    title: "Sem previsão de novos hospitais públicos de câncer",
    proposal:
      "O plano não prevê construir novos hospitais públicos para tratamento de câncer, com foco em exames rápidos e uso de estruturas privadas existentes.",
    expertView:
      "Ponto levantado no material a partir do conjunto do plano: a ênfase está em agilizar exames, não em ampliar a rede pública de tratamento oncológico.",
    impact:
      "Para oncologia, o material indica ausência de expansão de rede pública de tratamento; o ganho apontado se limita a exames mais rápidos.",
    sourceIds: ["comparativo-2026-saude"],
    limitation: "Ausência de proposta no material não equivale a ato contrário à rede pública.",
  },

  {
    id: "lula-mais-medicos",
    candidate: "lula",
    axis: "diagnostico-inicio-tratamento",
    title: "Mais Médicos (continuidade)",
    proposal:
      "Continuar expandindo a contratação de médicos para atuar nos postos de saúde da família.",
    expertView:
      "Análise citada no material (OPAS/OMS): o programa melhorou o atendimento básico e reduziu internações de emergência; auditorias apontam um “efeito funil”, com o paciente travado nas filas por cirurgião ou especialista.",
    impact:
      "Melhora a porta de entrada e o diagnóstico no posto, mas o material indica que o gargalo permanece no acesso a especialistas.",
    sourceIds: ["comparativo-2026-saude"],
    limitation: "Avaliação de programa existente; efeitos variam por região.",
  },
  {
    id: "lula-agora-especialistas",
    candidate: "lula",
    axis: "diagnostico-inicio-tratamento",
    title: "“Agora Tem Especialistas”",
    proposal:
      "Contratar médicos especialistas, abrir postos em turnos noturnos e realizar mutirões de cirurgias.",
    expertView:
      "Análise citada no material: é a aposta atual para reduzir filas que o Mais Médicos não resolve; por ser recente, os resultados aparecem aos poucos.",
    impact:
      "O fim das filas nacionais, segundo o material, depende de verbas firmes e regulares nos próximos anos.",
    sourceIds: ["comparativo-2026-saude"],
    limitation: "Programa recente; resultados parciais no material.",
  },
  {
    id: "lula-radioterapia-30-dias",
    candidate: "lula",
    axis: "radioterapia-estrutura",
    title: "Radioterapia e câncer em 30 dias",
    proposal:
      "Garantir início do tratamento de câncer em até um mês, com o Novo PAC da Saúde e novas tecnologias para acelerar o diagnóstico.",
    expertView:
      "Análise citada no material: o investimento em radioterapia é registrado (mais de R$ 160 milhões e pelo menos um centro de radioterapia por estado); médicos alertam que tratar em 30 dias é difícil de cumprir em todo o país pelo déficit histórico de leitos e aparelhos.",
    impact:
      "Reduziria deslocamentos de pacientes de estados menores; o cumprimento do prazo de 30 dias, segundo o material, depende de anos de investimento.",
    sourceIds: ["comparativo-2026-saude"],
    limitation: "Promessa de campanha; o prazo de 30 dias é apontado como difícil de cumprir em escala nacional.",
  },
];
