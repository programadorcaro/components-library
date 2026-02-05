# Changesets

Este diretório contém os changesets que serão usados para gerar o changelog e versionar os pacotes.

## Como criar um novo changeset

Execute o comando:

```bash
pnpm changeset
```

Você será solicitado a:

1. Selecionar quais pacotes foram alterados
2. Escolher o tipo de versão (patch, minor ou major)
3. Escrever uma breve descrição das mudanças

## Como publicar um novo release

1. Crie um changeset para cada alteração significativa
2. Quando estiver pronto para publicar, execute:

```bash
# Atualiza as versões dos pacotes e gera o CHANGELOG.md
pnpm version-packages

# Build e publica no npm
pnpm release
```

## Tipos de versão

- **patch**: Bug fixes, pequenas correções (1.0.0 → 1.0.1)
- **minor**: Novas features compatíveis (1.0.0 → 1.1.0)
- **major**: Mudanças quebram compatibilidade (1.0.0 → 2.0.0)
