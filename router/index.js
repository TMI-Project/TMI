const express = require("express");

const router = express.Router();
const account = express();

account.use("/auth", require("./auth"));

module.exports = account;