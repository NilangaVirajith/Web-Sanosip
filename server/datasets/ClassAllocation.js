var mongoose = require('mongoose');
module.exports = mongoose.model('ClassAllocation', {
    classId: String,
    date: Date
});