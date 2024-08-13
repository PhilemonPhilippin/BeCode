const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
