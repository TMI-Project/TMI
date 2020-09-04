const mongoose = require('mongoose');
const crypto = require('crypto');


const { Schema } = mongoose;



const Account = new Schema({
    userName : String,
    email : String,
    password: String,
    createAt: { type : Date, default : Date.now }
});

