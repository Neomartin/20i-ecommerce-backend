var express = require('express');
var app = express();
var userController = require('./controllers/user.controller');

app.use(express.json()); // Función para poder leer los valores enviados en métodos post mediante el body
app.use(express.urlencoded({extended: true}));

app.get('/api/user', userController.getUsers);
app.post('/api/user', userController.addUser);


module.exports = app;