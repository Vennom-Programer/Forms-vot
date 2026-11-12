# Forms-vot

## Banco de dados

O back-end usa PostgreSQL e conecta ao banco `formulario` por padrão.

1. Crie o banco no PostgreSQL, se ainda não existir:

	```sql
	CREATE DATABASE formulario;
	```

2. Na pasta `back-end`, copie `.env.example` para `.env` e informe o usuário e a senha do PostgreSQL.
3. Instale as dependências e teste a conexão:

	```bash
	npm install
	npm run db:check
	```

Também é possível iniciar a verificação com `npm start`. As variáveis aceitas estão documentadas em `back-end/.env.example`.