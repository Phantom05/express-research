var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req,res){
      res.render('kyc',{title:'kyc',master:"jackson"});
    });

router.route('/pay')
      .get(function(req,res){
        try{
          res.render('pay',{title:"pay","page":"Pay Page","master":'jackson'});
        }catch(err){
          res.send(err)
          console.log(err)
        }
      });

module.exports= router;