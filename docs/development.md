# Desenvolvimento local

## Pré-requisitos

Java 21, Node.js 20+ com npm e Docker Desktop/Compose. Verifique com `java -version`, `node --version`, `npm --version` e `docker compose version`.

## Ambiente

1. Copie `.env.example` para `.env` (Docker) e `front/.env.example` para `front/.env` (Vite). Para substituir configurações do backend, exporte as variáveis listadas em `back/.env.example` no shell.
2. Na raiz, execute `docker compose up -d` e confira `docker compose ps`.
3. Em `back/`, execute `./mvnw spring-boot:run` (Windows: `mvnw.cmd spring-boot:run`).
4. Em `front/`, execute `npm install` e `npm run dev`.

O Vite serve em `http://localhost:5173`; a API fica em `http://localhost:8080`. Consulte `http://localhost:8080/api/health` para validar a API.

## Comandos úteis

```bash
# Backend
cd back && ./mvnw test
cd back && ./mvnw clean package

# Frontend
cd front && npm run build

# Banco
docker compose down
docker compose up -d
```

`docker compose down -v` remove também o volume local do banco e deve ser usado apenas quando a perda desses dados for desejada.
