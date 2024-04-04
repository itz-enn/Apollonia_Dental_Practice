const express = require("express");
const mongoose = require("mongoose");
const { Employee, Department } = require("./models/records");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/recordsData")
  .then(() => {
    console.log("MONGOOSE CONNECTED");
  })
  .catch(() => {
    console.log("MONGOOSE NOT CONNECTED");
  });

app.get("/", (req, res) => {
  res.send("Hopefully this works like I expect it to");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
