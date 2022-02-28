var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Categories = [
    'VERDURAS',
    'FRUTAS',
    'CARNES',
    'LACTEOS',
    'SNACKS',
    'BEBIDAS',
    'GRANEL',
    'LIMPIEZA',
    'PERFUMERIA',
    'GENERAL',
    ];
    var ivaOptions = [
        21,
        12,
        0,
        ];

var ProductSchema = new Schema({
    name: {type:String, required, maxlength:50},
    description: {type:String, maxlength: 200},
    price:{type:Number, required},
    stock: {type:Boolean, required: false},
    category_id: {type: String, required: true, default:'GENERAL', enum: Categories,},
    cod:{type:Number, required},
    iva: { type: String, required: true, default:21, enum: ivaOptions, },
})

module.exports = mongoose.model('User', ProductSchema)