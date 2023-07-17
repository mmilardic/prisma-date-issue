## Requirements
1. Nodejs 18.16.0
2. Typescript 5.1.6
3. Docker

## Reproduction steps
1. `npm install`
2. `docker compose run --rm migration`
3. `prisma db pull`
4. `prisma generate`
5. `tsc`