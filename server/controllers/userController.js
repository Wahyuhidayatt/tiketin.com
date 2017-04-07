const express = require('express'),
      User = require('../models/user'),
      passwordHash = require('password-hash'),
      jwt = require('jsonwebtoken'),
      nodemailer = require('nodemailer'),
      passport = require('passport'),
      Strategy = require('passport-local').Strategy;

let method = {}

  method.register = function ( req, res) {
    var user = {
      username : req.body.username,
      email : req.body.email,
      address : req.body.address,
      password : passwordHash.generate(req.body.password)
    }
    User.create(user)
    .then( function (err, data) {
      if (err) {
        res.json (err)
      }else {
        res.json ("register successfully")
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

  module.exports = method
