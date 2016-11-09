var mongoose = require('mongoose');
module.exports = mongoose.model('Enrollment', {
    studentId: Number,
    classId: String
});