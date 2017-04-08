const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      Controller = require('../controllers/userController'),
      User = require('../models/user'),
      passwordHash = require ('password-hash'),
      Strategy = require('passport-local').Strategy,
      jwt = require('jsonwebtoken');

router.post('/register', Controller.register);
router.post('/login',  function(req,res,next){
      passport.authenticate('local',function(err, user, info){
        User.findOne({'username': req.body.username}, (err,data) => {
          if(err) {
            res.json({success : false})
          } else {
            if(data != null) {
              if (passwordHash.verify(req.body.password, data.password)) {
                let token = jwt.sign(data,'rahasia')
                res.json({success : true, msg : 'password is true', token : token})
              } else {
                res.json({success : false, msg : 'password is wrong', token : null})
              }
            } else {
              console.log('ngga ada');
              res.json({success: false, msg : 'User not found', token : null})
            }
          }
        })
      })(req,res,next)
});
router.get('/user', Controller.getAll)
router.post('/forget',Controller.forget)

module.exports = router;
