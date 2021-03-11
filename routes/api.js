var express = require('express');
var router = express.Router();
var helper = require('sendgrid/mail');



/* GET users listing. */
router.get('/:action', function(req, res, next) {
    var action = req.params.action

    if (action == 'send') {
    var from_email = new helper.Email('aguidissou.abrahamyann@adgroupe.io');
    var to_email = new helper.Email('dev.yann12@gmail.com');
    var subject = 'Hello World from the SendGrid Node.js Library';
    var content = new helper.content('text/html', 'Hello, from Email Dispatch');
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });
    sg.API(request, function(error, response){
      if (error) {
        res.json({
          confirmation: 'fail',
          message: error
        });
        return
      }else{
        res.json({
          confirmation: 'success',
          response: response
        })
      }
      
    });
    return
    } else {
      return   res.json({
        confirmation: 'fail',
        message: 'Invalid Action'
    })
    }
});

module.exports = router;