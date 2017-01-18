   var express = require('express');
   var app = express();
   var bodyParser = require('body-Parser');
//    var records = require('./config/userdata');
//    var authenticator = require('./services/authenticator');

   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(bodyParser.json());
   app.use(express.static('../public'));

// app.all('/*', function(req, res, next) {
//     // Just send the index.html for other files to support HTML5Mode
//     res.sendFile('index.html', { root: '../public' });
// });

app.post('/authenticate', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = {};
    if(req.body.username == "admin" && req.body.password == "admin")
    {
    	data.message = "Login Succesful";
    	data.token = 90;
    	data.role = "admin";
    }
    else if(req.body.username == "user" && req.body.password == "user")
    {
    	data.message = "Login Succesful";
    	data.token = 70;
    	data.role = "user";
    }
    else if(req.body.username == "manager" && req.body.password == "manager")
    {
    	data.message = "Login Succesful";
    	data.token = 11;
    	data.role = "manager";
    }
    else
    {
    	data.message = "Incorrect Username and Password";
    	data.token = null;
    	data.role = null;	
    }
    //mimic a slow network connection
    setTimeout(function(){

        res.send(JSON.stringify(data));

    }, 1000)
});

  app.post('/assignTask', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = {};
    data.message = "Task Assigned";
    res.send(JSON.stringify(data));
  });
   app.listen(8088);
   console.log("application listing on port 8088");