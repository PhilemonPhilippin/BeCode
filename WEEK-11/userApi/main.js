// Imports from npm.
const express = require("express");
const bodyParser = require("body-parser");
const { checkSchema, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");

//#region Initializations
const app = express();
const port = 3000;
let uriBase = "/api/users";

// api_key example (always 16 chars long):
// const apiKey = "1234-abcDEF-5678"

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

const data = seed();

// Schema for express validator
const schema = {
  username: {
    isLength: {
      errorMessage: "Username must be between 3 and 150 chars.",
      options: {
        min: 3,
        max: 150,
      },
    },
  },
  firstName: {
    isLength: {
      errorMessage: "Firstname must be between 3 and 150 chars.",
      options: {
        min: 3,
        max: 150,
      },
    },
  },
  lastName: {
    isLength: {
      errorMessage: "Lastname must be between 3 and 150 chars.",
      options: {
        min: 3,
        max: 150,
      },
    },
  },
  age: {
    isInt: {
      errorMessage: "Age 18 minimum required.",
      options: {
        min: 18,
      },
    },
  },
  isAdmin: {
    exists: {
      errorMessage: "The field isAdmin is required.",
      options: {
        values: false | true,
      },
    },
  },
};
//#endregion

// Middlewares
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

//#region Endpoints
app.get(uriBase, (req, res) => {
  res.send(data);
});

app.post(uriBase, validateApiKey, validate(schema), (req, res) => {
  const userPost = req.body;
  const userToAdd = new User(
    uuidv4(),
    userPost.username,
    userPost.firstName,
    userPost.lastName,
    userPost.age,
    userPost.isAdmin
  );

  data.push(userToAdd);
  res.send(userToAdd);
});

app.get(uriBase + "/:uid", (req, res) => {
  const uid = req.params.uid;
  const userFetched = data.find((user) => user.id === uid);
  res.send(userFetched);
});

app.put(uriBase + "/:uid", validateApiKey, validate(schema), (req, res) => {
  const uid = req.params.uid;
  const userPut = req.body;
  const userFetched = data.find((user) => user.id === uid);
  const index = data.indexOf(userFetched);

  const userToEdit = new User(
    uid,
    userPut.username,
    userPut.firstName,
    userPut.lastName,
    userPut.age,
    userPut.isAdmin
  );

  data[index] = userToEdit;
  res.sendStatus(204);
});

app.delete(uriBase + "/:uid", validateApiKey, (req, res) => {
  const uid = req.params.uid;
  const userFetched = data.find((user) => user.id === uid);
  const index = data.indexOf(userFetched);
  data.splice(index, 1);
  res.sendStatus(204);
});

app.all("*", (req, res) => {
  res.statusCode = 404;
  res.send("This route does not exist.");
});

//#endregion

// Server starting to listen
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

//#region Helper functions
function validateApiKey(req, res, next) {
  const apiKey = req.query["api_key"];
  if (!apiKey || apiKey.length !== 16) {
    res.statusCode = 401;
    res.send("Invalid api key.");
  } else {
    next();
  }
}

function validate() {
  return [
    checkSchema(schema),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
      }
      next();
    },
  ];
}

function seed() {
  return [
    new User(uuidv4(), "Glouglou43", "Henrique", "Vieira", 35, true),
    new User(uuidv4(), "JeanPascal67", "Jean", "Pascal", 57, true),
    new User(uuidv4(), "Tarkacode", "Philémon", "Philippin", 32, false),
    new User(
      uuidv4(),
      "666Darkdestructor666",
      "Benjamin",
      "Legrand",
      16,
      false
    ),
  ];
}
//#endregion
