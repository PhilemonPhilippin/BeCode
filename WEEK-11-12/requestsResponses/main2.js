var http = require("http");

let httpServer = http.createServer(function (req, res) {
  console.log("URL of the request: " + req.url);
  console.log("method of the request: " + req.method);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>This is my awesome title from the server</h1>");
  res.write('<a href="/services">I am an anchor tag</a>');
  res.end();
});

httpServer.listen(3000);
