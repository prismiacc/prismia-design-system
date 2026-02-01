# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-01-31

### Adicionado

- Sistema completo de tokens em 3 camadas (BASE → SEMANTIC → COMPONENT)
- 48 componentes React com cobertura total:
  - 6 componentes de General & Layout
  - 25 componentes de interface
  - 13 componentes de formulário
  - 8 componentes de conteúdo e extras
- Pacotes NPM publicáveis:
  - @prismia/tokens v1.0.0
  - @prismia/ui-tailwind v1.0.0
  - @prismia/ui-css v1.0.0
- CI/CD com GitHub Actions para publicação automática
- Compatibilidade total com Lovable
- Zero hardcoding: todos os componentes consomem exclusivamente tokens
- TypeScript completo com tipos exportados
- Documentação Storybook
- Testes unitários para componentes críticos
- Acessibilidade WCAG 2.1 AA em todos os componentes interativos

### Segurança

- Dependências auditadas sem vulnerabilidades críticas
- Validação de props com TypeScript strict mode