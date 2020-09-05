const express = require("express");

const auth = express.Router();


const authCtrl = require('./auth.controller');


auth.get('/register', async function(req, res, next){
    res.render("src/html/SignUp");
});
auth.post('/register', authCtrl.localRegister);//http://localhost:4000/account/auth/register

module.exports = auth;
