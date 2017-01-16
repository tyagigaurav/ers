   var express = require('express');
   var app = express();
   var bodyParser = require('body-Parser');
//    var records = require('./config/userdata');
//    var authenticator = require('./services/authenticator');

   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());
   app.use(express.static('../public'));

//app.use('/bower_components',  express.static('../bower_components'));
 
//app.post('/login', function(req, res) {
//    var username = req.body.username;
//    var password = req.body.password;
//    authenticator.authenticate(username, password).then(function(data) {
//        res.send(data);
//
//    }).catch(function(err) {
//        res.send('Invalid User');
//    });
//});

   app.listen(8088);
   console.log("application listing on port 8088");