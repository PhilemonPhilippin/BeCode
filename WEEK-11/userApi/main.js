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

const user1 = new User(
  "KUGF-57JNJ-JFNJDK-OUH3",
  "Glouglou43",
  "Henrique",
  "Vieira",
  35,
  true
);

let data = [user1];
let uriBase = "/api/users";

app.use(bodyParser.json());

app.get(uriBase, (req, res) => {
  // console.log(uuidv4());
  res.send(data);
});

app.post(uriBase, (req, res) => {
  const validUser = validateUser(req.body);
  if (validUser) {
    data.push(req.body);
    res.send(req.body);
  } else {
    res.statusCode = 300;
    res.send("Invalid user: ");
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

function validateUser(user) {
  let validUser = true;
  const { id, username, firstName, lastName, age, isAdmin } = user;
  return validUser;
}
