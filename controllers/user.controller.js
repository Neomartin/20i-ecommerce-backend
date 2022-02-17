const { mongo } = require('mongoose');
var User = require('../schemas/user.schema');

function addUser(req, res){
    let newUser = new User(req.body);
    
    console.log('El servidor recibio una peticion')
    res.send('Endpoint addUser funcionando')
    newUser.save()
}

async function getUsers (req,res){
    const usuariosDB = await User.find()
    res.send({users: usuariosDB})
}

module.exports = {
    addUser,
    getUsers,
}