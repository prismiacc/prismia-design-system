# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-01-31

### Adicionado

#### Sistema de Tokens
- Sistema completo de design tokens (BASE → SEMANTIC → COMPONENT)
- Tokens de cores: neutral, brand, contrast, semantic, feedback
- Tokens de espaçamento (4px a 48px)
- Tokens de radius (4px a 20px)
- Sistema tipográfico completo (Inter + Space Grotesk)
- Tokens de motion (duration + easing)
- Sombras (light, medium)
- Suporte a Dark Mode

#### Pacotes
- @prismia/tokens: Tokens em JSON e CSS
- @prismia/ui-tailwind: Componentes React + Tailwind CSS
- @prismia/ui-css: Componentes React + CSS Modules
- @prismia/docs: Documentação Storybook

#### Componentes
- Button (variantes: primary, secondary, ghost)
- Documentação completa de cada componente
- Acessibilidade (ARIA, foco, contraste)

#### Infraestrutura
- Monorepo com pnpm workspaces
- Scripts de build automatizados
- Estrutura enterprise padronizada
- Exportação de assets (logos, ícones, favicons)

### Padrões Estabelecidos
- Arquitetura de tokens em 3 camadas
- Nomenclatura enterprise em JSON aninhado
- CSS Variables com prefixos semânticos
- Versionamento SemVer
- Duas stacks de UI (Tailwind + CSS Modules)

---

## Como Atualizar Versão

### MAJOR (x.0.0)
Mudanças incompatíveis com versões anteriores:
- Remoção de tokens
- Alteração de nomes de variáveis
- Mudança de estrutura de pacotes
- Breaking changes em APIs de componentes

### MINOR (0.x.0)
Adição de funcionalidades compatíveis:
- Novos tokens
- Novos componentes
- Extensões de componentes existentes
- Novas features opt-in

### PATCH (0.0.x)
Correções de bugs e ajustes menores:
- Correção de valores de tokens
- Ajustes de documentação
- Fixes de acessibilidade
- Correções de estilos
