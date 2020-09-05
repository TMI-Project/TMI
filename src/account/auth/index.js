const express = require("express");

const router = express.Router();


const authCtrl = require('./auth.controller');

auth.set('view engine', 'html');

auth.get('/register', async function(req, res, next){
    res.render("html/SignUp");
});
auth.post('/register', authCtrl.localRegister);//http:/localhost/account/auth/register

module.exports = auth;
