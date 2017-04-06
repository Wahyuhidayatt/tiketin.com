const express = require('express');
const router = express.Router();
const Controller = require('../controller/transactionController');

router.post('/', Controller.create);
router.get('/' Controller.getAll);

module.exports = router;
