var express = require('express');
var router = express.Router();
var utils = require('../utils');
// var helper = require('@sendgrid/mail');
const sgMail = require('@sendgrid/mail');

router.post('/:action', function (req, res, next) {
  var action = req.params.action

  if (action == 'send') {

    utils.Email
      .sendEmail(req.body)
      .then(function (response) {
        res.json({
          confirmation: 'success',
          response: response
        })
      })
      .catch(function (err) {
        res.json({
          confirmation: 'fail',
          message: err
        })
      })
    return
    //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //   const msg = {
    //     to: req.body.recipient,
    //     from: 'aguidissou.abrahamyann@adgroupe.io', // Use the email address or domain you verified above
    //     subject: req.body.subject,
    //     text: 'text/html',
    //     html: req.body.content,
    //   };
    //   sgMail
    // .send(msg)
    // .then(() => {}, error => {
    //   console.error(error);

    //   if (error.response) {
    //     console.error(error.response.body)
    //   }
    // }); 
  }
  res.json({
    confirmation: 'fail',
    message: 'Invalid Action'
  })
});
// router.post('/:action', function(req, res, next){
//     var action = req.params.action

//     if (action == 'send') {
//        var from_email = new helper.Mail('aguidissou.abrahamyann@adgroupe.io')
//        var to_email = new helper.Mail(req.body.recipient)
//        var subject = req.body.subject
//        var content = new helper.Content('text/html', req.body.content)
//        var mail = new helper.send(from_email, subject, to_email, content)

//        var sg = require('@sendgrid/mail')(process.env.SENDGRID_API_KEY);
//        var request = sg.emptyRequest({
//          method: 'POST',
//          path: '/v3/mail/send',
//          body: mail.toJSON(),
//        })

//        sg.API(request, function(error,response){
//          if (error) {
//            res.json({
//              confirmation: 'fail',
//              message: error
//            })
//            return
//          }
//          res.json({
//            confirmation: 'success',
//            response: response
//          })
//        })
//        return
//     }
// });
module.exports = router;