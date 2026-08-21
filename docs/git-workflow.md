# Fluxo Git

`main` é a linha estável. O trabalho deve partir de branches curtas:

- `feature/<descricao>` para funcionalidades;
- `fix/<descricao>` para correções;
- `chore/<descricao>` para manutenção;
- `docs/<descricao>` para documentação.

Use Conventional Commits, como `feat(front): add collection point map`, `fix(back): validate recycling request`, `chore(db): update postgres image` ou `docs: clarify local setup`.

Revise `git status` e `git diff` antes de cada commit. Nunca inclua `.env`, tokens, senhas ou builds no versionamento.
