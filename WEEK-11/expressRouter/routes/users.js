const express = require("express");
const router = express.Router();
const data = ["Philémon", "Steve", "Nathaly", "Nouhéila", "Laurent", "Maxime"];

router.get("/", (req, res) => {
  res.send(data);
});

module.exports = router;
