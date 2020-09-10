const express = require('express');
const Token = require('../lib/token');
const router = express.Router();

router.use('/account', require('./account'));
router.use('/search', require('./search'));
router.use('/chatting', require('./chatting'));

router.get('/', async (req, res) => {
    const accessToken = req.cookies.access_token;

    const token = Token.decodedToken(accessToken);
    console.log(token);

    res.render('index' /* , {name : 'userName'} */ );
});

module.exports = router;