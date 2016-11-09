var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var manageUsers = require('./auth/manageUser');
var app = express();

mongoose.connect('mongodb://192.168.8.100:27017/sanosip');

app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/auth/login', manageUsers.login);
app.post('/api/auth/register', manageUsers.register);


app.listen(process.env.PORT || 9804, function () {
    console.log("Server started @ ", process.env.PORT || 9804);
});