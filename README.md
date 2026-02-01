# Prismia Design System

Design System enterprise-grade, compatível com Lovable, publicável no NPM.

## Arquitetura

Monorepo com pnpm workspaces:

- `@prismia/tokens` - Design tokens (CSS Variables)
- `@prismia/ui-tailwind` - Componentes React + Tailwind CSS
- `@prismia/ui-css` - Componentes React + CSS Modules
- `@prismia/docs` - Documentação Storybook

## Instalação Rápida

```bash
# Instalar tokens
pnpm add @prismia/tokens

# Instalar componentes (escolha um)
pnpm add @prismia/ui-tailwind
# ou
pnpm add @prismia/ui-css
```

## Uso na Lovable

### 1. Importar Tokens

```tsx
// No topo do seu App.tsx ou _app.tsx
import '@prismia/tokens/css';
```

### 2. Usar Componentes

```tsx
import { Button, Card, Input } from '@prismia/ui-tailwind';

function MeuApp() {
  return (
    <Card>
      <h2>Bem-vindo ao Prismia</h2>
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="primary">Enviar</Button>
    </Card>
  );
}
```

## Componentes Disponíveis

**General & Layout (6)**
- Colors & Shadow, Typography, Icons
- Layout Templates, Spacing System, Grid System

**Components (25)**
- Accordion, Alerts, Badge, Breadcrumb, Button, Button Group, Card, Carousel, 
  Close Button, Collapse, Dropdowns, Divider, List Group, Modal, Navbar, 
  Navs & Tabs, Offcanvas, Pagination, Placeholders, Popovers, Progress, 
  Scrollspy, Spinners, Toasts, Tooltips

**Forms (13)**
- Form Layout, Floating Labels, Checks/Radios/Switches, Color Picker, 
  Date Picker, Time Picker, Datalist, Input, Input Number, Range, Rate, 
  Select, Upload

**Content & Extra (8)**
- Images, Tables, Figures, Avatar, Comment, Empty State, Tags, Transfer

## Atualização de Tema

```bash
pnpm update @prismia/tokens
```

## Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Build de todos os pacotes
pnpm build

# Iniciar Storybook
pnpm storybook
```

## Publicação

```bash
pnpm publish:packages
```

## Licença

MIT - Veja LICENSE para detalhes.

## Suporte

Issues: https://github.com/seu-usuario/prismia-design-system/issues
Documentação: https://prismia-ds.vercel.app