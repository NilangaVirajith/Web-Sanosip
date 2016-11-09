var mongoose = require('mongoose');
module.exports = mongoose.model('Attendance', {
    studentId: Number,
    classId: String,
    date: Date
});