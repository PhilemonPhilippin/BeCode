const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { v4: uuidv4 } = require("uuid");
const port = 3000;

class User {
  constructor(id, username, firstName, lastName, age, isAdmin) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdmin = isAdmin;
  }
}

const user1 = new User(uuidv4(), "Glouglou43", "Henrique", "Vieira", 35, true);

let data = [user1];
let uriBase = "/api/users";

app.use(bodyParser.json());

app.use(uriBase + "/:uid", (req, res, next) => {
  const uid = req.params.uid;
  const userFetched = data.find((user) => user.id === uid);
  if (userFetched === undefined) {
    res.statusCode = 404;
    res.send("Invalid id: user not found.");
  } else {
    next();
  }
});

app.get(uriBase, (req, res) => {
  res.send(data);
});

app.post(uriBase, (req, res) => {
  const validUser = validateUser(req.body);
  if (validUser) {
    data.push(req.body);
    res.send(req.body);
  } else {
    res.statusCode = 300;
    res.send("Invalid user: bad input format.");
  }
});

app.get(uriBase + "/:uid", (req, res) => {
  const uid = req.params.uid;
  const userFetched = data.find((user) => user.id === uid);
  res.send(userFetched);
});

app.put(uriBase + "/:uid", (req, res) => {
  const uid = req.params.uid;
  const userPut = req.body;
  const userFetched = data.find((user) => user.id === uid);
  const index = data.indexOf(userFetched);

  const userEdited = new User(
    uid,
    userPut.username,
    userPut.firstName,
    userPut.lastName,
    userPut.age,
    userPut.isAdmin
  );

  data[index] = userEdited;
  res.sendStatus(204);
});

app.delete(uriBase + "/:uid", (req, res) => {
  const uid = req.params.uid;
  const userFetched = data.find((user) => user.id === uid);
  const index = data.indexOf(userFetched);
  data.splice(index, 1);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

function validateUser(user) {
  let validUser = true;
  const { id, username, firstName, lastName, age, isAdmin } = user;
  return validUser;
}
