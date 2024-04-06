const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/employee");
const Department = require("./models/department");

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

app.get("/employees", async (req, res) => {
  const employees = await Employee.find({});
  res.render("index", { employees });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server now runs on port ${PORT}`);
});
