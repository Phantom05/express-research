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
    let userAddress = req.body.userAddress;
    let userPassword = req.body.userPassword;
    let uploadImg = req.body.uploadImg;
    
    unirest.post('http://mockbin.com/request')
    .header('Accept', 'application/json')
    .field({
      'userAddress': userAddress,
      'userPassword':userPassword,
    })
    .attach({
      'file': uploadImg, // 여기 뒷주소에 http 또는 https가 없으면 유니레스트가 로컬로 인식함. 그래서 퍼블릭 기준으로 경로가 잡힘. static을 잡아놔서.
    })
    .end(function (response) {
      console.log(response.body);
    })
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