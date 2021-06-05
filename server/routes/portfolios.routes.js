const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolios')

router.post('/' , portfolioController.create)
router.get('/', portfolioController.fetchAll)
router.delete('/', portfolioController.delete)
router.put('/', portfolioController.update)
router.get('/single-portfolio/:id', portfolioController.fetchPortfolio)
router.put('/comment' , portfolioController.addComments)
module.exports = router