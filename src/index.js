const express = require("express");
const app = express();
const PORT = 3001;

const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");

app.use(express.json());
app.use(express.urlencoded());

//* Routes
app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketsRoute);
//* (END)Routes

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}`));
