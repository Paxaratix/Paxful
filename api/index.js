const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("../routes/routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(routes);

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  try {
    await mongoose.connect(process.env.MONGODBURL, {});
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
});

module.exports = app;
