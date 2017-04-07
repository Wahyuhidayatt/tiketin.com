const express = require('express');
const Transaction = require('../models/transaction')

let methods = {}
methods.create = (req, res) => {
  var transaction = new Transaction(req.body);
  transaction.save(function (err, createdTodoObject) {
    if (err) {
      res.send(err);
    }
    res.send(createdTodoObject);
  });
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
  }


module.exports = methods
