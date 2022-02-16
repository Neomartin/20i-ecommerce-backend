var express = require('express');
var app = express();
var port = 3001;
const password = 'alfabeta';
var URL = `mongodb+srv://neotech:${password}@cluster0.iuyvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
var mongoose = require('mongoose');

(async function connect() {
    try {
        await mongoose.connect(URL);
        console.log('\x1b[36m Connected to MongoDB \x1b[37m');
        app.listen(port, () => {
            console.log(`\x1b[33m Server escuchando en puerto: ${port} \x1b[37m`);
        });
    }
    catch(err) 
    {
        console.log('\x1b[31m Error al conectar con MongoDB \x1b[37m');
    }
})()

app.get('/', function(req, res) {
    res.send("El servidor esta respondiendo correctamente");
});