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

//C: route creates new employee using info from body
exports.newEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res
      .status(200)
      .json({ status: true, message: "Employee created successfully", newEmployee});
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
}