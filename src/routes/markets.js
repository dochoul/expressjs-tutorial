const { Router } = require("express");
const router = Router();
const Markets = require("../model/markets");

const supermarkets = [
  { id: 1, store: "Whole Foods", miles: 0.6 },
  { id: 2, store: "Trafer Joes", miles: 2.5 },
  { id: 3, store: "Albertsons", miles: 2.8 },
  { id: 4, store: "Trafer Joes", miles: 3.5 },
  { id: 5, store: "Albertsons", miles: 1.8 },
  { id: 6, store: "Albertsons", miles: 1.8 },
];

router.get("/", (req, res) => {
  // const { miles } = req.query;
  // const parseMiles = parseInt(miles);
  // if (miles && !isNaN(parseMiles)) {
  //   const filteredStores = supermarkets.filter((s) => s.miles <= parseMiles);
  //   res.send(filteredStores);
  // } else {
  //   res.send(supermarkets);
  // }
  Markets.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Markets.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).json({
          error: `no record with given _id ${req.params.id}`,
        });
      }
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  try {
    Markets.create(req.body).then((data) => res.status(201).json(data));
  } catch (error) {
    res.status(400);
  }
});

router.put("/:id", (req, res) => {
  try {
    Markets.replaceOne({ _id: req.params.id }, req.body).then((data) =>
      res.send(data)
    );
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", (req, res) => {
  try {
    Markets.deleteOne({ _id: req.params.id }).then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
