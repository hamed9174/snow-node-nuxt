let express = require('express');
const router = express.Router();
const commentsRouter = require('./comments.routes')
const blogsRouter = require('./blogs.routes')
const portfoliosRouter = require('./portfolios.routes')
const blogCategoriesRouter = require('./blogCategories.routes')
const authRouter = require('./auth.routes')
const uploadRouter = require('./upload.routes')
const aboutRouter = require('./about.routes')
const notificationsRouter = require('./notifications.routes')
const contactRouter = require('./contact.routes')


router.use('/comments',commentsRouter)
router.use('/blogs',blogsRouter)
router.use('/portfolios',portfoliosRouter)
router.use('/blog-category',blogCategoriesRouter)
router.use('/upload',uploadRouter)
router.use('/about',aboutRouter)
router.use('/notifications',notificationsRouter)
router.use('/contact',contactRouter)
router.use(authRouter)


module.exports = router