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

const BuildingModel = model("Building", SenSchema);

module.exports = BuildingModel;
