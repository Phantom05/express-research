var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kycRouter = require('./routes/kyc');
var uniRouter = require('./routes/uni');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code')); //서버에서 정해논 secret code 가 맞으면 쿠키사용을 시작함. 노출이되면 안됨.


app.use(session({
  resave:false, // true일떄 요청이 들어올때마다 달라진 부분이 없어도 재저장을함.
  saveUninitialized:false,  // true일떄 요청이 들어올때마다 세션부분을 계속 업데이트함.
  secret:'secret code', // 보통 세션아이디를 쿠키키로 함.
  cookie:{
    httpOnly:true, // 세션쿠키를 http로만 할건지?
    secure:false, //https로할건지?
  }
}));

app.use(flash()); // 보통 로그인이 실패했을때, 1회용 팝업을 띄울떄 뭐 아이디랑 비밀번호가 맞지않을떄
//본인인증 실패했을때 본인인증이 되지않았을때, 신원이 확인되지 않을떄 1회성 메세지

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kyc',kycRouter);
app.use('/uni', uniRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
