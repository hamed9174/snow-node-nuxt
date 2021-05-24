const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogs')

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
router.post('/', upload.single('image') ,(req, res) => {
    console.log(req.file)
    res.send('success')
})
router.get('/', blogController.fetchAll)

module.exports = router