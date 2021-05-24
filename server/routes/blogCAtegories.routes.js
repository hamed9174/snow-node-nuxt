const router = require('express').Router();
const blogCategoryController = require('../controllers/blogs/blogCategories')

router.get('/' , blogCategoryController.fetchAll)

module.exports = router