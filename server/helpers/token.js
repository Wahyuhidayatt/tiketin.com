const jwt = require('jsonwebtoken');
module.exports = {
  give : function(data){
    return jwt.sign(data,'rahasia')
  }
}
