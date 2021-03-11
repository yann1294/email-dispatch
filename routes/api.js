var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:action', function(req, res, next) {
    var action = req.params.action

    if (action == 'send') {
      return   res.json({
        confirmation: 'success',
        action: action
    })
    } else {
      return   res.json({
        confirmation: 'fail',
        message: 'Invalid Action'
    })
    }
});

module.exports = router;