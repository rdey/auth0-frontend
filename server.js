// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
//
// app.use('/css', express.static(__dirname + '/css/'));
//
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/html/index.html');
// });
//
// http.listen(3000, function(){
//   console.log('Server started');
// });

var express = require('express');
var app = express();
var path = require('path');

app.use('/css', express.static(path.join(__dirname + '/css/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.listen(3000, function(){
  console.log('Server started');
});
