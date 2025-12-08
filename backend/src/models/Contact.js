const { getDB } = require("../config/database");

async function list(user_id) {
  const pool = getDB();
  const [rows] = await pool.query("SELECT * FROM users_contact WHERE user_id = ?", [user_id]);
  return rows;
}

async function create(user_id, { contact_number, contact_email, note }) {
  const pool = getDB();
  const [res] = await pool.query(
    "INSERT INTO users_contact (user_id, contact_number, contact_email, note, created_by) VALUES (?, ?, ?, ?, ?)",
    [user_id, contact_number, contact_email || null, note || null, user_id]
  );
  const [rows] = await pool.query("SELECT * FROM users_contact WHERE id = ?", [res.insertId]);
  return rows[0];
}

async function getById(id, user_id) {
  const pool = getDB();
  const [rows] = await pool.query("SELECT * FROM users_contact WHERE id = ? AND user_id = ?", [id, user_id]);
  return rows[0];
}

async function update(id, user_id, { contact_number, contact_email, note }) {
  const pool = getDB();
  await pool.query(
    "UPDATE users_contact SET contact_number = ?, contact_email = ?, note = ?, updated_by = ? WHERE id = ? AND user_id = ?",
    [contact_number, contact_email, note, user_id, id, user_id]
  );
  const [rows] = await pool.query("SELECT * FROM users_contact WHERE id = ?", [id]);
  return rows[0];
}

async function remove(id, user_id) {
  const pool = getDB();
  await pool.query("DELETE FROM users_contact WHERE id = ? AND user_id = ?", [id, user_id]);
  return { success: true };
}

module.exports = { list, create, getById, update, remove };
