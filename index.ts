var http = require("http");
// type in the comment
http.createServer(function(request, response) {
  response.writeHead(300, {"Content-Type": "text/plain"});
  response.write("Hello World. This page is running Node.js version: ");
  response.write(process);
  response.end();
}).listen(8888);
