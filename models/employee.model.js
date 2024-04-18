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

//this line creates a model and then a collection
//with plural small letter word from the schema name
//i.e collection named "employees"
module.exports = mongoose.model("Employee", employeeSchema);
