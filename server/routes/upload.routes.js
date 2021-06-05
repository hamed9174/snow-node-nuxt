const express = require('express');
const router = express.Router();
const expressJWT = require('express-jwt')
const uploadController = require('../controllers/upload')
router.use('/' , expressJWT({
    secret : 'kmbjn898&*&^Y65fgVcbg',
    algorithms: ['HS256'] ,
    credentialsRequired : true
}))
const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/assets/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: fileStorageEngine })
router.post('/image', upload.single('image') , uploadController.create)
router.get('/image', uploadController.fetchAll)

module.exports = router