const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorSchema = new Schema(
  {
    name: String,
    type: String,
    location: String,
    wemos: String,
    data: [
      {
        temperature: Number, // Use Number instead of Float32Array
        light: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SensorModel = model("Sensor", SensorSchema);

module.exports = SensorModel;
