const { getDB } = require("../config/database");

async function logEmail(to, subject, body) {
  const pool = getDB();
  await pool.query("INSERT INTO email_logs (to_email, subject, body) VALUES (?, ?, ?)", [to, subject, body]);
  return { success: true };
}

module.exports = { logEmail };
