# Prismia Design System

Design System oficial do Prismia - Sistema completo de tokens, componentes React e documentação para projetos enterprise.

## Estrutura do Monorepo

```
prismia-design-system/
├── packages/
│   ├── tokens/         # Design tokens (JSON + CSS)
│   ├── ui-tailwind/    # Componentes React + Tailwind
│   └── ui-css/         # Componentes React + CSS Modules
└── apps/
    └── docs/           # Documentação Storybook
```

## Instalação

### Requisitos

- Node.js 18+
- pnpm 8+

### Configuração Inicial

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/prismia-design-system.git
cd prismia-design-system

# Instalar dependências
pnpm install

# Build dos tokens
pnpm build:tokens

# Build de todos os pacotes
pnpm build
```

## Desenvolvimento

### Rodar Storybook

```bash
pnpm storybook
```

Acesse http://localhost:6006

### Build

```bash
# Build completo
pnpm build

# Build apenas tokens
pnpm build:tokens
```

## Uso nos Projetos

### Instalação em Projeto Externo

#### React + Tailwind CSS

```bash
npm install @prismia/ui-tailwind @prismia/tokens
```

```tsx
import { Button } from '@prismia/ui-tailwind';

function App() {
  return <Button variant="primary">Clique aqui</Button>;
}
```

#### React + CSS Modules

```bash
npm install @prismia/ui-css @prismia/tokens
```

```tsx
import { Button } from '@prismia/ui-css';

function App() {
  return <Button variant="primary">Clique aqui</Button>;
}
```

### Tokens CSS

Importe os tokens diretamente no CSS:

```css
@import '@prismia/tokens/dist/tokens.css';

.meu-componente {
  background-color: var(--base-brand-lavender);
  padding: var(--spacing-4);
  border-radius: var(--radius-m);
}
```

## Pacotes

### @prismia/tokens

Design tokens em JSON e CSS Variables. Fonte da verdade para cores, espaçamentos, tipografia, etc.

### @prismia/ui-tailwind

Biblioteca de componentes React usando Tailwind CSS.

### @prismia/ui-css

Biblioteca de componentes React usando CSS Modules.

## Contribuição

1. Crie uma branch: `git checkout -b feature/minha-feature`
2. Faça commit: `git commit -m 'feat: adiciona nova feature'`
3. Push: `git push origin feature/minha-feature`
4. Abra um Pull Request

## Licença

MIT License - Veja LICENSE para mais detalhes.

## Links

- Documentação: [Storybook](https://seu-usuario.github.io/prismia-design-system)
- Issues: [GitHub Issues](https://github.com/seu-usuario/prismia-design-system/issues)
