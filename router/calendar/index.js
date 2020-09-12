const express = require('express');

const calendar = express.Router();

calendar.get('/', (_, res) => res.render('calendar'));

module.exports = calendar;