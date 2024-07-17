const express = require("express");
const { ObjectId } = require("mongodb");
const { getDb, connectToDb } = require("./db");
const app = express();

let db;

connectToDb((err) => {
  if (!err) {
    app.listen("3000", () => {
      console.log("App listening on port 3000.");
    });
    db = getDb();
  }
});

app.use(express.json());

app.get("/books", (req, res) => {
  let books = [];
  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => books.push(book))
    .then(() => {
      res.status(200).json(books);
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not fetch the documents." });
    });
});

app.get("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((book) => {
        res.status(200).json(book);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not fetch the documents." });
      });
  } else {
    res.status(500).json({ error: "Not a valid document id." });
  }
});

app.post("/books", (req, res) => {
  const book = req.body;
  db.collection("books")
    .insertOne(book)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not create a document" });
    });
});

app.delete("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not delete document." });
      });
  } else {
    res.status(500).json({ error: "Could not delete document." });
  }
});

app.patch("/books/:id", (req, res) => {
  const updates = req.body;

  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not update document." });
      });
  } else {
    res.status(500).json({ error: "Could not update document." });
  }
});
