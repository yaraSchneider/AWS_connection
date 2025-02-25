const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost', // Altere para o host do seu banco de dados
  user: 'root', // Altere para seu usuário do banco
  password: '', // Altere para sua senha
  database: 'upload_db', // Altere para o nome do seu banco de dados
});

module.exports = pool;