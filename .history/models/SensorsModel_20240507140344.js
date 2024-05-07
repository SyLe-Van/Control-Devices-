const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SensorsSchema = new Schema(
  {
    floor: Number,
    trashStatus: Number,
  },
  {
    timestamps: true,
  }
);

const SensorsModel = model("Building", SensorsSchema);

module.exports = BuildingModel;
