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
async function getUser(req,res){
    //ID que recibicomo como un query param desde el endpoint
    const UserId = req.query.user_id;
    //buscamos especificamente ese id en nuestra colleccion de users
     const user = await User.findById(UserId);
     if(!user) return res.status(404).send('No se encuntro el usuario que busca')
     // const id = req.params.user_id
    return res.status(200).send({user: user});
} 
async function deleteUser(req,res){
    const UserIdDelete = req.query.user_id_delete;
    const userDelete = await User.findByIdAndDelete(UserIdDelete);
     if(!userDelete) return res.status(404).send('No se encuntro el usuario que desea borrar')

    return res.status(200).send(`El usuario ${userDelete} ha sido borrado correctamente`);
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    deleteUser,
}