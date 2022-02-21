var express = require('express');
var app = express();
var userController = require('./controllers/user.controller');

app.use(express.json()); // Función para poder leer los valores enviados en métodos post mediante el body
app.use(express.urlencoded({extended: true}));

app.get('/api/users', userController.getUsers);
app.post('/api/user', userController.addUser);
app.delete('api/user', userController.deleteUser);

app.get('/api/user', userController.getUser);


//fetch (`localhost:3000/api/user/?user_id`)

module.exports = app;