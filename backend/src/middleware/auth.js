const { verify } = require("../utils/token");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "Missing Authorization header" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  const decoded = verify(token);
  if (!decoded) return res.status(401).json({ message: "Invalid or expired token" });

  req.user = decoded;
  next();
}

module.exports = authMiddleware;
