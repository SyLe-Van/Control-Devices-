const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DeviceSchema = new Schema(
  {
    user: String,
    name: String,
    isActive: Boolean,
    message: String,
    IPadress: Number,
    value_name: String,
    sensor_name: String,
    receive_time: Date,
  },
  {
    timestamps: true,
  }
);

const DeviceModel = model("Device", DeviceSchema);

module.exports = DeviceModel;
