const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorsSchema = new Schema(
  {
    sensor_name: 
  },
  {
    timestamps: true,
  }
);

const SensorsModel = model("Sensor", SensorsSchema);

module.exports = SensorsModel;
