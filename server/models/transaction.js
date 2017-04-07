'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaTransaction = new Schema({
  userId :{type : Schema.Types.ObjectId, ref : 'User'},
  tanggalPemesanan : String,
  tickets : [
              {
                jenis_tiket : String,
                jumlah_tiket : Number,
                jumlah_orang : Number,
                departOrCheckIn : String,
                arrivalOrCheckOut : String
              }
            ]
})

let Transaction = Mongoose.model('Transaction', schemaTransaction)

module.exports = Transaction

// "userId" : "58e617e9042854093c8bc314",
// "tanggalPemesanan" : "2017-06-09",
//
// [{
// 	"jenis_tiket" : "pesawat",
//     "jumlah_tiket" : 2,
//     "jumlah_orang" : 2,
//     "departOrCheckIn" : "17:00",
//     "arrivalOrCheckOut" : "18:00"
// }]
