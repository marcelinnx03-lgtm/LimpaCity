# Banco de dados

O ambiente local usa PostgreSQL 17 em Docker Compose, com volume persistente `postgres_data`. Os valores locais são configuráveis por `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD` e `POSTGRES_PORT`; não use credenciais de produção nesses arquivos.

## Flyway

As migrations ficam em `back/src/main/resources/db/migration`. A migration `V1__initialize_flyway.sql` apenas estabelece a convenção inicial e não cria tabelas de negócio.

Adicione migrations no formato `V<versão>__<descricao_em_snake_case>.sql`, por exemplo `V2__create_collection_points.sql`. Migrations aplicadas em ambientes compartilhados são imutáveis: para corrigir uma alteração, crie uma nova migration em vez de editar a anterior.

Hibernate usa `ddl-auto: validate`; mudanças de esquema devem ser feitas exclusivamente via Flyway.
