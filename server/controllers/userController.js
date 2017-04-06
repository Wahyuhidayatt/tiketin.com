const express = require('express');
const User = require('../models/user');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

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
    let token = jwt.sign({username : req.body.username}, 'shshshshshs')
    res.send(token)
  }

  module.exports = method
