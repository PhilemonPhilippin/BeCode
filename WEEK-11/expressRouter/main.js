const express = require("express");
const userRoute = require("./routes/users.js");
const postRoute = require("./routes/posts.js");
const commentRoute = require("./routes/comments.js");

const app = express();
const port = 3000;

const options = {
  root: __dirname,
  etag: false,
};

app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);


app.get("/", (req, res) => {
  res.sendFile("index.html", options);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
