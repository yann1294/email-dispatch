var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');

router.post('/:action', function(req, res, next) {
  var action = req.params.action

  if (action == 'send') {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.body.recipient,
      from: 'aguidissou.abrahamyann@adgroupe.io', // Use the email address or domain you verified above
      subject: req.body.subject,
      text: 'text/html',
      html: req.body.content,
    };
    sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }); 
  }
});

// router.get('/:action', function(req, res, next) {
//   var action = req.params.action

//   if (action == 'send') {
//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//     const msg = {
//       to: 'dev.yann12@gmail.com',
//       from: 'aguidissou.abrahamyann@adgroupe.io', // Use the email address or domain you verified above
//       subject: 'Sending with Twilio SendGrid is Fun',
//       text: 'and easy to do anywhere, even with Node.js',
//       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };
//     sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email sent')
//       res.json({
//         confirmation: 'success',
//         response: res
//       })
//     })
//     .catch((error) => {
//       console.error(error)
//       res.json({
//         confirmation: 'fail',
//         message: error
//       })
//     })  
//   }
// });



/* GET users listing. */
// router.get('/:action', function(req, res, next) {
//     var action = req.params.action

//     if (action == 'send') {
//     var from_email = new helper.Email('aguidissou.abrahamyann@adgroupe.io');
//     var to_email = new helper.Email('dev.yann12@gmail.com');
//     var subject = 'Hello World from the SendGrid Node.js Library';
//     var content = new helper.content('text/html', 'Hello, from Email Dispatch');
//     var mail = new helper.Mail(from_email, subject, to_email, content);

//     var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
//     var request = sg.emptyRequest({
//       method: 'POST',
//       path: '/v3/mail/send',
//       body: mail.toJSON(),
//     });
//     sg.API(request, function(error, response){
//       if (error) {
//         res.json({
//           confirmation: 'fail',
//           message: error
//         });
//         return
//       }else{
//         res.json({
//           confirmation: 'success',
//           response: response
//         })
//       }
      
//     });
//     return
//     } else {
//       return   res.json({
//         confirmation: 'fail',
//         message: 'Invalid Action'
//     })
//     }
// });

module.exports = router;