const express = require("express");

const chatting = express.Router();

chatting.get('/', async function(req, res){
    res.render('chatting.ejs');
})

module.exports = chatting;
