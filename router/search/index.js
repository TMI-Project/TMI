const express = require('express');

const search = express.Router();

search.get('/', (_, res) => res.render('search.ejs'));

module.exports = search;
