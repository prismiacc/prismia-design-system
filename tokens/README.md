# @prismia/tokens

Design tokens do Prismia Design System - Tokens em 3 camadas (BASE → SEMANTIC → COMPONENT).

## Instalação

\`\`\`bash
npm install @prismia/tokens
# ou
yarn add @prismia/tokens
# ou
pnpm add @prismia/tokens
\`\`\`

## Uso

### Importar CSS Variables

\`\`\`tsx
// No topo do seu App.tsx ou _app.tsx
import '@prismia/tokens/css';
\`\`\`

Isso carrega todas as variáveis CSS no \`:root\` e você pode usá-las diretamente em seus estilos:

\`\`\`css
.meu-componente {
  background-color: var(--component-card-bg);
  color: var(--semantic-text-primary);
  border: 1px solid var(--semantic-border-default);
  border-radius: var(--radius-m);
  padding: var(--spacing-4);
}
\`\`\`

### Importar JSON (opcional)

Se você precisar dos tokens em formato JSON (para processamento programático):

\`\`\`tsx
import tokens from '@prismia/tokens';

console.log(tokens.base.brand.lavender.value); // "#D8CCE8"
console.log(tokens.spacing[4].value); // "16px"
\`\`\`

## Arquitetura de Tokens

O Prismia utiliza uma arquitetura em 3 camadas:

### Layer 1: BASE
Tokens fundamentais que não dependem de contexto.

\`\`\`css
--base-neutral-offwhite
--base-brand-lavender
--base-contrast-graphite
--base-semantic-success
\`\`\`

### Layer 2: SEMANTIC
Tokens com significado semântico, referenciando tokens BASE.

\`\`\`css
--semantic-background-primary
--semantic-text-primary
--semantic-border-default
--semantic-feedback-success
\`\`\`

### Layer 3: COMPONENT
Tokens específicos de componentes, referenciando tokens SEMANTIC.

\`\`\`css
--component-button-primary-bg
--component-card-bg
--component-input-border-focus
\`\`\`

## Categorias de Tokens

- **Colors**: Cores base, semânticas e de componentes
- **Spacing**: Sistema de espaçamento (4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px)
- **Radius**: Arredondamentos (xs: 4px, s: 8px, m: 12px, l: 16px, xl: 20px)
- **Typography**: Tamanhos de fonte (h1: 36px, h2: 28px, h3: 22px, body: 16px, etc.)
- **Font Weight**: Pesos de fonte (regular: 400, medium: 500, semibold: 600)
- **Motion**: Durações e easings de animação
- **Shadow**: Sombras (light, medium)

## Compatibilidade

Este pacote é compatível com:

- **Lovable**: Importação direta via \`import '@prismia/tokens/css'\`
- **React**: Qualquer projeto React/Next.js/Vite
- **CSS-in-JS**: Styled Components, Emotion, etc.
- **Tailwind CSS**: Via plugin customizado (veja documentação)
- **Vanilla CSS/SCSS**: Importação direta do CSS

## Versão

v1.0.0

## Build

Os tokens são gerados automaticamente a partir de \`src/tokens.json\` e compilados para:

- \`dist/tokens.json\` - Tokens em formato JSON
- \`dist/tokens.css\` - CSS Variables prontas para uso

## Licença

MIT - Veja LICENSE na raiz do monorepo.

## Suporte

Issues: https://github.com/seu-usuario/prismia-design-system/issues