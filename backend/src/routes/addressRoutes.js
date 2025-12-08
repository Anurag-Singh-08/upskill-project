const express = require("express");
const router = express.Router();
const { initDB, getDB } = require("../config/database");

// Make sure DB is initialized before any queries (optional)
initDB().catch(console.error);

router.get("/", async (req, res) => {
  try {
    const db = getDB();
    const [results] = await db.query("SELECT * FROM addresses");
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err });
  }
});

router.post("/", async (req, res) => {
  const { userId, street, city, state, country, postalCode } = req.body;
  const sql = `INSERT INTO addresses (userId, street, city, state, country, postalCode) VALUES (?, ?, ?, ?, ?, ?)`;

  try {
    const db = getDB();
    const [result] = await db.query(sql, [userId, street, city, state, country, postalCode]);
    res.json({ id: result.insertId, message: "Address added" });
  } catch (err) {
    res.status(500).json({ message: "Error inserting address", error: err });
  }
});

module.exports = router;
