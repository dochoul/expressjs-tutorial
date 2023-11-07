const express = require("express");
const app = express();
const PORT = 3001;
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded());

//* Routes
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");
app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketsRoute);
//* (END)

//* Connect MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongDB");
  } catch (error) {
    console.log(error);
  }
}
connectDB();
//* (END)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
