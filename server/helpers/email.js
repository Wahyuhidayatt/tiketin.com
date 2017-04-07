const nodemailer = require('nodemailer')

module.exports = {
  getEmail : function(data){
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
        to: 'tng.michael@yahoo.com', // list of receivers
        subject: 'Hello '+data.username, // Subject line
        text: "We are from TICKETin, This is your List Ticket", // plain text body
        html: '<b>Type Ticket Flight Attendant</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
  }
}
