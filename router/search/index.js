const express = require("express");

const search = express.Router();

search.get("/", async function(req,res){
    res.render("search.html");
});

module.exports = search;
