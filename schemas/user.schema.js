var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var rolesValidos = [
'ADMIN_ROLE',
'USER_ROLE',
'CLIENT_ROLE',
];

var UserSchema = new Schema ({
    fullName: { type: String, required: true, maxlength:30 },
    email: { type: String, required: true, unique: true, maxlength:50 },
    phone: { type: String, maxlength:14 },
    password: { type: String },
    address: {
        street: { type: String },
        street_number: { type: Number },
    },
    active: { type: Boolean, default: false },
    role: { type: String, required: true, default:'USER_ROLE', enum: rolesValidos, },
});

module.exports = mongoose.model('User', UserSchema)
