var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rolesValidos = [
    'ADMIN_ROLE',
    'USER_ROLE', //personal interno de la empresa
    'CLIENT_ROLE'//clientes usuarios de mi app
];

var UserSchema = new Schema({
    fullName: { type: String, required: true, maxlength: 40 },
    email: { type: String, required: true, unique: true, maxlength: 40 },
    phone: {type: String, maxlength: 14 },
    password: { type: String, required: true },
    adress: {
        street: { type: String },
        street_number: { type: Number },
    },
    active: { type: Boolean, default: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
});
                                //users
module.exports = mongoose.model('User', UserSchema)