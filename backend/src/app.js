const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const taskRoutes = require("./routes/taskRoutes");
const emailRoutes = require("./routes/emailRoutes");
const addressRoutes = require("./routes/addressRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/addresses", addressRoutes);

app.get("/", (req, res) => res.json({ ok: true }));

module.exports = app;
