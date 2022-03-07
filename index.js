var app = require('./app')
var port = 3000;

const password = 'P4n4m4-1';
var URL = `mongodb+srv://IRoldan:${password}@cluster0.2dowp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

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
