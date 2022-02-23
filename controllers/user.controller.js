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
    const userId = req.query.user_id;
    //buscamos especificamente ese id en nuestra colleccion de users
     const user = await User.findById(userId);
     if(!user) return res.status(404).send('No se encuntro el usuario que busca')
     // const id = req.params.user_id
    return res.status(200).send({user: user});
} 
async function deleteUser(req,res){
    const UserIdDelete = req.query.user_id_delete;
    const userDelete = await User.findByIdAndDelete(UserIdDelete);
     if(!userDelete) return res.status(404).send('No se encuntro el usuario que desea borrar')

    return res.status(200).send(`El usuario ${userDelete.email} ha sido borrado correctamente`);
}
async function updateUser(req,res){
    const id = req.params.upd_id;
    const userChanges = req.body;
    const updatedUser = await user.findByIdAndUpdate(id, userChanges, {new: true})
    if(!updatedUser) return res.status(404).send('No se encuntro el usuario que desea modificar')
    return res.status(200).send(updatedUser);

}

module.exports = {
    addUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
}