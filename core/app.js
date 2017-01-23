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
    	data.message = "You have successfully logged in!";
    	data.token = 90;
    	data.role = "admin";
        data.userId = 100;
    }
    else if(req.body.username == "user" && req.body.password == "user")
    {
    	data.message = "You have successfully logged in!";
    	data.token = 70;
    	data.role = "user";
        data.userId = 100;
    }
    else if(req.body.username == "manager" && req.body.password == "manager")
    {
    	data.message = "You have successfully logged in!";
    	data.token = 11;
    	data.role = "manager";
        data.userId = 100;
    }
    else
    {
    	data.message = "Incorrect Username and Password. Try Again!";
    	data.token = null;
    	data.role = null;
        data.userId = 100;
    }
    //mimic a slow network connection
    setTimeout(function(){

        res.send(JSON.stringify(data));

    }, 1000)
});

  app.post('/api/assignActivity', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = {};
    data.message = "Activity Asssigned to Assignee!";
    res.send(JSON.stringify(data));
  });

  app.post('/api/performActivity', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = {};
    data.message = "Selected activity marked as " + req.body[0].action;
    res.send(JSON.stringify(data));
  });

    app.post('/api/allotCoins', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = {};
    data.message = "Coins alloted to Manager!";
    res.send(JSON.stringify(data));
  });

   app.listen(8088);
   console.log("application listing on port 8088");