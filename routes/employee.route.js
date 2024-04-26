const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee.controller")

router.get("/", employeeController.getEmployee);
router.get("/:id", employeeController.showEmployee);

router.put("/:id", employeeController.updateEmployee)

router.delete("/:id", employeeController.deleteEmployee)

module.exports = router