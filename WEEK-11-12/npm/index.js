const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

const options = {
  root: __dirname,
  etag: false
};

app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(req.method + " " + req.url + " " + res.statusCode);
  });
  next();
});

app.get("/", (req, res) => {
  res.sendFile("home.html", options);
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", options);
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.all("*", (req, res) => {
  res.status(404).sendFile("404.html", options);
});

app.post("/", (req, res) => {
  res.status(200).json({
    school: "BeCode",
    year: "2023",
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
