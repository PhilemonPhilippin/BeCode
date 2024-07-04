const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const partialPathRoot = "./partials/";

let data = [];

let renderData = {
  title: "",
  partialPath: partialPathRoot,
  users: data,
};

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  renderData.title = "Home";
  renderData.partialPath = partialPathRoot + "home";
  renderData.users = data;
  res.render("index", renderData);
});

app.get("/add", (req, res) => {
  renderData.title = "Add";
  renderData.partialPath = partialPathRoot + "add";
  res.render("index", renderData);
});

app.post("/add", (req, res) => {
  data.push(req.body);
  renderData.users = data;
  console.log(data);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
