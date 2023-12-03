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