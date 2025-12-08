const { getDB } = require("../config/database");

async function list(user_id) {
  const pool = getDB();
  const [rows] = await pool.query("SELECT * FROM users_task WHERE user_id = ?", [user_id]);
  return rows;
}

async function create(user_id, { contact_id, title, description, status, due_date }) {
  const pool = getDB();
  const [res] = await pool.query(
    "INSERT INTO users_task (user_id, contact_id, title, description, status, due_date, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [user_id, contact_id || null, title, description || null, status || "pending", due_date || null, user_id]
  );
  const [rows] = await pool.query("SELECT * FROM users_task WHERE id = ?", [res.insertId]);
  return rows[0];
}

async function getById(id, user_id) {
  const pool = getDB();
  const [rows] = await pool.query("SELECT * FROM users_task WHERE id = ? AND user_id = ?", [id, user_id]);
  return rows[0];
}

async function update(id, user_id, { title, description, status, due_date }) {
  const pool = getDB();
  await pool.query(
    "UPDATE users_task SET title=?, description=?, status=?, due_date=?, updated_by=? WHERE id=? AND user_id=?",
    [title, description, status, due_date, user_id, id, user_id]
  );
  const [rows] = await pool.query("SELECT * FROM users_task WHERE id = ?", [id]);
  return rows[0];
}

async function remove(id, user_id) {
  const pool = getDB();
  await pool.query("DELETE FROM users_task WHERE id = ? AND user_id = ?", [id, user_id]);
  return { success: true };
}

module.exports = { list, create, getById, update, remove };
