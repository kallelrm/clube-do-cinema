#!/bin/bash

echo "Ola, como fiz boa parte desse projeto no termux, os comandos aqui servem para criar o banco(postgresql) no telefone, pode ser que nao funcione no computador"


mkdir -p $PREFIX/var/lib/postgresql
initdb $PREFIX/var/lib/postgresql

pg_ctl -D $PREFIX/var/lib/postgresql start

echo "Ao ser requisitada a senha, insira database"

createuser --superuser --pwprompt postgres

createdb clube_do_cinema

npm install

npm run typeorm migration:run

npm run dev:server
