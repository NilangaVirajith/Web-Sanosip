var mongoose = require('mongoose');
module.exports = mongoose.model('Sibling', {
    parentId: Number,
    studentId: Number
});