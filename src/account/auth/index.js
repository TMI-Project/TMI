const Router = require('koa-router');
const authCtrl = require('./auth.controller');

const auth = new Router();

auth.post('/register', authCtrl.localRegister);//http:/localhost/account/auth/register

module.exports = auth;
