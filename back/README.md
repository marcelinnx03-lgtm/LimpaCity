# LimpaCity API

API Spring Boot da LimpaCity, construída com Java 21 e Maven.

## Executar

1. Inicie o PostgreSQL na raiz: `docker compose up -d`.
2. Defina no shell as variáveis de `back/.env.example` se precisar substituir os defaults locais de `application.yml`. O Spring Boot não carrega um arquivo `.env` automaticamente.
3. Execute `./mvnw spring-boot:run` — no Windows, `mvnw.cmd spring-boot:run`.

## Painel do dono

O painel administrativo é protegido no backend. Antes de iniciar a API, defina variáveis de ambiente exclusivas do responsável:

```text
OWNER_EMAIL=seu-email-de-dono
OWNER_PASSWORD=uma-senha-forte-e-exclusiva
```

O frontend valida essas credenciais em `GET /api/admin/session`. Sem as duas variáveis, o acesso ao painel é recusado. Não versione nem compartilhe a senha; em produção, use HTTPS e substitua esta conta única por uma solução de autenticação com contas, papéis e armazenamento seguro de senhas.

## Qualidade

```bash
./mvnw test
./mvnw clean package
```

As migrations Flyway ficam em `src/main/resources/db/migration`. O endpoint técnico `GET /api/health` retorna o estado básico da API; o Actuator também expõe `GET /actuator/health`.
