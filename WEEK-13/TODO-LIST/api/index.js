const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const connectionString =
  "DBURIHERE";
const uriBase = "/api/todo";
const todoSchema = new mongoose.Schema({
  text: { type: String, maxLength: 150, required: true },
});
const Todo = mongoose.model("Todo", todoSchema);
var corsOptions = {
  origin: "https://philemonphilippin.github.io",
  optionsSuccessStatus: 200,
};

main()
  .then(() => {
    app.listen(3000, () => {
      console.log("App listening on port 3000.");
    });
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionString);
}

app.use(express.json());
app.use(cors(corsOptions));

app.get(uriBase, async (req, res) => {
  try {
    const todos = await retrieveAll();
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.post(uriBase, async (req, res) => {
  try {
    const todo = req.body;
    const isAdded = await add(todo);
    if (isAdded) res.sendStatus(204);
    else res.sendStatus(400);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.delete(uriBase + "/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await deleteById(id);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

async function retrieveAll() {
  try {
    const todos = await Todo.find().limit(20);
    return todos;
  } catch (err) {
    console.log(err);
    return;
  }
}

async function add(todo) {
  try {
    const todoToAdd = await Todo.create({ text: todo.text });
    await todoToAdd.save();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function deleteById(id) {
  try {
    await Todo.findByIdAndDelete(id);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = app;