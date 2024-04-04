const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//First create a schema
const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const deptSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "employee",
    },
  ],
});

//this line creates a model and then a collection
//with plural small letter word from the schema name
//i.e collection named "employees"
const Employee = mongoose.model("Employee", employeeSchema);
const Department = mongoose.model("Department", deptSchema);

//const naimat = new Employee({titele, year, rating})

(module.export = Employee), Department;
