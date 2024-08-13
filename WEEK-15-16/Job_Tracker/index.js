const express = require("express");
const mongoose = require("mongoose");
const jobofferRoute = require("./routes/jobofferRoute");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const requireAuth = require("./middlewares/authMiddleware");
const cors = require("cors");
const app = express();
const port = 3000;
const connectionString =
  "mongodb+srv://philemon:Test123@cluster0.wiidv5f.mongodb.net/jobtracker?retryWrites=true&w=majority&appName=Cluster0";

const corsOptions = {
  origin: "https://philemonphilippin.github.io",
  optionsSuccessStatus: 200,
};

main()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(authRoutes);
app.use("/api/profile", requireAuth, profileRoutes);
app.use(requireAuth, jobofferRoute);

app.all("*", (req, res) => {
  res.status(404).send("This route does not exist.");
});

async function main() {
  try {
    await mongoose.connect(connectionString);
  } catch (err) {
    console.log(err);
  }
}
