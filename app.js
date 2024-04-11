const express = require("express");
const mongoose = require("mongoose");
const Department = require("./models/dept.model");
const Employee = require("./models/employee.model");
const deptRoute = require("./routes/dept.route")

const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/departments", deptRoute)

mongoose
  .connect("mongodb://127.0.0.1:27017/recordsData")
  .then(() => {
    console.log("MONGOOSE CONNECTED");
  })
  .catch(() => {
    console.log("MONGOOSE NOT CONNECTED");
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server now runs on port ${PORT}`);
});
