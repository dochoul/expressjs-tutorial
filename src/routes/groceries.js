const { Router } = require("express");
const router = Router();

const groceries = [
  { item: "milk", quantity: 2 },
  { item: "cerial", quantity: 1 },
  { item: "pop-tarts", quantity: 1 },
];

router.get("/", (req, res) => {
  res.send(groceries);
});

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const groceryItem = groceries.find((g) => g.item === item);
  res.send(groceryItem);
});

router.post("/", (req, res) => {
  console.log(req.body);
  groceries.push(req.body);
  res.send(201);
});

module.exports = router;
