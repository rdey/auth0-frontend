var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/css', express.static(__dirname + '/css/'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

http.listen(3000, function(){
  console.log('Server started');
});
