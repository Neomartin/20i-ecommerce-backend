const isAdmin = (req, res, next) => {
    if(req.user.role !== 'ADMIN_ROLE') return res.status(401).send( 'No tiene los permisos necesarios para borrar un usuario');
    next();
}

module.exports = isAdmin;