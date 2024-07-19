const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const todoSchema = mongoose.Schema({ text: String });
const Todo = mongoose.model("Todo", todoSchema);
var corsOptions = {
  origin: "http://127.0.0.1:5500",
  optionsSuccessStatus: 200,
};

main()
  .then(() => {
    app.listen("3000", () => {
      console.log("App listening on port 3000.");
    });
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost/todolistdb");
}

app.use(express.json());
app.use(cors(corsOptions));

app.get("/api/todo", async (req, res) => {
  try {
    const todos = await getAll();
    res.status(200).json(todos);
  } catch (err) {
    console.log(err);
  }
});

async function getAll() {
  const todos = await Todo.find().limit(20);

  console.log(todos);
  return todos;
}

async function createTodo() {
  const drinkCoffee = new Todo({ text: "Drink a coffee." });

  await drinkCoffee.save();
}

// createTodo().catch(err => console.log(err));
// giveTodos().catch((err) => console.log(err));
