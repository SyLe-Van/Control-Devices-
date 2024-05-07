const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorSchema = new Schema(
  {
    name: String,
    wemos: [{ type: mongoose.Schema.Types.ObjectId, ref: "DeviceModel" }],
    type: String,
    location: String,
    data: [
      {
        temperature: Number,
        humidity: Number,
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
