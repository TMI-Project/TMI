const express = require('express');

const account = express.Router();

account.get('/login', (_, res) => res.render('login'));
account.get('/register', (_, res) => res.render('SignUp'));
account.post('/register/local', require('./auth.controller').localRegister);
account.post('/login/auth', require('./auth.controller').localLogin);

module.exports = account;
