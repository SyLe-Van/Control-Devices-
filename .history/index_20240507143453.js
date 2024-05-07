const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const cors = require("cors");
const socketIo = require("socket.io");
const { default: mongoose } = require("mongoose");

const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);

app.use(cors({ origin: true, credentials: true }));


//[POST] create data
app.post("/api/", async (req, res) => {
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
    "mongodb+srv://sycung9001:07122002@device.bsoktry.mongodb.net/?retryWrites=true&w=majority&appName=Device"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => {
    console.log(err);
    console.error("Could not connect to MongoDB...");
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
