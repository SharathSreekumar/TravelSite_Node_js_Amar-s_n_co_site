var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    id:Number,
    userid:String,
    password:String
});

module.exports = mongoose.model('User',userSchema);