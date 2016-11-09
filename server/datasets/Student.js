var mongoose = require('mongoose');
module.exports = mongoose.model('Student', {
    studentId: Number,
    fname: String,
    lname: String,
    email: String,
    dob: Date,
    mobile: String,
    admissionDate: Date,
    type: String
});