const express = require('express'),
      Transaction = require('../models/transaction'),
      helpers = require('../helpers/email'),
      jwt = require('jsonwebtoken'),
      mail = require('../helpers/email')

let methods = {}
  methods.create = (req, res) => {

    jwt.verify(req.body.token, 'rahasia', function(err, decoded) {
      if (err) {

      } else {
        let data = {
          userId : decoded._doc._id,
          tanggalPemesanan : req.body.tanggalPemesanan,
          tickets: req.body.tickets,
          email : decoded._doc.email
        }
        Transaction.create(data)
          .then(function (err, data) {
            if(err){
              res.send(err)
            }else {
              console.log(1)
              //mail.getEmail({email : data.email},account)
              res.json({ success: true })
            }
          })

      }
    })

  }
  methods.getAll = (req, res) => {
    Transaction.find()
    .then( function(err, data) {
      if (err) {
        res.json(err)
      }else {
        res.json(data)
      }
    })
  },
  methods.sendMail = (req, res) => {
      helpers.getEmail({username : 'ridho'})
      res.json({success : true})
  }



module.exports = methods
