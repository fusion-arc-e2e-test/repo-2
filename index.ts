var http = require("http");
// type in the comment
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World. This page is running Node.js version: ");
  response.write(process.version);
  // Removing this line response.end()
}).listen(8888);
