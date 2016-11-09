var bcrypt = require('bcryptjs');

module.exports.encryptPassword = function (password, callback) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return callback(null, hash);
};

module.exports.comparePasswords = function (password, userPassword, callback) {
    var isPassMatch = bcrypt.compareSync(password, userPassword);
        if (isPassMatch) {
            return callback(null, isPasswordMatch);
        }else{
            return callback('error');
        }
        
   
};