var mongoose = require('mongoose');
module.exports = mongoose.model('User', {
    userId: Number,
    username: String,
    password: String,
    type: String
});