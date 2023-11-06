const { Router } = require("express");
const router = Router();

const supermarkets = [
  { store: "Whole Foods" },
  { store: "Trafer Joes" },
  { store: "Albertsons" },
];

router.get("/", (req, res) => {
  res.send(supermarkets);
});

module.exports = router;
