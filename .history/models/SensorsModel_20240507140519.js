const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorsSchema = new Schema(
  {
        sensor_name: String,
        sensor_location: String,
  },
  {
    timestamps: true,
  }
);

const SensorsModel = model("Sensor", SensorsSchema);

module.exports = SensorsModel;
