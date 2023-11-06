const express = require("express");
const app = express();
const PORT = 3001;
const dotenv = require("dotenv");
dotenv.config();

//* Connect MongoDB
const mongoose = require("mongoose");
const uri = process.env.DB_URL;
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

app.use(express.json());
app.use(express.urlencoded());

//* Routes
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");
app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketsRoute);
//* (END)Routes

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}`));
