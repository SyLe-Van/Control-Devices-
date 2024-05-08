const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const DeviceModel = require("./models/DeviceModel");

app.use(bodyParser.json());
app.use(cors());

app.post("/api/addDevice", async (req, res) => {
  try {
    const { temperature, humidity, light } = req.body;

    const newDevice = new DeviceModel({
      data: [{ temperature, humidity, light }],
    });

    const savedDevice = await newDevice.save();

    res.status(201).json(savedDevice);
  } catch (error) {
    console.error("Lỗi khi tạo thiết bị:", error);
    res.status(500).json({ error: "Không thể tạo thiết bị" });
  }
});

app.get("/api/getAllDevices", async (req, res) => {
  try {
    const devices = await DeviceModel.find();
    res.status(200).json(devices);
  } catch (error) {
    console.error("Lỗi khi truy xuất danh sách thiết bị:", error);
    res.status(500).json({ error: "Không thể truy xuất danh sách thiết bị" });
  }
});

mongoose
  .connect(
    "mongodb+srv://sycung9001:07122002@device.bsoktry.mongodb.net/?retryWrites=true&w=majority&appName=Device",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Đã kết nối tới MongoDB..."))
  .catch((err) => {
    console.error("Không thể kết nối tới MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`Ứng dụng đang lắng nghe tại http://localhost:${port}`);
});
