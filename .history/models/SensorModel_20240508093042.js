const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorSchema = new Schema(
  {
    wemos: [{ type: mongoose.Schema.Types.ObjectId, ref: "DeviceModel" }],
    data: [
      {
        temperature: Number,
        humidity: Number,
        light: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SensorModel = model("Sensor", SensorSchema);

module.exports = SensorModel;
