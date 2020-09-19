require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./router/index');
const http = require('http');
const socket = require('socket.io')

const app = express();
const server = http.createServer(app)

const io = socket(server)

const port = process.env.PORT || 4000;
const { jwtMiddleware } = require('./lib/token');

//node 네이티브 promise 사용
mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: true,
    })
    .then(() => {
        console.log('Successfully connected to mongodb');

        //express 기본 세팅
        app.use(express.json());
        app.use(cookieParser());
        app.use(jwtMiddleware);
        app.use(express.urlencoded({ extended: true }));
        app.set('views', __dirname + '/views');
        app.set('view engine', 'ejs');
        app.engine('html', require('ejs').renderFile);

        //정적파일들의 경로를 public으로 향하게
        app.use(express.static('public'));

        // 로그 남기기
        app.use(morgan('common'));

        //라우팅
        app.use('/', routes);
        
        //포트 열고 링크 남기기
        app.listen(port, () => {
            console.log('it is listening to port 5252');
            console.log(`open http://localhost:${port}`);
        })
    })
    .catch(console.error);

    io.sockets.on('connection', function(socket) {
        console.log("서버 연결");
      
        /* 새로운 유저가 접속했을 경우 다른 소켓에게도 알려줌 */
        socket.on('newUser', function(name) {
          console.log(name + ' 님이 접속하였습니다.')
      
          /* 소켓에 이름 저장해두기 */
          socket.name = name
      
          /* 모든 소켓에게 전송 */
          io.sockets.emit('update', {type: 'connect', name: 'SERVER', message: name + '님이 접속하였습니다.'})
        })
      
        /* 전송한 메시지 받기 */
        socket.on('message', function(data) {
          /* 받은 데이터에 누가 보냈는지 이름을 추가 */
          data.name = socket.name
          
          console.log(data)
      
          /* 보낸 사람을 제외한 나머지 유저에게 메시지 전송 */
          socket.broadcast.emit('update', data);
        })
      
        /* 접속 종료 */
        socket.on('disconnect', function() {
          console.log(socket.name + '님이 나가셨습니다.')
      
          /* 나가는 사람을 제외한 나머지 유저에게 메시지 전송 */
          socket.broadcast.emit('update', {type: 'disconnect', name: 'SERVER', message: socket.name + '님이 나가셨습니다.'});
        })
      })

module.exports = server;