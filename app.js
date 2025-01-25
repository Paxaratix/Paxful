const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.use(routes);

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  try {
    await mongoose.connect(
      "mongodb+srv://paxfu2025:Paxa12025.@cluster0.7svu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {}
    );
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
});
