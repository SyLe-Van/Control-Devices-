const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorSchema = new Schema(
  {
    name: String,
    device: [{ type: mongoose.Schema.Types.ObjectId, ref: "DeviceModel" }],
    type: String,
    location: String,
    wemos: String,
    data: [
      {
        temperature: Number,
        light: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SensorModel = model("Sensor", SensorSchema);

module.exports = SensorModel;
