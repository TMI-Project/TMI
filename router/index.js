const express = require('express');
const cookies = require('../lib/cookie');
const Account = require('../models/account');

const router = express.Router();

router.use('/account', require('./account'));
router.use('/search', require('./search'));
router.use('/chatting', require('./chatting'));
router.use('/calendar', require('./calendar'));

router.get('/',async (req, res) => {
    try{
        _id =  await cookies.findAccount_idAtCookie(req);
        account = await Account.findBy_id(_id);
        userName = account.Name;
    }catch( e ) {
        console.log(e);
    }

    res.render('index' /* , {name : 'userName'} */ );
});

module.exports = router;