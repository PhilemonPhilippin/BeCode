const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://philemon:Test123@cluster0.wiidv5f.mongodb.net/node-auth?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, () => {
      console.log("Listening to port 3000");
    })
  )
  .catch((err) => console.log(err));

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));

app.use(authRoutes);
