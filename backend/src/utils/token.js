// utils/token.js
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // must exist in .env
const JWT_EXPIRES_IN = "1h"; // token expires in 1 hour

function sign(user) {
  // Only include necessary info in the token
  const payload = {
    id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verify(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = { sign, verify };
