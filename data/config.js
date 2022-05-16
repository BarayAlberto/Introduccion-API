const mysql = require('mssql');

//Credenciales de conection a base de datos
const config = {
    server:'DESKTOP-RVUJKO9',
    user:'root',
    password:'root',
    database:'apis',
    options: {
        "enableArithAbort": true,
        "encrypt": false,
    },
};

/*//Crear la pool de MySQL
const pool = mysql.createPool(config);

//Exportar el poo
module.exports = pool;*/
module.exports = config;