const accountSid = 'AC8426bfe06e17eecf074b608f27977f55';
const authToken = '2020354a0d721e32009b06c02e88d823';
const client = require('twilio')(accountSid, authToken);
const nodemailer = require('nodemailer');
const top = "Hello Yewande,\nkindly find your 1st semester examination result sent to you!. \nCSC401: A, CSC403: B, CSC 405:C,  407:B, 409: A, 411: C, 413: A, 415: B: GPA:4.56, CGPA: 3.95, TLU:61"
  module.exports = {
    sms: (req, res) => {
      const topSms = "Hello,\nkindly find your" + " " +  req.body.session + " " + req.body.semester + " " + "examination result sent to you!. \nCSC401: 5, CSC403: 4, CSC 405:5,  407:5, 409: 5, 411: 4, 413: 5, 415: 4: GPA:4.06, CGPA: 3.95, TLU:61"
      const topSmsSec = "Hello,\nkindly find your" + " " +  req.body.session + " " + req.body.semester + " " + "examination result sent to you!. \nCSC402: 5, CSC404: 4, CSC 406:5,  408:4, 410: 4, 412: 5, 414: 5, 416: 5: GPA:4.56, CGPA: 4.95, TLU:81"
      console.log(+234 + req.body.phone)
      client.messages
        .create({
           body:  req.body.semester == "First Semester" ? topSms : topSmsSec,
           from: +17739858114,
           to: +2348165153658,
         })
        .then(message =>  res.json({message:'success'})
)
        .catch(err => console.log(err));


    },
    email: (req,res) => {
      const topEmail = "Hello,\nkindly find your" + " " +  req.body.session + " " + req.body.semester + " " + "examination result sent to you!. \nCSC401: 5, CSC403: 5, CSC 405:4,  407:4, 409: 5, 411: 5, 413: 4, 415: 5: GPA:4.56, CGPA: 3.95, TLU:61"
      const topEmailSec = "Hello,\nkindly find your" + " " +  req.body.session + " " + req.body.semester + " " + "examination result sent to you!. \nCSC402: 4, CSC404: 5, CSC 406:5,  408:4, 410: 5, 412: 4, 416: 5, 418: 5: GPA:4.56, CGPA: 4.95, TLU:81"

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,    //<<here
  auth: {
    user: 'lasuresultportal2021@gmail.com',
    pass: 'olatomide'
  }
});

var mailOptions = {
  from: 'lasuresultportal2021@gmail.com',
  to: req.body.email,
  subject: req.body.session + " " + req.body.semester ,
  text: req.body.semester == "First Semester" ?  topEmail : topEmailSec
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    res.json({message:'success'})
    console.log('Email sent: ' + info.response);
  }
});

    }

  };
