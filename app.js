const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const deptRoute = require("./routes/dept.route");
const employeeRoute = require("./routes/employee.route");

const app = express();
app.use(cors( ))

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Testing if the server works...yes it worksssss");
});

//routes
app.use("/api/departments", deptRoute);
app.use("/api/employees", employeeRoute);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "false",
    message: "Route not found!!!!"
  })
})

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