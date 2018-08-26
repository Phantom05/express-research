var express = require('express');
var app = express();
var router = express.Router();
var unirest = require('unirest');

var address = "http://localhost:7878"

router.route('/')
  .get(function (req, res) {
    // res.redirect(address+'/kyc/pay')
    res.render('uni');
    // unirest.get(address+'/uni')
    // .field()
    // .end(function(response){
    //   console.log(response)
    //   res.render('uni')
    // })
  });

router.route('/users')
  .get(function (req, res) {
    res.send('Hello user')
  })



module.exports = router;