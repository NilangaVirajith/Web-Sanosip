var pwManager = require('./managepasswords');
var User = require('../datasets/User');

module.exports.register = function (req, res) {
    var appUser = req.body;
    console.log(appUser);
    pwManager.encryptPassword(appUser.password, function (err, hash) {
        if (err) {
            console.log(err);
        } else {
            appUser.password = hash;
            var user = new User(appUser);
            user.save();
            appUser.password = "";
            res.send(JSON.stringify(appUser));
        }
    });
};

module.exports.login = function (req, res, next) {
    var appUser = req.body;
    console.log(appUser);
    if (appUser.username.trim().length == 0 || appUser.password.trim().length == 0) {
        console.log('Invalid parameter lenghts');
    }
    else {
        User.find(appUser, function (err, results) {
            if (err) {
                console.log(err);
            } if (results != null) {
                dbUser = results;
                console.log(results + ' user is');
                pwManager.comparePasswords(dbUser.password, appUser.password, function (err, isPasswordMatch) {
                    if (isPasswordMatch) {
                        dbUser.password = "";
                        res.send(JSON.stringify(dbUser));
                    }

                })
            } else {
                res.send(null);
            }
        })
    }
};

