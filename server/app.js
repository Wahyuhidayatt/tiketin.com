var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var passwordHash = require ('password-hash');
var Strategy = require('passport-local').Strategy;
var app = express();
var User = require('./models/user');

var users = require('./routes/users');
var transactions = require('./routes/transactions');

//config DB
var db_config = {
  development: 'mongodb://localhost/tiketin',
  test: 'mongodb://localhost/test_tiketin'
}

mongoose.connect(db_config[app.settings.env], function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + db_config[app.settings.env]);
  }
});
//passport
passport.use(new Strategy(function(username, password, cb) {
  User.findOne({'username': username}, (err,data) => {
    if(err) {
      return cb(err);
    } else {
      if(data != null) {
        if (passwordHash.verify(password, data.password)) {
          return cb(null, data)
        } else {
          return cb('wrong password!')
        }
      } else {
        return cb('User not found')
      }

    }
  })
}));
app.use(passport.initialize());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/api', users);
app.use('/api/transaction', transactions);



module.exports = app
