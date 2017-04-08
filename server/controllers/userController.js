const express = require('express'),
      User = require('../models/user'),
      passwordHash = require('password-hash'),
      jwt = require('jsonwebtoken'),
      nodemailer = require('nodemailer'),
      passport = require('passport'),
      Strategy = require('passport-local').Strategy,
      mail = require('../helpers/email'),
      token = require('../helpers/token'),
      randomWord = require('random-word');

let method = {}

  method.register = function ( req, res) {
    User.findOne({username : req.body.username})
        .exec((err, user) => {
          if (err){
            res.json({success : false, msg : 'Username has already been taked'})
          }else {
            if (user){
              res.json({success : false, msg : 'Username has already been taked'})
            }else{
              if(mail.valid(req.body.email)){
                var user = {
                  username : req.body.username,
                  email : req.body.email,
                  address : req.body.address,
                  password : passwordHash.generate(req.body.password)
                }
                User.create(user)
                .then( function (data) {
                    res.json ({success : true, msg : 'register success', token : token.give(data)})
                })
                .catch(err => {
                  res.json ({success : false, msg : 'please contact ridho(tiketin)', error : err})
                })
              }else {
                res.json({success : false, msg : 'email is invalid'})
              }
            }
          }
      })
  }
  method.login = function (req, res) {
    passport.use(new Strategy(function(username, password, cb) {
      User.findOne({'username': username}, (err,data) => {
        if(err) {
          res.json('error')
        } else {
          if(data != null) {
            if (passwordHash.verify(password, data.password)) {
              res.send('ada')
            } else {
              console.log('ngga adaxxx');
              res.json({success : false})
            }
          } else {
            console.log('ngga ada');
            res.json({success : false})
          }
        }
      })
    }));

  }

  method.forget = function(req, res){
    User.findOne({'username': req.body.username}, (err,data) => {
      if(err) {
        res.json({success : false, msg : 'not found your account'})
      } else {
        if(data != null) {
          var email = data.email
          var newPassword = randomWord();
          User.update({ username: data.username }, { $set: { password : passwordHash.generate(newPassword) }}, (err,user) =>{
            if (err){
              res.json(err)
            }
            console.log(data);
            let account = '<b>Your Password is '+newPassword+'</b>'
            console.log(data.email);
            mail.getEmail({email : email},account)
            res.json({success : true, msg : 'check your inbox'})
          });

        } else {
          console.log('ngga ada');
          res.json({success : false, msg : 'not found your account'})
        }
      }
    })

  }

  method.getAll = function (req, res) {
      User.find()
      .then(function (err, data) {
        if (err) {
          res.send(err);
        }else {
          res.send(data);
        }
      })
    }


  module.exports = method
