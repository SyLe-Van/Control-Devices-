const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorsSchema = new Schema(
  {
        sensor_name: String,
      location
  },
  {
    timestamps: true,
  }
);

const SensorsModel = model("Sensor", SensorsSchema);

module.exports = SensorsModel;
