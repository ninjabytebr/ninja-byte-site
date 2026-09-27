# NINJA BYTE — Site independente

Site institucional responsivo em React + Vite para a NINJA BYTE.

## Executar localmente

```bash
pnpm install
pnpm run dev
```

## Validar e gerar produção

```bash
pnpm run check
pnpm run build
```

O build estático é gerado em `dist/public/`. Para visualizar a versão de produção:

```bash
pnpm run preview
```

## Assets

Todas as imagens usadas pelo site estão versionadas localmente em `client/public/assets/` e são referenciadas no código por caminhos `/assets/...`. Não há dependência de armazenamento, runtime ou analytics privado.

## GitHub Pages

O projeto mantém a estrutura React + Vite para publicação por GitHub Actions ou por qualquer pipeline que execute `pnpm run build` e publique `dist/public/`.
