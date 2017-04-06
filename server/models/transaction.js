'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaTransaction = new Schema({
  userId : [{type : Schema.Types.ObjectId, ref : 'User'}],
  tanggalPemesanan : String,
  tickets : [
              {
                jenis_tiket : String,
                jumlah_tiket : String,
                jumlah_orang : String,
                departOrCheckIn : String,
                arrivalOrCheckOut : String
              }
            ]
})

let Transaction = Mongoose.model('Transaction', schemaUsers)

module.exports = User
