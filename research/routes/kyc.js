var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var address =" localhost:7878";
router.route('/')
    .get(function(req,res){
      res.render('kyc',{title:'kyc',master:"jackson","user_mail":"jackson@remiit.io"});
    })
    .post(function(req,res){

      var userEmail = req.body.kycUserEmail;

      unirest.post(address+'/kyc/pay')
      .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
      .field({"userAddress":'★★★'+userEmail})
      .end(function(res){
        console.log('response ★',res)
        res.render('kyc/pay',userEmail);
      })


      // console.log(userEmail)
    })

router.route('/pay')
      .get(function(req,res){
        try{
          console.log(req)
          res.render('pay',{title:"pay","page":"Pay Page","master":'jackson',"user_mail":"jackson@remiit.io"});

        }catch(err){
          res.send(err)
          console.log(err)
        }
      })
      .post(function(req,res){
        // var 
      })

module.exports= router;