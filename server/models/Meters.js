const mongoose = require("mongoose");

const MeasurementSchema = new mongoose.Schema({
  voltage: Number,
  current: Number,
  power: Number,
  reactivepower: Number,
  powerfactor: Number,
  frequency: Number,
  panelname: String,
  location: String,
});

const MetersSchema = new mongoose.Schema({
  mid: Number,
  datetime: Date,
  measurements: [MeasurementSchema],
});

const MetersModel = mongoose.model("meters", MetersSchema);

module.exports = MetersModel;
