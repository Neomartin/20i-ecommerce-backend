var express = require('express');
var app = express();
var user_routes = require('./routes/user.routes')

app.use(express.json()); // Función para poder leer los valores enviados en métodos post mediante el body
app.use(express.urlencoded({extended: true}));
app.use('/api',[user_routes])



//fetch (`localhost:3000/api/user/?user_id`)

module.exports = app;