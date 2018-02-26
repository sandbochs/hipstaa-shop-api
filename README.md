# hipstaa-shop-api

### [Public API Docs](https://github.com/sandbochs/hipstaa-shop-api/blob/master/API-PUBLIC.md)
- Play with the api at this endpoint: `http://hipstaa.mooo.com/v1/`

### Dependencies

- nodejs v8.9 (Easiest way to install is with [NVM](https://github.com/creationix/nvm))
- PostgreSQL v9.x (`brew install postgresql@9.6`)

### Installation

- `git clone` this repo
- `nvm use` (or ensure you are on nodejs v8.9 if not using NVM)
- `npm i`
- `npm run db:create`
- `npm run migrate up`
- `npm start`
- Point your browser to [http://localhost:3000/v1/products?max=100&start=1](http://localhost:3000/v1/products?max=100&start=1
) or use Postman to make a GET request.

### Testing
- `npx flow-typed install`
- `npm run test`
