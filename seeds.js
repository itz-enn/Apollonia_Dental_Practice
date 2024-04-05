const mongoose = require("mongoose");
const Employee = require("./models/employee");
const Department = require("./models/department");

mongoose
  .connect("mongodb://127.0.0.1:27017/recordsData")
  .then(() => {
    console.log("MONGOOSE CONNECTED");
  })
  .catch(() => {
    console.log("MONGOOSE NOT CONNECTED");
  });

const seedDepartment = [
  { _id: new mongoose.Types.ObjectId(), name: "General Dentistry" },
  { _id: new mongoose.Types.ObjectId(), name: "Pediatric Dentistry" },
  { _id: new mongoose.Types.ObjectId(), name: "Restorative Dentistry" },
  { _id: new mongoose.Types.ObjectId(), name: "Surgery" },
  { _id: new mongoose.Types.ObjectId(), name: "Orthodontics" },
];

const seedEmployee = [
  {
    name: "Alfred",
    surname: "Christensen",
    department: seedDepartment[0]._id,
  },
  {
    name: "Francisco",
    surname: "Willard",
    department: seedDepartment[1]._id,
  },
  {
    name: "Lisa",
    surname: "Harris",
    department: seedDepartment[2]._id,
  },
  {
    name: "Constance",
    surname: "Smith",
    department: seedDepartment[3]._id,
  },
  {
    name: "Leslie",
    surname: "Roche",
    department: seedDepartment[4]._id,
  },
];



Department.insertMany(seedDepartment)
  .then((res) => {
    console.log('Departments inserted', res);

    return Employee.insertMany(seedEmployee)
  })
  .then(res => {
    console.log('Employees inserted:', res)
  })
  .catch((e) => {
    console.log(e);
  });
