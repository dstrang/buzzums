var http = require('http');
var express = require('express');
var socket = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socket(server);

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.post('/', function (req, res) {
//   console.log('BUZZ BUZZ!');
// });

io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('buzz', function(data){
    	console.log(data);
    	client.emit('vibrate');
    });

});

server.listen(3000, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Express server listening at http://%s:%s', host, port);
});