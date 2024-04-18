const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee.controller")

router.get("/", employeeController.getEmployee);
router.get("/:id", employeeController.showEmployee);

router.post("/", employeeController.newEmployee);

module.exports = router