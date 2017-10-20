var express = require('express');
var path = require('path');
var app = express();
var appPort = 3000;

app.use('/styles', express.static(path.join(__dirname + '/styles/')));
app.use('/img', express.static(path.join(__dirname + '/img/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(appPort, function(){
  console.log(`Server started at localhost:${appPort}`);
});
