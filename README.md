# Next Level Week

## Day 1

Building base project for API

npm init -y

npx tsc --init

Running backend

npx ts-node src/server.ts

Create front app

npx create-react-app web --template=typescript

## Day 2

request params
query params = filtros e paginação
request body = update e create

yarn add knex

migrations
npx knex --knexfile knexfile.ts migrate:latest

seeds
npx knex --knexfile knexfile.ts seed:run

index(), listagem
show(), unico registro
create
update
delete

transaction

cors

unsplash
