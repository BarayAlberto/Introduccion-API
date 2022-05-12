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
        const id = request.params.id;

        pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) =>{
            if(error) throw error;

            response.send(result);
        });
    });

    //Agregar un nuevo usuario
    app.post('/users', (request, response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if(error) throw error;

            renspose.status(201).send(`User added with ID: ${result.insertID}`);
        });
    });

    //Actualizar un usuario ya existente
    app.put('/users/:id', (request, response) =>{ 
        const id = request(params.id);

        pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) =>{
            if(error) throw error;

            response.send('User updated succesfully');
        });
    });

    //Eliminar un usuario
    app.delete('/users/:id', (request, response) =>{
        const id = request.params.id;
    
        pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
            if(error) throw error;
            response.send('User deleted');
        });
    });

}

//importar el router
module.exports = router;