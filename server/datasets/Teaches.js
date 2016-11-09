var mongoose = require('mongoose');
module.exports = mongoose.model('Teaches', {
    teacherId: Number,
    classId: String
});