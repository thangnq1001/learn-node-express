const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const jwtVerify = require('../middleware/jwt-verify');

router.post('/', userController.createUser);
router.get('/', jwtVerify, userController.findAllUsers);
router.get('/:id', userController.findUserById);
router.delete('/:id', userController.deleteUserById);
router.patch('/:id', userController.patchUser);
router.put('/:id', userController.putUser);


module.exports = router;