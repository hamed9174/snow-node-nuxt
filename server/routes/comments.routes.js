const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments')
const expressJWT = require('express-jwt')

router.use('/' , expressJWT({
    secret : 'kmbjn898&*&^Y65fgVcbg',
    algorithms: ['HS256'] ,
    credentialsRequired : false
}))
router.get('/', commentsController.fetchAll)

router.post('/' ,commentsController.create )
router.delete('/' ,commentsController.deleteMy )
router.put('/' ,commentsController.updateMy )


module.exports = router