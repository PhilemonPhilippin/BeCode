const express = require("express");
const router = express.Router();
const data = [
  "Pire restaurant de la ville!",
  "Meilleur bar à tisane du quartier je recommande chaudement.",
  "Trop de monde après 18h, cette salle est bon-dée",
];
router.get("/", (req, res) => {
  res.send(data);
});

module.exports = router;
