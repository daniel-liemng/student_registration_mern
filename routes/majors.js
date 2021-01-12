const express = require("express");
const router = express.Router();

const {
  getMajors,
  getMajor,
  addMajor,
  editMajor,
  deleteMajor,
} = require("../controllers/majorController");

// Get all majors
router.get("/", getMajors);

// Get a single major
router.get("/:id", getMajor);

// Create a major
router.post("/create", addMajor);

// Update a major
router.put("/update/:id", editMajor);

// Deleting a major
router.delete("/:id", deleteMajor);

module.exports = router;
