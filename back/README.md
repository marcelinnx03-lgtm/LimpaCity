# LimpaCity API

API Spring Boot da LimpaCity, construída com Java 21 e Maven.

## Executar

1. Inicie o PostgreSQL na raiz: `docker compose up -d`.
2. Defina no shell as variáveis de `back/.env.example` se precisar substituir os defaults locais de `application.yml`. O Spring Boot não carrega um arquivo `.env` automaticamente.
3. Execute `./mvnw spring-boot:run` — no Windows, `mvnw.cmd spring-boot:run`.

## Qualidade

```bash
./mvnw test
./mvnw clean package
```

As migrations Flyway ficam em `src/main/resources/db/migration`. O endpoint técnico `GET /api/health` retorna o estado básico da API; o Actuator também expõe `GET /actuator/health`.
