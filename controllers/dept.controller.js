const Department = require("../models/dept.model");
const Employee = require("../models/employee.model");

//R(all): route to a list of all departments, like an home page
exports.getDept = async (req, res) => {
  try {
    const depts = await Department.find({});
    res.status(200).json({ status: true, message: "Departments found", depts });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

//R(one): route shows details about individual dept including employees
exports.showDept = async (req, res) => {
  try {
    const { id } = req.params;
    //use populate to get the details of "employees" field in department database
    const dept = await Department.findById(id).populate("employees");

    if (!dept) {
      return res
        .status(404)
        .json({ status: false, message: "department not found" });
    }
    res.status(200).json({ status: true, message: "department found", dept });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

//C: route creates a new department using info from body
exports.newDept = async (req, res) => {
  try {
    const newDept = await Department.create(req.body);
    res.status(200).json({
      status: true,
      message: "Department created successfully",
      newDept,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

//U: route updates info in the collection
exports.updateDept = async (req, res) => {
  try {
    const { id } = req.params;
    const dept = await Department.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });

    if (!dept) {
      return res
        .status(404)
        .json({ status: false, message: "department not found" });
    }
    const updatedDept = await Department.findById(id);

    res
      .status(200)
      .json({ status: true, message: "department updated", updatedDept });
  } catch (err) {
    res.status(500).json({ status: false, message: err.messsage });
  }
};

//D: route deletes information in the collection
exports.deleteDept = async (req, res) => {
  try {
    const { id } = req.params;
    const dept = await Department.findByIdAndDelete(id);
    if (!dept) {
      return res
        .status(404)
        .json({ status: false, message: "No department found" });
    }

    if (!dept.employees.length) {
      return res
        .status(200)
        .json({ status: true, message: "Department not containing any employee data, deleted successfuly" });
    } else {
      // deletes the employees field associated with the department
      await Employee.deleteMany({ _id: { $in: dept.employees } });
      return res.status(200).json({
        status: true,
        message: "Department and all employee data, deleted successfully",
      });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

//C: this route adds employee info to department field
exports.createEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const dept = await Department.findById(id);
    if (!dept) {
      return res
        .status(404)
        .json({ status: false, message: "department not found" });
    }

    const newEmployee = new Employee(req.body);
    if (newEmployee) {
      dept.employees.push(newEmployee);
      await dept.save();
      await newEmployee.save();

      return res.status(200).json({
        status: true,
        message: "employee saved to departments successfully",
        newEmployee,
      });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "new employee not saved" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
