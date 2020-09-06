const mongoose = require('mongoose');
const crypto = require('crypto');
const { generateToken } = require('../lib/token');

const { Schema } = mongoose;

function hash(password){
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');

}

const Account = new Schema({
    userName : String,
    Name : String,
    email : String,
    password: String,
    ID: String,
    nickname: String,
    gender: String,
    Byear: Number, Bmonth: Number, Bday: Number,
    agency: String,
    // career: String,
    // specializedField: String,
    // area: String,
    // job: String,
    // interestingField: String,
    createAt: { type : Date, default : Date.now }

});

Account.statics.localRegister = function( { ID, password, Name, email
    ,nickname = "None", gender = "None", Byear = 0, Bmonth = 0, Bday = 0, Agency = "None"}){
    const account = new this({
        Name : Name,
        email,
        ID : ID,
        password : hash(password),
        nickname,
        gender,
        Byear: Byear, Bmonth: Bmonth, Bday: Bday,
        Agency
    });

    return account.save();
};

Account.methods.generateToken = function(){
    const payload = {
        _id:this._id,
        Byear : this.Byear,
        gender : this.gender,
        Agency : this.Agency
    };

    return generateToken(payload, 'account');
}

module.exports = mongoose.model('Account', Account);
