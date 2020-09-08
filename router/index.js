const express = require("express");

const router = express.Router();

router.use("/account", require("./account"));
router.use("/search", require("./search"));
router.use("/chatting", require("./chatting"));

router.get('/', async function (req, res){
    res.render('index.ejs');
});

module.exports = router;
    
    