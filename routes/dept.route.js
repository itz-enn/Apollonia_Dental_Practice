const express = require("express");
const router = express.Router();
const {getDept, getOneDept, newDept, updateDept, deleteDept} = require("../controllers/dept.controller")

router.get("/", getDept)
router.get("/:id", getOneDept)

router.post("/", newDept)

router.put("/:id", updateDept)

router.delete("/:id", deleteDept)

module.exports = router; 