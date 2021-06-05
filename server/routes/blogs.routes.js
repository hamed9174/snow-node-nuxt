const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogs')

router.post('/' , blogController.create)
router.put('/comment' , blogController.addComments)
router.get('/', blogController.fetchAll)
router.get('/single-blog/:id', blogController.fetchBlog)
router.delete('/', blogController.delete)
router.put('/', blogController.update)

module.exports = router