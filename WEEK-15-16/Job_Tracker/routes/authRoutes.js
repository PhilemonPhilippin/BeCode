const { Router } = require("express");
const User = require("../models/Schema").User;
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const router = Router();
const maxAge = 3 * 24 * 60 * 60;

router.post("/api/signup", async (req, res) => {
  try {
    const { email, firstname, lastname } = req.body;

    const emailExists = await User.exists({ email });
    if (emailExists) {
      res.status(400).send("This email already exists.");
    } else {
      let password = req.body.password;
      password = await argon2.hash(password);

      const newUser = await User.create({
        email,
        password,
        firstname,
        lastname,
      });

      const token = createToken(
        newUser._id,
        newUser.email,
        newUser.firstname,
        newUser.lastname
      );

      res.status(201).json({ token: token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.login(email, password);

    const token = createToken(
      user._id,
      user.email,
      user.firstname,
      user.lastname
    );

    res.status(200).json({ token: token });
  } catch (err) {
    if (
      err.message === "incorrect password" ||
      err.message === "incorrect email"
    ) {
      res.status(400).send(err.message);
    } else {
      console.log(err);
      res.status(500).send("An error occurred on the server.");
    }
  }
});

function createToken(id, email, firstname, lastname) {
  return jwt.sign({ id, email, firstname, lastname }, "secretofjobtracker", {
    expiresIn: maxAge,
  });
}

module.exports = router;
