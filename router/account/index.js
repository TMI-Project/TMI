const express = require("express");

const account = express.Router();


const authCtrl = require('./auth.controller');


account.get("/login", async function(req, res){
    res.render("login.ejs");
});

account.get('/register', async function(req, res){
    res.render("SignUp.ejs");
});
account.post('/register/local', authCtrl.localRegister);//http://localhost:4000/account/auth/register

module.exports = account;