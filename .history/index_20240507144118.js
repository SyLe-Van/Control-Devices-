const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const DeviceModel = require("./models/"); // Assuming your DeviceModel is defined in a separate file

app.use(bodyParser.json()); // Use bodyParser middleware to parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

// [POST] create data
app.post("/api/addDevice", async (req, res) => {
  try {
    const { user, name, isActive, message } = req.body;

    const newDevice = new DeviceModel({
      user,
      name,
      isActive,
      message,
    });

    const savedDevice = await newDevice.save();

    res.status(201).json(savedDevice);
  } catch (error) {
    console.error("Error creating device:", error);
    res.status(500).json({ error: "Could not create device" });
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
