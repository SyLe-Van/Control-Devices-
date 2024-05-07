const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const cors = require("cors");
const socketIo = require("socket.io");
const Building = require("./Building");
const { default: mongoose } = require("mongoose");

const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);

app.use(cors({ origin: true, credentials: true }));