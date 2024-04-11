const Department = require("../models/dept.model");

//R(all): route to a list of all departments, like an home page
const getDept = async (req, res) => {
  try {
    const departments = await Department.find({});
    res
      .status(200)
      .json({ status: true, message: "Departments found", departments });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

//R(one): route shows details about individual dept including employees
const getOneDept = async (req, res) => {
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
const newDept = async (req, res) => {
  try {
    const newDepartment = await Department.create(req.body);
    res
      .status(200)
      .json({ status: true, message: "Department created successfully", newDepartment});
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

//U: route updates info in the collection
const updateDept = async (req, res) => {
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
const deleteDept = async (req, res) => {
  try {
    const { id } = req.params;
    const dept = await Department.findByIdAndDelete(id);
    if (!dept) {
      return res
        .status(404)
        .json({ status: false, message: "department not found" });
    }
    res
      .status(200)
      .json({ status: true, message: "Depatment deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

module.exports = { getDept, getOneDept, newDept, updateDept, deleteDept };
