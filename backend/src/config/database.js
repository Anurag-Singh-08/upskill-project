// mysql2 promise pool
const mysql = require("mysql2/promise");

let pool = null;

async function initDB() {
  if (pool) return pool;
    pool = await mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || process.env.DB_PASS || "",
    database: process.env.DB_NAME || "upskill",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  // simple test
  const [rows] = await pool.query("SELECT 1+1 AS v");
  console.log("DB connected:", rows && rows[0] && rows[0].v === 2);
  return pool;
}

function getDB() {
  if (!pool) throw new Error("DB not initialized. Call initDB()");
  return pool;
}

module.exports = { initDB, getDB };
