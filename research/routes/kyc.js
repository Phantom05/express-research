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
      .headers({'Accept': 'application/json', 'Content-Type': 'application/json'}) // 따로 지정을 해주지 않으면 기본으로 제이슨 타입으로 텍스트들이 넘어감.사진 같은걸 보낼때는 'Content-Type': 'multipart/form-data' 이걸 써줘야함.
      .field({"userAddress":'★★★'+userEmail}) // 여긴 form안에 있는것들을 보낼때
      // .send({parameter:24}) 이건 이런식으로 직접적으로 보낼때
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