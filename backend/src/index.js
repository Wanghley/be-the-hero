/**
 * Métodos HTTP:
 * GET: buscar/listar informação do backend (retorno de informação)
 * POST: criar informação no backend
 * PUT: alterar informação no backend
 * DELETE: remover informação no backend
 */

 /**
  * TIPOS DE PARÂMETROS
  * 
  * query Params: parâmetros nomeados enviados na rota após o "?"(Filtros, paginaçpão) 
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request body: corpo da requisição para criar ou alterar informações
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, ORACLE, MSSQL Server
   * NoSQL: MongoDB, CouchDB, etc
   * 
   * Utilizaremos o SQLite
   */

   /**Driver BD: SELECT * FROM users
    * Query builder: table('users').select('*').where()
    *   KNEX.js
    */
const express = require('express');
const routes = require('./routes'); //importa as rotas
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json()); //configura para receber jsons em request

app.use(routes);


app.listen(process.env.PORT||5000);
