const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");

//* Connect MongoDB
const uri =
  "mongodb+srv://board:1234@cluster0.22pjovr.mongodb.net/?retryWrites=true&w=majority";
async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongDB");
  } catch (error) {
    console.log(error);
  }
}
run();
//* (END)Connect MongoDB

const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");

app.use(express.json());
app.use(express.urlencoded());

//* Routes
app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketsRoute);
//* (END)Routes

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}`));
