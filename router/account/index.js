const express = require('express');

const account = express.Router();

account.get('/login', (_, res) => res.render('login.ejs'));
account.get('/register', (_, res) => res.render('SignUp.ejs'));
account.post('/register/local', require('./auth.controller').localRegister);

module.exports = account;
