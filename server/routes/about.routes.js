const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about')


router.get('/', aboutController.fetch)
router.put('/', aboutController.update)

module.exports = router