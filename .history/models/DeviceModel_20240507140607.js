const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DeviceSchema = new Schema(
  {
    
  },
  {
    timestamps: true,
  }
);

const DeviceModel = model("Sensor", DeviceSchema);

module.exports = DeviceModel;
