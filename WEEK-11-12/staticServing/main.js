const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const options = {
  root: __dirname,
  etag: false,
};

app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile("index.html", options);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
