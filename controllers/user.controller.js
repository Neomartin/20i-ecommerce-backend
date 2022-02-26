var User = require('../schemas/user.schema');
var bcrypt = require('bcrypt');
var salt = 10;

async function addUser(req, res) {
    try {
        console.log(req.body)
        if(!req.body.password || !req.body.fullName || !req.body.email) {
            return res.status(400).send({ error: 'Falta un campo obligatorio'});
        }

        // Reasigno el valor de password con el hash generado a partir del password original
        req.body.password = await bcrypt.hash(req.body.password, salt);


        let newUser = new User(req.body);
        await newUser.save()
        res.send({ usuarioNuevo: newUser }) 
    } catch(error) {
        res.status(400).send(error)
    }
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

async function updateUser(req, res) {
    const id = req.params.upd_id;

    const userChangesToApply = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, userChangesToApply, { new: true });
    if(!updatedUser) return res.status(404).send('No se encontro el usuario');
    
    return res.status(200).send(updatedUser)
}

async function deleteUser(req,res){
    const UserIdDelete = req.query.user_id_delete;
    const userDelete = await User.findByIdAndDelete(UserIdDelete);
     if(!userDelete) return res.status(404).send('No se encuntro el usuario que desea borrar')

    return res.status(200).send(`El usuario ${userDelete.email} ha sido borrado correctamente`);
}

async function login(req, res){
    // ****** email: pedrito@gmail.com    password: alfa
    // buscar en la DB si existe un usuario con ese email
    // checkear si el password coincide con el que tiene en la DB
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userDB = await User.findOne({ email: req.body.email });
        if(!userDB) return res.status(404).send({ msg: 'El usuario no existe en nuestra base de datos'});

        const isValidPassword = await bcrypt.compare(password, userDB.password);
        if(!isValidPassword) return res.status(401).send({ msg: 'Alguno de los datos ingresados no es correcto'});

        userDB.password = undefined;

        return res.status(200).send({
            ok: true,
            msg: 'Login correcto',
            user: userDB
        });
    } catch(error) {
        res.status(400).send(error)
    }
}
    


module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    login
}

// fetch(`localhost:3000/api/user/?user_id=${id}`)