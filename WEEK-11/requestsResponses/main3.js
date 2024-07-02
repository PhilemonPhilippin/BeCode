var http = require("http");
var fs = require("fs");

let httpServer = http.createServer(function (req, res) {
  console.log("URL of the request: " + req.url);
  console.log("method of the request: " + req.method);
  fs.readFile("./views/index.html", (error, html) => {
    if (error) {
      console.error(error);
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(html);
    res.end();
  });
});

httpServer.listen(3000);
