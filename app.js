//Require los paquetes y definimos el puerto
const express = require('express');
const port = 3002;

//Para permitir el manejo de POST y PUT
const bodyParser = require('boy-parser');
const routes = require('./routes/routes');
const app = express();

//Usarn Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

routes(app);

//Iniciar el servidor
const server = app.listen(port, (error) =>{
    if(error) return console.log(`Error: ${error}`);

    console.log(`El servidor escucha en el puerto ${server.address().port}`)
});
