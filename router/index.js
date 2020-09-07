const express = require("express");

const router = express.Router();

router.use("/account", require("./account"));
router.use("/search", require("./search"));

router.get('/', async function (req, res){
    res.render('index.html');
});

module.exports = router;
    
    