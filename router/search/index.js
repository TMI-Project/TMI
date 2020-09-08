const express = require("express");

const search = express.Router();

search.get("/", async function(req,res){
    res.render("search.ejs");
});

module.exports = search;
