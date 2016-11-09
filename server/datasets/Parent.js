var mongoose = require('mongoose');
module.exports = mongoose.model('Parent', {
    parentId: Number,
    fname: String,
    lname: String,
    email: String,
    mobile: String,
    type: String
});