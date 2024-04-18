const mongoose = require("mongoose");
const Employee = require("./employee.model");
const Schema = mongoose.Schema;

const deptSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    employees: [{
      type: Schema.Types.ObjectId,
      ref: "Employee",
    }]
  },
  { timestamps: true }
);

// deptSchema.post('findOneAndDelete', async function (Department){
//   if (Department.employees.length) {
//     const res = await Employee.deleteMany[{ _id: { $in: Department.employees}}]
//     console.log(res);
//   }
// })
module.exports = mongoose.model("Department", deptSchema);

