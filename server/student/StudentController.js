var Student = require('../datasets/Student');

module.exports.create = function (req, res) {
    if (req.body != null) {
        var appStudent = req.body;
        var student = new Student(appStudent);
        student.save(function (err) {
            if (err) throw err;
            res.send(JSON.stringify(appStudent));
        });
    }
}

module.exports.delete = function (req, res) {
    if (req.body) {
        var student = req.body;
        Student.find({ studentId: student.studentId }, function (err, student) {
            if (err) throw err;
            student.remove(function (err) {
                if (err) throw err;
                res.send(JSON.stringify(student));
            });
        })
    }
}

module.exports.findById = function (req, res) {
    if (req.body) {
        var id = req.body;
        Student.findById(id, function (err, student) {
            if (err) throw err;
            res.send(JSON.stringify(student));
        });
    }
}

module.exports.update = function (req, res) {
    if (req.body) {
        var appStudent = req.body;
        Student.findByIdAndUpdate(appStudent.studentId, appStudent, function (err, student) {
            if (err) throw err;
            res.send(JSON.stringify(student));
        });
    }
}