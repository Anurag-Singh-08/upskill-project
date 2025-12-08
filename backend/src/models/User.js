const { getDB } = require("../config/database");

async function create({ first_name, last_name, email, phone, password }) {
  const pool = getDB();
  const [res] = await pool.query(
    "INSERT INTO users (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)",
    [first_name, last_name, email, phone || null, password]
  );
  return res.insertId;
}

async function findByEmail(email) {
  const pool = getDB();
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
}

async function findById(id) {
  const pool = getDB();
  const [rows] = await pool.query("SELECT id, first_name, last_name, full_name, email, phone FROM users WHERE id = ?", [id]);
  return rows[0];
}

module.exports = { create, findByEmail, findById };
