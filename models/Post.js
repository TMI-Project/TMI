const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
    category : String,
    title : String,
    description : String,
    Publisher : String,
    atDate : Date,
    img : String
})