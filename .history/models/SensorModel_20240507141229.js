const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorSchema = new Schema(
  {
        sensor_name: String,
        sensor_location: String,
  },
  {
    timestamps: true,
  }
);

const SensorsModel = model("Sensor", SensorSchema);

module.exports = SensorsModel;
