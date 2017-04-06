'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaUsers = new Schema({
  username : String,
  email : String,
  address : String,
  password : String
})

let User = Mongoose.model('User', schemaUsers)

module.exports = User
