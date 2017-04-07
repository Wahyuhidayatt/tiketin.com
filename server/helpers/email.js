const nodemailer = require('nodemailer'),
      validator = require('email-validator')

module.exports = {
  getEmail : function(data,subject){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ridhohacktiv8@gmail.com',
            pass: 'kotabaru28'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'TICKETin Team<tiketingroup@gmail.com>', // sender address
        to: data.email, // list of receivers
        subject: 'Hello User', // Subject line
        text: "We are from TICKETin, This is your List Ticket", // plain text body
        html: subject || '<b>Type Ticket Flight Attendant</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
  },
  valid : function(data){

    return validator.validate(data); // true
  }

}
