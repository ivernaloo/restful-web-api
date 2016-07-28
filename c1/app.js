var http = require('http');
var port = 8180;

function handle_request(request, response){
    response.writeHead(200, {
        'Content-Type' : 'text/plain'
    });

    response.end('Hello world.!');
    console.log("hello hello.js");
}

http.createServer(handle_request).listen(port,"127.0.0.1");
console.log("Started node and listen to the port");