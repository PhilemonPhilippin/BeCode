const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = `${hour}h${minute}`;
  res.render("index", { time: time });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
