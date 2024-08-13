const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const options = {
  root: path.join(__dirname, "views"),
  etag: false,
};

app.get("/", (req, res) => {
  res.sendFile("index.html", options);
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", options);
});

app.get("/secret", validatePassword, (req, res) => {
  res.sendFile("secret.html", options);
});

function validatePassword(req, res, next) {
  if (req.query.password === "IAmTheBigBoss") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
