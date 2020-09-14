const express = require('express');
const cookies = require('../lib/cookie');
const account = require('../models/account');

const router = express.Router();

router.use('/account', require('./account'));
router.use('/search', require('./search'));
router.use('/chatting', require('./chatting'));
router.use('/calendar', require('./calendar'));

router.get('/',async (req, res) => {
    _id =  await cookies.findAccount_idAtCookie(req);
    console.log("_id");
    console.log(_id);
    userName = await account.findBy_id(_id);
    console.log("userName");
    console.log(userName);
    res.render('index' /* , {name : 'userName'} */ );
});

module.exports = router;