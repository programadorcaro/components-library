# Pixel Art Component Library

Biblioteca de componentes React com estética pixel art retro, inspirada em jogos clássicos 8-bit.

## Estrutura do Monorepo

Este é um monorepo gerenciado por **Turborepo** e **pnpm**, contendo:

```
components-lib/
├── apps/
│   ├── storybook/     # Documentação interativa dos componentes
│   └── landing/       # Landing page de demonstração
├── packages/
│   └── ui/            # Biblioteca de componentes React
```

### Packages

- **@repo/ui**: Biblioteca principal de componentes pixel art
- **@repo/storybook**: App Storybook para documentação
- **@repo/landing**: Landing page de demonstração

## Tecnologias

- **React 18** - Framework UI
- **TypeScript 5** - Tipagem estática
- **Vite 6** - Build tool e dev server
- **Turborepo 2** - Monorepo build system
- **Storybook 8** - Documentação de componentes
- **pnpm** - Gerenciador de pacotes

## Primeiros Passos

### Pré-requisitos

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Instalação

```bash
# Instalar dependências
pnpm install

# Build inicial dos packages
pnpm build
```

### Desenvolvimento

```bash
# Rodar todos os apps em desenvolvimento (Turborepo)
pnpm dev

# Rodar apenas o Storybook
pnpm --filter @repo/storybook dev

# Rodar apenas a landing page
pnpm --filter @repo/landing dev

# Buildar o package UI
pnpm --filter @repo/ui build
```

### URLs de Desenvolvimento

- **Storybook**: http://localhost:6006
- **Landing Page**: http://127.0.0.1:5174

## Componentes Disponíveis

### Botões
- `Button` - Botões pixel art com múltiplas variantes (primary, secondary, accent, danger, success, ghost)
- Tamanhos: sm, md, lg
- Animações: pulse, shake, glow

### Cards
- `Card` - Container principal
- `CardHeader` / `CardTitle` - Cabeçalho
- `CardBody` - Corpo do card
- `CardFooter` - Rodapé

### Badges e Labels
- `Badge` - Badges de status (primary, success, danger, warning)
- `LevelBadge` - Badges de nível (1-4)
- `Label` - Labels coloridos (pink, cyan, yellow)

### Inputs
- `Input` - Input de texto
- `Textarea` - Área de texto
- `Select` - Select dropdown
- `Checkbox` - Checkbox customizado

### Progress
- `ProgressBar` - Barra de progresso
- `HealthBar` - Barra de vida/mana/xp
- `Loader` - Indicadores de loading (pixel, dots, spinner)

### Alerts
- `Alert` - Alertas (info, success, warning, danger)
- `Toast` - Notificações toast

## Usando os Componentes

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Badge,
} from '@repo/ui';
import '@repo/ui/styles.css';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pixel Card</CardTitle>
      </CardHeader>
      <CardBody>
        <Badge variant="success">NEW</Badge>
        <Button variant="primary">Start Game</Button>
      </CardBody>
    </Card>
  );
}
```

## Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev           # Roda todos apps em paralelo

# Build
pnpm build         # Builda todos packages e apps

# Linting
pnpm lint          # Executa linter em todos packages

# Formatação
pnpm format        # Formata código com Prettier

# Limpeza
pnpm clean         # Remove node_modules e dist
```

## Estrutura de Estilos

A biblioteca usa variáveis CSS para manter consistência visual:

```css
/* Cores principais */
--color-primary: #ff006e
--color-accent: #00f5ff
--color-success: #06ffa5
--color-danger: #ff006e

/* Font pixel art */
--font-pixel: 'Press Start 2P', monospace

/* Espaçamentos */
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
```

### Pixel Corners

Todos os componentes usam `clip-path` CSS para criar os cantos pixel art característicos:

```css
.pixel-corner-8 {
  clip-path: polygon(
    0 8px, 8px 8px, 8px 0,
    calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px),
    calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px)
  );
}
```

## Build e Deploy

```bash
# Build de produção
pnpm build

# Preview do build da landing page
pnpm --filter @repo/landing preview

# Build do Storybook estático
pnpm --filter @repo/storybook build
```

## Contribuindo

1. Clone o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça suas alterações
4. Rode os testes e lint (`pnpm lint`)
5. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
6. Push para a branch (`git push origin feature/nova-feature`)
7. Abra um Pull Request

## Licença

© 2026 Pixel Art Component Library
