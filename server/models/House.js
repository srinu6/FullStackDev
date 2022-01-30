const mongoose = require("mongoose");

//Schema
const HouseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  homeType: String,
  description: String,
  price: { type: Number, required: true },
  image: String,
  yearBuild: Number,
});

// create model
module.exports = mongoose.model("House", HouseSchema);
