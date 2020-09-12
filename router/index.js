const express = require('express');
const Token = require('../lib/token');
const router = express.Router();

router.use('/account', require('./account'));
router.use('/search', require('./search'));
router.use('/chatting', require('./chatting'));

router.get('/', async (req, res) => {
    
    res.render('index' /* , {name : 'userName'} */ );
});

module.exports = router;