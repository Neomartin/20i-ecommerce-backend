var express = require('express');
var app = express();
var user_routes = require('./routes/user.routes');
var product_routes = require('./routes/product.routes');

app.use(express.json()); // Función para poder leer los valores enviados en métodos post mediante el body
app.use(express.urlencoded({extended: true}));
app.use('/api',[user_routes]);
app.use('/api',[product_routes]);



//fetch (`localhost:3000/api/user/?user_id`)

module.exports = app;