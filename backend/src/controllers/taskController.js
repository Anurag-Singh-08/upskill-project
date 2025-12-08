const Task = require("../models/Task");

async function listTasks(req, res) {
  try {
    const rows = await Task.list(req.user.id);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function createTask(req, res) {
  try {
    const obj = req.body;
    if (!obj.title) return res.status(400).json({ message: "title required" });
    const created = await Task.create(req.user.id, obj);
    res.json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function getTask(req, res) {
  try {
    const id = Number(req.params.id);
    const row = await Task.getById(id, req.user.id);
    if (!row) return res.status(404).json({ message: "Not found" });
    res.json(row);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function updateTask(req, res) {
  try {
    const id = Number(req.params.id);
    const updated = await Task.update(id, req.user.id, req.body);
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function deleteTask(req, res) {
  try {
    const id = Number(req.params.id);
    await Task.remove(id, req.user.id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { listTasks, createTask, getTask, updateTask, deleteTask };
