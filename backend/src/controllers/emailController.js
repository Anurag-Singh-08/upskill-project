const EmailLog = require("../models/EmailLog");

async function sendEmail(req, res) {
  try {
    const { to_email, subject, body } = req.body;
    if (!to_email || !subject || !body) return res.status(400).json({ message: "Missing fields" });
    await EmailLog.create({ to_email, subject, body });
    res.json({ success: true, message: "Email logged (simulated)" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { sendEmail };
