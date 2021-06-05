const express = require('express');
const router = express.Router();

const userController = require('../controllers/users')

router.post('/login' , userController.login)
router.get('/user' , userController.getUser)
router.put('/user' , userController.update)
router.post('/register' , userController.register)

module.exports = router