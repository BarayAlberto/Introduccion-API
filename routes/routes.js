const pool = require('../data/config');

//ruta de la app
const router = app{
    //mostrar mensaje de bienvenida en el root
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a Node.js Express REST API!'
        });
    });
    //mostrar todos los usuarios
    app.get('/users', (request, response) => {
        pool.query('SELECT * FROM USERS', (error, result) => {
            if(error) throw error;

            response.send(result);
        });
    });
    //Mostrar un solo usuario por ID
    app.get('users/:id', (request, response) => {
        const id = request.params.id:

        pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) =>{
            if(error) throw error;

            response.send(result);
        });
    });

    
}