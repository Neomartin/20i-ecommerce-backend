var express = require('express');
var api = express.Router();
var userController = require('../controllers/user.controller');
const checkAuthentication = require('../middlewares/authentication')
const isAdmin = require('../middlewares/isAdmin');

api.get('/users', checkAuthentication,  userController.getUsers);

api.get('/user', checkAuthentication, userController.getUser);
api.post('/user', userController.addUser);
api.delete('/user/', [checkAuthentication, isAdmin], userController.deleteUser);
api.put('/user/:upd_id', checkAuthentication, userController.updateUser);
api.post('/login', userController.login)

module.exports = api;

