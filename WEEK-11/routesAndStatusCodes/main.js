var http = require("http");
var fs = require("fs");

let httpServer = http.createServer(handleHttp);

httpServer.listen(3000);

function handleHttp(req, res) {
  const url = req.url;
  if (url === "/") {
    respondWithPage(res, "./index.html", 200);
  } else if (url === "/about") {
    respondWithPage(res, "./about.html", 200);
  } else if (url === "/about-us") {
    respondWithPage(res, "./about.html", 301);
  } else {
    respondWithPage(res, "./404.html", 404);
  }
}

function respondWithPage(response, htmlPath, statusCode) {
  fs.readFile(htmlPath, (error, html) => {
    if (error) {
      console.error(error);
      response.end();
      return;
    }
    response.statusCode = statusCode;
    response.setHeader("Content-Type", "text/html");
    response.write(html);
    response.end();
  });
}
