var express = require('express');
var app = express();
var userController = require('./controllers/user.controller');

app.use(express.json()); // Función para poder leer los valores enviados en métodos post mediante el body
app.use(express.urlencoded({extended: true}));

app.get('/api/users', userController.getUsers);
app.post('/api/user', userController.addUser);
// app.delete('api/use')



app.get('/api/user', userController.getUser);
app.delete

//1- Generar un endpoint con el método delete
//2- Asociar el endpoint a un contralador (función)
//3- Definir esa función en mis controladores
//4- Exportarla para poder usarla en mi app.js
//5- Recibir de alguna manera el ID del user que quiero borrar
//6- Buscar ese id en mongo y eliminarlo con la función asociada al Schema user .findByIdAndRemove
//7- Devolver una respuesta


module.exports = app;