var express = require('express');
var app = express();
var port = 3000;




app.listen(port, ()=> {
    console.log('Servidor esta corriendo');
})
// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function(req, res) {
        res.send({
            users: [
                {
                "id": 1,
                "email": "george.bluth@reqres.in",
                "first_name": "George",
                "last_name": "Bluth",
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
                },
            ]
        });
});