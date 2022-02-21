var express = require('express');
var app = express();
var userController = require('./controllers/user.controller');

app.use(express.json()); // Funcion para poder leer los valores enviados en metodos del body
app.use(express.urlencoded({extended: true}));

app.get('/api/user', userController.getUsers)
app.post('/api/user', userController.addUser);

module.exports = app;