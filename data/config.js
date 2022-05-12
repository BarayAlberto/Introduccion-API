const mysql = require('mysql');

//Credenciales de conection a base de datos
const config = {
    host:'localhost',
    user:'root',
    password:'betocampeon',
    database:'api',
};

//Crear la pool de MySQL
const pool = mysql.createPool(config);

//Exportar el pool
module.exports = pool;