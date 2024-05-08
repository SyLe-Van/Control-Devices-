const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorSchema = new Schema(
  {
    temperature: Number,
    humidity: Number,
    light: Number,
  },
  {
    timestamps: true,
  }
);

const SensorModel = model("Device", SensorSchema);

module.exports = SensorModel;
