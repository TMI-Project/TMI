const express = require("express");

const router = express.Router();

router.use("/account", require("./account"));

router.get('/', async function (req, res){
    res.render('index.html');
});

module.exports = router;
    
    