require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./router/index');
const socket = require('socket.io')
const http = require('http')

//express 객체 생성 및 소켓을 app 이하로 넣어준다.
const app = express();
// app.io = require('socket.io');

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
        
        // app.io.on('connection', (socket) => {
        //     console.log('connect user');

        //     socket.on('disconnect', () => {
        //         console.log('discoonect');
        //     });
        // });


        //포트 열고 링크 남기기
        // app.listen(port, () => {
        //     console.log('it is listening to port 4000');
        //     console.log(`open http://localhost:${port}`);
        // });
        const server = http.createServer(app)
        const io = socket(server)
        server.listen(port, () => {
            console.log('it is listening to port 4000');
            console.log(`open http://localhost:${port}`);
        })
    })
    .catch(console.error);
