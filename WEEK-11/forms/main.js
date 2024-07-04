const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const partialPathRoot = "./partials/";

let data = {
  title: "",
  partialPath: partialPathRoot,
};

app.get("/", (req, res) => {
  data.title = "Home";
  data.partialPath = partialPathRoot + "home";
  res.render("index", data);
});

app.get("/add", (req, res) => {
  data.title = "Add";
  data.partialPath = partialPathRoot + "add";
  res.render("index", data);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
