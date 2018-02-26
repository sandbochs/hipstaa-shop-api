# hipstaa-shop-api

### [Public API Docs](https://github.com/sandbochs/hipstaa-shop-api/blob/master/API-PUBLIC.md)

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

### Testing
- `npx flow-typed install`
- `npm run test`
