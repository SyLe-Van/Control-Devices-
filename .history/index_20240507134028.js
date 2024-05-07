const express = require("express")
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

mongoose
  .connect(
    "mongodb+srv://sycung9001:20521854@building.pvt3kdk.mongodb.net/?retryWrites=true&w=majority&appName=Building",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => {
    console.log(err);
    console.error("Could not connect to MongoDB...");
  });
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});