var express = require('express');
var api = express.Router();
var userController = require('../controllers/user.controller');

api.get('/users', userController.getUsers);

api.get('/user', userController.getUser);
api.post('/user', userController.addUser);
api.delete('/user/', userController.deleteUser);
api.put('/user/:upd_id', userController.updateUser);
api.post('/login', userController.login)

module.exports = api;

