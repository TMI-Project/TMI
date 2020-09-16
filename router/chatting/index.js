const express = require('express');
const cookies = require('../lib/cookie');
const Account = require('../models/account');

const chatting = express.Router();

chatting.get('/', async(req, res) => {
    try{
        _id =  await cookies.findAccount_idAtCookie(req);
        account = await Account.findBy_id(_id);
        userName = account.Name;
    }catch( e ) {
        console.log(e);
    }

    res.render('chatting'/*, {userName : userName }*/);
});

module.exports = chatting;
