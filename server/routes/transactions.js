const express = require('express');
const router = express.Router();
const Controller = require('../controllers/transactionController');

router.post('/', Controller.create);
router.get('/', Controller.getAll);
router.post('/checkout', Controller.sendMail)

module.exports = router;
