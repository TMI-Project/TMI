const express = require('express');

const chatting = express.Router();

chatting.get('/', (_, res) => res.render('chatting.ejs'));

module.exports = chatting;
