const express = require("express");
const router = express.Router();
const deptController = require("../controllers/dept.controller")

router.get("/", deptController.getDept);
router.get("/:id", deptController.showDept);

router.post("/", deptController.newDept);

router.put("/:id", deptController.updateDept);

router.delete("/:id", deptController.deleteDept);

// router.post
// /farms/:farm_id/products (post request)
// /departments/:dept_id/employees

module.exports = router;