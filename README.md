# Oncologia no SUS

Site estático, documental e comparativo sobre políticas de oncologia no SUS em
diferentes períodos de governo federal no Brasil.

Compara o que documentos oficiais e clippings registram em três recortes:

- Governo Lula — primeiro mandato (2003–2010)
- Governo Dilma (2011–2016)
- Governo Bolsonaro (2019–2022)

> Site informativo e documental. Não é propaganda oficial de partido nem laudo
> técnico. Toda afirmação tem fonte e data; células sem dado mostram
> “Sem dado suficiente no material”.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `react-router-dom` v6
- Deploy alvo: Vercel (SPA com rewrites)

Sem backend e sem banco de dados. Todo o conteúdo é estático em `src/content/`.

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (roda tsc -b + vite build)
npm run preview  # serve o build localmente
```

## Documentos (PDFs)

Coloque os arquivos em `public/docs/` com estes nomes:

- `balanco-lula.pdf`
- `balanco-dilma.pdf`
- `relatorio-bolsonaro.pdf`

Eles ficam acessíveis em `/docs/<arquivo>.pdf`.

## Estrutura

```
src/
├── lib/        # tipos, SEO e formatação de datas
├── content/    # períodos, eixos, fontes, fatos, linha do tempo e FAQ
├── components/ # FactCard, ComparisonTable, badges, avisos, layout
└── pages/      # rotas do site
```

## Rotas

| Rota                        | Página                             |
| --------------------------- | ---------------------------------- |
| `/`                         | Início                             |
| `/comparar`                 | Tabela comparativa completa        |
| `/comparar/:axis`           | Comparação por eixo temático       |
| `/governo/:slug`            | Página de um período de governo    |
| `/linha-do-tempo`           | Linha do tempo documental          |
| `/impacto-real`             | O que dá e o que não dá para afirmar |
| `/metodologia`              | Metodologia                        |
| `/fontes`                   | Lista de fontes                    |
| `/perguntas-frequentes`     | Dúvidas frequentes                 |
| `/sobre`                    | Sobre e política de correções      |

## Regras editoriais

- Nenhum registro é exibido sem fonte (`sourceIds` nunca vazio).
- Limitações de leitura são declaradas junto do registro.
- Não há linguagem acusatória nem juízo de valor sobre governos.
- Datas em pt-BR (ex.: “novembro de 2012”).

## Deploy na Vercel

Importe o repositório, mantenha o framework Vite. O `vercel.json` já contém os
rewrites da SPA e o `Content-Type: application/pdf` para `/docs/*`.
