var express = require('express');
var app = express();
var router = express.Router();
var unirest = require('unirest');

var address = "http://localhost:7878"

// pug, ejs, Nunjucks ejs보다 Nunjucks가 더 좋음.

router.route('/') // 이 슬래쉬 주소가 app.js에 있는 uniRouter주소와 합쳐지게됨.
  .get(function (req, res) {
    // res.redirect(address+'/kyc/pay')
    try{
      // throw new Error('서버를 고장내주마');
      if(+new Date() %2 ===0){
        res.render('uni',{title:'Express',master:"Jackson",fruits:['사과','배','수박']});
        // res.sendFile() // sendFile 은 htlm 파일을 보내줌 html 경로를 적어주면 됨.
      }else{
        res.send('50% 당첨')
      }
    }catch(error){
      // next(error)
      console.log(error)
    }
 
  })
  .post(function(req,res){

  })
  .put(function(req,res){

  })
  .delete(function(req,res){

  })

router.route('/users')
  .get(function (req, res) {
    res.send('Hello user');
    // unirest.get(address+'/uni')
    // .field()
    // .end(function(response){
    //   console.log(response)
    //   res.render('uni')
    // })
  })



module.exports = router;