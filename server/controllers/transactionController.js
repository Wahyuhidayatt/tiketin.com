const express = require('express'),
      Transaction = require('../controllers/transactionController'),
      helpers = require('../helpers/email');


let methods = {}
  methods.create = (req, res) => {
    Transaction.create ({
      // jenis_tiket : req.body.jenis_tiket,
      // jumlah_tiket : req.body.jumlah_tiket,
      // jumlah_orang  : req.body.jumlah_orang,
      // departOrCheckIn : req.body.departOrCheckIn,
      // arrivalOrCheckOut : req.body.arrivalOrCheckOut
    })
    .then(function (err, data) {
      if(err){
        res.send(err)
      }else {
        res.json(data)
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
