const { Router } = require("express");
const router = Router();

const supermarkets = [
  { id: 1, store: "Whole Foods", miles: 0.6 },
  { id: 2, store: "Trafer Joes", miles: 2.5 },
  { id: 3, store: "Albertsons", miles: 2.8 },
  { id: 4, store: "Trafer Joes", miles: 3.5 },
  { id: 5, store: "Albertsons", miles: 1.8 },
];

router.get("/", (req, res) => {
  const { miles } = req.query;
  const parseMiles = parseInt(miles);
  if (miles && !isNaN(parseMiles)) {
    const filteredStores = supermarkets.filter((s) => s.miles <= parseMiles);
    res.send(filteredStores);
  } else {
    res.send(supermarkets);
  }
});

module.exports = router;
