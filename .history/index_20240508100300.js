const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const DeviceModel = require("./models/DeviceModel");
import SensorModel from "./models/SensorModel";

app.use(bodyParser.json());
app.use(cors());

app.post("/api/addDevice", async (req, res) => {
  try {
    const { temperature, humidity, light } = req.body;
    const newDevice = new DeviceModel({
      temperature,
      humidity,
      light,
    });
    const savedDevice = await newDevice.save();
    res.status(200).json("Create device successful!");
  } catch (error) {
    // Handle errors
    console.error("Error creating device:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/getAllDevices", async (req, res) => {
  try {
    const devices = await DeviceModel.find();
    res.status(200).json(devices);
  } catch (error) {
    console.error("Error fetching devices:", error);
    res.status(500).json({ error: "Could not fetch devices" });
  }
});
app.post("/sensors", async (req, res) => {
  try {
    
    const { device, user, name, isActive, message } = req.body;
    const deviceExists = await DeviceModel.findById(device);
    if (!deviceExists) {
      return res.status(404).json({ error: "Device not found" });
    }

    const newSensor = new SensorModel({
      device,
      user,
      name,
      isActive,
      message,
    });

    const savedSensor = await newSensor.save();
    res.status(201).json(savedSensor);
  } catch (error) {
    
    console.error("Error creating sensor:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

mongoose
  .connect(
    "mongodb+srv://sycung9001:07122002@device.bsoktry.mongodb.net/?retryWrites=true&w=majority&appName=Device",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => {
    console.error("Could not connect to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
