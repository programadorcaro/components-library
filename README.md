# Pixel Art Component Library

Biblioteca de componentes React com estética pixel art retro, inspirada em jogos clássicos 8-bit.

## Instalação

```bash
npm install @les-ui/pixel
```

ou

```bash
pnpm add @les-ui/pixel
```

ou

```bash
yarn add @les-ui/pixel
```

## Tecnologias

- **React 18** - Framework UI
- **TypeScript 5** - Tipagem estática
- **Vite 6** - Build tool e dev server
- **Turborepo 2** - Monorepo build system
- **pnpm** - Gerenciador de pacotes

## Primeiros Passos

### Pré-requisitos

- Node.js >= 18.0.0
- React >= 18.3.1
- React-DOM >= 18.3.1

### Uso Básico

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Badge,
} from '@les-ui/pixel';
import '@les-ui/pixel/styles.css';

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

export default App;
```

## Desenvolvimento (Contribuindo)

Este repositório é um monorepo gerenciado por **Turborepo** e **pnpm**, contendo:

```
components-lib/
├── apps/
│   └── landing/       # Landing page de demonstração
└── packages/
    └── ui/            # Biblioteca de componentes React (@les-ui/pixel)
```

### Pré-requisitos para Desenvolvimento

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Instalação Local

```bash
# Instalar dependências
pnpm install

# Build inicial dos packages
pnpm build
```

### URLs de Desenvolvimento

- **Landing Page**: http://127.0.0.1:5174

## Componentes Disponíveis

### PixelTitle

- `PixelTitle` - Título pixel art com efeitos glitch e float
- Props: `text`, `glitch` (boolean, default: true), `float` (boolean, default: true)

```tsx
import { PixelTitle } from '@les-ui/pixel';

// Com glitch e float (padrão)
<PixelTitle text="PIXEL ART" />

// Sem glitch
<PixelTitle text="PIXEL ART" glitch={false} />

// Sem float
<PixelTitle text="PIXEL ART" float={false} />

// Sem ambos
<PixelTitle text="PIXEL ART" glitch={false} float={false} />
```

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
} from '@les-ui/pixel';
import '@les-ui/pixel/styles.css';

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
--color-primary:
  #ff006e --color-accent: #00f5ff --color-success: #06ffa5
    --color-danger: #ff006e /* Font pixel art */ --font-pixel: 'Press Start 2P',
  monospace /* Espaçamentos */ --space-sm: 8px --space-md: 16px --space-lg: 24px;
```

### Pixel Corners

Todos os componentes usam `clip-path` CSS para criar os cantos pixel art característicos:

```css
.pixel-corner-8 {
  clip-path: polygon(
    0 8px,
    8px 8px,
    8px 0,
    calc(100% - 8px) 0,
    calc(100% - 8px) 8px,
    100% 8px,
    100% calc(100% - 8px),
    calc(100% - 8px) calc(100% - 8px),
    calc(100% - 8px) 100%,
    8px 100%,
    8px calc(100% - 8px),
    0 calc(100% - 8px)
  );
}
```

## Processo de Release

Este projeto usa **Changesets** para gerenciar versionamentos e publicações.

### Criando um novo Changeset

Após fazer mudanças no código, crie um changeset:

```bash
pnpm changeset
```

Você será solicitado a:

1. Selecionar quais pacotes foram alterados (no caso, apenas `@les-ui/pixel`)
2. Escolher o tipo de versão:
   - `patch`: Bug fixes, pequenas correções (1.0.0 → 1.0.1)
   - `minor`: Novas features compatíveis (1.0.0 → 1.1.0)
   - `major`: Mudanças quebram compatibilidade (1.0.0 → 2.0.0)
3. Escrever uma breve descrição das mudanças

### Publicando uma Nova Versão

```bash
# Atualiza as versões dos pacotes e gera o CHANGELOG.md
pnpm version-packages

# Build e publica no npm
pnpm release
```

Este comando:

1. Lê todos os changesets do diretório `.changeset/`
2. Atualiza a versão do pacote em `package.json`
3. Gera/atualiza o arquivo `CHANGELOG.md`
4. Compila o código
5. Publica no npm registry

## Build e Deploy

### Desenvolvimento

```bash
# Rodar a landing page
pnpm --filter @repo/landing dev

# Buildar o package UI
pnpm --filter @les-ui/pixel build
```

### Build de Produção

```bash
# Build de produção do package
pnpm --filter @les-ui/pixel build

# Build de todos os packages e apps
pnpm build
```

### Preview

```bash
# Preview do build da landing page
pnpm --filter @repo/landing preview
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
