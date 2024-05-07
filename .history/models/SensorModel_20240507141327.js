const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorSchema = new Schema(
  {
    name: String,
    location: String,
    value: String
  },
  {
    timestamps: true,
  }
);

const SensorModel = model("Sensor", SensorSchema);

module.exports = SensorModel;
