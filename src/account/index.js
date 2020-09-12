const Router = require('koa-router');

const account = new Router();

const auth = require("./auth");

account.use('/auth', auth.routes());

module.exports = account;