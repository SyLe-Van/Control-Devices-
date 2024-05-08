const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DeviceSchema = new Schema(
  {
  
      temperature: Number,
      humidity: Number,
      light: Number
  },
  {
    timestamps: true,
  }
);

const DeviceModel = model("Device", DeviceSchema);

module.exports = DeviceModel;
