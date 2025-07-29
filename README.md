# Champions League API

API RESTful para consulta e gerenciamento de jogadores e clubes da Champions League, desenvolvida em TypeScript com Express.

## Funcionalidades

- Listar todos os jogadores
- Buscar jogador por ID
- Criar, atualizar e remover jogadores
- Listar todos os clubes

## Estrutura do Projeto

```
src/
  app.ts
  routes.ts
  server.ts
  controllers/
    clubs-controller.ts
    player-controller.ts
  data/
    clubs.json
  models/
    club-model.ts
    http-reponse-model.ts
    player-model.ts
    statistics-model.ts
  repositories/
    clubs-repository.ts
    player-repository.ts
  services/
    clubs-services.ts
    player-services.ts
  utils/
    http-helper.ts
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/evelynnnie/champions-league-api.git
   cd champions-league-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` e defina a porta desejada:
   ```
   PORT=3000
   ```

4. Inicie o servidor em modo desenvolvimento:
   ```bash
   npm run start:dev
   ```

## Rotas

### Jogadores

- `GET /players` — Lista todos os jogadores
- `GET /players/:id` — Busca jogador por ID
- `POST /players` — Cria um novo jogador
- `PATCH /players/:id` — Atualiza estatísticas de um jogador
- `DELETE /players/:id` — Remove um jogador

### Clubes

- `GET /clubs` — Lista todos os clubes

## Tecnologias

- Node.js
- TypeScript
- Express
- CORS

## Observações

- Os dados dos jogadores são mantidos em memória (mock).
- Os clubes são carregados a partir de um arquivo JSON.

## Licença

MIT © Daiane Araújo