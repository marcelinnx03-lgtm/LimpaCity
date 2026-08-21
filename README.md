# LimpaCity

LimpaCity é uma iniciativa social voltada a incentivar e apoiar a reciclagem de produtos.

## Sobre o projeto

Este repositório contém a base full stack da aplicação. A estrutura inicial permite que a interface web se comunique com uma API Java, que por sua vez utiliza PostgreSQL. As funcionalidades de negócio serão definidas nas próximas etapas do projeto.

## Tecnologias

**Frontend:** React, TypeScript, Vite e Tailwind CSS.  
**Backend:** Java 21, Spring Boot, Maven, Spring Data JPA, Bean Validation e Flyway.  
**Banco de dados:** PostgreSQL.

## Estrutura

- `front/` — aplicação web React.
- `back/` — API Spring Boot.
- `docs/` — documentação técnica.

## Pré-requisitos

- Node.js 20+ e npm
- Java 21
- Docker Desktop com Docker Compose

## Configuração e execução

Para Docker, copie o arquivo de exemplo da raiz. Para o frontend, copie seu arquivo de exemplo local:

```powershell
Copy-Item .env.example .env
Copy-Item front/.env.example front/.env
```

Inicie o banco, a API e a interface em terminais separados:

```bash
docker compose up -d
cd back && ./mvnw spring-boot:run
cd front && npm install && npm run dev
```

No Windows, use `mvnw.cmd spring-boot:run`. O Spring Boot lê variáveis de ambiente do processo; use os nomes documentados em `back/.env.example` caso queira substituir os defaults locais. A API fica disponível em `http://localhost:8080`, com verificação em `GET /api/health`.

## Documentação

Consulte [arquitetura](docs/architecture.md), [desenvolvimento](docs/development.md), [banco de dados](docs/database.md) e [fluxo Git](docs/git-workflow.md).
