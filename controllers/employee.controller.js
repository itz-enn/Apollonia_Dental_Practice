const Employee = require("../models/employee.model");

//R(all): route to a list of all employees, like an home page
exports.getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res
      .status(200)
      .json({ status: true, message: "Employees found", employees });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

//R(one): route shows details about individual employees
exports.showEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      return res
        .status(404)
        .json({ status: false, message: "employee not found" });
    }
    res.status(200).json({ status: true, message: "employee found", employee });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

//U: deletes an instance in a database
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const isEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });

    if (!isEmployee) {
      return res
        .status(404)
        .json({ status: false, message: "employee not found" });
    }
    const updatedEmployee = await Employee.findById(id);

    res
      .status(200)
      .json({ status: true, message: "employee updated", updatedEmployee });
  } catch (err) {
    res.status(500).json({ status: false, message: err.messsage });
  }
};

//D: route deletes employee from database
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const isEmployee = await Employee.findByIdAndDelete(id);
    if (!isEmployee) {
      return res
        .status(404)
        .json({ status: false, message: "employee not found" });
    }
    res
      .status(200)
      .json({ status: true, message: "employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
