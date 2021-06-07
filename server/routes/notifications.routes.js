const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notifiacations')
router.get('/', notificationController.fetchAll)
router.put('/', notificationController.update)

module.exports = router