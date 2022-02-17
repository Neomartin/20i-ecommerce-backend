const Mongoose = require("mongoose")

var Schema = Mongoose.Schema;
var UserSchema = new Schema({
    fullName: {type: String},
    email: {type: String},
    password: {type: String},
});

module.exports = Mongoose.model('User', UserSchema)