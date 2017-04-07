const express = require('express');
const router = express.Router();
const passport = require('passport')
const Controller = require('../controllers/userController');

router.post('/register', Controller.register);
router.post('/login', passport.authenticate('local', {session : false}), Controller.login);
router.get('/user', Controller.getAll);

module.exports = router;
