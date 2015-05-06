'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
console.log('Starting up - port is:' + port);
var resCount = 0;
http.createServer(function(req, res) {
 console.log('Response count:' + ++resCount);
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
 console.log('Sent response to client.');
}).listen(port);