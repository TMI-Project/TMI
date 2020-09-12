require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const send = require('koa-send');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
// const express = require('express');

const app = new Koa();
const router = new Router();
const account = require('./account');


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


app.use(bodyParser());
// app.use('/css', express.static(__dirname + "/../css/"));
// app.use('/jpg', express.static(__dirname + "/../jpg/"));



const render = require('koa-ejs');


render(app, {
    root: 'src/html',
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: false,
});


router.get('/register', async (ctx) => {
    await ctx.render('SignUp');
});


router.get('/', (ctx, next) => {
    ctx.body = "index";
});

router.use('/account', account.routes());

app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
    console.log('it is listening to port 4000');
    console.log(`open http://localhost:${port}`);
});


