const express = require('express');
const router = express.Router();
const UserController = require('../controller/user')
//LOGIN API!
router.post('/login', UserController.loginUser);


//SIGNUP API!
router.post('/', UserController.registerUser);


//DELETE USER!
router.delete('/:id', UserController.deleteUser);


//UPDATE USER!
router.put('/:id', UserController.updateUser);


//GET USER BY ID!
router.get('/:id', UserController.getUserById);


//GET ALL USERS!
router.get('/', UserController.getAllUsers);


module.exports = router;
