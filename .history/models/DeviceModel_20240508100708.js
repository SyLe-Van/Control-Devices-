const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DeviceSchema = new Schema(
  {
    device: [{ type: mongoose.Schema.Types.ObjectId, ref: "DeviceModel" }],
    user: String,
    name: String,
    isActive: Boolean,
    message: String,
  },
  {
    timestamps: true,
  }
);

const SensorModel = model("Sensor", SensorSchema);

module.exports = SensorModel;
