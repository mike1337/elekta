var Hapi = require('hapi');
'use strict';
var server = new Hapi.Server();
if( process.env.PORT ) {
  server.connection({ port: process.env.PORT });
}
else {
  server.connection({ port: 1337 });
}
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});
server.start(function () {
  console.log('Server running at:', server.info.uri);
});

