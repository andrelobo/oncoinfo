# Contexto do repositório — Onco-Info

## Objetivo

Site informativo e documental sobre políticas públicas de oncologia no SUS. Reúne, em sete abas, o balanço de ações e investimentos de diferentes gestões federais e um comparativo das propostas de saúde de 2026 — sempre com fonte e data, reproduzindo fielmente os materiais originais (PDFs) enviados.

O site é uma **iniciativa independente e voluntária**, sem vínculo com campanha, partido ou coligação (aviso exibido no rodapé).

## Estado atual

- build de produção executado com sucesso nesta estação de trabalho; `npm run build`, `npm run lint` aprovados;
- último commit pushado é **`eb059bd`** ("feat(footer): bloco de iniciativa independente/apartidaria com o texto da Erica");
- repositório Git na branch `main`, remoto `origin` = `https://github.com/andrelobo/oncoinfo.git`;
- deploy automático na Vercel acionado por push na branch `main` do GitHub;
- site estruturado em **7 abas** (pílulas no topo), com rota `/:slug` renderizada por `src/pages/TabPage.tsx`;
- conteúdo fiel aos PDFs originais em `public/docs/`, sem reescrita.

## Abas e conteúdo

Ordem das abas (pílulas) e fonte de cada uma:

1. **Onco Norte** (`/onco-norte`) — `governo_federal_oncologia_amazonas (2).pdf`. Tabela comparativa por estado da Região Norte (Bolsonaro x Lula) + seções por gestão.
2. **Onco Am** (`/onco-am`) — `sus_e_principais_impactos_na_fcecon.pdf`. As três ondas históricas da FCECON.
3. **Lula I** (`/lula-1`) — `balanco_oncologia_lula_historico.pdf`. Gestão 2003–2010.
4. **Dilma** (`/dilma`) — `balanco_oncologia_governo_dilma.pdf`. Gestão 2011–2016.
5. **Bolsonaro** (`/bolsonaro`) — `relatorio_oncologia_governo_bolsonaro.pdf`. Gestão 2019–2022.
6. **Lula II** (`/lula-2`) — `lula_2.pdf`. Gestão 2023–2026 (conteúdo real do PDF, não mais duplicado do Lula I).
7. **Propostas 2026** (`/propostas-2026`) — `comparativo_propostas_saude_2026.pdf`. Comparativo de propostas de saúde.

Raiz `/` e rotas desconhecidas (`*`) redirecionam para a primeira aba (`/onco-norte`).

## Stack

- Vite 8 + React 18 + TypeScript 7;
- React Router 6 (`BrowserRouter`, rotas em `src/App.tsx`);
- Tailwind CSS 4 (tokens em `src/styles.css`);
- oxlint para lint;
- sem framework de UI; ícones via `lucide-react` quando necessário.

## Arquitetura

- `src/App.tsx` — rotas: `/`, `/:slug` (TabPage) e `*`; primeiro slug como destino de redirecionamento.
- `src/pages/TabPage.tsx` — renderiza a aba pelo `slug`; trata `pending`; renderiza `paragraphs` (com rótulos em negrito via `emphasizeLabels`), `compareRows` (tabela comparativa), `bullets` (marcador azul + título do marco em negrito), clippings e botão PDF.
- `src/content/tabs.ts` — **fonte única de conteúdo**: array `tabs: TabContent[]` (slugs, títulos, subtítulos, PDFs, seções, clippings, footnote) e o lookup `tabBySlug`.
- `src/components/Header.tsx` — banner com logo + navegação em pílulas (scroll horizontal); logo reduzido no tablet (`md`).
- `src/components/Footer.tsx` — links das abas, bloco "Iniciativa independente" e nota informativa.
- `src/components/Layout.tsx` — casca (header + main + footer), scroll-to-top por rota.
- `src/components/PageHeader.tsx` — cabeçalho de página (kicker, título, lead, filete azul).
- `src/lib/seo.ts` — `useSeo` (título/descrição).

## Identidade visual

- paleta azul-marinho `--color-brand-blue` = `#003090` (também `--color-link` e `--color-accent`);
- neutros de documento (`--color-canvas`, `--color-paper`, `--color-ink`, `--color-muted`, `--color-rule`);
- fontes: Source Serif 4 (títulos), Source Sans 3 (corpo), JetBrains Mono (rótulos/nav);
- cartões com `shadow-sm` e acento azul; marcadores e filetes em azul-marinho;
- logo em uso: `public/logo.png` (azul transparente). Arquivos antigos (`logo-banner.jpg`, `logo_nova.*`) foram removidos.

## Arquivos importantes

- `public/docs/*.pdf` — documentos originais servidos em cada aba (7 PDFs; `balanco_oncologia_lula_historico.pdf` referenciado pelo Lula I);
- `public/logo.png` — logo do site;
- `vercel.json` — rewrites SPA (`/((?!docs/|assets/).*)` → `/index.html`) e header `application/pdf` para `/docs/*`;
- `src/styles.css` — tokens de tema e classes de componente (`.doc`, `.doc-section`, `.label`, `.btn-solid`, `.doclink`).

## Fluxo operacional

1. implementar e validar localmente;
2. executar `npm run build` e `npm run lint`;
3. revisar o diff;
4. commit na branch `main` e `git push origin main`;
5. deixar o deploy automático GitHub–Vercel publicar;
6. validar em produção as abas e os links de PDF.

## Regras de conteúdo

- o texto de cada aba é **reprodução fiel** dos PDFs enviados (sem reescrever ou neutralizar); clippings inclusive;
- leitor-alvo: paciente oncológico comum; linguagem pt-BR;
- todo registro é atribuído a fonte e data;
- evitar redundâncias (ex.: intro que repete cabeçalhos de coluna já existentes);
- não introduzir conteúdo externo com direitos autorais de terceiros.

## Retomada em outra sessão

1. trabalhar em `/home/lobo/Área de trabalho/KODE/ERICA/projeto-erica`;
2. ler este `context.md` antes de alterar o projeto;
3. consultar `src/content/tabs.ts` como fonte única de conteúdo;
4. preservar a fidelidade aos PDFs e a rota `/:slug`;
5. validar `npm run build` e `npm run lint` antes de commitar;
6. push para `main` dispara o deploy na Vercel.
