const mongoose = require('mongoose');
const crypto = require('crypto');


const { Schema } = mongoose;

function hash(password){
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(passowrd).digest('hex');
    
}

const Account = new Schema({
    userName : String,
    email : String,
    password: String,
    createAt: { type : Date, default : Date.now }
});

