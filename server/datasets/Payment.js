var mongoose = require('mongoose');
module.exports = mongoose.model('Payment', {
    paymentId: Number,
    studentId: Number,
    classId: String,
    amount: Number,
    date: Date
});