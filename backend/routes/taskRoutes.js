const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  toggleComplete,
  deleteTask,
} = require("../controllers/taskController");

// CREATE  
router.post("/", auth, createTask);

// GET ALL TASKS
router.get("/", auth, getTasks);

// GET ONE TASK
router.get("/:id", auth, getTaskById);

// UPDATE TASK
router.put("/:id", auth, updateTask);

// TOGGLE COMPLETE
router.put("/complete/:id", auth, toggleComplete);

// DELETE TASK
router.delete("/:id", auth, deleteTask);

module.exports = router;
