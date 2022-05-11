const pool = require('../data/config');

//ruta de la app
const router = app{
    //mostrar mensaje de bienvenida en el root
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node.js Express REST API!'
        });
    });
}