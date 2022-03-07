let express = require('express');
let app = express();
let user_routes = require('./routes/user.routes');
let product_routes = require('./routes/product.routes');
let cors = require('cors') 

app.use(cors())
app.use(express.json()); // Función para poder leer los valores enviados en métodos post mediante el body
app.use(express.urlencoded({extended: true}));


app.use('/api',[
    user_routes,
    product_routes
]);

module.exports = app;