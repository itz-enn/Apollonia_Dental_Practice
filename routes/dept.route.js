const express = require("express");
const router = express.Router();
const deptController = require("../controllers/dept.controller")

router.get("/", deptController.getDept);
router.get("/:id", deptController.showDept);

router.post("/", deptController.newDept);

router.put("/:id", deptController.updateDept);

router.delete("/:id", deptController.deleteDept);

//creates an employee instance under the particular department
router.post("/:id/employees", deptController.createEmployee)

module.exports = router;