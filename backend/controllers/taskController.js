const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      user: req.user._id,
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task" });
  }
};

// Get All Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

// Get Single Task
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error fetching task" });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};

// Toggle Complete
exports.toggleComplete = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.completed = !task.completed;
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id, user: req.user._id });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
