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

async function getUser(req, res) {
    //Id que recibimos como query param desde el endpoint
    const userId = req.query.user_id;
    //Buscamos específicamente ese id en nuestra collección users
    const user = await User.findById(userId);
    console.log(user)
    // Si no encontramos el usuario
    if(user == null) return res.status(404).send('No se encontró el usuario que busca');

    return res.status(200).send({ user: user });
}


module.exports = {
    addUser,
    getUsers,
    getUser
}

// fetch(`localhost:3000/api/user/?user_id=${id}`)