require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const routes = require('./router/index');




const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;//node 네이티브 promise사용
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGO_URI, {//DB연결
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

//express 기본 세팅
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//정적파일들의 경로를 public으로 향하게
app.use(express.static('public'));


// 로그 남기기
app.use(function (req, res, next){
    console.log('Time : ', Date.now());
    next();
});

//라우팅
app.use("/", routes);


//포트 열고 링크 남기기
app.listen(port, () => {
    console.log('it is listening to port 4000');
    console.log(`open http://localhost:${port}`);
});


