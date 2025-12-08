const { getDB } = require("../config/database");

async function create({ to_email, subject, body }) {
  const pool = getDB();
  await pool.query("INSERT INTO email_logs (to_email, subject, body) VALUES (?, ?, ?)", [to_email, subject, body]);
  return { success: true };
}

module.exports = { create };
