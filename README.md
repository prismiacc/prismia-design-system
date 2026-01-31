# Prismia Design System

Repositório oficial do Design System Prismia com:
- Tokens (JSON + CSS Variables)
- Componentes React em duas stacks:
  - Tailwind (`@prismia/ui-tailwind`)
  - CSS Modules (`@prismia/ui-css`)
- Documentação em Storybook (`apps/docs`)

## Estrutura
- `packages/tokens`: fonte da verdade dos tokens
- `packages/ui-tailwind`: componentes React com Tailwind
- `packages/ui-css`: componentes React com CSS Modules
- `apps/docs`: documentação (Storybook) consumindo os pacotes

## Rodando local
Requisitos: Node + pnpm

```bash
pnpm install
pnpm build:tokens
pnpm dev
