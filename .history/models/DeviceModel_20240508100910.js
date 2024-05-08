const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DeviceSchema = new Schema(
  {
    wemos: [{ type: mongoose.Schema.Types.ObjectId, ref: "SensorModel" }],
    
    isActive: Boolean,
    message: String,
  },
  {
    timestamps: true,
  }
);

const DeviceModel = model("Device", DeviceSchema);

module.exports = DeviceModel;
