var mongoose = require('mongoose');
module.exports = mongoose.model('Class', {
    classId: String,
    subject: String,
    teacherId: Number,
    fee: Number
});