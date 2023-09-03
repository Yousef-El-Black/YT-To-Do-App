const express = require("express");
const connectDB = require("./utils/connectDB");
const router = require("./routes");

const app = express();

const port = 8080;

// Connect To DB
connectDB();

// Middlewares
app.use(express.json());

// API Routes
app.use("/api", router);

app.listen(port, () => {
  console.log("server is running!");
});
