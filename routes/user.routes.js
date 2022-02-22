var express = require('express');
var api = express.Router();
var userController = require('../controllers/user.controller');

api.get('/users', userController.getUsers);
api.post('/user', userController.addUser);
api.get('/user', userController.getUser);
api.put('/user/:upd_id', userController.updateUser);


module.exports = api;

