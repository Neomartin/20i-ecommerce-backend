var User = require('../schemas/user.schema');

function addUser(req, res) {
    let newUser = new User(req.body);
    newUser.save()
    res.send({ usuarioNuevo: newUser })    
}

async function getUsers(req, res) {
    const usuariosDB = await User.find()
    res.send({ users: usuariosDB })
}

module.exports = {
    addUser,
    getUsers,
}