const mongoose = require("mongoose");

const marketsSchema = new mongoose.Schema({
  store: {
    type: String,
    require: true,
  },
  miles: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Markets", marketsSchema);
