require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const account = require('./account');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

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

router.get('/', (ctx, next) => {
    ctx.body = "index";
});

router.use('/account', account.routes());

app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
    console.log('it is listening to port 4000');
});


