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
// Định nghĩa route để tạo thiết bị và cảm biến
app.post('/devices', async (req, res) => {
  try {
    // Trích xuất dữ liệu của thiết bị từ body của yêu cầu
    const { user, name, isActive, message, sensor } = req.body;

    // Tạo một instance mới của SensorModel
    const newSensor = new SensorModel(sensor);

    // Lưu cảm biến vào cơ sở dữ liệu
    const savedSensor = await newSensor.save();

    // Tạo một instance mới của DeviceModel
    const newDevice = new DeviceModel({
      user,
      name,
      isActive,
      message,
      sensor: savedSensor._id, // Lưu ID của cảm biến mới tạo vào thiết bị
    });

    // Lưu thiết bị vào cơ sở dữ liệu
    const savedDevice = await newDevice.save();

    // Trả về thông tin của thiết bị và cảm biến đã tạo
    res.status(201).json({ device: savedDevice, sensor: savedSensor });
  } catch (error) {
    
    console.error('Error creating device and sensor:', error);
    res.status(500).json({ error: 'Internal server error' });
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
