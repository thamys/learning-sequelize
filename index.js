var express = require('express');
var Sequelize = require('sequelize');

// Conectando com o Banco
const sequelize = new Sequelize('test', 'root', '123#pass', {
  host: 'localhost',
  port: '3035',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// Testando a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Criando a aplicação
const app = express();

// Criando a rota
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Escutando uma porta
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});