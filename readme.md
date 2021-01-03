# Primeiros passos
O projeto usa Postgresql e typescript. Para configurar o banco, rode o script `createdb.sh`

Ao rodar, eventualmente será "promptado" o pedido de uma senha, insira 'database' duas vezes para que a criação do banco e das tabelas ocorra como esperado, segundo o que está configurado no `ormconfig.json`


# Rotas

## Usuários

### [Post] /users
  
  Corpo da requisição:
  ```json
    nickname: string,
    email: string,
    password: string
  ```

## Autenticação

### [POST] /sessions
  
  Corpo da requisição:
  ```json
    email: string,
    password: string
  ```
  
  Retorna os dados do usuário e o token da sessão
  
## Filmes

### [GET] /movies

  Sem parâmetros, necessita autenticação via bearer token
  
  Retorna os dados dos filmes disponíveis, junto com seu id, o qual é usado quando é feita uma locação (ver adiante)
  
### [GET] /movies/findByName?name=string

  Necessita autenticação via bearer token
  
  Busca por exatidão, a query string deve ser o nome do filme
  
  Retorna os dados do filme procurado
  
## Locações

### [GET] /rents
  
  Necessita autenticação via beater token
  
  Sem parâmetros, retorna as locações relativas ao usuário logado na sessão

### [POST] /rents

  Necessita autenticação via bearer token
  
  Corpo da requisição:
  ```json
    movie_id: string,
  ```
  
  Retorna os dados relativos a nova locação por parte do usuário logado. 
  
### [PUT] /rents/devolution
  Necessita autenticação via bearer token
  Corpo da requisição:
  ```json
    rent_id: string
  ```
  
  Retorna os dados relativos a locação encerrada e a define como terminada.