var http = require("http");

let httpServer = http.createServer(function (req, res) {
  console.log("A request was made");
  res.end("This is a response from the server.");
});

httpServer.listen(3000, () =>
  console.log("Listening for requests on port 3000")
);
