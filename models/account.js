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
    career: String,
    specializedField: String,
    area: String,
    job: String,
    interestingField: String,
    createAt: { type : Date, default : Date.now }

});

Account.statics.localRegister = function( { username, email, ID, password
    ,nickname = "None", gender = "None", age = 20, career = "None", specializedField = "None", area = "None", job = "None", interestingField = "None"}){
    const account = new this({
        Name : username,
        email,
        ID,
        password : hash(password),
        nickname,
        gender,
        age,
        career,
        specializedField,
        area,
        job,
        interestingField
    });

    return account.save();
};

Account.methods.generateToken = function(){
    const payload = {
        _id:this._id,
        age: this.age,
        specializedField : this.specializedField,
        area : this. area,
        job : this.job,
        interestingField : this.interestingField
    };

    return generateToken(payload, 'account');
}

module.exports = mongoose.model('Account', Account);
