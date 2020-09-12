const express = require('express');
const cookies = require('../lib/cookie');

const router = express.Router();

router.use('/account', require('./account'));
router.use('/search', require('./search'));
router.use('/chatting', require('./chatting'));
router.use('/calendar', require('./calendar'));

router.get('/', async (req, res) => {
    cookie =  cookies.decodeCookie(req);
    res.render('index' /* , {name : 'userName'} */ );
});

module.exports = router;