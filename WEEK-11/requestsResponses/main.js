var http = require("http");

let httpServer = http.createServer(function (req, res) {
  console.log("URL of the request: " + req.url);
  console.log("method of the request: " + req.method);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello from the server");
  res.end();
});

httpServer.listen(3000);
