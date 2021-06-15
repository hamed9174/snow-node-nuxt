const express = require('express');
const router = express.Router();

const userController = require('../controllers/users')
const expressJWT = require('express-jwt')

router.use('/user' , expressJWT({
    secret : 'kmbjn898&*&^Y65fgVcbg',
    algorithms: ['HS256'] ,
    credentialsRequired : false
}))
router.post('/login' , userController.login)
router.get('/user' , userController.getUser)
router.put('/user' , userController.update)
router.post('/register' , userController.register)

module.exports = router