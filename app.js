const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const deptRoute = require("./routes/dept.route");
const employeeRoute = require("./routes/employee.route");

const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Testing if the server works...yes it worksssss");
});

//routes
app.use("/api/departments", deptRoute);
app.use("/api/employees", employeeRoute);

// /farms/:farm_id/products (post request)
// /departments/:dept_id/employees
// app.post("/api/departments/:dept_id/employees", async (req, res) => {
//   const { id } = req.params;
//   const dept = await Department.findById(id);

//   const newEmployee = new Employee(req.body);
//   dept.employees.push(newEmployee)
//   await dept.save();
//   await product.save();
// })

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
