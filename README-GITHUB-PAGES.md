# NINJA BYTE — GitHub Pages

Este pacote já foi ajustado para publicação no GitHub Pages.

## O que foi corrigido
- Todas as imagens estão dentro do próprio projeto.
- O site não depende de `manus-storage` ou `manus.space`.
- Assets usados pelo React/CSS são processados pelo Vite.
- O `base` é calculado automaticamente no GitHub Actions conforme o nome do repositório.
- O deploy é automático pelo workflow `.github/workflows/deploy.yml`.

## Como publicar
1. Crie um repositório público no GitHub.
2. Envie **o conteúdo desta pasta** para a branch `main`.
3. No repositório, abra **Settings > Pages**.
4. Em **Build and deployment > Source**, escolha **GitHub Actions**.
5. Abra a aba **Actions** e aguarde `Deploy GitHub Pages` concluir.
6. A URL aparecerá no deploy e normalmente será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Se o repositório se chamar `SEU-USUARIO.github.io`, o site será publicado na raiz do domínio.
