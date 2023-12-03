## Description

Demo app that implements store and retrieve endpoints.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Implementation Steps

1. Setup store and retrieve endpoints
   1. Create demo controller: `nest generate controller demo`
   2. Add store and retrieve endpoints.
2. Create demo service and crypto service.
   1. Create demo service: `nest generate service demo`.
   2. Create crypto service: `nest generate service common/service/crypto --flat`.
   3. Create module for demo: `nest generate module demo`
3. Create dtos
   1. Create store demo dto: `nest generate class demo/dto/store-demo.dto --flat --no-spec`
   2. Create query params dto: `nest generate class demo/dto/query-param.dto --flat --no-spec`
4. Add data validation
   1. Add global valiadtion pipe
   2. Install `class-validator` and `class-transformer` npm package: `npm install class-validator class-transformer`.
   3. Add validation decorators to store and query dto.
5. Add `docker-compose.yml` file and configure `postgres`
   1. Run `postgres`: `docker compose up -d`
