const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  if (req.headers["authorization"] === "123") {
    next();
  } else {
    res.send("Not Authorized");
  }
});

app.post("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
