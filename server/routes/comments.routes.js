const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments')
const expressJWT = require('express-jwt')

router.use('/' , expressJWT({
    secret : 'kmbjn898&*&^Y65fgVcbg',
    algorithms: ['HS256'] ,
    credentialsRequired : true
}))
router.get('/', commentsController.fetchAll)

router.post('/' ,commentsController.create )

router.post('/my' ,commentsController.reply )
router.delete('/my' ,commentsController.delete )
router.put('/my' ,commentsController.update )

module.exports = router