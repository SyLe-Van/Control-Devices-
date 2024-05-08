const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const DeviceModel = require("./models/SensorModel");
const SensorModel = require("./models/SensorModel");
app.use(bodyParser.json());
app.use(cors());

app.post("/api/addSensor", async (req, res) => {
  try {
    const { temperature, humidity, light } = req.body;
    const newDevice = new SensorModel({
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
app.post("/api/addDevices", async (req, res) => {
   try {
     // Extract device data from request body
     const { user, name, isActive, message } = req.body;

     // Create new device instance
     const newDevice = new DeviceModel({
       user,
       name,
       isActive,
       message,
     });

     // Save device to database
     const savedDevice = await newDevice.save();

     // Respond with created device
     res.status(201).json(savedDevice);
   } catch (error) {
     // Handle errors
     console.error("Error creating device:", error);
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
