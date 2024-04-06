const mongoose = require("mongoose");
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

const Department = mongoose.model("Department", deptSchema);

module.exports = Department;
