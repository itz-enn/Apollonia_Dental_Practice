const express = require("express");
const mongoose = require("mongoose");
const { Employee, Department } = require("./models/records");

const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/recordsData")
  .then(() => {
    console.log("MONGOOSE CONNECTED");
  })
  .catch(() => {
    console.log("MONGOOSE NOT CONNECTED");
  });

app.get("/", (req, res) => {
  res.send("Hopefully this works like I expect it to, right");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server now runs on port ${PORT}`);
});
