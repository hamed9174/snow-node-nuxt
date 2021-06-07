const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact')


router.get('/', contactController.fetchAll)
router.post('/', contactController.create)
router.delete('/', contactController.delete)

module.exports = router