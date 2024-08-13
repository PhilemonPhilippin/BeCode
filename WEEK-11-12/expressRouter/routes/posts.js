const express = require("express");
const router = express.Router();
const data = [
  "Post du lundi",
  "Post du mardi",
  "Post du mercredi",
  "Post du jeudi",
  "Post du vendredi",
];
router.get("/", (req, res) => {
  res.send(data);
});

module.exports = router;
