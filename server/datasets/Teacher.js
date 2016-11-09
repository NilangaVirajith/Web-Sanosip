var mongoose = require('mongoose');
module.exports = mongoose.model('Teacher', {
    teacherId: Number,
    fname: String,
    lname: String,
    email: String,
    subject: String,
    mobile: String,
    admissionDate: Date,
    type: String
});